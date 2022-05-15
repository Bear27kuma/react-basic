/*
型アサーション（Type Assertion）- 型を断定してコンパイラを通るようにさせるため、型安全性がまったく保証されない
*/

type User = { username: string; address: { zipcode: string; town: string } };

const str = `{ "username": "patty", "town": "Maple Town" }`;
const data: unknown = JSON.parse(str);
const user = data as User;

console.log(user.address.town);
