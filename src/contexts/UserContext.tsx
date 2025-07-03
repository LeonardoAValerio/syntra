import { jwtDecode } from "jwt-decode";
import Cookies  from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface User {
  name: string;
  uid: string;
  email: string;
  isCompleteInfo: boolean;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) {
      try {
        const decoded = jwtDecode<User>(token);
        setUser(decoded);
      } catch (e) {
        console.error("Erro ao decodificar token:", e);
        setUser(null);
      }
    }
  }, []);

  const logout = () => {
    Cookies.remove("auth_token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
