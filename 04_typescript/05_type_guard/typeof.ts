const foo: unknown = `1,2,3,4`;

// あるスコープ内での型を保証するチェックを行う式のことを型ガード（Type Guards）という
if (typeof foo === 'string') {
  console.log(foo.split(','));
}

// console.log(foo.split(','));  コンパイルエラー

/*
JavaScriptの歴史的経緯により、typeof nullはobjectが返ってくるので、nullの場合型ガードは使えない
*/
