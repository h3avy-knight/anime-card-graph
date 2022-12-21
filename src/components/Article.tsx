import React, { useEffect, useState } from "react";

const Article = ({ images, title, rank, aired, rating }: any) => {
  const [click, setClick] = useState(false);
  useEffect(() => {}, [click]);

  return (
    <>
      <article
        onClick={() => {
          setClick(!click);
        }}
        className={`${
          click
            ? "w-[300px] h-[420px] bg-white rounded-lg relative overflow-hidden z-10 ease-in-out duration-300 scale-105"
            : "relative w-[200px] h-[300px] bg-white rounded-lg drop-shadow-md my-4 overflow-hidden mx-3 transition ease-in-out duration-300"
        }`}
      >
        <img
          className="w-full h-[250px] object-cover"
          src={images?.jpg?.large_image_url}
          alt=""
        />
        <h2 className="font-medium text-lg text-gray-800 text-ellipsis truncate p-4">
          {title}
        </h2>
        <div className="bg-fuchsia-400 right-0 top-0 absolute p-4">{rank}</div>
        <div className="p-3">
          <h1>Release: {aired.string.split("to")[0]}</h1>
          <h1>Lastest: {aired.to ? aired.to : "now"}</h1>
          <h1>Rating: {rating}</h1>
        </div>
      </article>
    </>
  );
};

export default Article;
