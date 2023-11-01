import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
          <Home></Home>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;