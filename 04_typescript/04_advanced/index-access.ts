// TypeScriptにvalueof演算子がないため、インデックスアクセス演算子[]を使う
const permissions = {
  r: 0b100 as const,
  w: 0b010 as const,
  x: 0b001 as const
};
// Const アサーション（Const Assertions）- 定数として型注釈を付与するもの
// まとめて書く別の書き方
/*
const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001
} as const
*/

type PermsChar = keyof typeof permissions;
type ValueOf<T> = T[keyof T];
// type PermsNum = typeof permissions[PermsChar];
type PermsNum = ValueOf<typeof permissions>;

// 配列の要素から型を作る方法
const species = ['rabbit', 'bear', 'fox', 'dog'] as const;
type Species = typeof species[number];
