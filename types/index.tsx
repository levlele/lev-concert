export type ConcertType = {
  id: string;
  festivalName: string;
  bandName: string;
  date: string;
  place: string;
  location: string;
  company: string;
  price: number;
  small?: boolean;
  variant?:
    | "default"
    | "green"
    | "blue"
    | "orange"
    | "yellow"
    | "red"
    | "skyblue"
    | "darkblue"
    | "lightblue"
    | "amber"
    | "darkred"
    | "slate"
    | "pink"
    | "black"
    | "lightorange";
};
