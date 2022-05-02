// 何もできないNever型
const greet = (friend: 'Serval' | 'Caracal' | 'Cheetah') => {
  switch (friend) {
    case 'Serval':
      return `Hello, ${friend}`;
    case 'Caracal':
      return `Hi, ${friend}`;
    case 'Cheetah':
      return `Hiya, ${friend}`;
    default: {
      // never型をdefaultに使用することで、case文の漏れを未然にチェックできる
      const check: never = friend;
    }
  }
};

console.log(greet('Serval'));
