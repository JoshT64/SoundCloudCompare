import axios from "axios";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";

const useSoundCloud = (url) => {
  const [songData, setSongData] = useState([]);
  const [songData2, setSongData2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urlParam1, setUrlParam1] = useState("");
  const [urlParam2, setUrlParam2] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [hasStateChanged, setHasStateChanged] = useState(false);
  const [hasStateChanged2, setHasStateChanged2] = useState(false);

  const onChangeInput = (number, data) => {
    if (number === 1) {
      setUrlParam1(data);
    } else if (number === 2) {
      setUrlParam2(data);
    }
  };

  useEffect(() => {
    setHasStateChanged(true);
  }, [urlParam1]);

  useEffect(() => {
    setHasStateChanged2(true);
  }, [urlParam2]);

  const searchClick = () => {
    if (urlParam1.length >= 1 && urlParam2.length >= 1) {
      const prevParam = urlParam1;
      setIsInputEmpty(false);
      if (prevParam == urlParam1) {
        axios
          .get(`${url}?q=${urlParam1}`)
          .then(({ data }) => {
            const unparsedPlaylistItems = data.split("h2 itemprop=");
            const parsedPlaylistItems = unparsedPlaylistItems.filter(
              (song) => true == song.includes("by") && !song.includes("firefox")
            );
            const splitPlaylist = parsedPlaylistItems.toString().split("href=");
            const mappedData = splitPlaylist.map((item) => {
              const splitItem = item.split("'");
              const filterItem = splitItem.filter(
                (song) => false == song.includes("h2")
              );
              return filterItem;
            });
            const foundSongs = mappedData.map((item) => {
              return item.map((newItem) => {
                return newItem;
              });
            });
            let songs = [];
            foundSongs.forEach((song) => {
              if (song.length >= 1) {
                songs.push(song);
              }
            });
            songs.map((data) => {
              const stringifiedData = data.toString();
              const slashSplit = stringifiedData.split("/");
              if (!isEmpty(slashSplit[1])) {
                const titleSplit = slashSplit[2].split('">')[0];
                setSongData((prevState) => [
                  ...prevState,
                  {
                    artist: slashSplit[1],
                    title: titleSplit,
                  },
                ]);
                setLoading(false);
              }
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }

      const prevParam2 = urlParam2;
      if (prevParam2 == urlParam2) {
        axios
          .get(`${url}?q=${urlParam2}`)
          .then(({ data }) => {
            const unparsedPlaylistItems = data.split("h2 itemprop=");
            const parsedPlaylistItems = unparsedPlaylistItems.filter(
              (song) => true == song.includes("by") && !song.includes("firefox")
            );
            const splitPlaylist = parsedPlaylistItems.toString().split("href=");
            const mappedData = splitPlaylist.map((item) => {
              const splitItem = item.split("'");
              const filterItem = splitItem.filter(
                (song) => false == song.includes("h2")
              );
              return filterItem;
            });
            const foundSongs = mappedData.map((item) => {
              return item.map((newItem) => {
                return newItem;
              });
            });
            let songs = [];
            foundSongs.forEach((song) => {
              if (song.length >= 1) {
                songs.push(song);
              }
            });
            songs.map((data) => {
              const stringifiedData = data.toString();
              const slashSplit = stringifiedData.split("/");
              if (!isEmpty(slashSplit[1])) {
                const titleSplit = slashSplit[2].split('">')[0];
                setSongData2((prevState) => [
                  ...prevState,
                  {
                    artist: slashSplit[1],
                    title: titleSplit,
                  },
                ]);
                setLoading(false);
              }
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } else {
      setIsInputEmpty(true);
      console.log("Please enter a username in both fields");
    }
  };

  return {
    songData,
    songData2,
    loading,
    onChangeInput,
    searchClick,
    isInputEmpty,
  };
};

export default useSoundCloud;
