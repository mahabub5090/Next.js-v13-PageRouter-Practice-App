import Link from "next/link";

export default function Post({post}){
    return (
      <div>
        {
          <div className="card m-10 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Title: {post.title}</h2>
              <p>Content: {post.content}</p>
              <div className="card-actions justify-end">
                <Link href={`./posts/${post.id}`}>
                  <button className="btn">See More</button>
                </Link>
              </div>
            </div>
          </div>
        }
      </div>
    );
}