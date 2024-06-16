import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Items from "./pages/Items";
import TodoBox from "./pages/TodoBox";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <h3>
        <Link to="/">메인으로 이동</Link>
      </h3>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/todo" element={<TodoBox />}></Route>
        <Route path="/detail/:itemId" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
