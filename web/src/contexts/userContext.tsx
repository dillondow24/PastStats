import React, { createContext, useContext, useEffect, useState } from 'react';
import { API } from '../api';
import { User } from '../model/user';



interface UserContextInterface {
    /** null means no user is logged in */
    user: User | null,
    /** true if the user is logged in */
    isAuthenticated: boolean, 
    /** function to handle logging in a user */
    handleLogin: (email: string, password: string) => Promise<void>
    /** function to handle signing up a user */
    handleSignUp: (username: string, email: string, phone: string, password: string) => Promise<void>
}


const UserContext = createContext<UserContextInterface>({
    user: null,
    isAuthenticated: false,
    handleLogin: async () => {},
    handleSignUp: async () => {}
});
export const useUserContext = () => useContext(UserContext);


export const UserContextProvider = ({children}: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if(!user){
      handleLogin('dillondow24@gmail.com ', 'password');
    }
      //TODO: remove when cognito is implemented
  }, [])
  
  const handleLogin = async (email: string, password: string) => {
      try {
        // TODO: login a user with cognito to get uid
        const uid = email
        const thisUser = await API.UserAPI.getUser(uid)
        setUser(thisUser)
      } catch (error: any) {
          throw new Error(`Error logging in: ${error}`);
      }
  }

    const handleSignUp = async (username: string, email: string, phone: string, password: string) => {
        // TODO: sign up a user with cognito to get uid
        const uid = email


        /** Check if a user with the given email already exists */
        try {
            await API.UserAPI.getUser(uid)
        } catch (error: any){ 
            if(error.message !== 'ItemNotFoundException') throw new Error(`This user already exists`)
        }
    
        /** Create a new user */
        try {
            const newUser = await API.UserAPI.createUser({
                uid, 
                username,
                email, 
                phone, 
                timestamp: new Date().valueOf()
            } as User);
            setUser(newUser)
        } catch (error: any) {
            throw new Error(`Error Signing Up: ${error}`);
        }
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