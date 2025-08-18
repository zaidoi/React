
import { useEffect, useState } from "react";
import Button from "./Btn";


function App() {
  
const [resource,setResource] = useState('posts')
useEffect(() =>{
  console.log("clicked");
  // works on dependencies
},[resource])

useEffect(() =>{
  console.log("clicked");
  // works only one time
  
},[])

useEffect(() =>{
// this prints after return this react useEffect clean up work which first
// run return then the main fuction great yrr..
  console.log("done");

  return () =>{
    console.log("clean up");
    
  }
  
})

  return (
    <>
    <button onClick={() => setResource("posts")}>Posts</button>
    <button onClick={() => setResource("blog")}>blog</button>
    <button onClick={() => setResource("comp")}>comp</button>
    <p>{resource}</p>
    </>
  );
}

export default App





