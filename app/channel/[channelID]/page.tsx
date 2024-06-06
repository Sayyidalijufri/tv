"use client";
import ChannelContent from "@/components/ChannelContent";
import ChannelPin from "@/components/ChannelPin";
import FeaturedChannelLists from "@/components/FeaturedChannelLists";
import useChannelData from "@/hooks/useChannelData";

function Page({}) {
  const { channelData } = useChannelData();
  return (
    <div className="w-full space-y-6">
      {channelData?.bodyResults?.pinnedVideo && (
        <ChannelPin data={channelData?.bodyResults.pinnedVideo} />
      )}
      <ul className="flex flex-col gap-6">
        {channelData?.bodyResults?.listSections?.map((list) => (
          <li key={list.title}>
            <ChannelContent {...list} />
          </li>
        ))}
      </ul>
      {channelData?.bodyResults?.featuredChannels && (
        <FeaturedChannelLists {...channelData?.bodyResults?.featuredChannels} />
      )}
    </div>
  );
}

export default Page;
