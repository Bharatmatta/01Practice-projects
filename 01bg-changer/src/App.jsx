import { useState } from "react";
import "./App.css";
import { ButtonTab } from "./components/buttonTab.jsx";

function App() {
  const colors = [
    { name: "white", bgColor: "bg-white" },
    { name: "red", bgColor: "bg-red-500" },
    { name: "blue", bgColor: "bg-blue-500" },
    { name: "orange", bgColor: "bg-orange-500" },
    { name: "yellow", bgColor: "bg-yellow-500" },
    { name: "gray", bgColor: "bg-gray-500" },
  ];
  const [bgColor, setbgColor] = useState(colors[0].bgColor);

  function changeColor(color) {
    console.log(color);
    setbgColor(color);
  }

  return (
    <div className={`${bgColor} w-full h-screen`}>
      <ButtonTab colors={colors} onChangeColor={changeColor} />
    </div>
  );
}

export default App;
