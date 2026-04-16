"use client";
import { useState } from "react";

export default function VideoWrapper({ children }) {
  const [showMain, setShowMain] = useState(false);

  const handleVideoEnd = () => {
    setShowMain(true);
  };

  if (!showMain) {
    return (
      <div
        style={{
          backgroundColor: "#e4e4e4",
          height: "100dvh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <video
          src="/logo.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    );
  }

  return children;
}
