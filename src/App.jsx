import React from "react";
import { Routes } from "./Routes";
import { ContextProvider } from "./context";

export const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};
