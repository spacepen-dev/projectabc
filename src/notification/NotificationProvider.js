import React, { useReducer } from "react";

export const NotificationContext = React.createContext();

export const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NEW_NOTIFICATION":
        return [...state, { ...action.payLoad }];
      case "REMOVE_EXPIRED_NOTIFICATION":
        return state.filter((element) => element.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <NotificationContext.Provider value={[state, dispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};
