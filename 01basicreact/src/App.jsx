function UncontrolledExample() {
  const inputRef = React.useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value); // get value from DOM
  };

  return (
    <>
      <input type="text" ref={inputRef} defaultValue="John Doe" />
      <button onClick={handleSubmit}>Log Value</button>
    </>
  );
}
