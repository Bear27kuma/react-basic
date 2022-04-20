console.log(fn());

function fn() {
  return 'foo';
}

// 関数宣言文だとホイスティングが起きる + 再宣言ができてしまう
function fn() {
  return 'bar';
}
