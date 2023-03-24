import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import AudioPlayer from "./components/AudioPlayer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AudioPlayer />
  </React.StrictMode>
);
