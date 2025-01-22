// import { MouseEvent } from "react";
// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selctedIndex = 0;
  //Hook
  const [selctedIndex, setSelctedIndex] = useState(-1);

  // Event hanlder
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selctedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelctedIndex(index);
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
