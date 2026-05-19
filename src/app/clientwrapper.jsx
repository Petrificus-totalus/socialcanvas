"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function VideoWrapper({ children }) {
  const [showMain, setShowMain] = useState(false);
  const pathname = usePathname();

  const handleVideoEnd = () => {
    setShowMain(true);
  };

  if (pathname !== "/") {
    return children;
  }

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
          src="/slogan.mp4"
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
