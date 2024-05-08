import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //   const user = await getData(userId);

  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        src={styles.img ? user.img : "/noavatar.png"}
        alt="User logo"
        width={50}
        height={50}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true} // {false} | {true}
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Published</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
