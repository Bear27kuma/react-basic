const str = `{ "id": 1, "username": "patty" }`;
// JSON.parse()は戻り値の型がAny型
const user = JSON.parse(str);

console.log(user.id, user.address.zipCode);
