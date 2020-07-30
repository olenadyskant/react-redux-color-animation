import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import PickColor from "./ColorSelector";

export default function App() {
  const color = useSelector(state => {
    return state.color;
  });

  return (
    <div className="App">
      <h1 style={{ color }}>Hello Colorfull World!</h1>
      <p><i>Pick up your favorite color for the title</i></p>
      <PickColor />
    </div>
  );
}
