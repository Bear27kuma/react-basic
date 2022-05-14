// クラスやインターフェースの拡張に使われるextendsキーワードは型引数の表現にも適用できる
const override = <T, U extends T>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2,
});

override({ a: 1 }, { a: 24, b: 8 });
// ここでのextendsは、関数override()の第2引数obj2の型を定義している型引数Uが第1引数の型obj1の型Tと
// 同じか拡張したものでなければならないことを示唆するもの
// その条件に従わない引数を渡そうとすると、コンパイルエラーになる
// override({ a: 2 }, { x: 73 });
