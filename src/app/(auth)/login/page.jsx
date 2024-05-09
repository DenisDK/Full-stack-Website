import { handleGitHubLogin } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";

export default async function LoginPage() {
  return (
    <div>
      <form action={handleGitHubLogin}>
        <button>Logint with GitHub</button>
      </form>
    </div>
  );
}
