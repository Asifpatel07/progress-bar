import "./styles.css";
import { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedBar, setAnimatedBar] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedBar(progress), 100);
  }, [progress]);
  return (
    <div class="progress-bar-container">
      <div
        class="progress-bar"
        style={{
          transform: `translateX(${animatedBar - 100}%)`,
        }}
        role="animatedBar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={70} />
    </div>
  );
}
