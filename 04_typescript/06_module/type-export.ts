type Species = 'rabbit' | 'bear' | 'fox' | 'dog';

class Resident {
  name = '';
  age = 0;
  species: Species | null = null;
}

// 型のみのエクスポート（Type-Only Exports）を使う
export { Species, Resident };
