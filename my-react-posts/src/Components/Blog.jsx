import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          const data = response.data;
          setPosts(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (posts.length === 0) return <h1>Loading...</h1>;

  const displayData = posts.map((post) => {
    return (
      <div className="post" key={post.id}>
        <h3>
          {post.id}. {post.title}
        </h3>
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
