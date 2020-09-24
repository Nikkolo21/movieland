import React, { useEffect, useState } from 'react';
import { editMovieForm } from './edit-movie.form';
import CustomModal from '../../Modals';
import Form from '../../Forms/Form';
import { MdModeEdit } from "react-icons/md";
import { editMovie } from '../../../api/movieService';

export default function EditMovie(props) {
    const [open, setOpen] = useState(false);
    const [movie, setMovie] = useState({});
    const {id, data} = props;

    useEffect(() => {
        setMovie(data);
    }, [data]);

    const handleModal = () => {
        setOpen(!open);
    };

    const onSubmit = elem => {
        editMovie(id, elem, resp => console.log(resp), error => console.log(error));
        handleModal();
    };
    
    const body = (
        <div style={{background: 'white', padding: 40, width: '100%', maxWidth: 500}}>
            <h2 id="modal-title" style={{textAlign: 'center'}}>Editar Película</h2>
            <div id="modal-body">
                <Form onSubmit={onSubmit} formElem={editMovieForm(movie)} />
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
