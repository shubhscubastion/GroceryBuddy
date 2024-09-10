import { useState, useEffect } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast } from "react-toastify";

const App = () => {


  const setLocalStorage = (items) => {
    localStorage.setItem("list", JSON.stringify(items));
  };
  const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

  const [items, setItems] = useState(defaultList);
  useEffect(() => {
    setLocalStorage(items);
  }, [items]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
    toast.success("Item added successfully!")
  };


  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.error("Item removed!")
  };


const editItem = (itemId) => {
  // Create a new array with the toggled completed status
  const newItems = items.map((item) => {
    if (item.id === itemId) {
      // Toggle the `completed` status
      return { ...item, completed: !item.completed };
    }
    return item;
  });

  // Update the state with the new items array
  setItems(newItems);
  toast.info("Item status updated!")
};

  return (
    <section className="section-center">
      <ToastContainer position='top-center'></ToastContainer>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
