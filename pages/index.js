import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Body from "@/Components/Body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </main>
  );
}
