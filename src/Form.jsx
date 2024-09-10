import { useState } from "react";

const Form = ({addItem}) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (newItemName === "") {
    //   console.log("well I can see that there's emptiness");
    // } else {
    //   try {
    //     console.log(newItemName);
    //   } catch (error) {
    //     console.log("somethings up");
    //   }
    // }
    if(!newItemName) return;
    addItem(newItemName);
    setNewItemName('');
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text"
            id="text"
            name="textInput"
            className="form-input"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          ></input>
          <button type="submit" className="btn">
            add item
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
