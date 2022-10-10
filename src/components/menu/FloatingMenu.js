import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faHouseUser,
  faLayerGroup,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/authContextAPI";
import { logoutAuthCtrl } from "../../controllers/CtrlAuthentication";
import style from "./Menu.module.css";

const FloatingMenu = (props) => {
  // Create reference to authContext global variables
  const authCtx = useContext(AuthContext);
  // Manage component state
  const [data, setData] = useState(null);

  // Listen to changes on authCtx by any subscriber and update this component
  useEffect(() => {
    setData(authCtx);
  }, [authCtx]);

  // Call CtrlAuthentication functions
  const logoutHandler = () => {
    // Pass functions as parameters
    logoutAuthCtrl(setData, authCtx.updateContext);
  };
  return (
    <ul className={`${style.floatingMenu} mx-3 d-none d-sm-block fixed-top`}>
      <li>
        <Link
          to="/"
          className={
            props.page === "index"
              ? `${style.desktopNav} ${style.active}`
              : `${style.desktopNav}`
          }
        >
          <FontAwesomeIcon icon={faHouseUser} />
        </Link>
      </li>
      <li>
        <Link
          to="/folio"
          className={
            props.page === "folio"
              ? `${style.desktopNav} ${style.active}`
              : `${style.desktopNav}`
          }
        >
          <FontAwesomeIcon icon={faLayerGroup} />
        </Link>
      </li>
      {
        // Check for login
        data?.isLoggedIn && (
          <>
            <li>
              <Link
                to="/settings"
                className={
                  props.page === "settings"
                    ? `${style.desktopNav} ${style.active}`
                    : `${style.desktopNav}`
                }
              >
                <FontAwesomeIcon icon={faGears} />
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPowerOff}
                className={style.off}
                onClick={logoutHandler}
              />
            </li>
          </>
        )
      }
    </ul>
  );
};

export default FloatingMenu;
