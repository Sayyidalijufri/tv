import { Channel } from "@/types/Channel";
import { ChannelCommunities } from "@/types/ChannelCommunities";
import { ChannelLives } from "@/types/ChannelLives";
import { ChannelPlaylists } from "@/types/ChannelPlaylists";
import { ChannelPodcasts } from "@/types/ChannelPodcasts";
import { ChannelShorts } from "@/types/ChannelShorts";
import { ChannelVideos } from "@/types/ChannelVideos";
import { create } from "zustand";
type ChannelProps = {
  channelData?: Channel;
  channelVideos?: ChannelVideos;
  channelShorts?: ChannelShorts;
  channelLives?: ChannelLives;
  channelPodcasts?: ChannelPodcasts;
  channelPlaylists?: ChannelPlaylists;
  channelCommunities?: ChannelCommunities;
  setChannelData: (data?: Channel) => void;
  setChannelVideos: (data?: ChannelVideos) => void;
  setChannelShorts: (data?: ChannelShorts) => void;
  setChannelLives: (data?: ChannelLives) => void;
  setChannelPodcasts: (data?: ChannelPodcasts) => void;
  setChannelPlaylists: (data?: ChannelPlaylists) => void;
  setChannelCommunities: (data?: ChannelCommunities) => void;
};

const useChannelData = create<ChannelProps>((set) => ({
  channelData: undefined,
  channelVideos: undefined,
  channelShorts: undefined,
  channelLives: undefined,
  channelPodcasts: undefined,
  channelPlaylists: undefined,
  channelCommunities: undefined,
  setChannelData: (data) => set({ channelData: data }),
  setChannelVideos: (data) => set({ channelVideos: data }),
  setChannelShorts: (data) => set({ channelShorts: data }),
  setChannelLives: (data) => set({ channelLives: data }),
  setChannelPodcasts: (data) => set({ channelPodcasts: data }),
  setChannelPlaylists: (data) => set({ channelPlaylists: data }),
  setChannelCommunities: (data) => set({ channelCommunities: data }),
}));

export default useChannelData;
