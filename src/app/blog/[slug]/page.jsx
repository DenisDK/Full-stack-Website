import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default async function SinglePostPage({ params }) {
  const { slug } = params;

  const post = await getData(slug);

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
          <h1 className={styles.title}>{post.title}</h1>
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
            <Suspense fullback={<div className="">Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>Data</span>
            </div>
          </div>
          <div className={styles.content}>{post.body}</div>
        </div>
      </div>
    </div>
  );
}
