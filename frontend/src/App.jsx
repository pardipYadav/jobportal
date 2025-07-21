import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/signup";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/profile";
import JobDesctription from "./components/JobDesctription";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "jobs",
      element: <Jobs />,
    },
    {
      path: "jobdescription/:id",
      element: <JobDesctription />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
export default App;
