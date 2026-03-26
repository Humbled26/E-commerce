"use client";

import { Table, Button } from "@mantine/core";

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
};

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p: Product) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.quantity}</td>
            <td>{p.category}</td>
            <td>
              <Button color="red">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
