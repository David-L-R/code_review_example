import users from "../data/users.json";
import posts from "../data/posts.json";
import { useState, useEffect } from "react";

export const Posts = () => {
  const [fullposts, setFullPosts] = useState([]);

  useEffect(() => {
    const combination = (x, y) => {
      const postsUsers = x.map((x) => {
        const user = y.find((user) => user.id === x.userId);

        if (!user) return { ...x };
        return {
          ...x,
          user: {
            name: user?.name ? user?.name : "no name",
          },
        };
      });

      return postsUsers;
    };

    setFullPosts(combination(posts, users));
  }, []);

  useEffect(() => {
    console.log(fullposts);
  }, [fullposts]);

  if (fullposts.length === 0) return <div>Loading posts...</div>;

  return (
    <div>
      {fullposts.map((post) => (
        <div>
          <div>{post.user.name}</div>
        </div>
      ))}
    </div>
  );
};
