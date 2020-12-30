import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    //maxWidth: 70,
  },
});


export default function TablaDensa(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Altura&nbsp;(cm)</TableCell>
            <TableCell align="right">Peso&nbsp;(kg)</TableCell>
            <TableCell align="right">Batallas</TableCell>
            <TableCell align="right">Sprite frente</TableCell>
            <TableCell align="right">Sprite espalda</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tragosArray.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.Nombre}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">
                <img src={row.Frente} alt="imagenPokemon"></img>
              </TableCell>
              <TableCell align="right">
                <img src={row.Espalda} alt="imagenPokemon"></img>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}