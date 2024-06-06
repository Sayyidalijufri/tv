import Button from "@/components/Button";
import { DividerVerticalIcon } from "@radix-ui/react-icons";
import {
  Download,
  Forward,
  ListVideo,
  Share,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SecondaryResult {
  compactVideoRenderer?: {
    videoId: string;
    thumbnail: {
      thumbnails: {
        url: string;
        width: number;
        height: number;
      }[];
    };
    title: {
      simpleText: string;
    };
    lengthText: {
      simpleText: string;
    };
    shortViewCountText: {
      accessibility: {
        accessibilityData: {
          label: string;
        };
      };
    };
    publishedTimeText: {
      simpleText: string;
    };
    longBylineText: {
      runs: {
        text: string;
        navigationEndpoint: {
          browseEndpoint: {
            browseId: string;
          };
        };
      }[];
    };
    channelThumbnail: {
      thumbnails: {
        url: string;
      }[];
    };
  };
}

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Page({ searchParams }: Props) {
  const getVideoInfo = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/video/${searchParams.id}`
    );
    const data = await res.json();
    return data;
  };
  const getRelatedVideo = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/relatedVideo/${searchParams.id}`
    );
    const data = await res.json();
    return data;
  };
  const getVideoDetail = async () => {
    const res = await fetch(
      `https://jamali-tv-backend.vercel.app/video/${searchParams.id}`
    );
    const data = await res.json();
    return data;
  };
  const data = await Promise.all([
    await getVideoInfo(),
    await getRelatedVideo(),
    await getVideoDetail(),
  ]);

  return (
    <div className="px-8 pb-4 w-full overflow-x-hidden max-w-7xl md:grid gap-3 grid-cols-[1fr_400px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <video
            src={
              data[0]?.streamingData?.formats?.[
                data[0]?.streamingData?.formats?.length - 1
              ]?.url
            }
            className="aspect-video rounded-xl"
            controls
            autoPlay
          />
          <h1 className="text-xl font-semibold">
            {data[0]?.videoDetails?.title}
          </h1>
          <div className="flex flex-col items-between justify-start gap-3">
            <div className="flex items-center gap-2">
              <Image
                width={40}
                height={40}
                alt="channel_avatar"
                src={
                  data[1]?.contents?.twoColumnWatchNextResults?.results?.results
                    ?.contents?.[1]?.videoSecondaryInfoRenderer?.owner
                    ?.videoOwnerRenderer?.thumbnail?.thumbnails?.[0]?.url
                }
              />
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <h2 className="font-semibold">
                    {data[1]?.contents?.twoColumnWatchNextResults?.results?.results?.contents?.[1]?.videoSecondaryInfoRenderer?.owner?.videoOwnerRenderer?.title?.runs?.[0]?.text}
                  </h2>
                  <span className="text-sm text-secondary-text">
                    {data[1]?.contents?.twoColumnWatchNextResults?.results?.results?.contents?.[1]?.videoSecondaryInfoRenderer?.owner?.videoOwnerRenderer?.subscriberCountText?.simpleText}
                  </span>
                </div>
                <Button variant="dark" className="text-sm px-4 rounded-full">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant={"secondVariant"}
                className="bg-gray-100 flex rounded-full divide-x-2 divide-secondary-hover p-0"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-l-full hover:bg-secondary-hover transition-all">
                  <ThumbsUp className="size-5" />
                  <span className="font-semibold text-sm">142</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-r-full hover:bg-secondary-hover transition-all">
                  <ThumbsDown className="size-5" />
                  <span className="font-semibold text-sm">142</span>
                </div>
              </Button>
              <Button
                variant={"secondVariant"}
                className="bg-gray-100 flex rounded-full px-4 gap-2"
              >
                <Forward className="size-5" />
                <span className="text-sm font-semibold">Share</span>
              </Button>
              <Button
                variant={"secondVariant"}
                className="bg-gray-100 flex rounded-full px-4 gap-2"
              >
                <Download className="size-5" />
                <span className="text-sm font-semibold">Download</span>
              </Button>
              <Button
                variant={"secondVariant"}
                className="bg-gray-100 flex rounded-full px-4 gap-2"
              >
                <ListVideo className="size-5" />
                <span className="text-sm font-semibold">Save</span>
              </Button>
            </div>
            <p className="whitespace-pre-line">{data[2].description}</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-6 mt-10">
        {data[1]?.contents?.twoColumnWatchNextResults?.secondaryResults?.secondaryResults?.results?.map(
          (result: SecondaryResult, index) => {
            const video = result?.compactVideoRenderer;
            if (!video) return null;

            return (
              <li
                key={video.videoId}
                className="flex flex-col md:flex-row items-start gap-4"
              >
                <Link
                  href={`/watch?id=${video.videoId}`}
                  className="flex justify-center items-center relative w-full md:max-w-[500px] flex-1"
                >
                  <Image
                    src={
                      video?.thumbnail?.thumbnails[1]?.url ||
                      video?.thumbnail?.thumbnails[0]?.url
                    }
                    width={video?.thumbnail?.thumbnails[1]?.width || 336}
                    height={video?.thumbnail?.thumbnails[1]?.height || 188}
                    alt="video_thumbnail"
                    className="rounded-xl w-full max-w-full"
                  />
                  <div className="absolute right-2 bottom-2 bg-black rounded-md text-white py-0.5 px-1.5 text-xs">
                    {video?.lengthText?.simpleText}
                  </div>
                </Link>
                <div className="flex flex-1 flex-col gap-1">
                  <h2 className="text-lg line-clamp-2">
                    {video?.title?.simpleText}
</div>
</Link>
<div className="flex flex-1 flex-col gap-1">
<h2 className="text-lg line-clamp-2">
{video?.title?.simpleText}
</h2>
<span className="text-sm text-secondary-text">
{video?.shortViewCountText?.accessibility
?.accessibilityData?.label}{" "}
• {video?.publishedTimeText?.simpleText}
</span>
<Link
href={/channel/${video?.longBylineText?.runs[0]?.navigationEndpoint?.browseEndpoint?.browseId}}
>
<div className="flex items-center gap-2 my-2">
<Image
                     src={video?.channelThumbnail?.thumbnails[0]?.url}
                     width={24}
                     height={24}
                     alt="channel_avatar"
                     className="rounded-full"
                   />
<span className="text-sm text-secondary-text line-clamp-1">
{video?.longBylineText?.runs[0]?.text}
</span>
</div>
</Link>
</div>
</li>
);
}
)}
</ul>
</div>
);
}
export default Page;
