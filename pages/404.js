import Image from "next/image";
import Link from "next/link";

export default function error() {
  return (
    <div>
      <Link href="/">
        <Image width={1440} height={100} src="/4o4.png"></Image>
      </Link>
    </div>
  );
}
