// Functionインスタンスの生成
const sum = new Function('n', 'm', 'return n + m;');

// 関数式（関数リテラル）
const add = function(n, m) {
  return n + m;
}

console.log(sum(2, 3));
console.log(add(2, 3))
