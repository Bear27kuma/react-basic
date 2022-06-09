/*
列挙的な型を加工するユーティリティ型
・Extract<T,U> - TからUの要素だけを抽出する
・Exclude<T,U> - TからUの要素を省く
*/

type Permission = 'r' | 'w' | 'x';

type RW1 = Extract<Permission, 'r' | 'w'>;
type RW2 = Exclude<Permission, 'x'>;
