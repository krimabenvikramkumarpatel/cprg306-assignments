"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div>
      <button onClick={() => setSortBy("name")}>
        Sort by Name
      </button>

      <button onClick={() => setSortBy("category")}>
        Sort by Category
      </button>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onItemSelect={onItemSelect}  
          />
        ))}
      </ul>
    </div>
  );
}