import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

// components and pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogOut from "./Registeration/LogOut";
import LogIn from "./Registeration/LogIn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Explore from "./components/Explore";
import Featured from "./components/Featured";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  // create a router with routes from the elements
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/featured" element={<Featured />}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Route>
        {/* <Route index element={<Home />}></Route> */}
      </Route>
    ),
    {
      basename: "/bakery-website",
    }
  );
  return (
    // wrap the app with the cart provider component to provide cart state and methods to all components
    <RouterProvider router={router} />
  );
}

export default App;
