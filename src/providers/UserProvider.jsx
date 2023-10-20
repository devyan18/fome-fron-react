import { useContext, useEffect, useState, createContext } from "react";
import { getUserByToken } from "../services/user.service";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserByToken({token})  
        .then((user) => {
          if(!user) return 

          setUser(user)
        })
    }
  }, []);

 

  const value = {
    user,
    setUser
  };

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>
  );

}

export const useUser = () => useContext(UserContext)