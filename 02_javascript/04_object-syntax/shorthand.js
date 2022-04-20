const key = 'bar';
const baz = 65536;
const obj1 = { foo: 256, [key]: 4096, baz: baz };
console.log(obj1);

// プロパティ名のショートハンド
const obj2 = { baz };
console.log(obj2);
