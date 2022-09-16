import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Book from "./pages/Book";
import Character from "./pages/Character";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/books/:bookId",
    element: <Book />,
  },
  {
    path: "/characters/:characterId",
    element: <Character />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
