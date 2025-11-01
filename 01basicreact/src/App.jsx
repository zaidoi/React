import React, { useState } from "react";
import "./App.css";

function Accordion({ items }) {
  const [toggleVal, setToggleVal] = useState(null)

  const handleClick = (index) => {
setToggleVal(toggleVal === index ? null : index)
  }
  

  return (
      <div class="accordion">
         {items.length > 0 ? <ul>
              {items.map((item,index) => (
                  <div class='accordion-item'>
                      <h2 onClick={()=>handleClick(index)}class="accordion-title">{item.title}
                      </h2>
                      {toggleVal === index && <span class='accordion-content'>{item.content}</span>}
                  </div>
          ))}
          </ul> : <h2>No items available.</h2>}
      </div>
  );
}