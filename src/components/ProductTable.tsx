"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
  id: string,
  name: string,
  category: string,
  quantity: number,
  price: number
) {
  return { id, name, category, quantity, price };
}
import Button from "@mui/material/Button";

const rows = {
  "1": createData("1", "Product 1", "Category 1", 10, 19.99),
  "2": createData("2", "Product 2", "Category 2", 5, 29.99),
  "3": createData("3", "Product 3", "Category 1", 20, 9.99)
};

export default function ProductTable() {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(rows).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>${row.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small" sx={{mr:1}}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" size="small">
                  Delete
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}