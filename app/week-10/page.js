"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleLogin() {
    await gitHubSignIn();
  }

  async function handleLogout() {
    await firebaseSignOut();
  }

  return (
    <main>
      <h1>Week 10 Assignment</h1>

      {!user ? (
        <div>
          <p>Please log in to continue</p>
          <button onClick={handleLogin}>
            Login with GitHub
          </button>
        </div>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button onClick={handleLogout}>Logout</button>

          <br /><br />

          <Link href="/week-10/shopping-list">
            Go to Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}