import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
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
        <span className={styles.date}>date</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          ducimus ipsam inventore nostrum? Expedita debitis suscipit corrupti
          porro? Possimus animi itaque amet accusantium nostrum quam dolorem
          assumenda velit! Exercitationem, libero.
        </p>
        <Link className={styles.link} href={`/blog/post`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
