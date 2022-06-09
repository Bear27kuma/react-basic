console.log(typeof 100);

const arr = [1, 2, 3];
console.log(typeof arr);

// typeof演算子で既存の変数から型推論で型を抜き出すことができる
type NumArr = typeof arr;

const val: NumArr = [4, 5, 6];
// 配列の値の型が一致しないため、コンパイルエラー
// const val2: NumArr = ['foo', 'bar', 'baz'];
