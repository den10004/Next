"use client";
import { FormEventHandler, useState } from "react";
//import { getPostsBySearch } from "../services/getPosts";
import { usePosts } from "../store";

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

/*
const PostSearch = ({ onSearch }: Props) => {
    const [search, setSearch] = useState("");
  
  
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault();
      const posts = await getPostsBySearch(search);
      onSearch(posts);

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  };
*/
export { PostSearch };
