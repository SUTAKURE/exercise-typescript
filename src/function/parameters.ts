// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === "ABC") {
    console.log("Function parameters sample 1:", username);
    return true;
  } else {
    console.log("Function parameters sample 2:", "user not signed in");
    return false;
  }
};

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (
  userId: string,
  username: string = "NONAME"
): boolean => {
  if (userId === "ABC") {
    console.log("Function parameters sample 3", username);
    return true;
  } else {
    console.log("Function parameters sample 4:", "user not signed in");
    return false;
  }
};

// レストパラメータをー持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice;
  }, 0);
};
