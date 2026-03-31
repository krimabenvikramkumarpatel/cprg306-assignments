"use client";

export default function Item({ item, onItemSelect }) {
  return (
    <div>
      <button onClick={() => onItemSelect && onItemSelect(item)}>
        {item.name} (x{item.quantity})
      </button>
    </div>
  );
}