import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../model/user';



interface UserContextInterface {
    /** null means no user is logged in */
    user: User | null,
    /** true if the user is logged in */
    isAuthenticated: boolean, 
    /** function to handle logging in a user */
    handleLogin: (email: string, password: string) => void
    /** function to handle signing up a user */
    handleSignUp: (firstName: string, lastName: string, email: string, phone: string, password: string) => void
}


const UserContext = createContext<UserContextInterface>({
    user: null,
    isAuthenticated: false,
    handleLogin: () => {},
    handleSignUp: () => {}
});
export const useUserContext = () => useContext(UserContext);


export const UserContextProvider = ({children}: any) => {
  const [user, setUser] = useState<User | null>(null);

  
  const handleLogin = (email: string, password: string) => {
      console.log('handleLogin:', email, password);
  }

  const handleSignUp = (firstName: string, lastName: string, email: string, phone: string, password: string) => {
      console.log('handleSignUp:', firstName, lastName, email, phone, password);
  }

  return (
    <UserContext.Provider value={{
        user,
        isAuthenticated: user !== null,
        handleLogin,
        handleSignUp
        }}>
      {children}
    </UserContext.Provider>
  );
};