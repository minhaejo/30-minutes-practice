import React, { ReactComponentElement, ReactNode } from "react";
import Footer from "../2.component/footer/Footer";
import Header from "../2.component/header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
