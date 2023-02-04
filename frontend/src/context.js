import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    user: null
  });
   return (
    <StateContext.Provider value={[state, setState]}>
      {props.children}
    </StateContext.Provider>
  );
};