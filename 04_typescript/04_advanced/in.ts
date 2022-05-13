// 通常の式でのin演算子は、指定した値がオブジェクトのキーとして存在するかどうかの真偽値を返したり、
// for...in文ではオブジェクトからインクリメントにキーを抽出するのに使われる
const obj = { a: 1, b: 2, c: 3 };
console.log('a' in obj);
for (const key in obj) { console.log(key); }

// 型コンテキストでは、列挙された型の中から各要素の型の値を抜き出して、マップ型（Mapped Types）を作る
type Fig = 'one' | 'two' | 'three';
type FigMap = { [k in Fig]?: number };

const figMap: FigMap = {
  one: 1,
  two: 2,
  three: 3
};

console.log(figMap);

// コンパイルエラー
// figMap.four = 4;
