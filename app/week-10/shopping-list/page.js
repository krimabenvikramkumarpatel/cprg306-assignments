"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import Link from "next/link";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // load items when user logs in
  async function loadItems() {
    if (!user) return;

    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  // add new item
  async function handleAddItem(item) {
    if (!user) return;

    const id = await addItem(user.uid, item);
    const newItem = { id, ...item };

    setItems((prevItems) => [...prevItems, newItem]);
  }

  // clean item name before sending to MealIdeas
  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
      .trim();

    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return (
      <div>
        <p>Please login first</p>
        <Link href="/week-10">Go back</Link>
      </div>
    );
  }

  return (
    <main>
      <h1>Shopping List</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}