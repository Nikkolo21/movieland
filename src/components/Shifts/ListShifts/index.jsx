import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateMovie from '../CreateMovie';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 1000,
    shadows: "none"
  },
});

const rows = [
  {
    id: 1,
    name: "Star Wars",
    created_at: "10/12/2019",
    status: "Activo",
    actions: "none"
  },
  {
    id: 2,
    name: "Indiana Jones",
    created_at: "10/10/2019",
    status: "Activo",
    actions: "none"
  }
];

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
    id: "created_at",
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
  const classes = useStyles();

  return (
    <section style={{maxWidth: 1000}}>
        <div style={{justifyContent: "space-between", display:"flex", padding: 20}}>
            <span style={{textAlign: "left", fontSize: "1.5em"}}>Películas</span>
            <CreateMovie/>
        </div>
        <TableContainer component={Paper} style={{boxShadow: "none"}}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    {
                    headers.map(header => <TableCell key={header.id} align={header.align}><b>{header.name}</b></TableCell>)
                    }
                </TableRow>
                </TableHead>
                
                <TableBody>
                {rows.map((row) => (
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
