export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-sm text-gray-600">Quantity: {quantity}</p>
      <p className="text-sm text-gray-600 capitalize">
        Category: {category}
      </p>
    </li>
  );
}
