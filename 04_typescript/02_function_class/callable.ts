// 引数と戻り値をまとめて定義する方法
// Callable Object Type
{
  // インターフェースとして呼び出し可能オブジェクトを定義する
  interface NumOp {
    (n: number, m: number): number;
  }

  const add: NumOp = function(n, m) {
    return n + m;
  };

  const subtract: NumOp = (n, m) => n - m;

  console.log(add(1, 2));
  console.log(subtract(7, 2));
}

// In Line
{
  const add: (n: number, m: number) => number = function(n, m) {
    return n + m;
  };

  const subtract: (n: number, m: number) => number = (n, m) => n - m;

  console.log(add(3,  7));
  console.log(subtract(10, 8));
}
