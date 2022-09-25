import React, { useState, useContext, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { OtherMenu } from "./OtherMenu";
import {
  logoutAuthCtrl,
  loginAuthCtrl,
} from "../../controllers/CtrlAuthentication";
import AuthContext from "../../store/authContextAPI";

const Menu = (props) => {
  // Create reference to authContext global variable
  const authCtx = useContext(AuthContext);
  // Manage component state
  const [data, setData] = useState(null);

  // Listen for changes on authCtx in authContext by any subscriber and update this component
  useEffect(() => {
    setData(authCtx);
  }, [authCtx]);

  // authController function call. This helps with clean code base and DON'T REPEAT YOUR SELF PRINCIPLE
  const logoutHandler = () => {
    // Accept functions as parameters to update component
    logoutAuthCtrl(setData, authCtx.updateContext);
  };

  const loginHandler = () => {
    // Accept functions as parameters to update component
    loginAuthCtrl(setData, authCtx.updateContext);
  };

  return (
    <>
      {/* Visible only on mobile devices */}
      <div className="d-block d-sm-none">
        <MobileMenu
          data={data}
          logout={logoutHandler}
          login={loginHandler}
          page={props.page}
        />
      </div>
      {/* Visible on tablet and destop devices */}
      <div className="d-none d-sm-block">
        <OtherMenu
          data={data}
          logout={logoutHandler}
          login={loginHandler}
          page={props.page}
        />
      </div>
    </>
  );
};

export default Menu;
