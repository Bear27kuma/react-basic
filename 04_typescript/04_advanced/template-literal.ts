// テンプレートリテラル型（Template Literal Types）- JavaScriptのテンプレートリテラルによる文字列を型として扱うことができる
type DateFormat = `${number}-${number}-${number}`;

const date1: DateFormat = '2022-05-14';
// 型が一致しないためコンパイルエラー
// const date2: DateFormat = 'May. 14, 2022'
