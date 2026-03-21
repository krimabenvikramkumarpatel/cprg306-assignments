"use client";

import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";

import itemsData from "./items.json";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name
      .split(",")[0]
      .trim();

    setSelectedItemName(cleanedName);
  }

  // 🔒 PROTECT PAGE
  if (!user) {
    return <p>Please login first</p>;
  }

  // ✅ YOUR WEEK 8 UI
  return (
    <main>
      <h1>Shopping List</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <div>
          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>

        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}