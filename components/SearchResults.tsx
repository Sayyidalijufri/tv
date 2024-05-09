"use client";
import { SearchResults, SearchResult } from "@/types/SearchResults";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import SearchVideo from "./SearchVideo";
import SearchVideoPlayist from "./SearchVideoPlayist";

type Props = {
  searchData?: SearchResults;
};

function SearchResultLists({ searchData }: Props) {
  const inifiniteScrollRef = useRef<HTMLDivElement>(null);
  const [searchResultsData, setSearchResultsData] = useState<
    SearchResult[] | undefined
  >(searchData?.searchResults);
  const [searchContinuation, setSearchContinuation] = useState<
    string | undefined
  >(searchData?.continuation);
  const fetchMore = useCallback(async () => {
    if (!setSearchContinuation) return;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/searchResultsContinuation/${searchContinuation}`
    );
    const data: SearchResults = await res.json();
    setSearchContinuation(data?.continuation);
    let newData = [...searchResultsData!, ...data.searchResults!];
    setSearchResultsData(newData);
  }, [searchContinuation, searchResultsData]);

  useEffect(() => {
    if (!inifiniteScrollRef.current) return;
    const element = inifiniteScrollRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchMore();
      }
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [fetchMore]);
  return (
    <ul className="flex flex-col my-4 gap-4 w-full">
      {searchResultsData?.map((list) => {
        if (list.channel) {
          return (
            <Link
              href={`/channel/${list.channel.channelId}`}
              key={list.channel.channelUsername}
              className="w-full"
            >
              <li className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                <div className="flex md:justify-center items-center w-full md:max-w-[500px]">
                  <Image
                    src={list.channel.channelAvatar as string}
                    width={136}
                    height={136}
                    alt="channel_image"
                  />
                </div>
                <div className="flex items-center gap-3 w-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <h2 className="text-lg line-clamp-2">
                      {list.channel.title}
                    </h2>
                    <span className="text-sm text-secondary-text">
                      {list.channel.channelUsername} •{" "}
                      {list.channel.subscriberCount}
                    </span>
                    <p className="text-sm text-secondary-text line-clamp-2">
                      {list.channel.channelDescription?.map((description) => {
                        if (description.bold) {
                          return (
                            <span
                              className="font-semibold"
                              key={description.text}
                            >
                              {description.text}
                            </span>
                          );
                        }
                        return description.text;
                      })}
                    </p>
                  </div>
                  <Button
                    variant="dark"
                    className="h-fit rounded-full px-6 lg:block hidden"
                  >
                    Subscribe
                  </Button>
                </div>
              </li>
            </Link>
          );
        }
        if (list.shelf) {
          return (
            <div key={list.shelf.title} className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">{list.shelf.title}</h2>
              <ul className="flex flex-col gap-4">
                {list.shelf.content?.map((listShelfVideo) => (
                  <SearchVideo
                    data={listShelfVideo.video}
                    key={listShelfVideo.video?.videoId}
                  />
                ))}
              </ul>
            </div>
          );
        }
        if (list.video) {
          return <SearchVideo data={list.video} key={list.video?.videoId} />;
        }
        if (list.playist) {
          return (
            <SearchVideoPlayist
              data={list.playist}
              key={list.playist.playistId}
            />
          );
        }
      })}
      <div ref={inifiniteScrollRef} />
    </ul>
  );
}

export default SearchResultLists;
