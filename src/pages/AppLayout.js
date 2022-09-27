import React from "react";
import Menu from "../components/menu/Menu";
import FloatingMenu from "../components/menu/FloatingMenu";
import Dashboard from "./dashboard/Dashboard";
import Folio from "./folio/Folio";
import Settings from "./settings/Settings";

// This component holds the layout structure of the application
const AppLayout = (props) => {
  // Holds components to rendered based on APP route request
  const _page = {
    index: <Dashboard />,
    folio: <Folio />,
    settings: <Settings />,
  };
  return (
    <>
      {/* props.page tracks menu to highlight as active */}
      <Menu page={props.page} />
      <div className="d-flex">
        <FloatingMenu page={props.page} />
        {/* Render sub page components */}
        <div className="flex-fill">{_page[props.page]}</div>
      </div>
    </>
  );
};
export default AppLayout;
