export type Critter = {
  type: "bug" | "fish";
  no: number;
  name: string;
  price: number;
  monthInNorth: number[];
  monthInSouth: number[];
  hour: number[];
  place: string;
  condition: string;
};

export const critterpedia: Critter[] = [
  {
    type: "bug",
    no: 1,
    name: "モンシロチョウ",
    price: 160,
    monthInNorth: [1,2,3,4,5,6,9,10,11,12],
    monthInSouth: [3,4,5,6,7,8,9,10,11,12],
    hour: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
    place: "花",
    condition: "雨と雪の日以外"
  },
  {
    type: "bug",
    no: 2,
    name: "モンキチョウ",
    price: 160,
    monthInNorth: [3,4,5,6,9,10],
    monthInSouth: [1,2,3,4,9,10,11,12],
    hour: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
    place: "花",
    condition: "雨と雪の日以外"
  },
];
