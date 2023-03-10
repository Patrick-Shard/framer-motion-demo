import React, { FC } from 'react';
import { Button } from 'chayns-components';
import './buttonWrapper.scss';

type ButtonWrapperProps = {
    addItem: () => void;
};

const ButtonWrapper: FC<ButtonWrapperProps> = ({ addItem }) => (
    <div className="button-wrapper__container">
        <Button onClick={addItem}>Hinzufügen</Button>
    </div>
);

export default ButtonWrapper;
