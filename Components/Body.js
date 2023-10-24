import { useRouter } from "next/router";
import styles from "../styles/Body.module.css";
export default function Body() {
  const router = useRouter();
  const handle = (path) => {
    router.push(path);
  };
  return (
    <div>
      <div className={styles.body}>
        <p onClick={() => handle("/posts")} className="btn btn-accent m-1">
          Posts Here
        </p>
        <p onClick={() => handle("/comments")} className="btn btn-accent m-1">
          Comments Here
        </p>
      </div>
    </div>
  );
}
