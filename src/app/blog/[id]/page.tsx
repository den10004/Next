import type { Metadata } from "next";

async function getPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPost(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const posts = await getPost(id);
  return (
    <>
      <span>{posts.title}</span>
      <span> {posts.body}</span>
    </>
  );
}
