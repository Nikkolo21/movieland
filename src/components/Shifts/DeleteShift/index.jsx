import React, { useState } from 'react';
import CustomModal from '../../Modals';
import { MdDelete } from "react-icons/md";
import { deleteShift } from '../../../api/shiftService';
import { Button } from '@material-ui/core';

export default function DeleteShift(props) {
    const [open, setOpen] = useState(false);
    const {id} = props;

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = () => {
        deleteShift(id, () => handleModal(), error => console.log(error));
    };
    
    const body = (
        <div style={{background: 'white', padding: 40, width: '100%', maxWidth: 500}}>
            <h2 id="modal-title" style={{textAlign: 'center'}}>Eliminar Turno</h2>
            <div id="modal-body" style={{textAlign: 'center'}}>
                <p>¿Está seguro de eliminar este turno?</p>
                <Button style={{marginLeft: 5}} variant="contained" size="medium" color="default" onClick={handleModal}>
                    Cancelar
                </Button>
                <Button style={{marginLeft: 5}} variant="contained" size="medium" color="primary" onClick={onSubmit}>
                    Eliminar
                </Button>
            </div>
        </div>
    );

    return (
    <>
        <MdDelete onClick={handleModal} title="Eliminar" style={{marginLeft: 10, fontSize: "1.5em", cursor: "pointer"}}/>
        <CustomModal open={open} handleModal={handleModal} body={body} />
    </>
    )
}