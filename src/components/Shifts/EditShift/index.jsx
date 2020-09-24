import React, { useEffect, useState } from 'react';
import { editShiftForm } from './edit-shift.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { MdModeEdit } from "react-icons/md";
import { editShift } from '../../../api/shiftService';

export default function EditShift(props) {
    const [shift, setShift] = useState({});
    const [open, setOpen] = useState(false);
    const {id, data} = props;

    useEffect(() => {
        setShift(data);
    }, [data]);

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = elem => {
        editShift(id, elem, () => handleModal(), error => console.log(error));
    };
    
    const body = (
        <div style={{background: 'white', padding: 40, width: '100%', maxWidth: 500}}>
            <h2 id="modal-title" style={{textAlign: 'center'}}>Editar Turno</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={editShiftForm(shift)} />
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
