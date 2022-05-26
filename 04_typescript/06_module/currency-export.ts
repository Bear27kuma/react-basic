const rate: { [unit: string]: number } = {
  USD: 1,
  EUR: 0.9,
  JPY: 108,
  GBP: 0.8
};

type Unit = keyof typeof rate;
// 型エイリアスとオブジェクトが同じCurrencyという名前で定義されている
type Currency = {
  unit: Unit;
  amount: number;
};

const Currency = {
  exchange: (currency: Currency, unit: Unit): Currency => {
    const amount = currency.amount / rate[currency.unit] * rate[unit];

    return { unit, amount };
  }
};

// Currencyを設定すると、どちらとも両方エクスポートされる（Combination）
export { Currency };

/*
クラスの宣言はインスタンスのインターフェース型とコンストラクタ関数の宣言を同じ名前で同時に行なっているので、
クラスをインポート/エクスポートするときは、暗黙の内に型とオブジェクトの両方を同時にインポート/エクスポートしている。

TypeScript3.9から
型のみのインポート（Type-Only Imports）と型のみのエクスポート（Type-Only Exports）の構文が追加された
*/
