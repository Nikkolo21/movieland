import React, { useCallback, useEffect, useState } from 'react';
import CustomModal from '../../Modals';
import { MdMenu } from "react-icons/md";
import { editMovie, getMovie } from '../../../api/movieService';
import { getActiveShifts } from '../../../api/shiftService';
import { Button } from '@material-ui/core';
import './AsignShift.scss';

export default function AsignShift(props) {
    const [open, setOpen] = useState(false);
    const [shifts, setShifts] = useState(null);
    const [movieShifts, setMovieShifts] = useState(null);
    const {id} = props;

    const getShiftsFn = useCallback(() => {
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
    }, [id])

    useEffect(() => {
        getShiftsFn();
      }, [getShiftsFn]);

    const handleModal = () => {
        setOpen(!open);
    };

    const onSubmit = () => {
        editMovie(id, {shifts: movieShifts}, () => {
            getShiftsFn();
            handleModal();
        }, error => {
            console.log(error);
        });
    };

    const changeMovieShift = (shift) => {
        const movieShiftsLocal = movieShifts;
        const index = movieShiftsLocal.findIndex(elem => shift === elem );
        index > -1 ? movieShiftsLocal.splice(index, 1) : movieShiftsLocal.push(shift);
        setMovieShifts(movieShiftsLocal);
    }
    
    const body = (
        <div className="modal-body">
            <h2 id="modal-title">Asignar turnos</h2>
            <div id="modal-body">
                <div className="modal-content">
                    {
                        shifts && shifts.sort((a, b) => a.shift.localeCompare(b.shift)).map(
                            (elem, index) => <div className="shifts" key={index}>
                                
                                <input type="checkbox" id={elem.shift} name="shift" value={elem.id} onClick={() => changeMovieShift(elem.id)} defaultChecked={elem.checked}/>
                                <label htmlFor={elem.shift}>{elem.shift}</label>
                            </div>
                        )
                    }
                </div>
                
                <div className="modal-footer">
                    <Button variant="contained" size="medium" color="primary" onClick={onSubmit}>
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
    <>
        <MdMenu onClick={handleModal} title="Asignar turnos" className="menu-icon"/>
        <CustomModal open={open} handleModal={handleModal} body={body} />
    </>
    )
}
