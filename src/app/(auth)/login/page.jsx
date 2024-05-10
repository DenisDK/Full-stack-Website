import { handleGitHubLogin, login } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";

export default async function LoginPage() {
  return (
    <div>
      <form action={handleGitHubLogin}>
        <button>Logint with GitHub</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="User Name" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with Credentials</button>
      </form>
    </div>
  );
}
