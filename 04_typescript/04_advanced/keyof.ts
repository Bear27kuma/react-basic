const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001
};

// keyof演算子は通常の式では使えず、型コンテキストのみで用いられる演算子。オブジェクトの型からキーを抜き出してくれるもの
// typeof演算子と組み合わせると、既存のオブジェクトからキーの型を抽出できる
type PermsChar = keyof typeof permissions;
const readable: PermsChar = 'r';
const writable: PermsChar = 'w';
// const writable: PermsChar = 'z';

console.log(readable);
console.log(writable);
