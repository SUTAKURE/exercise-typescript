export default function objectSample() {
  const a: object = {
    name: "torahac",
    age: 20,
  };
  //   a.name; typescriptの場合、構造を定義してあげないとエラーになる

  // オブジェクトリテラル気泡で型定義
  let country: {
    language: string;
    name: string;
  } = {
    language: "japanese",
    name: "Japan",
  };

  console.log("Object objecy sample 1", country);

  country = {
    language: "english",
    name: "US",
  };

  console.log("Object objecy sample 2", country);

  const torahack: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 28,
    lastName: "Yamada",
    firstName: "Tarou",
  };

  torahack.gender = "male";
  torahack.lastName = "Kamado";
  //   torahack.firstName = "Tanjirou"; ReadOnly
  console.log("Object objecy sample 3", torahack);

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: "Tokyo",
    Korea: "Seoul",
  };

  console.log(capitals);

  capitals.China = "Beijing";
  capitals.Canada = "Ottawa";

  console.log(capitals);
}
