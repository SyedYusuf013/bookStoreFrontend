import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Users"));
    const token = localStorage.getItem("Token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const expiry = decodedToken.exp * 1000;

        if (Date.now() >= expiry) {
          setAuthUser(null);
          setAuthToken(null);
          localStorage.removeItem("Users");
          localStorage.removeItem("Token");
          setLoading(false);
        } else {
          setAuthUser(user);
          setAuthToken(token);

          const timeout = setTimeout(() => {
            setAuthUser(null);
            setAuthToken(null);
            localStorage.removeItem("Users");
            localStorage.removeItem("Token");
            toast.error("Session expired. Please log in again.");
          }, expiry - Date.now());

          setLoading(false);
          return () => clearTimeout(timeout);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setAuthUser(null);
        setAuthToken(null);
        localStorage.removeItem("Users");
        localStorage.removeItem("Token");
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        authToken,
        setAuthToken,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
