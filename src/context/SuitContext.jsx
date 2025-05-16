// src/context/SuitContext.js
import { createContext, useContext } from "react";
import { suits, categories, pretStyles, designerBrands } from "../data/suits";

const SuitContext = createContext();

export const SuitProvider = ({ children }) => {
  return (
    <SuitContext.Provider value={{ suits, categories, pretStyles, designerBrands }}>
      {children}
    </SuitContext.Provider>
  );
};

export const useSuits = () => useContext(SuitContext);
