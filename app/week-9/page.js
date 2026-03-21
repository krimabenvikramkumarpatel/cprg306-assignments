"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      {!user ? (
        <>
          <h1>Login</h1>
          <button onClick={handleSignIn}>Sign in with GitHub</button>
        </>
      ) : (
        <>
          <h1>Welcome</h1>
          <p>
            {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          <br /><br />
          <Link href="/week-9/shopping-list">Go to Shopping List</Link>
        </>
      )}
    </main>
  );
}