export const logoutAuthCtrl = (updateState, updateContext) => {
  const data = {
    isLoggedIn: false,
    username: null,
    accessToken: null,
    refreshToken: null,
    deviceId: null,
    message: null,
  };
  updateState(data);
  updateContext(data);
};

// TODO:: call a modal to capture user login details
export const loginAuthCtrl = (updateState, updateContext) => {
  const data = {
    isLoggedIn: true,
    username: "Ify Duru",
    accessToken: null,
    refreshToken: null,
    deviceId: null,
    message: null,
  };
  updateState(data);
  updateContext(data);
};

// TODO:: Verify login credentials and update data state accordingly. This function is passed to the modal component.
// This function can be placed in CtrlAuthentication
const verifyLogin = () => {};
