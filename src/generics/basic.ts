export default function genericsBasicSample() {
  // ジェネリックが他を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log(
    "Generics basic sample 1:",
    stringReduce(["May ", "the ", "force ", "be ", "with ", "you"], "")
  );

  // ジェネリックが他を使わない場合
  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log("Generics basic sample 2:", numberReduce([100, 200, 300], 1000));

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }

    return result;
  };

  console.log(
    "Generics basic sample 3:",
    genericStringReduce(["TypeScript ", "force ", "be ", "with ", "you"], "")
  );

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }

    return result;
  };

  console.log("Generics basic sample 4:", genericNumberReduce([100, 200], 100));

  // いろいろなジェネリック型の定義方法
  // 完全な呼び出しシグネチャ
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T;
    <U>(array: U[], initialValue: U): U;
  };

  // 呼び出しシグネチャの省略気泡
  type GenericReduce3<T> = (array: T[], initialValue: T) => T;
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T;
}
