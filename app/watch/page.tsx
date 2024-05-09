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
  const data = await Promise.all([
    await getVideoInfo(),
    await getRelatedVideo(),
  ]);
  return (
    <div className="px-8 pb-4 w-full overflow-x-hidden max-w-7xl grid-cols-[1fr_400px]">
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
          <div className="flex items-start justify-between">
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
                    {
                      data[1]?.contents?.twoColumnWatchNextResults?.results
                        ?.results?.contents?.[1]?.videoSecondaryInfoRenderer
                        ?.owner?.videoOwnerRenderer?.title?.runs?.[0]?.text
                    }
                  </h2>
                  <span className="text-sm text-secondary-text">
                    {
                      data[1]?.contents?.twoColumnWatchNextResults?.results
                        ?.results?.contents?.[1]?.videoSecondaryInfoRenderer
                        ?.owner?.videoOwnerRenderer?.subscriberCountText
                        ?.simpleText
                    }
                  </span>
                </div>
                <Button variant="dark" className="text-sm px-4 rounded-full">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
