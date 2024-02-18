import React from "react";

import { Icon } from "./interface";

/**
 * Search Icon
 *
 * @param {number} [size]  - icon size (width and height).
 *
 * @param {string} [color] - color ist always set to currentColor.
 *
 *@example
 * //Using Icon with just size and default color value.
 *  <SearchIcon size={24} />
 * */

const SearchIcon = ({ size = 24, color = "currentColor" }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5
         2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5
          21C16.7467 21 21 16.7467 21 11.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
