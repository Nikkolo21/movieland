import React from 'react';
import { Modal } from '@material-ui/core';

export default function CustomModal(props) {
    const { open, handleModal, body } = props;
    return (
        <Modal
            style={{display: "grid", placeItems:"center"}}
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-body"
        >
            {body}
        </Modal>
    )
}
