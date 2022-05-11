type A = { foo: number };
type B = { bar: string };
type C = {
  foo?: number;
  baz: boolean;
};

// 交差型
type AnB = A & B;
type AnC = A & C;  // オプショナルと必須プロパティが交差すると、必須プロパティが優先される
type CnAorB = C & (A | B);
