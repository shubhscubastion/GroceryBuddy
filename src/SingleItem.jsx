import { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  const [checked, setIsChecked] = useState(false);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p style={{ textDecoration: item.completed && "line-through" }}>
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id)}
      >
        Remove
      </button>
    </div>
  );
};
export default SingleItem;
