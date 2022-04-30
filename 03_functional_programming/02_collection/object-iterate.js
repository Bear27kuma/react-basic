// 標準組み込みオブジェクト(Object)を直接継承するオブジェクトの反復処理
const user = {
  id: 3,
  name: 'Bobby Kumanov',
  username: 'bobby',
  email: 'bobby@maple.com'
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
