export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-100 p-3 mb-2 rounded text-black">
      <strong>{name}</strong> — {quantity} — {category}
    </li>
  );
}