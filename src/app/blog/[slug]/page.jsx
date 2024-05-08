import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

export default function SinglePostPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20501721/pexels-photo-20501721.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="post img"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true} // {false} | {true}
            className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image
              src="/noavatar.png"
              alt="User logo"
              width={50}
              height={50}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true} // {false} | {true}
              className={styles.avatar}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>User Name</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>Data</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et a,
            facere assumenda corrupti aliquid nam similique adipisci eaque
            tempore amet nisi est possimus aliquam expedita dicta. Repudiandae
            natus minus eos?
          </div>
        </div>
      </div>
    </div>
  );
}
