import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import style from "./Settings.module.css";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import UpdatePassword from "./pages/UpdatePassword";
import { SettingsContextProvider } from "../../context/settingsContext";

const Settings = (props) => {
  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <SettingsContextProvider>
      <div className={style.settings}>
        <BreadCrumb page="Settings" />
        <div className="d-flex justify-content-center">
          <div className="col-md-offset-2 col-lg-offset-3 col-md-8 col-lg-6">
            <>
              <MDBTabs fill className="mb-3">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleFillClick("tab1")}
                    active={fillActive === "tab1"}
                  >
                    PROJECT
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleFillClick("tab2")}
                    active={fillActive === "tab2"}
                  >
                    PROFILE
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleFillClick("tab3")}
                    active={fillActive === "tab3"}
                  >
                    UPDATE PASSWORD
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={fillActive === "tab1"}>
                  <Projects />
                </MDBTabsPane>
                <MDBTabsPane show={fillActive === "tab2"}>
                  <Profile />
                </MDBTabsPane>
                <MDBTabsPane show={fillActive === "tab3"}>
                  <UpdatePassword />
                </MDBTabsPane>
              </MDBTabsContent>
            </>
          </div>
        </div>
      </div>
    </SettingsContextProvider>
  );
};

export default Settings;
