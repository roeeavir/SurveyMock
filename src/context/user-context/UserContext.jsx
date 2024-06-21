import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({children, initialValue}) => {
    return <UserContext.Provider value={initialValue}>
      {children}
  </UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext);
}