import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function commentId() {
  const router = useRouter();
  const path = router.query.commentId;

  // console.log(path);

  const [data, setData] = useState(null);

  //  cp

  if (path != undefined && path > 0 && path <= 21) {
    // if (path > 0 && path < 101) {
    // if (path != undefined) {
    fetch(`https://jsonplaceholder.org/comments/${path}`)
      .then((response) => response.json())
      // console.log(path);
      .then((res) => {
        setData(res);
      });
  }

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
      {path >= 1 && path <= 21 ? (
        <div>
          <Head>
            {/* <title>Comment-{path}</title> */}
            {data && <title>Comment-{data.id}</title>}
          </Head>
          <div>
            <Link href="/" className="btn btn-accent m-3 ">
              Back To Home
            </Link>
          </div>
          <div>
            {data != undefined && (
              // {data && (
              <p
                className="text-3xl m-10 bg-blue-800 rounded-lg p-7"
                key={data.id}
              >
                Comment-{path}: {data.comment}
              </p>
            )}
            <Link href={"../comments"} className="btn-accent flex m-3 btn">
              Go Back
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Head>
            <title>404</title>
          </Head>
          <Link href="/">
            <Image width={1440} height={100} src="/4o4.png"></Image>
          </Link>
        </div>
      )}
    </div>
  );
}
