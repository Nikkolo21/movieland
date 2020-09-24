import React, { useEffect, useState } from 'react';
import { editMovieForm } from './edit-movie.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { MdModeEdit } from "react-icons/md";
import { editMovie } from '../../../api/movieService';
import './EditMovie.scss';

export default function EditMovie(props) {
    const [open, setOpen] = useState(false);
    const [movie, setMovie] = useState({});
    const {id, data, callbackFn} = props;

    useEffect(() => {
        setMovie(data);
    }, [data]);

    const handleModal = () => {
        setOpen(!open);
    };

    const onSubmit = elem => {
        editMovie(id, elem, () => {
            callbackFn();
            handleModal();
        }, error => {
            console.log(error);
        });
    };
    
    const body = (
        <div className="modal-body">
            <h2 id="modal-title">Editar Película</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={editMovieForm(movie)} />
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
