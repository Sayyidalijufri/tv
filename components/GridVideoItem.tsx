"use client";
import { formatDuration } from "@/utils/formatDuration";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

function GridVideoItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: Props) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <Link href={`/watch?id=${id}`} className="relative aspect-video">
        <Image
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radious] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }`}
          alt="video_image"
          sizes="100vw"
          width={0}
          height={0}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm p-0.5 rounded">
          {formatDuration(duration)}
        </div>
        <video
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
          className={`${
            isVideoPlaying ? "opacity-100" : "opacity-0"
          } block h-full object-cover absolute inset-0 transition-opacity duration-200 delay-200`}
        />
      </Link>
      <div className="flex gap-2">
        <Link
          href={`/@${channel.id}`}
          className="flex-shrink-0 hidden md:block"
        >
          <Image
            className="w-12 h-12 rounded-full"
            src={channel.profileUrl}
            alt="channel_image"
            width={48}
            height={48}
          />
        </Link>
        <div className="flex flex-col gap-1">
          <Link href={`/watch?id=${id}`} className="font-bold line-clamp-2">
            {title}
          </Link>
          <div className="flex gap-2">
            <Link href={`/@${channel.id}`} className="flex-shrink-0 md:hidden">
              <Image
                className="w-9 h-9 rounded-full"
                src={channel.profileUrl}
                alt="channel_image"
                width={36}
                height={36}
              />
            </Link>
            <div className="flex flex-col">
              <Link
                href={`/@${channel.id}`}
                className="text-secondary-text line-clamp-1 text-sm"
              >
                {channel.name}
              </Link>
              <div className="text-secondary-text text-sm">
                {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridVideoItem;
