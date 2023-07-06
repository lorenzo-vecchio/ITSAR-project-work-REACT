import React, { createContext, useState } from 'react';

const ReloadFavoritesContext = createContext();

const ReloadFavoritesProvider = ({ children }) => {
  const [reloadFavorites, setReloadFavorites] = useState(false);

  const triggerReloadFavorites = () => {
    setReloadFavorites(true);
  };

  const resetReloadFavorites = () => {
    setReloadFavorites(false);
  };

  const contextValue = {
    reloadFavorites,
    triggerReloadFavorites,
    resetReloadFavorites,
  };

  return (
    <ReloadFavoritesContext.Provider value={contextValue}>
      {children}
    </ReloadFavoritesContext.Provider>
  );
};

export { ReloadFavoritesContext, ReloadFavoritesProvider };
