import {
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Title,
} from "@mantine/core";

const sales = [
  {
    product: "Computer",
    quantity: 10,
    price: 1000000,
    date: "2024-06-01",
  },
  {
    product: "Mouse",
    quantity: 5,
    price: 20000,
    date: "2024-06-02",
  },
  {
    product: "Keyboard",
    quantity: 7,
    price: 50000,
    date: "2024-06-03",
  },
  {
    product: "Monitor",
    quantity: 3,
    price: 300000,
    date: "2024-06-04",
  },
];

export default function Page() {
  const rows = sales.map((sale, index) => (
    <TableTr key={index}>
      <TableTd>{index + 1}</TableTd>
      <TableTd>{sale.product}</TableTd>
      <TableTd>{sale.quantity}</TableTd>
      <TableTd>{sale.price}</TableTd>
      <TableTd>{sale.date}</TableTd>
    </TableTr>
  ));

  return (
    <div className="align-center justify-between text-shadow-md">
      <Title
        order={2}
        className="text-xl font-bold text-gray-500 sm:text-[2rem]"
      >
        Inventory
      </Title>
      <Table>
        <TableThead>
          <TableTr>
            <TableTh>S/N</TableTh>
            <TableTh>Product</TableTh>
            <TableTh>Quantity</TableTh>
            <TableTh>Price</TableTh>
            <TableTh>Date</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
    </div>
  );
}
