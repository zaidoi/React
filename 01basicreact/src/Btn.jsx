


export default function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
    const buttonStyle = {
      color: color,
      fontSize: fontSize + "px"
    };
  
    return <button style={buttonStyle}>{text}</button>;
  }