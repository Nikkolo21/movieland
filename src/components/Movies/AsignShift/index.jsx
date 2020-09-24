import React, { useEffect, useState } from 'react';
import CustomModal from '../../Modals';
import { MdMenu } from "react-icons/md";
import { editMovie, getMovie } from '../../../api/movieService';
import { getActiveShifts } from '../../../api/shiftService';
import { Button } from '@material-ui/core';

export default function AsignShift(props) {
    const [open, setOpen] = useState(false);
    const [shifts, setShifts] = useState(null);
    const [movieShifts, setMovieShifts] = useState(null);
    const {id} = props;

    useEffect(() => {
        getActiveShifts(resp => {
            const data = [];
            resp.forEach(e => data.push({
                id: e.id,
                ...e.data()
            }));

            getMovie(id, resp => {
                setShifts(data.map(elem => ({...elem, checked: resp.data().shifts.includes(elem.id)})));
                setMovieShifts(resp.data().shifts);
            }, error => {
                console.log(error);
            });

        }, error => {
          console.log(error);
        });

      }, [id]);

    const handleModal = () => {
        setOpen(!open);
    };

    const onSubmit = () => {
        editMovie(id, {shifts: movieShifts}, () => handleModal(), error => console.log(error));
    };

    const changeMovieShift = (shift) => {
        const movieShiftsLocal = movieShifts;
        const index = movieShiftsLocal.findIndex(elem => shift === elem );
        index > -1 ? movieShiftsLocal.splice(index, 1) : movieShiftsLocal.push(shift);
        setMovieShifts(movieShiftsLocal);
    }
    
    const body = (
        <div style={{background: 'white', padding: 40, width: '100%', maxWidth: 500}}>
            <h2 id="modal-title" style={{textAlign: 'center'}}>Asignar turnos</h2>
            <div id="modal-body">
                <div style={{display: 'flex'}}>
                    {
                        shifts && shifts.sort((a, b) => a.shift.localeCompare(b.shift)).map(
                            (elem, index) => <div key={index} style={{textAlign: 'center', padding: 10, marginLeft: 5, backgroundColor: "rgb(237, 247, 255)"}}>
                                
                                <input type="checkbox" id={elem.shift} name="shift" value={elem.id} onClick={() => changeMovieShift(elem.id)} defaultChecked={elem.checked}/>
                                <label htmlFor={elem.shift}>{elem.shift}</label>
                            </div>
                        )
                    }
                </div>
                
                <div style={{textAlign: 'center', marginTop: 20}}>
                    <Button variant="contained" size="medium" color="primary" onClick={onSubmit}>
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
    <>
        <MdMenu onClick={handleModal} title="Asignar turnos" style={{marginLeft: 10, fontSize: "1.5em", cursor: "pointer"}}/>
        <CustomModal open={open} handleModal={handleModal} body={body} />
    </>
    )
}
