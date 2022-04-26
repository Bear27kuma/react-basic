// 高階関数（Higher Order Function）
const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}!`);
  };

  // 実行結果ではなく関数そのものを返している
  return sayHello;
};

const greet = greeter('Step Jun');
greet();

// 不要な代入を避けた記述
const greeter2 = (target) => {
  return () => {
    console.log(`Hi, ${target}!`);
  };
};

const greet2 = greeter2('Step Jun');
greet2();

// 省略記法
const greeter3 = (target) => () => console.log(`Hi, ${target}!`);

const greet3 = greeter3('Step Jun');
greet3();
