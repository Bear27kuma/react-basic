interface Status {
  level: number;
  maxHP: number;
  maxMP: number;
  // インデックスシグネチャ - キーに使える型はstringとnumberのみで、任意のプロパティ値を定義できる
  [attr: string]: number;
}

const myStatus: Status = {
  level: 99,
  maxHP: 999,
  maxMP: 999,
  attack: 999,
  defence: 999
};
