//クラスの継承
class Square1 extends Rectangle {
  // 親クラスのnameプロパティをreadonly修飾子を削除する必要ある
  // readonly name: 'square';
  side: number

  constructor(side: number) {
    super(side, side);
  }
}
