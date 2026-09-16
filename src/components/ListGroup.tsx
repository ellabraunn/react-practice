function ListGroup() {
  let items = ["Toronto", "London", "Paris", "New York"];
  items = [];
  //  option 2: const message = items.length === 0 ? <p>No item found</p> : null;
  //  option 3: const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  return (
    <>
      <h1>List</h1>
      {/*option 3: {getMessage()} */}
      {/*option 2: {message} */}
      {/*option 1: {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>no item found</p>}
      {/* this is just saying if it's empty then do this, if condition is false result will just be false */}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
