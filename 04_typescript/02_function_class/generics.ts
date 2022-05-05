// 関数の型宣言にジェネリクスを用いる記法（型引数）
const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2];
console.log(toArray(8, 3));
console.log(toArray('foo', 'bar'));
// toArray(5, 'bar');  引数の型が統一されていないためエラー

/*
データの型に束縛されないよう型を抽象化してコードの再利用生を向上させつつ、
静的型付け言語の持つ型安全性を維持するプログラミング手法を『ジェネリックプログラミング（Generic Programming）』と呼ぶ。

型引数を用いて表現するデータ構造のことを『ジェネリクス（Generics）』という。
 */

// TypeScriptで可変長引数を型安全に扱う
const toArrayVariably = <T>(...args: T[]): T[] => [...args];
console.log(toArrayVariably(1, 2, 3, 4, 5));
// toArrayVariably(6, '7', 8);  引数の型が統一されていないためエラー
