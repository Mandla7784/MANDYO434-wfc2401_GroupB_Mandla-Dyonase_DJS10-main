import React from "react";
export default function Blog() {
  //   //
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const displayData = posts.map((post) => {
    return (
      <div className="post" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  });
  console.log(posts);

  return (
    <>
      <div className="container">
        <h1>MY POSTS </h1>
        <div>{displayData}</div>
      </div>
    </>
  );
}

/**
 * @returns {JSX.Element}
 */
