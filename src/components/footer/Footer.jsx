import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>DenisDk</div>
      <div className={styles.text}>
        DenisDk creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};
