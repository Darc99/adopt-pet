import React from "react";
import {Link} from "@reach/router";
import {css} from "@emotion/react";

const NavBar = () => (
    <header>
        css={css`
      background-color: #333;
      position: sticky;
      top: 0;
      z-index: 10;
    `}
        <Link to="/">Adopt Me!</Link>
        <span aria-label="logo" role="img">🐩</span>
    </header>
)