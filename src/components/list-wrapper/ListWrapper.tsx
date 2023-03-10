import React from 'react';
import { ContextMenu, List, ListItem } from 'chayns-components';
import { Item } from '../../types/item';

type ListWrapperProps = {
    list: Item[];
    removeItem: (id: number) => void;
};

const ListWrapper: React.FunctionComponent<ListWrapperProps> = ({
    list,
    removeItem,
}) => (
    <div>
        <List>
            {list.map((item) => (
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
                                    onClick: () => removeItem(item.id),
                                },
                            ]}
                        />
                    }
                />
            ))}
        </List>
    </div>
);

export default ListWrapper;
