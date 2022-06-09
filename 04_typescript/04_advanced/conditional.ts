// extendsキーワードは三項演算子を併用すること任意の条件による型の割り振りができる
// オブジェクトの型から任意のプロパティの型を抽出したいときに使用する
/*
条件付き型（Conditional Types）
T extends U ? X : Y
*/

type User = { id: unknown };
type NewUser = User & { id: string };
type OldUser = User & { id: number };
type Book = { isbn: string };

type IdOf<T> = T extends User ? T['id'] : never;

type NewUserId = IdOf<NewUser>;  // string
type OldUserid = IdOf<OldUser>;  // number
type BookId = IdOf<Book>;  // never
