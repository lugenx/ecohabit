import { useEffect, useState } from "react";

export default function Browser() {
  const [availableHeight, setAvailableHeight] = useState(calculateAvailableHeight());

  useEffect(() => {
    const handleWindowResize = () => {
      setAvailableHeight(calculateAvailableHeight());
    };

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  });

  function calculateAvailableHeight() {
    const appBarHeight = document.getElementById("app-bar").offsetHeight,
          windowHeight = window.innerHeight;
    return windowHeight - appBarHeight;
  }

  return availableHeight;
}