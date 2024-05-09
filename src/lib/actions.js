"use server";
import { signIn, signOut } from "./auth";

export const handleGitHubLogin = async (e) => {
  await signIn("github");
};

export const handleLogout = async (e) => {
  await signOut();
};
