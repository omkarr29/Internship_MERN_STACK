import { useRef, useState } from "react";
import "./Ref.css";

export default function Ref() {
  let myref = useRef("");

  const [user, setUser] = useState("");

  function getSubmit() {
    console.log(myref.current.value);

    myref.current.style.color = "red";
    myref.current.style.backgroundColor = "#fff3b0";

    setUser("Hello " + myref.current.value);
  }

  return (
    <div className="container">
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Enter your name..."
        ref={myref}
      />

      <input
        type="password"
        placeholder="Enter your password"
      />

      <button onClick={getSubmit}>LOGIN</button>

      <h1>{user}</h1>
    </div>
  );
}