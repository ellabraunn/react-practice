import { useState } from "react";

function ListGroup() {
  const items = ["Toronto", "London", "Paris", "New York"];
  //   this is a hook function which lets you tap into react functions
  // this tells react that this component can have data or state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //  useState returns an array
  //   arr[0]; //variable (selectedIndex)
  //   arr[1]; // updater function, use to change variable

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
