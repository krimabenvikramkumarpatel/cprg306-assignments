"use client";

export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="border rounded p-4 mb-2 bg-white shadow-sm hover:bg-gray-50">
      <h2 className="font-semibold">{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
