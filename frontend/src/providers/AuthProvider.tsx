import React, { useState } from "react";

export type IAuthContex = {
  userEmail: String;
  setEmail: (userEmail: string) => void;
  isLoggedIn: boolean;
  setIsLogin: (isLoggedIn: boolean) => void;
};

export const AuthContex = React.createContext<IAuthContex | null>(null);

export default function AuthProvider(props: any) {
  const [userEmail, setEmail] = useState("");
  const [isLoggedIn, setIsLogin] = useState(false);
  return (
    <AuthContex.Provider
      value={{ userEmail, setEmail, isLoggedIn, setIsLogin }}
    >
      {props.children}
    </AuthContex.Provider>
  );
}
