import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faHouseUser,
  faLayerGroup,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../store/authContextAPI";
import { logoutAuthCtrl } from "../../controllers/CtrlAuthentication";
import style from "./Menu.module.css";

const FloatingMenu = (props) => {
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState(null);

  // useEffect listen to when changes occur in authCtx by any subscriber
  useEffect(() => {
    setData(authCtx);
  }, [authCtx]);

  const logoutHandler = () => {
    // call authController logout function
    logoutAuthCtrl(setData, authCtx.updateContext);
  };
  return (
    data?.isLoggedIn && (
      <ul className={`${style.floatingMenu} mt-5 mx-3 d-none d-sm-block`}>
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
      </ul>
    )
  );
};

export default FloatingMenu;
