'use client';

import { jwtDecode } from "jwt-decode";
import Cookies  from "js-cookie";
import { createContext, ReactNode, use, useEffect, useState } from "react";
import { User } from "@/lib/api/routes/user/user";
import { useRouter } from "next/navigation";
import { clientApi } from "@/lib/api/api";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  reloadingUser: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
  reloadingUser: () => {}
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [reloadUser, setReloadUser] = useState(false);

  const reloadingUser = () => {
    setReloadUser(true);
    setReloadUser(false);
  }

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decoded = jwtDecode<User>(token);
        setUser(decoded);
      } catch (e) {
        console.error("Erro ao decodificar token:", e);
        setUser(null);
      }
    }
  }, [reloadUser]);

  const logout = () => {
    Cookies.remove("auth_token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, reloadingUser }}>
      {children}
    </UserContext.Provider>
  );
};
