// クラスの合成
// 依存がないため、Rectangleクラスの内部の変更にSquareクラスが影響されることはない
class Square2 {
  readonly name = 'square';
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea = (): number => new Rectangle(this.side, this.side).getArea();
}

/*
現代は継承そのものを避けるべきという認識が開発者の間に広まってきており、
Reactでもコンポーネントをクラスで作成するときは、継承を避けるよう公式ドキュメントに書かれている
 */
