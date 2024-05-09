import { Video } from "../types/SearchResults";
import Link from "next/link";
import Image from "next/image";
import VideoChapter from "./VideoChapter";

type Props = {
  data?: Video;
};

function SearchVideo({ data }: Props) {
  return (
    <li className="flex flex-col md:flex-row items-start gap-4">
      <Link
        href={`/watch?id=${data?.videoId}`}
        className="flex justify-center items-center relative w-full md:max-w-[500px] flex-1"
      >
        <Image
          src={`https://i.ytimg.com/vi/${data?.videoId}/hq720.jpg`}
          width={500}
          height={281}
          alt="video_thumbnail"
          className="rounded-xl w-full max-w-full"
        />
        <div className="absolute right-2 bottom-2 bg-black rounded-md text-white py-0.5 px-1.5 text-xs">
          {data?.durationTimeText}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-1">
        <h2 className="text-lg line-clamp-2">{data?.title}</h2>
        <span className="text-sm text-secondary-text">
          {data?.viewCount} • {data?.publishedTimeText}
        </span>
        <Link href={`/channel/${data?.channelId}`}>
          <div className="flex items-center gap-2 my-2">
            <Image
              src={data?.channelAvatar as string}
              width={24}
              height={24}
              alt="channel_avatar"
              className="rounded-full"
            />
            <span className="text-sm text-secondary-text line-clamp-1">
              {data?.ownerText}
            </span>
          </div>
        </Link>
        <p className="text-sm text-secondary-text line-clamp-2">
          {data?.videoDescription?.map((description) => {
            if (description.bold) {
              return (
                <span className="font-semibold" key={description.text}>
                  {description.text}
                </span>
              );
            }
            return description.text;
          })}
        </p>
        <ul className="flex items-center gap-2 my-2">
          {data?.badges?.map((badge) => (
            <li
              key={badge}
              className="text-sm px-1.5 bg-secondary text-secondary-text font-medium"
            >
              {badge}
            </li>
          ))}
        </ul>
        {data?.chapters?.title && <VideoChapter data={data.chapters} />}
      </div>
    </li>
  );
}

export default SearchVideo;
