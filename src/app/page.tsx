import ProductForm from "@/components/ProductForm";
import ProductTable from "@/components/ProductTable";
import {Title} from "@mantine/core";  

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return <div>
    <Title order={2}>Dashboard Overview</Title>
  </div>;
}
