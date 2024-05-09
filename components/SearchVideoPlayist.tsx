import { Playist } from "../types/SearchResults";
import Link from "next/link";
import Image from "next/image";
import VideoChapter from "./VideoChapter";
import { ListVideo } from "lucide-react";

type Props = {
  data?: Playist;
};

function SearchVideoPlayist({ data }: Props) {
  return (
    <li className="flex flex-col md:flex-row items-start gap-4">
      <Link
        href={`/playist?id=${data?.playistId}`}
        className="flex justify-center items-center relative w-full md:max-w-[500px] flex-1"
      >
        <Image
          src={`https://i.ytimg.com/vi/${data?.playistVideo?.[0]?.videoId}/hq720.jpg`}
          width={500}
          height={281}
          alt="playist_thumbnail"
          className="rounded-xl w-full max-w-full"
        />
        <div className="absolute right-2 bottom-2 bg-black rounded-md text-white py-0.5 px-1.5 text-xs flex items-center gap-2">
          <ListVideo /> <span>{data?.videoCount} videos</span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-1">
        <h2 className="text-lg line-clamp-2">{data?.title}</h2>
        <Link href={`/${data?.channelId}`}>
          <span className="text-sm text-secondary-text font-bold">
            {data?.ownerText}
          </span>
        </Link>

        <ul className="flex flex-col gap-1 my-2">
          {data?.playistVideo?.map((plystVideo) => (
            <li key={plystVideo.videoId}>
              <Link
                href={`/watch?id=${plystVideo.videoId}&list=${data.playistId}`}
                className="flex gap-2 items-center"
              >
                <span className="text-sm text-secondary-text line-clamp-1">
                  {plystVideo.title}
                </span>
                <span className="text-sm text-secondary-text whitespace-nowrap">
                  • {plystVideo.length}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default SearchVideoPlayist;
