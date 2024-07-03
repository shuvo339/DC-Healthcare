import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-[1160px] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <Footer></Footer>
      </div>

    </div>
  );
};

export default Root;
