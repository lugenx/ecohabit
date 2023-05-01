import { useEffect, useState } from "react";

export function useAvailableHeight() {
  const calculateAvailableHeight = () => {
    const appBarElement = document.getElementById("app-bar");

    if (appBarElement) {
      const availableHeight = window.innerHeight - appBarElement.offsetHeight;

      return availableHeight > 0 ? availableHeight : 0;
    }

    return 0;
  };

  const [availableHeight, setAvailableHeight] = useState(
    calculateAvailableHeight()
  );

  useEffect(() => {
    setAvailableHeight(calculateAvailableHeight());

    const handleWindowResize = () => {
      setAvailableHeight(calculateAvailableHeight());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return availableHeight;
}
