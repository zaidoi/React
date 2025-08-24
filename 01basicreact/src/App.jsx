
import {  useState } from "react";
import PropTypes from 'prop-types';
import RenderName from "./RenderName";
import Button from "./Btn";


function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <RenderName  />
    </>
  );
}

export default App





