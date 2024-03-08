import React, { useRef } from "react";

const LineComponent = () => {
  const lineRef: any = useRef(null);

  const handleMouseEnter = (e: any) => {
    const line = lineRef.current;
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const mouseYRelativeToElement = e.clientY - boundingRect.top;

    if (mouseYRelativeToElement < boundingRect.height / 2) {
      // Mouse entered from top half, move line up
      line.setAttribute("y2", parseInt(line.getAttribute("y2")) - 10); // Move up
    } else {
      // Mouse entered from bottom half, move line down
      line.setAttribute("y2", parseInt(line.getAttribute("y2")) + 10); // Move down
    }
  };

  const handleMouseLeave = () => {
    // Return line to its original position
    lineRef.current.setAttribute("y2", 50); // Reset to original position
  };

  return (
    <svg
      width="100%"
      height="100px"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <line
        ref={lineRef}
        x1="0"
        y1="50"
        x2="100%"
        y2="50"
        stroke="black"
        strokeWidth="5"
      />
    </svg>
  );
};

export default LineComponent;
