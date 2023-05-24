import react, { useState } from "react";

import "./Kid.css";
import Parent from "./Parent";
import Colorref from "./Colorref";

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
        <p>Type the color name that you want to preview:</p>
        <section className="mini">
          <input type="text" onChange={colorHandler} />
        </section>
      </div>
      <Colorref />
    </>
  );
}
export default Kids;
