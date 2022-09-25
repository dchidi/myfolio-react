import React, { useState, useContext, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { OtherMenu } from "./OtherMenu";
import {
  logoutAuthCtrl,
  loginAuthCtrl,
} from "../../controllers/CtrlAuthentication";
import AuthContext from "../../store/authContextAPI";

const Menu = (props) => {
  const authCtx = useContext(AuthContext);
  // const [data, setData] = useState(authCtx);
  const [data, setData] = useState(null);

  // useEffect listen to when changes occur in authCtx by any subscriber
  useEffect(() => {
    setData(authCtx);
  }, [authCtx]);

  const logoutHandler = () => {
    // call authController logout function
    logoutAuthCtrl(setData, authCtx.updateContext);
  };

  const loginHandler = () => {
    loginAuthCtrl(setData, authCtx.updateContext);
  };

  return (
    <>
      <div className="d-block d-sm-none">
        <MobileMenu
          data={data}
          logout={logoutHandler}
          login={loginHandler}
          page={props.page}
        />
      </div>
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

// export const FloatingMenu = (props) => <SideMenu />;
