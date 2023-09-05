import React, {useState, createContext} from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [splashComplete, setSplashComplete] = useState(false);
  const [currentSelected, setCurrentSelected] = useState('todo');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const value = {
    splashComplete,
    setSplashComplete,
    currentSelected,
    setCurrentSelected,
    isUserLoggedIn,
    setIsUserLoggedIn,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
