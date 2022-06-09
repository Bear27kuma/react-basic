type Species = 'rabbit' | 'bar' | 'fox' | 'dog';

interface Resident {
  name: string;
  age: number;
  species: Species;
}

const isCanine = (resident: Resident): boolean => ['dog', 'fox'].includes(resident.species);

// インターフェースと型エイリアスが関数と一緒にエクスポートされる
export { Species, Resident, isCanine };

/*
TypeScriptではインターフェースや型エイリアスもimportとexportの対象になる
通常の構文のimportとexportでは、型も変数も関数と区別なく同列に扱われる
*/
