import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollTop from "../ScrollTop/ScrollTop";

function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ScrollTop />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
