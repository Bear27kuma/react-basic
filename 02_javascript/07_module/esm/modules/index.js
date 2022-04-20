// モジュールの集約
// 再エクスポート
export * from './constants.js';
export { plus as add, default as multiply } from './math.js';
export * as German from './constants2.js';

/*
import元が複数ファイル、複数ディレクトリ階層に渡る場合、exportをひとつのファイルに集約することができる
 */
