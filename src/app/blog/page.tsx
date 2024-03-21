import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import { getAllPosts } from "../services/getPosts";
import { PostSearch } from "../components/PostSearch";
import { usePosts } from "../store";
import { shallow } from "zustand/shallow";

export default function Blog() {
  /* const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
*/

  return (
    <div>
      <h2>Blog page</h2>
      <PostSearch /*onSearch={setPosts}*/ />
      <Posts />
    </div>
  );
}
