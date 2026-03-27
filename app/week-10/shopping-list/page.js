"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items from Firestore
  async function loadItems() {
    if (!user) return;

    const items = await getItems(user.uid);
    setItems(items);
  }

  // Run when user is available
  useEffect(() => {
    loadItems();
  }, [user]);

  // Add item to Firestore + state
  async function handleAddItem(item) {
    const id = await addItem(user.uid, item);

    const newItem = { id, ...item };
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0].trim();
    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return <p>Please login first</p>;
  }

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