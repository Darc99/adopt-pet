import React, {useState} from "react";
import { Link } from "@reach/router";
import { css, cx, keyframes } from "@emotion/css";
import colors from './colors';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {

  const [padding] = useState(15);

  return (  
  <header
      className={css`
        /* background-color: ${colors.accent}; */
        padding: ${padding};
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        className={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
       aria-label="logo" 
       role="img"
       >
        🐩
      </span>
    </header>
  )
};
  

export default NavBar;