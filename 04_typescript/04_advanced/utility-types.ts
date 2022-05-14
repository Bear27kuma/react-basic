/*
TypeScriptであらかじめ用意されている組み込みユーティリティ型（Utility Types）
・Partial<T> - Tのプロパティをすべて省略可能にする
・Required<T> - Tのプロパティをすべて必須にする
・Readonly<T> - Tのプロパティをすべて読み取り専用にする
*/

// 自前で書き直すと以下のようになる
type Partial2<T> = { [K in keyof T]?: T[K] };
type Required2<T> = { [K in keyof T]: T[K] };
type Readonly2<T> = { readonly [K in keyof T]: T[K] };
