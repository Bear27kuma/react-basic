 // メソッドとして実行されたときのthis
 const foo = {
  name: 'Foo Object',
  dump() {
   console.log(this);
  }
};

foo.dump();
