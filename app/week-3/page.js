"use client";

import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <GroceryItemList />
    </main>
  );
}
