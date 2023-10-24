import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function commentId() {
  const router = useRouter();
  const path = router.query.commentId;

  const [data, setData] = useState(null);

  //  cp

  if (path != undefined &&path>0 && path<101) {
    fetch(`https://jsonplaceholder.org/comments/${path}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }

  //   console.log(data);

  return (
    <div>
   {
   (path>=0 && path<101)? (<div>
    <div>
        <Link href="/" className="btn btn-accent m-3 ">
          Back To Home
        </Link>
      </div>
      <div>
        {data != undefined && (
          <p className="text-3xl m-10 bg-blue-800 rounded-lg p-7" key={data.id}>
            Comment-{path}: {data.comment}
          </p>
        )}
        <Link href={"../comments"} className="btn-accent flex m-3 btn">
          Go Back
        </Link>
      </div> 
   </div>):
   (<div>
      <Link href="/">
        <Image width={1440} height={100} src="/4o4.png"></Image>
      </Link>
    </div>)
      }
    </div>
  );
}


// return (
//   <div>
//     {(path > 0 && path <= 101) ? (
//       <div>
//         <Link href="/" className="btn btn-accent m-3">
//           Back To Home
//         </Link>
//         {data !== undefined && (
//           <p className="text-3xl m-10 bg-blue-800 rounded-lg p-7" key={data.id}>
//             Comment-{path}: {data.comment}
//           </p>
//         )}
//         <Link href="../comments" className="btn-accent flex m-3 btn">
//           Go Back
//         </Link>
//       </div>
//     ) : (
//       <div>
//         <Link href="/">
//           <Image width={1440} height={100} src="/4o4.png" />
//         </Link>
//       </div>
//     )}
//   </div>
// );
