export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
      <p className="text-lg font-semibold text-gray-900">
        {name}
      </p>
      <p className="text-sm text-gray-700">
        Quantity: {quantity}
      </p>
      <p className="text-sm text-gray-700">
        Category: {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
    </li>
  );
}
