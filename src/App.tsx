import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Toronto", "London", "Paris", "New York"];

  return (
    <div>
      //passing the array and a heading in bc added them as params in list group
      component
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
