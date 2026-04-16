"use client";
import { useEffect, useState } from "react";

export default function VideoWrapper({ children }) {
  const [showMain, setShowMain] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleVideoEnd = () => {
    setShowMain(true);
  };

  if (!showMain) {
    return (
      <div
        style={{
          backgroundColor: "#DEDEDE",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <video
          src="/Logo.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          style={{
            border: "none",
            width: isSmallScreen ? "120vw" : "100%",
            height: isSmallScreen ? "auto" : "100%",
            maxHeight: isSmallScreen ? "100vh" : "100%",
            objectFit: "cover",
            backgroundColor: "#DEDEDE",
            transition: "all 0.4s ease",
          }}
        />
      </div>
    );
  }

  return children;
}
