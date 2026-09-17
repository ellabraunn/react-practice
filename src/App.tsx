import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClick={() => setAlertVisibility(false)}>My new alert</Alert>
      )}
      <Button children="help me!" onClick={() => setAlertVisibility(true)} />
    </div>
  );
}

export default App;
