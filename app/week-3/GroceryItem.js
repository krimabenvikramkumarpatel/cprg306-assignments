export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600 capitalize">{category}</p>
      </div>
      <span className="font-bold text-blue-600">x{quantity}</span>
    </li>
  );
}
