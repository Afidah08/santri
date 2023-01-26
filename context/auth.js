import React, { useContext, useState, useEffect, createContext } from "react";
import supabase from "../lib/supabase";

// create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // create state values for user data and loading
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const retriveSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      setUser(data?.session?.user ?? null);
      setLoading(false);
    };

    if (!user) {
      retriveSession();
    }

    // listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
  }, [user]);

  // create signUp, signIn, signOut functions
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    user,
    loading,
  };

  // use a provider to pass down the value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
