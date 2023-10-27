import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function cmntId({ data }) {
  const router = useRouter();
  const path = router.query.cmntId;

  // // console.log(path);

  // const [data, setData] = useState(null);

  // //  cp

  // // if (path != undefined && path > 0 && path <= 21)
  // {
  //   // if (path > 0 && path < 101) {
  //   // if (path != undefined) {
  //   fetch(`https://jsonplaceholder.org/comments/${path}`)
  //     .then((response) => response.json())
  //     // console.log(path)
  //     .then((res) => {
  //       setData(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       setData(null);
  //     });
  // }

  // useEffect(() => {
  //   if (path != undefined && path > 0 && path < 21) {
  //     // if (path > 0 && path < 101) {
  //     // if (path != undefined) {
  //     fetch(`https://jsonplaceholder.org/comments/${path}`)
  //       .then((response) => response.json())
  //       // console.log(path);
  //       .then((res) => {
  //         setData(res);
  //       });
  //   }
  // }, [data]);

  //   console.log(data);

  return (
    <div>
      {
        <div>
          <Head>
            {/* <title>Comment-{path}</title> */}
            {data && <title>Comment-{data?.id}</title>}
          </Head>
          <div>
            <Link href="/" className="btn btn-accent m-3 ">
              Back To Home
            </Link>
          </div>
          <div>
            {/* {data && ( */}
            {/* {data != undefined && ( */}
            <p
              className="text-3xl m-10 bg-blue-800 rounded-lg p-7"
              // key={data.id}
              key={data?.id}
            >
              {/* Comment-{path}: {data.comment} */}
              Comment-{path}: {data?.comment}
            </p>
            {/*  )} */}
            <Link href={"../comments"} className="btn-accent flex m-3 btn">
              Go Back
            </Link>
          </div>
        </div>
      }
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const allData = await fetch(
    `https://jsonplaceholder.org/comments/${params.cmntId}`
  );
  const comment = await allData.json();
  return {
    props: {
      data: comment,
    },
  };
};

export const getStaticPaths = async () => {
  const allData = await fetch("https://jsonplaceholder.org/comments/");
  const data = await allData.json();
  const paths = data.map((data) => {
    return {
      params: {
        cmntId: `${data.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
