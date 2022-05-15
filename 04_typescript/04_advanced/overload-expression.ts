// 関数のオーバーロードをアロー関数で書き換え
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

/*
一般的な関数の型定義は() => voidのようなアロー構文で宣言できるが、これだとオーバーロードできない
*/
type Transform = {
  (): void;
  (item: Brooch): void;
  (item: Compact): void;
};

const transform: Transform = (item?: Brooch | Compact): void => {
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
