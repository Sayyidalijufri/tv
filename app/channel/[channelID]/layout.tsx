import { Channel } from "@/types/Channel";
import "../../globals.css";
import ChannelProvider from "./ChannelProvider";
import { ChannelVideos } from "@/types/ChannelVideos";
import { ChannelShorts } from "@/types/ChannelShorts";
import { ChannelLives } from "@/types/ChannelLives";
import { ChannelPodcasts } from "@/types/ChannelPodcasts";
import { ChannelPlaylists } from "@/types/ChannelPlaylists";
import { ChannelCommunities } from "@/types/ChannelCommunities";

export default async function ChannelLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const getChannelInfo = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/channel/${params.channelID}`
    );
    const data: Channel = await res.json();
    return data;
  };
  const getChannelVideos = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/channelVideos/${params.channelID}`
    );
    const data: ChannelVideos = await res.json();
    return data;
  };
  const getChannelShorts = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/channelShorts/${params.channelID}`
    );
    const data: ChannelShorts = await res.json();
    return data;
  };
  const getChannelLives = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/channelLives/${params.channelID}`
    );
    const data: ChannelLives = await res.json();
    return data;
  };
  const getChannelPodcasts = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/channelPodcasts/${params.channelID}`
    );
    const data: ChannelPodcasts = await res.json();
    return data;
  };
  const getChannelPlaylists = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/channelPlaylists/${params.channelID}`
    );
    const data: ChannelPlaylists = await res.json();
    return data;
  };
  const getChannelCommunities = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/channelCommunities/${params.channelID}`
    );
    const data: ChannelCommunities = await res.json();
    return data;
  };
  const data = await Promise.all([
    getChannelInfo(),
    getChannelVideos(),
    getChannelShorts(),
    getChannelLives(),
    getChannelPodcasts(),
    getChannelPlaylists(),
    getChannelCommunities(),
  ]);

  return <ChannelProvider data={data}>{children}</ChannelProvider>;
}
