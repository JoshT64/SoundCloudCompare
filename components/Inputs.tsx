import Image from "next/image";
import useSoundCloud from "../hooks/useSoundCloud";

const Inputs = () => {
  const { playlist } = useSoundCloud(
    "https://api-v2.soundcloud.com/users/112033524/track_likes?client_id=AenPS3DvwMPglshqFVxZuLGoWII80DPV&limit=24&offset=0&linked_partitioning=1&app_version=1662452281&app_locale=en",
    "2-293621-112033524-m7uOJEOExn74pH"
  );

  console.log(playlist);

  return (
    <main className="flex w-full flex-1 flex-row items-center justify-center px-20 text-center">
      <input
        placeholder="soundcloud playlist 1"
        className=" focus:ring-1 text-red-500 ring-red-300 focus:outline-none m-2 bg-zinc-100 border  border-red-200"
        type="text"
      />
      <Image
        className="w-24 hover:cursor-pointer border border-gray-400 bg-gray-200 hover:bg-gray-300"
        src="/repeat.svg"
        width={"48px"}
        height={"26px"}
      />
      <input
        placeholder="soundcloud playlist 2"
        className="text-red-500 m-2 focus:ring-1 ring-red-300 focus:outline-none bg-zinc-100 border  border-red-200"
        type="text"
      />
    </main>
  );
};

export default Inputs;
