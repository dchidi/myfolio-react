import React, { useState } from "react";

const initialState = {
  profile_position: 1,
  profile_current_page: "BIO PAGE",
  updateContext: () => {},
};

const SettingsContext = React.createContext();

export const SettingsContextProvider = (props) => {
  const [state, setState] = useState(initialState);

  const updateContext = (data) => {
    setState((prev) => {
      return { ...prev, ...data };
    });
  };

  const context = {
    ...state,
    updateContext: updateContext,
  };

  return (
    <SettingsContext.Provider value={context}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
