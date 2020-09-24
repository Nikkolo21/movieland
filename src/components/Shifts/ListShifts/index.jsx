import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateShift from '../CreateShift';
import EditShift from '../EditShift';
import { getShifts } from '../../../api/shiftService';
import DeleteShift from '../DeleteShift';
import './ListShifts.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 1000,
    shadows: "none"
  },
});

const headers = [
  {
    id: "id",
    name: "ID",
    align: "center"
  },
  {
    id: "shift",
    name: "Turno",
    align: "center"
  },
  {
    id: "status",
    name: "Estado",
    align: "center"
  },
  {
    id: "actions",
    name: "Acciones",
    align: "center"
  }
]

export default function ListShifts() {
  const [rows, setRows] = useState(null);
  const classes = useStyles();

  
  const getShiftsFn = useCallback(() => {
    const data = [];
    const getActionsButtons = (id, data) => (
      <>
        <EditShift id={id} data={data} callbackFn={getShiftsFn}/>
        <DeleteShift id={id} callbackFn={getShiftsFn}/>
      </>
    )

    getShifts(resp => {
      resp.forEach(e => data.push({
        id: e.id,
        ...e.data(),
        actions: getActionsButtons(e.id, e.data())
      }));
      setRows(data);
    }, error => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    getShiftsFn();
  }, [getShiftsFn]);

  return (
    <section className="list-shifts-body">
        <div className="top-bar">
            <span>Turnos</span>
            <CreateShift callbackFn={getShiftsFn} />
        </div>
        <TableContainer component={Paper} className="table-container">
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                  {
                    headers.map(header => <TableCell key={header.id} align={header.align}><b>{header.name}</b></TableCell>)
                  }
                </TableRow>
                </TableHead>
                
                <TableBody>
                { rows && rows.map((row) => (
                  <TableRow key={row.id}>
                    {headers.map(header => <TableCell key={header.id} align="center">{row[header.id]}</TableCell>)}        
                  </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </section>
  );
}
