// @ts-nocheck
import Image from "next/image";
import useSoundCloud from "../hooks/useSoundCloud";
import HomeImage from "./homeImage";

const Inputs = () => {
  const url = `http://localhost:3000/api/hello`;

  const {
    songData,
    songData2,
    loading,
    onChangeInput,
    searchClick,
    isInputEmpty,
  } = useSoundCloud(url);

  const mappedSongs = songData.map((song, idx) => {
    return (
      <li className="w-96 m-4" key={idx}>
        <iframe
          width="100%"
          height="150"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/${song.artist}/${song.title}`}
        ></iframe>
      </li>
    );
  });

  const mappedSongs2 = songData2.map((song, idx) => {
    return (
      <li className="w-96 m-4" key={idx}>
        <iframe
          width="100%"
          height="150"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/${song.artist}/${song.title}`}
        ></iframe>
      </li>
    );
  });

  console.log(songData);

  return (
    <main className="flex w-full flex-1 flex-row items-center justify-center px-20 text-center">
      <>
        <HomeImage />
        <div>
          <input
            style={{ left: "650px" }}
            placeholder="soundcloud user 1"
            className=" fixed top-4 focus:ring-1 text-red-500 ring-red-300 focus:outline-none m-2 bg-zinc-100 border  border-red-200"
            type="text"
            required
            onChange={(e) => onChangeInput(1, e.target.value)}
          />
          {isInputEmpty && (
            <div
              className="p-4 mb-4 relative bottom-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800  animate-pulse "
              role="alert"
            >
              <span class="font-medium">haha hi..</span> Please enter both
              usernames before submitting
            </div>
          )}
          <ul>{mappedSongs}</ul>
        </div>
        <div
          onClick={searchClick}
          className="fixed top-2 border border-red-500 bg-red-200 hover:bg-red-400 hover:cursor-pointer transition-colors ease-in-out"
        >
          <img src={"/sticky-toy.png"} width="64px" height="64px" />
        </div>
        <div>
          <input
            style={{ right: "650px" }}
            placeholder="soundcloud user 2"
            className=" fixed top-4 focus:ring-1 text-red-500 ring-red-400 focus:outline-none m-2 bg-zinc-100 border  border-red-200"
            type="text"
            onChange={(e) => onChangeInput(2, e.target.value)}
          />
          <ul>{mappedSongs2}</ul>
        </div>
      </>
    </main>
  );
};

export default Inputs;
