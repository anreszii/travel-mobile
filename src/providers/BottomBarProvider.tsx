import React, { createContext, useState } from 'react';

const BottomBarContext = createContext<{
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isVisible: true,
  setIsVisible: () => {},
});

interface IBottomBarProvider {
  children: React.ReactNode;
}

const BottomBarProvider: React.FC<IBottomBarProvider> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <BottomBarContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </BottomBarContext.Provider>
  );
};

export { BottomBarProvider, BottomBarContext };
