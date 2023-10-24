import Post from "@/Components/Post";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function postId({ post }) {
  const router = useRouter();

  const handle = (path) => {
    router.push(path);
  };

  return (
    <div>
      <Head>
        <title>Post-{post.id}</title>
      </Head>
      <Link href="/" className="btn btn-accent m-2 ">
        Back To Home
      </Link>
      {
        <div className="card m-10 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Title: {post.title}</h2>
            <p>Content: {post.content}</p>

            {/* <Link href={"/posts"} className="btn-accent btn">
              Go Back
            </Link> */}

            <button
              onClick={() => handle("/posts")}
              type="button"
              className=" btn-accent btn"
            >
              Go Back
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params); //console in cmd

  const allData = await fetch(
    `https://jsonplaceholder.org/posts/${params.postId}`
  );

  const data = await allData.json();
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const allData = await fetch("https://jsonplaceholder.org/posts");
  const data = await allData.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
