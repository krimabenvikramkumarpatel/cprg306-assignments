"use client";

import { useState } from "react";

const initialState = {
  name: "",
  quantity: 1,
  category: "produce",
};

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...item,
      id: crypto.randomUUID(),
    };

    onAddItem(newItem);

    setItem(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md space-y-4 mb-6"
    >
      <input
        name="name"
        value={item.name}
        onChange={handleChange}
        placeholder="Item name"
        required
        className="border p-2 w-full text-black"
      />

      <input
        type="number"
        name="quantity"
        value={item.quantity}
        onChange={handleChange}
        min="1"
        className="border p-2 w-full text-black"
      />

      <select
        name="category"
        value={item.category}
        onChange={handleChange}
        className="border p-2 w-full text-black"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen">Frozen</option>
        <option value="canned">Canned</option>
        <option value="dry">Dry Goods</option>
        <option value="snacks">Snacks</option>
        <option value="beverages">Beverages</option>
        <option value="household">Household</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
}