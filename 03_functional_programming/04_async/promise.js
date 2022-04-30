const isSucceeded = true;

const promise = new Promise((resolve, reject) => {
  if (isSucceeded) {
    // resolve()に渡したものがthenの引数（value）として受け取られる
    resolve('Success');
  } else {
    reject(new Error('Failure'));
  }
});

promise.then((value) => {
  console.log('1. ', value);
  // returnした値が次のthen()内のvalueになる
  return 'Success again';
})
.then((value) => {
  console.log('2. ', value);
})
// falseの場合はrejectに渡したものがerrorとして受け取られる
.catch((error) => {
  console.error('3. ', error);
})
// 結果が成功でも失敗でも、finally()に渡された関数は必ず実行される
.finally(() => {
  console.log('4. ', 'Completed');
});
