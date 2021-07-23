interface ShowImage {
  medium: string;
  original: string;
}

export interface Show {
  id: number;
  name: string;
  image: ShowImage;
  summary: string;
}

export type ShowList = {
  score: number;
  show: Show;
}[];

export interface Episode extends Show {
  season: number;
  number: number;
}

export type EpisodeList = Episode[];
