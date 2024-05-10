import LoginForm from "@/components/loginForm/LoginForm";
import { handleGitHubLogin } from "@/lib/actions";
import { auth } from "@/lib/auth";
import React from "react";
import style from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form action={handleGitHubLogin}>
          <button className={style.github}>Logint with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
}
