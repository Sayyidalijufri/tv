import { create } from "zustand";
type ChannelData = {
  channelData: any;
  channelShorts: any;
  channelVideos: any;
  setChannelData: (data: any) => void;
  setChannelVideos: (data: any) => void;
  setChannelShorts: (data: any) => void;
};

const useChannelData = create<ChannelData>((set) => ({
  channelData: null,
  channelShorts: null,
  channelVideos: null,
  setChannelData: (data) => set({ channelData: data }),
  setChannelVideos: (data) => set({ channelVideos: data }),
  setChannelShorts: (data) => set({ channelShorts: data }),
}));

export default useChannelData;
