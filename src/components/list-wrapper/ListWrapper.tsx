import React from 'react';
import { ContextMenu, List, ListItem } from 'chayns-components';
import { AnimatePresence, m, Reorder } from 'framer-motion';
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
    // layout is required for the list to animate correctly
    // In essence it keeps track of changes in the layout and animates them smoothly instead of the element instantly appearing at its new position
    <m.div layout>
        <List>
            <Reorder.Group values={list} onReorder={setList}>
                {/* AnimatePresence is required for exit animations.
                     It allows FramerMotion to keep track of motion elements leaving the dom */}
                <AnimatePresence>
                    {list.map((item) => (
                        // Other than being generally required it is important to pass a valid key to reorder.item for AnimatePresence to correctly
                        // track the elements
                        // Reorder.Item is not required a motion.div would work just as well but moving items around is fun
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
    </m.div>
);

export default ListWrapper;
