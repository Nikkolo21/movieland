import React from 'react';
import { Modal } from '@material-ui/core';
import './Modals.scss';

export default function CustomModal(props) {
    const { open, handleModal, body } = props;
    return (
        <Modal
            className="modal"
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-body"
        >
            {body}
        </Modal>
    )
}
