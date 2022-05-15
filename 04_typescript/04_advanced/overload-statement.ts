// 関数のオーバーロード（多重定義）
class Brooch {
  pentagram = 'Silver Crystal';
}

type Compact = {
  silverCrystal: boolean;
};

class CosmicCompact implements Compact {
  silverCrystal = true;
  cosmicPower = true;
}

class CrisisCompact implements Compact {
  silverCrystal = true;
  moonChalice = true;
}

function transform(): void;
function transform(item: Brooch): void;
function transform(item: Compact): void;
function transform(item?: Brooch | Compact): void {
  if (item instanceof Brooch) {
    console.log('Moon crystal power 💎, make up!!');
  } else if (item instanceof CosmicCompact) {
    console.log('Moon cosmic power 💖, make up!!!');
  } else if (item instanceof CrisisCompact) {
    console.log('Moon crisis 🏆, make up!');
  } else if (!item) {
    console.log('Moon prism power 🌙, make up!' );
  } else {
    console.log('Item is fake...😫');
  }
}

transform();
transform(new Brooch());
transform(new CosmicCompact());
transform(new CrisisCompact());

/*
関数宣言の重複は、JavaScriptでは単に再定義となって前のものが上書きされるが、
TypeScriptでは同じ名前の関数でも型が異なる宣言を重複させることでオーバーロードができる
*/

/*
TypeScriptの型の互換性の判定が、その名前ではなく構造的サブタイピング（Structural Subtyping）によって行われるため、コンパイルが通ってしまう
つまり型の構造さえ一致していれば型チェックをパスしてしまう
*/
transform({ pentagram: '***' });
const compact = { silverCrystal: false, tailsman: [{}, {}, {}] };
transform(compact);
