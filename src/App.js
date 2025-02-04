import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("small");

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const selectSize = (e) => setSize(e.target.value);

  return (
    <div>
      <h1>Place an Order</h1>
      <form>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        {/* Add pizza size select dropdown */}
        <div>
          <h3>Size</h3>
          <label htmlFor="select-size">Select size: </label>
          <select id="select-size" value={size} onChange={selectSize}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </form>

      {/* Display the current selection */}
      <p>Your selection: {size} {pepperoniIsChecked ? "pepperoni" : "cheese"}</p>
    </div>
  );
}

export default App;
