import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <strong>World</strong>
      </Alert>
      <Button children="help me!" onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
