// 型のみのインポート（Type-Only Imports）を使う
import type { Resident } from './type-export';

// クラスではなく型のみがエクスポートされているので、コンパイルエラーになる
// const resident = new Resident();

const patty: Resident = {
  name: 'Patty Rabbit',
  age: 8,
  species: 'rabbit',
};

console.log(patty);



