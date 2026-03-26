import ProductForm from "@/components/ProductForm";
import ProductTable from "@/components/ProductTable";
import { Title } from "@mantine/core";

export default function ProductsPage() {
  return (
    <div>
      <ProductForm />
      <Title order={2}>Products</Title>
      <ProductTable products={[]} />
    </div>
  );
}
