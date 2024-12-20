import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ButtonToUp from "../ButtonToUp/ButtonToUp";
import InfoResume from "../InfoResume/InfoResume";

function Layout() {
  return (
    <>
      <div className="layout">
        <Header />

        <Outlet />
        <ButtonToUp />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
