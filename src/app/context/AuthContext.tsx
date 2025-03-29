"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useToast } from "./ToastProvider";
import adminFetch from "../axiosBase/interceptors";
import { IUser } from "../type/IUser";
import { IDoctor } from "../type/IDoctor";

type UserType = IUser | IDoctor | null;

interface AuthContextType {
  user: UserType; // user can be either a User object or null
  setUser: React.Dispatch<React.SetStateAction<UserType>>; // setUser function type
  error: string | null; // error can be either a string or null
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const toast = useToast();
  const role = localStorage.getItem("role"); // get role from local storage, default to "user"

  const [user, setUser] = useState<UserType>(null); // user state, initially null
  const [error, setError] = useState<string | null>(null); // error state, initially null
  const fetchProfile = async () => {
    try {
      if (user) return;
      const res = await adminFetch("/accounts/profile");
      const userData = res.data;
      if (role === "patient") {
        setUser(userData as IUser);
      } else if (role === "doctor") {
        setUser(userData as IDoctor);
      }
    } catch (error: any) {
      if (error) {
        setError(error.response.data.msg || error.message);
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ user, setUser, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
