// 分割代入とスプレッド構文の組み合わせ
const user = {
  id: 1,
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  age: 8
};

const { id, ...userWithoutId } = user;
console.log(id, userWithoutId);
