import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { createShiftForm } from './create-shift.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { createShift } from '../../../api/shiftService';
import moment from 'moment';
import './CreateShift.scss';

export default function CreateShift(props) {
    const [open, setOpen] = useState(false);
    const {callbackFn} = props;

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = elems => {
        createShift({...elems, created_at: moment().format("YYYY-MM-DD")}, resp => {
            callbackFn();
            handleModal();
        }, error => {
            console.log(error);
        });
    };
    
    const body = (
        <div className="modal-body" >
            <h2 id="modal-title">Nuevo Turno</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={createShiftForm} />
            </div>
        </div>
    );

    return (
    <>
        <Button className="btn" onClick={handleModal} variant="contained" size="small" color="primary">
            Nuevo turno
        </Button>
        <CustomModal open={open} handleModal={handleModal} body={body} />
    </>
    )
}
