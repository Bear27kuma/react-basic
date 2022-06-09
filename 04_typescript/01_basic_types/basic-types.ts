/*
・Boolean型 - trueおよびfalseの2つの真偽値を扱うデータ型。型名は「boolean」
・Number型 - 数値を扱うためのデータ型。型名は「number」
・BigInt型 - number型では表現できない大きな数値（253以上）を扱う型。型名は「bigint」
・String型 - 文字列を扱うためのデータ型。型名は「string」
・Symbol型 - 「シンボル値」という固有の識別子を表現する値の型。型名は「symbol」
・Null型 - 何のデータも含まれない状態を明示的に表す型。型名は「Null」
・Undefined型 - 「未定義」であることを表す型。型名は「undefined」
*/

// 配列の型定義（推奨）
const numArr: number[] = [1, 2, 3];
// Arrayオブジェクトを使用した別の書き方
const strArr: Array<string> = ['one', 'two', 'three'];

// Object型はプリミティブ型以外のすべてのオブジェクトのプロトタイプになっているため、型注釈としてはほとんど使われない
const words: object = ['foo', 'bar', 'baz'];  // ほぼ無意味
// 狭義のオブジェクトの型を定義する場合はプロパティのキーと値の型を明記する
const red: { rgb: string, opacity: number } = { rgb: 'ff0000', opacity: 1 };

// TypeScriptではオブジェクトの型に名前をつける「インターフェース」が存在する
interface Color {
  readonly rgb: string;
  opacity: number;
  name?: string;
}

const turquoise: Color = { rgb: '00afcc', opacity: 1 };
turquoise.name = 'Turquoise Blue';
// turquoise.rgb = '03c1ff';  readonlyプロパティのためエラー
