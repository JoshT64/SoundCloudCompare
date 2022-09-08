import axios from "axios";
import { useEffect, useState } from "react";

const useSoundCloud = (url, authToken) => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    console.log(url);
    axios
      .get(url)
      .then(({ data }) => {
        setPlaylist(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [url]);

  return {
    playlist,
  };
};

export default useSoundCloud;
