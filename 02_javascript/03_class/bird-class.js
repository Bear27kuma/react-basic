class Bird {
  constructor(name) {
    this.name = name;
  }

  chirp = () => {
    console.log(`${this.name}が鳴きました`);
  }

  // staticメソッドはインスタンスを生成しなくても呼び出せるメソッド
  static explain = (name) => {
    console.log(`${name}は翼があって卵を産みます`);
  }
}

// extendsキーワードでクラスを継承する
class FlyableBird extends Bird {
  constructor(name) {
    super(name);
  }

  fly = () => {
    console.log(`${this.name}が飛びました`);
  }
}

const penguin = new Bird('ペンギン');
penguin.chirp();
Bird.explain('カラス');

const hawk = new FlyableBird('タカ');
hawk.fly();
