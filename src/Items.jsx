import SingleItem from "./SingleItem"; // Ensure this is imported from SingleItem.js

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};
export default Items;
