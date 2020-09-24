import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { createMovieForm } from './create-movie.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { createMovie } from '../../../api/movieService';
import moment from 'moment';
import './CreateMovie.scss';

export default function CreateMovie(props) {
    const [open, setOpen] = useState(false);
    const {callbackFn} = props;

    const handleModal = () => {
        setOpen(!open);
    };
    
    const onSubmit = elems => {
        createMovie({...elems, shifts: [], created_at: moment().format("YYYY-MM-DD")}, resp => {
            callbackFn();
            handleModal();
        }, error => {
            console.log(error);
        });
    };
    
    const body = (
        <div className="modal-body">
            <h2 id="modal-title">Nueva Película</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={createMovieForm} />
            </div>
        </div>
    );

    return (
        <>
            <Button className="btn" onClick={handleModal} variant="contained" size="small" color="primary">
                Nueva Película
            </Button>
            <CustomModal open={open} handleModal={handleModal} body={body} />
        </>
    )
}
