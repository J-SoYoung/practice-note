import "./App.css";
import { Outlet } from "react-router-dom";

// import { useRoutes } from "react-router-dom";
// import { routes } from "./routes";

function App() {
  // const elem = useRoutes(routes);
  // return elem;
  return <Outlet />;
}

export default App;
