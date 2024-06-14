import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          const data = response.data;
          setPosts(data);
        })
        .catch(() => {
          const data = [];
          setPosts(data);
        });
    };

    fetchData();
  }, []);

  if (posts.length === 0) return <h1>Data fetching Failed</h1>;

  if (!posts)
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
        </head>
        <body>
          <h1>Data fetching Failed</h1>
        </body>
      </html>
    );

  const displayData = posts.map((post) => {
    return (
      <div className="post" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <h1>MY POSTS </h1>
        <div>{displayData}</div>
      </div>
    </>
  );
}
