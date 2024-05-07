import React from "react";
import styles from "./links.module.css";
import { NavLink } from "./navLink/NavLink";

export const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink link={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink link={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};
