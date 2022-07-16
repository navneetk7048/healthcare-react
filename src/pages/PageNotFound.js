import React from "react";
import variables from "../styles/abstracts/_variables.scss";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        background: variables.clrPastelBlue,
      }}
    >
      <h1>Page not found</h1>
    </div>
  );
};

export default PageNotFound;
