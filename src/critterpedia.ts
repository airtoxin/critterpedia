export type Critter = {
  type: "bug" | "fish";
  no: number;
  name: string;
  price: number;
  monthInNorth: number[];
  monthInSouth: number[];
  hour: number[];
  place: string;
  condition?: string;
};

export const critterpedia: Critter[] = [
  {
    type: "bug",
    no: 1,
    name: "モンシロチョウ",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12],
    monthInSouth: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 2,
    name: "モンキチョウ",
    price: 160,
    monthInNorth: [3, 4, 5, 6, 9, 10],
    monthInSouth: [1, 2, 3, 4, 9, 10, 11, 12],
    hour: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 3,
    name: "アゲハチョウ",
    price: 240,
    monthInNorth: [3, 4, 5, 6, 7, 8, 9, 10],
    monthInSouth: [1, 2, 3, 9, 10, 11, 12],
    hour: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "空中",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 4,
    name: "カラスアゲハ",
    price: 2500,
    monthInNorth: [3, 4, 5, 6],
    monthInSouth: [9, 10, 11, 12],
    hour: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "花(青・黒・紫)",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 5,
    name: "アオスジアゲハ",
    price: 300,
    monthInNorth: [4, 5, 6, 7, 8],
    monthInSouth: [1, 2, 10, 11, 12],
    hour: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "空中",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 6,
    name: "オオゴマダラ",
    price: 1000,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "空中",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 7,
    name: "オオムラサキ",
    price: 300,
    monthInNorth: [5, 6, 7, 8],
    monthInSouth: [1, 2, 11, 12],
    hour: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "木",
  },
  {
    type: "bug",
    no: 8,
    name: "オオカバマダラ",
    price: 140,
    monthInNorth: [9, 10, 11],
    monthInSouth: [3, 4, 5],
    hour: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 9,
    name: "モルフォチョウ",
    price: 4000,
    monthInNorth: [1, 2, 3, 6, 7, 8, 9, 12],
    monthInSouth: [1, 2, 3, 6, 7, 8, 9, 12],
    hour: [1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 10,
    name: "ミイロタテハ",
    price: 3000,
    monthInNorth: [4, 5, 6, 7, 8, 9],
    monthInSouth: [1, 2, 3, 10, 11, 12],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 11,
    name: "アカエリトリバネアゲハ",
    price: 2500,
    monthInNorth: [1, 2, 4, 5, 6, 7, 8, 9, 12],
    monthInSouth: [1, 2, 3, 6, 7, 8, 10, 11, 12],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    place: "空中",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 12,
    name: "アレクサンドラトリバネアゲハ",
    price: 4000,
    monthInNorth: [5, 6, 7, 8, 9],
    monthInSouth: [1, 2, 3, 11, 12],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 13,
    name: "ガ",
    price: 130,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [1, 2, 3, 4, 19, 20, 21, 22, 23],
    place: "空中(街灯の近く)",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 14,
    name: "ヨナグニサン",
    price: 3000,
    monthInNorth: [4, 5, 6, 7, 8, 9],
    monthInSouth: [1, 2, 3, 10, 11, 12],
    hour: [1, 2, 3, 4, 19, 20, 21, 22, 23],
    place: "木",
  },
  {
    type: "bug",
    no: 15,
    name: "ニシキオオツバメガ",
    price: 2500,
    monthInNorth: [4, 5, 6, 7, 8, 9],
    monthInSouth: [1, 2, 3, 10, 11, 12],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 16,
    name: "ショウリョウバッタ",
    price: 200,
    monthInNorth: [4, 5, 6, 7, 8, 9, 10, 11],
    monthInSouth: [1, 2, 3, 4, 5, 10, 11, 12],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "草地",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 17,
    name: "トノサマバッタ",
    price: 600,
    monthInNorth: [8, 9, 10, 11],
    monthInSouth: [2, 3, 4, 5],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "草地",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 18,
    name: "イナゴ",
    price: 400,
    monthInNorth: [8, 9, 10, 11],
    monthInSouth: [2, 3, 4, 5],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    place: "草地",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 19,
    name: "キリギリス",
    price: 160,
    monthInNorth: [7, 8, 9],
    monthInSouth: [1, 2, 3],
    hour: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 20,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 21,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 22,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 23,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 24,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 25,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 26,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 27,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 28,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 29,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 30,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 31,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 32,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 33,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 34,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 35,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 36,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 37,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 38,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 39,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 40,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 41,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 42,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 43,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 44,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 45,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 46,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 47,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 48,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 49,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 50,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 51,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 52,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 53,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 54,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 55,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 56,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 57,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 58,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 59,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 60,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 61,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 62,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 63,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 64,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 65,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 66,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 67,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 68,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 69,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 70,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 71,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 72,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 73,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 74,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 75,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 76,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 77,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 78,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 79,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
  {
    type: "bug",
    no: 80,
    name: "",
    price: 160,
    monthInNorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    monthInSouth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    hour: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    place: "花",
    condition: "雨と雪の日以外",
  },
];
