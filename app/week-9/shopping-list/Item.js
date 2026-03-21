export default function Item({ item, onSelect }) {

  return (
    <li onClick={() => onSelect(item)} style={{cursor:"pointer"}}>

      <h3>{item.name}</h3>

      <p>
        Quantity: {item.quantity} | Category: {item.category}
      </p>

    </li>
  );
}