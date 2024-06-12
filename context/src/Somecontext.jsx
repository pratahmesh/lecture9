import React, { createContext, useContext } from 'react';

// Step 1: Create a context
export const MyContext = createContext();

// Step 2: Create a provider component
export const MyProvider = ({ children }) => {
  // State or data to be shared
  const sharedData = 'Hello from Context!';

  return (
    <MyContext.Provider value={sharedData}>
      {children}
    </MyContext.Provider>
  );
};


