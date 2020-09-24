import React, { useState } from 'react';
import { editShiftForm } from './edit-shift.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { MdModeEdit } from "react-icons/md";

export default function EditShift(props) {
    const {id} = props;
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = elem => {
        console.log(elem);
        handleModal();
    };
    
    const body = (
        <div style={{background: 'white', padding: 40, width: '100%', maxWidth: 500}}>
            <h2 id="modal-title" style={{textAlign: 'center'}}>Editar Turno</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={editShiftForm({shift: "08:20", status: "Activo"})} />
            </div>
        </div>
    );

    return (
    <>
        <MdModeEdit onClick={handleModal} title="Editar" style={{marginLeft: 10, fontSize: "1.5em", cursor: "pointer"}}/>
        <CustomModal open={open} handleModal={handleModal} body={body} />
    </>
    )
}
