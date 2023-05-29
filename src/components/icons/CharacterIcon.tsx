import React from "react";

type CharacterIconProps = {
  size?: number;
};

export const CharacterIcon = ({ size = 32 }: CharacterIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />

      <g id="Complete">
        <g id="user">
          <g>
            <path
              d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />

            <circle
              cx="12"
              cy="7"
              fill="none"
              r="4"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
