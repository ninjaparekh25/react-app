/* import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Mumbai", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App; */

import { useState } from "react";
import Alert from "./components/Alert";
/*
function App() {
  return (
    <div>
      <Alert>
        Hello World!
      </Alert>
    </div>
  );
}

export default App;*/

import Button from "./components/Button";
/*
const App = () => {
  return (
    <div>
      <Button color="danger" onClick={() => console.log('Clicked')}>My Button </Button>
    </div>
  );
};

export default App;*/

function App() {
  const [alertVisible , setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert>My alert</Alert> }
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
