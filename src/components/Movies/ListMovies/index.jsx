import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CreateMovie from '../CreateMovie';
import EditMovie from '../EditMovie';
import { getMovies } from '../../../api/movieService';
import DeleteMovie from '../DeleteMovie';
import AsignShift from '../AsignShift';

import './ListMovies.scss';

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
    id: "name",
    name: "Nombre",
    align: "center"
  },
  {
    id: "pub_date",
    name: "F. Publicación",
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

export default function ListMovies() {
  const [rows, setRows] = useState(null);
  const classes = useStyles();

  
  const getMoviesFn = useCallback(() => {
    const data = [];
    const getActionsButtons = (id, data) => (
      <>
        <EditMovie id={id} data={data} callbackFn={getMoviesFn}/>
        <AsignShift id={id} />
        <DeleteMovie id={id} callbackFn={getMoviesFn}/>
      </>
    );

    getMovies(resp => {
      resp.forEach(e => data.push({
        id: e.id,
        ...e.data(),
        actions: getActionsButtons(e.id, e.data())
      }));
      setRows(data);
      return resp;
    }, error => {
      console.log(error);
    });
  }, [])

  useEffect(() => {
    getMoviesFn();
  }, [getMoviesFn]);



  return (
    <section className="list-movies-body">
        <div className="top-bar">
            <span>Películas</span>
            <CreateMovie callbackFn={getMoviesFn}/>
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
                {rows && rows.map((row) => (
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
