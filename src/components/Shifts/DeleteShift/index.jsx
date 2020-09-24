import React, { useState } from 'react';
import CustomModal from '../../Modals';
import { MdDelete } from "react-icons/md";
import { deleteShift } from '../../../api/shiftService';
import { Button } from '@material-ui/core';
import './DeleteShift.scss';

export default function DeleteShift(props) {
    const [open, setOpen] = useState(false);
    const {id, callbackFn} = props;

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = () => {
        deleteShift(id, () => {
            handleModal();
            callbackFn();
        }, error => {
            console.log(error);
        });
    };
    
    const body = (
        <div className="modal-body">
            <h2 id="modal-title" className="text-center">Eliminar Turno</h2>
            <div id="modal-body" className="text-center">
                <p>¿Está seguro de eliminar este turno?</p>
                <Button className="modal-button" variant="contained" size="medium" color="default" onClick={handleModal}>
                    Cancelar
                </Button>
                <Button className="modal-button" variant="contained" size="medium" color="primary" onClick={onSubmit}>
                    Eliminar
                </Button>
            </div>
        </div>
    );

    return (
    <>
        <MdDelete onClick={handleModal} title="Eliminar" className="delete-icon"/>
        <CustomModal open={open} handleModal={handleModal} body={body} />
    </>
    )
}
