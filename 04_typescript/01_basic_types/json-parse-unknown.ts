const str = `{"id": 1, "username": "john_doe}`;
// Unknown型はany型の安全版で、任意の型の値を代入できる点は同じだが、それ自体は何のプロパティもプロトタイプメソッドも持たない
const user: unknown = JSON.parse(str);

// console.log(user.id, user.address.zipcode);  エラーになる
