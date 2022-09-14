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
        <div className="mb-4">
          <h1>SoundCloud Compare</h1>
        </div>
        <div className="text-red-400">
          <div>enter two soundcloud users</div>
          <div>click the sticky hand</div>
          <div>compare any users likes</div>
        </div>
      </header>

      <Inputs />
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div>Made with love by </div>
        <a
          className="ml-1 text-red-400 hover:text-blue-600 hover:animate-spin"
          href="https://www.linkedin.com/in/josh-toney-281585190/"
        >
          Josh
        </a>
      </footer>
    </div>
  );
};

export default Home;
