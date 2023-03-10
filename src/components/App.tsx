import React, { useState } from 'react';
import { Item } from '../types/item';
import ButtonWrapper from './button-wrapper/ButtonWrapper';
import ListWrapper from './list-wrapper/ListWrapper';

const items: Item[] = [
    {
        id: 0,
        name: 'Item 1',
    },
    {
        id: 1,
        name: 'Item 2',
    },
    {
        id: 2,
        name: 'Item 3',
    },
];

export const App = () => {
    const [list, setList] = useState<Item[]>(items);
    const [counter, setCounter] = useState<number>(items.length);

    const removeItem = (id: number) => {
        setList(list.filter((item) => item.id !== id));
    };

    const addItem = () => {
        setList((prevList) => [
            ...prevList,
            {
                id: counter + 1,
                name: `Item ${counter + 1}`,
            },
        ]);
        setCounter((val) => val + 1);
    };

    return (
        <div>
            <ListWrapper list={list} removeItem={removeItem} />
            <ButtonWrapper addItem={addItem} />
        </div>
    );
};

export default App;
