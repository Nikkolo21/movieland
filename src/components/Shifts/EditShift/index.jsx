import React, { useEffect, useState } from 'react';
import { editShiftForm } from './edit-shift.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { MdModeEdit } from "react-icons/md";
import { editShift } from '../../../api/shiftService';
import './EditShift.scss';

export default function EditShift(props) {
    const [shift, setShift] = useState({});
    const [open, setOpen] = useState(false);
    const {id, data, callbackFn} = props;

    useEffect(() => {
        setShift(data);
    }, [data]);

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = elem => {
        editShift(id, elem, () => {
            handleModal();
            callbackFn();
        }, error => {
            console.log(error);
        });
    };
    
    const body = (
        <div className="modal-body">
            <h2 id="modal-title">Editar Turno</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={editShiftForm(shift)} />
            </div>
        </div>
    );

    return (
    <>
        <MdModeEdit onClick={handleModal} title="Editar" className="edit-icon"/>
        <CustomModal open={open} handleModal={handleModal} body={body} />
    </>
    )
}
