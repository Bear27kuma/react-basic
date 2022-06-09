/*
関数を扱うユーティリティ型
・Parameters<T> - Tの引数の型を抽出し、タプル型で返す
・ReturnType<T> - Tの戻り値の型を返す
*/

const f1 = (a: number, b: string) => { console.log(a, b) };
const f2 = () => ({ x: 'hello', y: true });

type P1 = Parameters<typeof f1>;  // [number, string]
type P2 = Parameters<typeof f2>;  // []
type P3 = ReturnType<typeof f1>;  // void
type P4 = ReturnType<typeof f2>;  // { x: string, y: boolean; }
