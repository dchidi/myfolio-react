import React, { createContext, useState } from "react";
// Initialize context data for sharing without functions used to update the context data
const defaultData = {
  isLoggedIn: false,
  username: null,
  accessToken: null,
  refreshToken: null,
  deviceId: null,
  message: null,
};
// Persist data on browser storage
const local_storage = JSON.parse(localStorage.getItem("myfolio_auth"));

// add to initData, various functions to be exposed to other components
const initData = {
  ...defaultData, // spread the initData object
  ...local_storage, // spread any data from localstorage. If it already exist in default, update it
  updateContext: (ctx) => {}, // this function only helps for auto completion from other components. Reason for an empty return value
};

// create a global context and pass the data object or array to be shared
const AuthContext = createContext(initData);

// Create a component that will be wrapped round components that wishes to share data from the global context and explicitly export it
export function AuthContextProvider(props) {
  // useState to manage update of data in the global context. This triggers reload on any component that subscribes to it
  const [data, setData] = useState(initData);

  // This function call the setData function from useState and spread its previous and new object value to get an update view
  function updateContext(ctx) {
    setData((prev) => {
      return { ...prev, ...ctx };
    });
  }

  // create an object to be passed as value into the component provided by createContext. Exposes all functions that the other
  // components should have access to as well as properties
  const context = {
    ...data,
    updateContext: updateContext,
  };

  //   return the component created by createContext with the props that have all the exposed functions and properties of the global context.
  // Also use the props.children to allow wrapping of other components inside this component
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

// export the global context as the default
export default AuthContext;
