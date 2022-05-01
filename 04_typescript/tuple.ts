// TypeScriptには個々の要素の型と、その順番や要素数に制約を設けられる特殊な配列の型がある（Tuple型）
const charAttrs: [number, string, boolean] = [1, 'patty', true];

// タプルの定義にレストパラメーターが使える
const spells: [number, ...string[]] = [7, 'heal', 'sizz', 'snooz'];

// API関数の戻り値として複数の異なる値を設定したいときはタプルにして、分割代入で必要な値を抽出してもらうようなインターフェースにする
const [id, username, isAdmin] = charAttrs;
console.log(id, username, isAdmin);
