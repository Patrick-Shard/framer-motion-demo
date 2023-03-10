import React from 'react';
import { ContextMenu, List, ListItem } from 'chayns-components';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import { Item } from '../../types/item';
import './listWrapper.scss';

type ListWrapperProps = {
    list: Item[];
    removeItem: (id: number) => void;
    setList: (list: Item[]) => void;
};

const ListWrapper: React.FunctionComponent<ListWrapperProps> = ({
    list,
    removeItem,
    setList,
}) => (
    <motion.div layout>
        <List>
            <Reorder.Group values={list} onReorder={setList}>
                <AnimatePresence>
                    {list.map((item) => (
                        <Reorder.Item
                            value={item}
                            key={item.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                            <ListItem
                                key={item.id}
                                title={item.name}
                                right={
                                    <ContextMenu
                                        key={item.id}
                                        items={[
                                            {
                                                text: 'Löschen',
                                                icon: 'fa fa-trash',
                                                onClick: () =>
                                                    removeItem(item.id),
                                            },
                                        ]}
                                    />
                                }
                            />
                        </Reorder.Item>
                    ))}
                </AnimatePresence>
            </Reorder.Group>
        </List>
    </motion.div>
);

export default ListWrapper;
