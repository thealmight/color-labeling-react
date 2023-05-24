import React from "react";

const Colorref = () => {
  const colour = [
    "black",
    "gray",
    "white",
    "pink",
    "purple",
    "green",
    "lime",
    "olive",
    "blue",
    "navy",
    "aqua",
    "chocolate",
  ];
  const colorName = colour.map((name) => {
    return <p>{name}</p>;
  });
  return (
    <>
      <p>These are few examples of colors...!</p>
      {colorName}
    </>
  );
};

export default Colorref;
