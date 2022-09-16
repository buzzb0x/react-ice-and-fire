import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Book from "./pages/Book";
import Character from "./pages/Character";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
