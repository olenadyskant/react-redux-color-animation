import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import changeColor from "./actions";

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#0097a7",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#827717",
  "#ffc107",
  "#ff5722",
  "#795548",
  "#757575",
  "#000000",
];

const PickColor = () => {
  const dispatch = useDispatch();
  return (
    <section>
      {colors.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: color }}
          className="color-picker"
          onClick={() => dispatch(changeColor(color))}
        />
      ))}
    </section>
  );
};

export default PickColor;
