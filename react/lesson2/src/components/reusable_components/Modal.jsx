import { useState } from 'react';
import classes from './Modal.module.css';

const Modal = ({ children, open, closeModal }) => {
    function handleClickModal(event) {
        event.stopPropagation()
    }

    if (open) {
        return (
            <div className={classes.modal} onClick={closeModal}>
                <div className={classes.modal_container} onClick={handleClickModal}>
                    {children}
                </div>
            </div>
        );
    }
}

export default Modal;
