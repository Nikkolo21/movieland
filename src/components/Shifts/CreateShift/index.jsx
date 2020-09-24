import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { createShiftForm } from './create-shift.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { createShift } from '../../../api/shiftService';
import moment from 'moment';

export default function CreateShift() {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = elems => {
        createShift({...elems, created_at: moment().format("YYYY-MM-DD")}, resp => {
            console.log(resp);
            handleModal();
        }, error => {
            console.log(error);
        });
    };
    
    const body = (
        <div style={{background: 'white', padding: 40, width: '100%', maxWidth: 500}}>
            <h2 id="modal-title" style={{textAlign: 'center'}}>Nuevo Turno</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={createShiftForm} />
            </div>
        </div>
    );

    return (
    <>
        <Button onClick={handleModal} variant="contained" size="small" color="primary">
            Nuevo turno
        </Button>
        <CustomModal open={open} handleModal={handleModal} body={body} />
    </>
    )
}
