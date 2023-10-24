import Post from "@/Components/Post";
import Head from "next/head";
import Link from "next/link";

// done
export default function ({ posts }) {
  // console.log(posts);
  return (
    <div>
      <Head><title>Posts</title></Head>
      <div className="">
        <Link href="/" className="btn btn-accent  m-2">
          Back To Home
        </Link>
      </div>

      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
      
    </div>
  );
}

export const getStaticProps = async () => {
  const allData = await fetch("https://jsonplaceholder.org/posts");
  const data = await allData.json();
  // console.log(data);
  return {
    props: {
      posts: data,
    },
  };
};
