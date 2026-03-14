"use client";

import { useState } from "react";
import itemsData from "./items.json";

import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function Page() {

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

  return (
    <main>

      <h1>Shopping List</h1>

      <div style={{display:"flex", gap:"40px"}}>

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