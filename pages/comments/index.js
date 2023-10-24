import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Comments({ comments }) {
  //   console.log(comments);
  return (
    <div>
      <Head>
        <title>Comments</title>
      </Head>
      <Link href="/" className="btn btn-accent m-3">
        Back To Home
      </Link>

      {comments.map((comment, i) => (
        <div
          className="text-3xl m-10 bg-blue-800 rounded-lg p-7"
          key={comment.id}
        >
          <p className="line-clamp-3">
            Comment-{i + 1}: {comment.comment}
          </p>

          <Link
            href={`comments/${comment.id}`}
            className="btn btn-accent capitalize flex m-2"
          >
            View Full Comment Here ...
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const allData = await fetch("https://jsonplaceholder.org/comments");
  const data = await allData.json();
  //   console.log(data);
  return {
    props: {
      comments: data,
    },
  };
};
