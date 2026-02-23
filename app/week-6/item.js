export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-lg p-4 shadow-sm bg-white text-black">
      <h2 className="font-semibold text-lg text-black">{name}</h2>
      <p className="text-sm text-black">Quantity: {quantity}</p>
      <p className="text-sm text-black capitalize">
        Category: {category}
      </p>
    </li>
  );
}