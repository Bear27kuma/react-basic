const foo = {
  bar: 'bar',
  baz: function () {
    console.log('I am `baz` method');
  }
};

foo.baz();

// 簡略化したメソッドの書き方
const fuu = {
  bar: 'bar',
  baz() {
    console.log('I am `baz` method');
  }
};

fuu.baz();
