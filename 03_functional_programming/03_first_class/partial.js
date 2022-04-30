const withMultiple = (n) => (m) => n * m;
console.log(withMultiple(3)(5));

// カリー化された関数の部分適用
const triple = withMultiple(3);
console.log(triple(5));
