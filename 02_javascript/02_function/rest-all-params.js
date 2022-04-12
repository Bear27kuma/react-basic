// 第1引数をレストパラメーターにして、引数の中身を全て参照する
const showAllArgs = (...args) => {
  console.log(args);
}

console.log(showAllArgs('A', 'B', 'C', 'D'));
