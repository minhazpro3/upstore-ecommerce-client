import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddToCartVerified from "./pages/AddToCartVerified/AddToCartVerified";

function App() {

  const router = createBrowserRouter([
    {
      path: '/cart',
      element: <AddToCartVerified></AddToCartVerified>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
