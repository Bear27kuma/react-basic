type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';

// 型エイリアス（Type Alias）
// 参照のために別名を与えている（型には名前がない）
type TCurrency = {
  unit: Unit;
  amount: number;
};

interface ICurrency {
  unit: Unit;
  amount: number;
}

const priceA: TCurrency = { unit: 'JPY', amount: 1000 };
const priceB: ICurrency = { unit: 'USD', amount: 10 };

console.log(priceA);
console.log(priceB);
