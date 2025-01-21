// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Mumbai", "Tokyo", "London", "Paris"];
  let selctedIndex = 0;
  //Hook
  const arr = useState(-1);

  // Event hanlder
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
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
              selctedIndex = index;
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
