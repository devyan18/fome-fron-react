import { useContext, useEffect, useState, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = (user) => {
    localStorage.setItem("token", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
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