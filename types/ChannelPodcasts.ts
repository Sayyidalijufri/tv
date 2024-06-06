export type ChannelPodcasts = {
  podcastResults?: PodcastResult[];
  continuation?: string;
};

export type PodcastResult = {
  podcastId?: string;
  title?: string;
  numberEpisodes?: string;
  thumbnail?: string;
};
