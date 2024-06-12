import { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link to="/user">User로 이동</Link>
        </li>
        <li>
          <Link to="/items">Item으로 이동</Link>
        </li>
        <li>
          <Link to="/todo">Todo로 이동</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
