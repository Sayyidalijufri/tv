import Button from "@/components/Button";
import ChannelContent from "@/components/ChannelContent";
import ChannelPin from "@/components/ChannelPin";
import Image from "next/image";
import Link from "next/link";

async function Page({ params }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/channel/${params.channelID}`
  );
  const data = await res.json();
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex justify-center w-full flex-col gap-7">
        <div
          className={`w-full rounded-xl h-[210px] bg-cover bg-no-repeat bg-center`}
          style={{
            backgroundImage: `url('${data?.header?.c4TabbedHeaderRenderer?.banner?.thumbnails?.[3]?.url}')`,
          }}
        />

        <div className="grid grid-cols-[160px_1fr] max-w-7xl gap-8 justify-start items-center w-full">
          <Image
            alt="channel_avatar"
            width={160}
            height={160}
            src={
              data?.header?.c4TabbedHeaderRenderer?.avatar?.thumbnails?.[2]?.url
            }
            className="rounded-full"
          />
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-bold text-wrap">
              {data?.header?.c4TabbedHeaderRenderer?.title}
            </p>
            <p className="text-[#aaa]">
              {
                data?.header?.c4TabbedHeaderRenderer?.channelHandleText
                  ?.runs?.[0]?.text
              }
              ・
              {
                data?.header?.c4TabbedHeaderRenderer?.subscriberCountText
                  ?.accessibility?.accessibilityData?.label
              }
              ・
              {
                data?.header?.c4TabbedHeaderRenderer?.videosCountText?.runs?.[0]
                  ?.text
              }{" "}
              videos
            </p>
            <p className="line-clamp-1 text-[#aaa]">
              {data?.header?.c4TabbedHeaderRenderer?.tagline
                ?.channelTaglineRenderer?.content +
                data?.header?.c4TabbedHeaderRenderer?.tagline
                  ?.channelTaglineRenderer?.moreLabel}
            </p>
            <p className="flex gap-1">
              <a
                href="https://iqracartoon.com/"
                target="_blank"
                className="text-blue-400"
              >
                {
                  data?.header?.c4TabbedHeaderRenderer?.headerLinks
                    ?.channelHeaderLinksViewModel?.firstLink?.content
                }
              </a>
              {
                data?.header?.c4TabbedHeaderRenderer?.headerLinks
                  ?.channelHeaderLinksViewModel?.more?.content
              }
            </p>
            <Button variant={"dark"} className="w-fit rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <ul className="flex gap-6 border-b-2 border-secondary sticky top-0 bg-white z-50">
        {data?.contents?.twoColumnBrowseResultsRenderer?.tabs?.map(
          (tab: any, index: number) => {
            if (tab?.tabRenderer) {
              return (
                <Link
                  href={
                    tab?.tabRenderer?.title === "Home"
                      ? `/channel/${data?.header?.c4TabbedHeaderRenderer?.channelId}`
                      : `/channel/${
                          data?.header?.c4TabbedHeaderRenderer?.channelId
                        }/${tab?.tabRenderer?.title?.toLowerCase() || ""}`
                  }
                  key={index}
                >
                  <li className="pb-3 cursor-pointer">
                    {tab?.tabRenderer?.title}
                  </li>
                </Link>
              );
            }
            return null;
          }
        )}
      </ul>
      {data?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.sectionListRenderer?.contents.map(
        (list: any, index: number) => {
          if (
            list?.itemSectionRenderer?.contents?.[0]?.channelVideoPlayerRenderer
          ) {
            return (
              <ChannelPin
                data={
                  list?.itemSectionRenderer?.contents?.[0]
                    ?.channelVideoPlayerRenderer
                }
                key={index}
              />
            );
          }
          if (list?.itemSectionRenderer?.contents?.[0]?.shelfRenderer) {
            return (
              <ChannelContent
                data={list?.itemSectionRenderer?.contents?.[0]?.shelfRenderer}
                key={index}
              />
            );
          }
          return null;
        }
      )}
    </div>
  );
}

export default Page;
