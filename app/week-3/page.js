import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Shopping List
      </h1>
      <GroceryItemList />
    </main>
  );
}
