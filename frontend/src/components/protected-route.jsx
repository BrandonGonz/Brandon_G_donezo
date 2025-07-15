import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../client";


// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  // State to track the current user session
  const [session, setSession] = useState();
  // State to verify session check has completed
  const [isSessionChecked, setIsSessionChecked] = useState(false);

  useEffect(() => {
    // Get session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session ?? null);
      setIsSessionChecked(true);
    });

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session ?? null);
    });

    // Cleanup listener
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // If session is still being checked, show loading
  if (!isSessionChecked) {
    return <div>Loading...</div>;
  }

  // If session exists, render children; otherwise redirect
  return <>{session ? children : <Navigate to="/login" />}</>;
}
