import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { createMovieForm } from './create-movie.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { createMovie } from '../../../api/movieService';
import moment from 'moment';

export default function CreateMovie() {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = elems => {
        createMovie({...elems, created_at: moment().format("YYYY-MM-DD")}, resp => {
            handleModal();
        }, error => {
            console.log(error);
        });
    };
    
    const body = (
        <div style={{background: 'white', padding: 40, width: '100%', maxWidth: 500}}>
            <h2 id="modal-title" style={{textAlign: 'center'}}>Nueva Película</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={createMovieForm} />
            </div>
        </div>
    );

    return (
        <>
            <Button onClick={handleModal} variant="contained" size="small" color="primary">
                Nueva Película
            </Button>
            <CustomModal open={open} handleModal={handleModal} body={body} />
        </>
    )
}
