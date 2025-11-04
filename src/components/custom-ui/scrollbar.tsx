"use client";

import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface ScrollBarProps {
  children: React.ReactNode;
  className?: string;
  thumbColor?: string;
  thumbSize?: string; // e.g. "4px"
  trackColor?: string;
  thumbShortness?: number; // 0.5 = 50% shorter
}

const ScrollBar: React.FC<ScrollBarProps> = ({
  children,
  className = "",
  thumbColor = "#888",
  thumbSize = "6px",
  trackColor = "transparent",
  thumbShortness = 0.5, // makes it half its default height
}) => {
  return (
    <SimpleBar
      className={className}
      style={{
        scrollbarColor: `${thumbColor} ${trackColor}`,
      }}
    >
      {children}

      {/* Scoped scrollbar style overrides */}
      <style jsx global>{`
        .simplebar-track.simplebar-vertical {
          width: ${thumbSize};
          background: ${trackColor};
        }

        .simplebar-scrollbar::before {
          background-color: ${thumbColor} !important;
          border-radius: 8px;
          transform: scaleY(
            ${thumbShortness}
          ); /* 👈 visually shortens the thumb */
          transform-origin: center;
          transition: transform 0.2s ease;
        }

        /* optional hover expand effect */
        .simplebar-scrollbar:hover::before {
          transform: scaleY(${thumbShortness + 0.1});
        }

        /* horizontal scrollbar */
        .simplebar-track.simplebar-horizontal {
          height: ${thumbSize};
          background: ${trackColor};
        }
      `}</style>
    </SimpleBar>
  );
};

export default ScrollBar;
