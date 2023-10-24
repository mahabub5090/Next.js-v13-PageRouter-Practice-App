import Post from "@/Components/Post";
import Link from "next/link";

// done
export default function ({ posts }) {
  return (
    <div>
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
  return {
    props: {
      posts: data,
    },
  };
};
