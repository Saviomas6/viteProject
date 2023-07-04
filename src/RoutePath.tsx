import { Route, Routes, useLocation } from "react-router-dom";
import About from "./tabSection/About";
import Profile from "./tabSection/Profile";

const RoutePath = () => {
  const search = useLocation()?.search;
  console.log("search", search);
  const tab = new URLSearchParams(search).get("tab");
  console.log("tab", tab);
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/movie" element={<Profile />} />
      </Routes>
    </>
  );
};

export default RoutePath;
