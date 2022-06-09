/*
任意の型からnullとundefinedだけを省いてnull非許容にするためのユーティリティ型
・NonNullable<T> - Tからnullとundefinedを省く
*/

type T1 = NonNullable<string | number | undefined>;
type T2 = NonNullable<number[] | null | undefined>;

// "strictNullChecks": trueになっているとコンパイルエラーになる
const str: T1 = undefined;
const arr: T2 = null;

console.log(str);
console.log(arr);
