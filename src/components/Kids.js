import react, { useState } from "react";

import "./Kid.css";
import Parent from "./Parent";

function Kids() {
  const [color, setColor] = useState("");
  const colorHandler = (e) => {
    setColor(e.target.value);
    console.log(color);
  };
  return (
    <>
      <div className="container">
        {" "}
        <Parent colors={color} />
        <section className="mini">
          <input type="text" onChange={colorHandler} />
        </section>
      </div>
    </>
  );
}
export default Kids;
