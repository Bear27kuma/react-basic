// TypeScriptでのクラスの扱い
class Rectangle {
  // プロパティ初期化子（Property Initializer）
  readonly name = 'rectangle';  // readonly修飾子でそのメンバー変数を変更不可にできる
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = (): number => this.sideA * this.sideB;
}

/*
アクセス修飾子（Access Modifier）
・public - 自クラス、子クラス、インスタンスすべてからアクセス可能。デフォルトではすべてのメンバーがこのpublicになる。
・protected - 自クラスおよび子クラスからアクセス可能。インスタンスからはアクセス不可。
・private - 自クラスからのみアクセス可能。子クラスおよびインスタンスからはアクセス不可。
*/
