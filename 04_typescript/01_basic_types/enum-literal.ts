// TypeScriptのenumはデフォルトでは数値で、かつ型安全が保証されていないため、「文字列enum」を使用する
enum Pet {
  Cat = 'Cat',
  Dog = 'Dog',
  Rabbit = 'Rabbit'
}

let Tom: Pet = Pet.Cat;
// Tom = 'Hamster';  Hamsterは型安全ではないため、代入できずにエラー
// Tom = 'Dog';  // 文字列DogはenumはPet.Dogと同一ではなく、型が一致しないためエラー（リテラル型）

// 任意の文字列以外を許さない型（リテラル型）は、演算子（|）で並べることによって列挙型のように扱うことができる（共用体型）
// リテラル型は文字列だけでなく、「数値リテラル型」も存在する
let Mary: 'Cat' | 'Dog' | 'Rabbit' = 'Cat';
Mary = 'Rabbit';
// Mary = 'Parrot';  列挙型としてこのリテラルが定義されていないためエラー
