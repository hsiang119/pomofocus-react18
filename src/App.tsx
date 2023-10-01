// import { useState } from "react";
import "./index.scss";
import ActiveButton from "./components/AcitveButton";
import useCountdown from "./hooks/useCountDown";

const DAY = 24 * 60 * 60 * 1000;

export default function App() {
  const { value, onStart, onStop, isActive } = useCountdown(Date.now() + DAY);
  

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={onStart} disabled={isActive}>
        start
      </button>
      <button onClick={onStop} disabled={!isActive}>
        stop
      </button>
      <ActiveButton disabled={!isActive}>
        stop
      </ActiveButton>
    </div>
  );
}
