"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="mb-4">
        <label className="text-black mr-2 font-semibold">
          Sort by:
        </label>

        <button
          onClick={() => setSortBy("name")}
          className="mr-2 px-3 py-1 bg-gray-300 rounded text-black"
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="px-3 py-1 bg-gray-300 rounded text-black"
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}