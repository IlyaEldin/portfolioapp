import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className={classes.contain}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
