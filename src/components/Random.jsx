import React, { useEffect } from "react";
// import { useState } from "react";
// axios is new
// import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// TO fetch the data from env we use "process.env.jo_bhi_key_ka_name_hai"
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const { gif, loading, fetchData } = useGif();
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   // destructure of API
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  //   console.log(imageSource);
  // }

  // we use empty array here boz pehle render pr call krna hai bs
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function clickHandler() {
  //   fetchData();
  // }

  return (
    <div
      className="w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450"></img>}

      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={() => {
          fetchData();
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
