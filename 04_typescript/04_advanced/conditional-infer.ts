// 条件付きに型における型のマッチング中に取得した型を出力に利用する（inferキーワード）
type Flatten<T> = T extends Array<infer U> ? U : T;

const num = 5;
const arr = [3, 6, 9];
type A = Flatten<typeof arr>;  // number
type N = Flatten<typeof num>;  // number

/*
型Tが何らかの型の配列だった場合、その配列の中身の型をinfer Uで型Uとして取得し、出力の型として使っている。
配列ではなかった場合、そのままの型が出力される
*/
