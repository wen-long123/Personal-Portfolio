import React, { useEffect, useState } from "react";
import preloadGif from "@/assets/preload.gif";
import logo from "@/assets/logo/logo.png";

export const PreloadSection = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade out
      // call onFinish after fade-out completes
      setTimeout(() => {
        onFinish(); // tell parent loading is done
      }, 600); // should match the fade duration in CSS
    }, 1200); // initial delay before fade

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`preload-section ${fadeOut ? "fade-out" : ""}`}>
      <img src={preloadGif} alt="Loading animation" className="preload-gif" />
      <img src={logo} alt="Logo" className="preload-logo" />
    </div>
  );
};
