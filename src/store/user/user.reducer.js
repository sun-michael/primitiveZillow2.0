import { USER_ACTION_TYPE } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log("dispatching action");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      //return current state type object
      return state;
  }
};
