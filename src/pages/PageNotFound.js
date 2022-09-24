import React from "react";
import { Link } from "react-router-dom";
import style from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={`${style.bg}`}>
      <h1>404</h1>
      <div className={style.bar}>|</div>
      <p className="mt-2">This page could not be found</p>
      <Link to="/" className={style.link}>
        <span className="d-none d-sm-inline">back to </span> HOME
      </Link>
    </div>
  );
};

export default PageNotFound;
