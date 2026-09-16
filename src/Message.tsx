function Message() {
    const name = 'Ella';
    //the double brackets can also have functions in them
    //just anything that can return 
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>
}

export default Message;