import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import MealDetails from "./components/MealDetails/MealDetails";
import Meals from "./components/Meals/Meals";
import Main from "./LayOut/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/restaurant",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
            );
          },
          element: <Meals></Meals>,
        },
        {
          path: "/meal/:mealId",
          loader: ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
            );
          },
          element: <MealDetails></MealDetails>,
        },
        {
          path: "*",
          element: <p>404</p>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <h1 className="border bg-warning">hello</h1>
      <RouterProvider router={router}></RouterProvider>
      {/* <Routes>
        <Route to="/home">Homes</Route>
      </Routes> */}
    </div>
  );
}

export default App;
