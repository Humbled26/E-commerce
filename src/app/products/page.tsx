"use client";

import { useEffect, useState } from "react";
import ProductTable from "@/components/ProductTable";
import { Product } from "@/types/Product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // For fetching products from API
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Loading page on start
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle delete function
  const handleDelete = (id: string | number) => {
    try {
      fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      // update UI instantly
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // Edit product
  const handleEdit = async (product: Product) => {
    const updatedName = prompt("Enter new name:", product.name);
    if (!updatedName) return;

    try {
      const res = await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...product, name: updatedName }),
      });
      const updatedProduct = await res.json();

      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? updatedProduct : p)),
      );
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
