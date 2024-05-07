import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="about img"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true} // {false} | {true}
        />
      </div>
    </div>
  );
}
