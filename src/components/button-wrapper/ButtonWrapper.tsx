import React, { FC } from 'react';
import { Button } from 'chayns-components';
import { motion } from 'framer-motion';
import './buttonWrapper.scss';

type ButtonWrapperProps = {
    addItem: () => void;
};

const ButtonWrapper: FC<ButtonWrapperProps> = ({ addItem }) => (
    <motion.div layout className="button-wrapper__container">
        <Button onClick={addItem}>Hinzufügen</Button>
    </motion.div>
);

export default ButtonWrapper;
