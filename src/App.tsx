import AgoraUIKit from "agora-react-uikit";
//import "./App.css";
import { useState } from "react";

function App() {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "298897c762f2468eac5309be9787dd66",
    channel: "main",
    token:
      "007eJxTYPBS2RydXp6kJZ6xaBFL+a8A86VKp5vZ2j+l5l2rXRzrW6vAYGRpYWFpnmxuZpRmZGJmkZqYbGpsYJmUamluYZ6SYmYWej4hpSGQkSFuigkzIwMEgvgsDLmJmXkMDACi5x0n",
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h4 onClick={() => setVideoCall(true)}>hello video call Join</h4>
  );
}

export default App;
