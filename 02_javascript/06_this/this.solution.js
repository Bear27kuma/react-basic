/* thisの参照先を解決する4つの方法
1. bind()で関数にthisを束縛する
2. call()またはapply()を使ってthisを指定して実行する
3. thisの値を一時変数に代入する
4. アロー関数式で定義する
 */

class Person {
  constructor(name) {
    this.name = name;
  }

  greet1() {
    const doIt = function() {
      console.log(`Hi, I'm ${this.name}`);
    };
    // 1. 関数にthisを束縛
    const bindedDoIt = doIt.bind(this);
    bindedDoIt();
  }

  greet2() {
    const doIt = function() {
      console.log(`Hi, I'm ${this.name}`);
    };
    // 2.thisを指定して実行
    doIt.call(this);
  }

  greet3() {
    // 3. 変数 _thisに値を移し替える
    const _this = this;
    const doIt = function() {
      console.log(`Hi, I'm ${_this.name}`);
    };
    doIt();
  }

  greet4() {
    // 4. アロー関数で定義
    const doIt = () => {
      console.log(`Hi, I'm ${this.name}`);
    };
    doIt();
  }

  // 5. メソッド自身もアロー関数式で定義
  greet5 = () => {
    const doIt = () => {
      console.log(`Hi, I'm ${this.name}`);
    };
    doIt();
  }
}

const creamy = new Person('Mami');
creamy.greet1();
creamy.greet2();
creamy.greet3();
creamy.greet4();
creamy.greet5();
