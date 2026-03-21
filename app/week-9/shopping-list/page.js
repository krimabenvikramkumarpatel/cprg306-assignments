"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ItemList from "../../week-8/ItemList";
import NewItem from "../../week-8/NewItem";
import itemsData from "../../week-8/items.json"; // your JSON file

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting...</p>;
  }

  // Function to add a new item
  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Shopping List</h1>
      <NewItem onAddItem={addItem} />
      <ItemList items={items} />
    </main>
  );
}