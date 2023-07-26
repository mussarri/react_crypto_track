import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import { useTheme } from "@emotion/react";
import Footer from "./components/Layout/Footer";

const contentStyle = { margin: "0px auto", padding: "0 10px" };

function Layout() {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <main
        style={{
          height: "100%",
          minHeight: "100vh",
          background: theme.palette.grey[50],
          color: theme.palette.grey[800],
        }}
      >
        <div style={contentStyle}>
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Layout;
