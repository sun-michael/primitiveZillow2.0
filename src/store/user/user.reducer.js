import { USER_ACTION_TYPE } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  // console.log("dispatching action");
  // console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPE.SIGN_OUT_FAILED:
    case USER_ACTION_TYPE.SIGN_IN_FAILED:
    case USER_ACTION_TYPE.SIGN_UP_FAILED:
      return { ...state, error: payload };
    default:
      //return current state type object
      return state;
  }
};
