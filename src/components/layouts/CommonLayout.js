import React from "react";
import CommonNavbar from "./CommonNavbar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <CommonNavbar />
      <section className="main-content columns is-fullheight">
        <div className="container column is-10">
          <div className="section">{children}</div>
        </div>
      </section>
    </>
  );
};

export default CommonLayout;
