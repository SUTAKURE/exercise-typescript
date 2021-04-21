export default function typeAliasSample() {
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "Japan",
  };

  console.log("object alias sample", japan);

  // 合併型と交差型
  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  // 合併型... KnightまたはWizardの型を持つ
  type Adventure = Knight | Wizard;

  // 交差型... KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard;

  // Knightよりの冒険者
  const adventure1: Adventure = {
    hp: 100,
    sp: 30,
    weapon: "木の剣",
    swordSkill: "三連ぎり",
  };

  // Wizardよりの険者
  const adventure2: Adventure = {
    hp: 100,
    mp: 30,
    weapon: "木の杖",
    magicSkill: "ファイヤーボール",
  };

  console.log("Object alias sample 3", adventure1);
  console.log("Object alias sample 4", adventure2);

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: "銀の剣",
    swordSkill: "三連ぎり",
    magicSkill: "ファイヤーボール",
  };

  console.log("Object alias sample 5", paladin);
}
