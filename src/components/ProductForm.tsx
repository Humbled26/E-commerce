"use client";

import { TextInput, Button } from "@mantine/core";
import { useState } from "react";

export default function ProductForm() {
  const [name, setName] = useState("");

  const submit = async () => {
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        name,
        price: 10,
        quantity: 10,
        category: "general",
      }),
    });
  };

  return (
    <div>
      <TextInput
        label="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={submit}>Add Product</Button>
    </div>
  );
}
