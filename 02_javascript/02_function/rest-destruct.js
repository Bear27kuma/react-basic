// レストパラメーターに名前をつけることができる
const sum = (i, ...[j, k, l]) => i + j + k + l;

console.log(sum(1,2, 3, 4));
// 定義数よりも多く引数が渡されると、無視される
console.log(sum(1,1, 1, 1, 1));
