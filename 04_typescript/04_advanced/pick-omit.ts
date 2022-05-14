/*
オブジェクトの型からプロパティを取捨選択する性質のユーティリティ型
・Pick<T,K> - TからKが指定するキーのプロパティだけを抽出する
・Omit<T,K> - TからKが指定するキーのプロパティを省く
*/

type Todo = {
  title: string;
  description: string;
  isDone: boolean;
};

type PickedTodo = Pick<Todo, 'title' | 'isDone'>;
type OmittedTodo = Omit<Todo, 'description'>;
