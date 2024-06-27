import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [headings, setHeadings] = useState([]);
  const [myData, setMyData] = useState(null);
  const [count, setCount] = useState(0);

  return (
    <StoreContext.Provider
      value={{
        headings,
        setHeadings,
        myData,
        setMyData,
        count,
        setCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
