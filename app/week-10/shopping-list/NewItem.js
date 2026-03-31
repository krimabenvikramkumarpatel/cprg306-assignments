"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
      />

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="meat">Meat</option>
        <option value="bakery">Bakery</option>
        <option value="household">Household</option>
      </select>

      <button type="submit">Add Item</button>
    </form>
  );
}