import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Main from "./components/Main";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchResultPage />,
      },
    ],
  },
]);

export default function App() {
  return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
  );
}
