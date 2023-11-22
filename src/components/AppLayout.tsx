import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect } from "react";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.className = pathname.replace("/", "");
  }, [pathname]);

  return (
    <>
      <Header logoPath="../src/assets/shared/logo.svg">
        <Navbar />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
