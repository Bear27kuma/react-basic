// デフォルトエクスポート（Default Export）
import { ONE, TWO as ZWEI } from './constants.js';

export const plus = (n, m = ONE) => n + m;
const times = (n, m = ZWEI) => n * m;

export default times;

/*
デフォルトエクスポートしたものは、読み込む側で任意のなめをつけられる。
デフォルトエクスポートできるのは、1モジュール（= 1ファイル）につき1回まで
 */
