import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function StaticDataTable(props) {
  const { rows, cols, size } = props;

  console.log(rows);

  console.log(cols);

  return (
    <TableContainer style={{ marginBottom: 10 }} component={Paper}>
      <Table size={size} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map((col, key) => (
              <TableCell key={col.name + key}>{col.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {cols.map((col, colIndex) => (
                <TableCell key={index + colIndex} component="th" scope="row">
                  {row[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
