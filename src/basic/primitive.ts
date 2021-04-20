export default function primitiveSample() {
  let name: string = "トラハック";
  //   name = 123;  Type 'number' is not assignable to type 'string'
  console.log("primitive sample 1", typeof name, name);

  let age: number = 28;
  console.log("primitive sample 2", typeof age, age);

  let isSingle: boolean = true;
  console.log("primitive sample 3", typeof isSingle, isSingle);

  let isOver20: boolean = age >= 20;
  console.log("primitive sample 4", typeof isOver20, isOver20);
}
