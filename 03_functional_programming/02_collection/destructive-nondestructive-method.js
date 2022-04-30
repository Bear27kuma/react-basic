// sort()メソッドは破壊的メソッド
const arr = [4, 8, 2, 6];

console.log(arr.sort((n, m) => n < m ? -1 : 1));
console.log(arr);

// slice()メソッドを挟んで非破壊的に実行する
const lst = [5, 7, 1, 3];

console.log(lst.slice().sort((n, m) => n < m ? -1 : 1));
console.log(lst);
