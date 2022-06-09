/*
文字列リテラル型と組み合わせて使えるユーティリティ型
・Uppercase<T> - Tの各要素の文字列をすべて大文字にする
・Lowercase<T> - Tの各要素の文字列をすべて小文字にする
・Capitalize<T> - Tの各要素の文字列の頭を大文字にする
・Uncapitalize<T> - Tの各要素の文字列の頭を小文字にする
*/

type Company = 'Apple' | 'IBM' | 'GitHub';

type C1 = Uppercase<Company>;  // 'APPLE' | 'IBM' | 'GITHUB'
type C2 = Lowercase<Company>;  // 'apple' | 'ibm' | 'github'
type C3 = Capitalize<Company>;  // 'Apple' | 'IBM' | 'GitHub'
type C4 = Uncapitalize<Company>;  // 'apple' | 'iBM' | 'gitHub'
