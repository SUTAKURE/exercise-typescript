export default function tuppleSample() {
  let response: [number, string] = [200, "OK"];
  // response = [400, "Bad Request", "Email parameter is missing"]; Source has 3 element(s) but target allows only 2
  response = [400, "Bad Request"];

  console.log("Array tupple sample 1:", response);

  // 可変長引数を使ったタプル
  const girlFrends: [string, ...string[]] = ["Kana", "Miku", "Keiko"];
  girlFrends.push("Misa");
  console.log("Array tupple sample 2", girlFrends);
}
