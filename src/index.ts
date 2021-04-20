// import World from "./world";
// const root = document.getElementById("root");
// const world = new World("Hello World");
// world.sayHello(root);

// 基本の型定義
// import {
//   anySample,
//   notExistSample,
//   primitiveSample,
//   unknownSample,
// } from "./basic";

// primitiveSample();
// notExistSample();
// anySample();
// unknownSample();

// 関数の型定義
import { logMassage } from "./function/basic";
import {
  isUserSignedIn,
  isUserSignedIn2,
  sumProductsPrice,
} from "./function/parameters";
logMassage("Hello Typescript!");
isUserSignedIn("ABC", "PMBOOK");
isUserSignedIn("DEF");
isUserSignedIn2("ABC");
console.log(sumProductsPrice(100, 200, 300, 400, 500));
