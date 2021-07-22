export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export type EpisodeList = Episode[];
