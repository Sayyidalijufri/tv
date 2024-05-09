"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ChannelPin({ data }: any) {
  const [videoUrl, setVideoUrl] = useState<any>();
  const [pinVideoReadMore, setPinVideoReadMore] = useState(false);
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/video/${data?.videoId}`
      );
      const videoStreamRes = await res.json();
      setVideoUrl(
        videoStreamRes?.streamingData?.formats?.[
          videoStreamRes?.streamingData?.formats?.length - 1
        ]?.url
      );
      return videoStreamRes?.streamingData?.formats?.[
        videoStreamRes?.streamingData?.formats?.length - 1
      ]?.url;
    };
    fetchVideo();
  }, [data?.videoId]);

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <video
        src={videoUrl || ""}
        className="aspect-video rounded-xl"
        controls
        autoPlay
      ></video>
      <div className="flex flex-col gap-1">
        <h4 className="truncate font-semibold">
          {data?.title?.runs?.[0]?.text}
        </h4>
        <p className="text-[#aaa] my-4">186,104 views • 8 months ago</p>
        <p
          className={`font-medium ${
            !pinVideoReadMore && "line-clamp-5"
          } whitespace-pre-line`}
        >
          {data?.description?.runs?.map((run: any) => {
            const URL_REGEX =
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

            return run?.text.split(" ").map((text: any) =>
              URL_REGEX.test(text) ? (
                <Link key={text} href={text} className="text-sky-500">
                  {text}{" "}
                </Link>
              ) : (
                text + " "
              )
            );
          })}
        </p>
        <a
          className="font-semibold cursor-pointer mt-2"
          onClick={() => setPinVideoReadMore(!pinVideoReadMore)}
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default ChannelPin;
