import { useState } from "react";
import { Alert } from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Tokyo", "Manila", "London", "Beijing"];

  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);

  const onSelectItem = (item: string) => {
    setAlertVisibility(true);
    setAlertMessage(item);
  };

  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>{alertMessage}</Alert>
      )}

      <ListGroup
        items={items}
        heading="Awesome List"
        onSelectItem={onSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
