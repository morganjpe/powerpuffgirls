export interface Show {
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export type ShowList = {
  score: number;
  show: Show;
}[];
