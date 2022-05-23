class Base { common = 'common'; }
class Foo extends Base { foo = () => { console.log('foo'); } }
class Bar extends Base { bar = () => { console.log('bar'); } }

// クラスベースのオブジェクトであれば、instanceofで型ガードを実現できる
const doDivide = (arg: Foo | Bar) => {
  if (arg instanceof Foo) {
    arg.foo();
    // arg.bar();  コンパイルエラー
  } else {
    arg.bar();
    // arg.foo();  コンパイルエラー
  }

  console.log(arg.common);
};

doDivide(new Foo());
doDivide(new Bar());
