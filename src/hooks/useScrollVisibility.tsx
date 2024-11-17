import { useState, useEffect } from "react";

function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll === 0) {
        setIsVisible(true);
      } else if (currentScroll > 20) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}

export default useScrollVisibility;
