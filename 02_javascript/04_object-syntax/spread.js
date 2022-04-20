// コレクションの展開（スプレッド構文）
const arr1 = ['A', 'B', 'C'];
const arr2 = [...arr1, 'D', 'E'];
console.log(arr2);

const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// キーが重複する場合は値が上書きされる
const obj2 = { ...obj1, d: 99, e: 5 };
console.log(obj2);
