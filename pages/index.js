import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Body from "@/Components/Body";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </main>
  );
}
