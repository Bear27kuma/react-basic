/*
列挙タイプの型をキーとしたオブジェクトの型を作成する
・Record<K,T> - Kの要素をキーとしたプロパティ値の型をTとしたオブジェクトの型を作成する
*/

type Animal = 'cat' | 'dog' | 'rabbit';
type AnimalNote = Record<Animal, string>;

const animalKanji: AnimalNote = {
  cat: '猫',
  dog: '犬',
  rabbit: '兎'
};

console.log(animalKanji);
