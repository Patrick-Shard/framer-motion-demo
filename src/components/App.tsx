import React, { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import { Item } from '../types/item';
import ButtonWrapper from './button-wrapper/ButtonWrapper';
import ListWrapper from './list-wrapper/ListWrapper';
import './app.scss';

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
        <div className="app__wrapper">
            {/* Layout Groups keeps track of changes in all it's children layouts and allows layouts that depend
                on each other's position to animate correctly */}
            <LayoutGroup>
                <ListWrapper
                    list={list}
                    removeItem={removeItem}
                    setList={setList}
                />
                <ButtonWrapper addItem={addItem} />
            </LayoutGroup>
        </div>
    );
};

export default App;
