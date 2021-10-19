import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, innerWidth: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, innerWidth: e.view.innerWidth });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};