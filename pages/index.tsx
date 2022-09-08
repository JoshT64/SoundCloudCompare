import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Inputs from "../components/Inputs";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>SoundCloud Compare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col mr-auto pl-1.5">
        <div>
          <h1>SoundCloud Compare</h1>
        </div>
        <div>Settings</div>
      </header>

      <Inputs />
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div>Made with love by </div>
        <a
          className="ml-1 text-blue-600 hover:text-blue-800 hover:animate-spin"
          href="https://www.linkedin.com/in/josh-toney-281585190/"
        >
          Josh
        </a>
      </footer>
    </div>
  );
};

export default Home;
