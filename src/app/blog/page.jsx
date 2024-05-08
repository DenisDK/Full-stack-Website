import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

export default async function BlogPage() {
  //   const posts = await getData();
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
