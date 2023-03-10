import React, { FC } from 'react';
import { Button } from 'chayns-components';
import { m } from 'framer-motion';
import './buttonWrapper.scss';

type ButtonWrapperProps = {
    addItem: () => void;
};

const ButtonWrapper: FC<ButtonWrapperProps> = ({ addItem }) => (
    // Motion div with layout prop allows a layout group to be created to animate the button smoothly when an element in the list is removed
    <m.div layout className="button-wrapper__container">
        <Button onClick={addItem}>Hinzufügen</Button>
    </m.div>
);

export default ButtonWrapper;
