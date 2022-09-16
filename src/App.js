import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Book from "./pages/Book";
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
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
