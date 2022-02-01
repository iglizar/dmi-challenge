import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: 
JSX.Element }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-col basis-auto bg-blue-custom-200 flex flex-auto grow md:p-10 px-4 pt-4 py-8 shrink justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
