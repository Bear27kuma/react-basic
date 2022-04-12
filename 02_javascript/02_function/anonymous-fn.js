// 関数式で記述する無名関数
const venus = function () {
  console.log('I am Venus!');
}

venus();
console.log(venus.name);

// アロー関数で記述する無名関数
const jupiter = () => {
  console.log('I am Jupiter');
}

jupiter();
console.log(jupiter.name);
