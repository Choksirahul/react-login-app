import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  // Check if the user is authenticated
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    loginWithRedirect();
    return null;
  }

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
