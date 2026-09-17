import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Toronto", "London", "Paris", "New York"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      //passing the array and a heading in bc added them as params in list group
      component
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
