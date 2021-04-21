export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ["red", "blue"];
  colors.push("yellow"); // OK
  // colors.push(123) // NG

  console.log("Array array sample 1", colors);

  // 型定義方法：T[]とArray<T>は同義
  const odd: number[] = [1, 2, 3];
  const even: Array<number> = [2, 4, 6];
  console.log("Array array sample 2", odd);
  console.log("Array array sample 3", even);

  const ids: (string | number)[] = ["ABC", 123];
  ids.push("DEF"); // OK
  ids.push(123); // OK
  console.log("Array array sample 4", ids);

  // 配列の型定義 型推論
  const generateSomeArray = () => {
    const _someArray = []; // ANY[]
    _someArray.push(123); // number[]
    _someArray.push("ABC"); // string[] | number[]
    return _someArray;
  };

  const someArray = generateSomeArray();
  someArray.push(456);
  // someArray.push(true); // NG

  console.log("Array array sample 5", someArray);

  // イミュータブルな配列を作る
  const mutableNumber: number[] = [1, 2, 3];
  mutableNumber[2] = 4;

  const commands: readonly string[] = ["git add", "git commit", "git push"];
  // commands.push("git fetch") 追加不可
  // commands[2]("git pull") 代入不可
}
