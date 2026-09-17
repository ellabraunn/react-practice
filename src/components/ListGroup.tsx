import { useState } from "react";

//say we want to change the list and heading based on info
//will have {items: [], heading: string}
//use interface which is from TS
// use props to pass data into components
interface Props {
  items: string[];
  heading: string;
  //(item: string) => void, they type of onSelectItem is a function
  onSelectItem: (item: string) => void;
}
// adding items and heading in with Props means you have access to them anywhere in this function

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
              onSelectItem(item);
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
