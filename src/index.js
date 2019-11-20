// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";
import { dev } from "./dev";
import "./style.sass";

// sub.jsに定義されたJavaScriptを実行する。
hello();
dev();