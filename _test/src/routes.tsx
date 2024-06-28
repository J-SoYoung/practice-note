import IndexPage from "./pages/Index";
import UsedDetail from "./pages/UsedDetail";
import UsedHome from "./pages/UsedHome";
import GlobalLayout from "./pages/_layout";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    Children: [
      { path: "/", element: <IndexPage /> },
      { path: "/useds", element: <UsedHome /> },
      { path: "/useds/:id", element: <UsedDetail /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/useds" },
  { route: "/useds/:id" },
];
