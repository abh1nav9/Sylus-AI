import React, { createContext, useContext } from "react";
import run from '../config/sylusAI';

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await run(prompt);
  }

  onSent("What is ReactJS?");

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
