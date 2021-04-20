export default function unknownSample() {
  const maybeNumber: unknown = 10;
  console.log("anySample 1:", typeof maybeNumber, maybeNumber);

  const isFoo = maybeNumber === "foo";
  console.log("anySample 2:", typeof isFoo, isFoo);

  //   const sum = maybeNumber + 10; unknown型のためエラー

  // apiの返却する値がわからない場合などに使う構文
  if (typeof maybeNumber === "number") {
    const sum = maybeNumber + 10;
    console.log("anySample 3:", typeof sum, sum);
  }
}
