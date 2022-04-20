const showNames = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
}

// レストパラメーター以降は配列で返される
showNames('John', 'Jane', 'Johnny', 'Jenny', 'Julia');
