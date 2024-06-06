export type ChannelPlaylists = {
  playlistResults?: PlaylistResult[];
  continuation?: string;
};

export type PlaylistResult = {
  playistId?: string;
  title?: string;
  videosCountText?: string;
  thumbnail?: string;
};
