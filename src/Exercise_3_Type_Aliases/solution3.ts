// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Solution 3 – Type Aliases
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Demonstrate structural typing (duck typing)
// • Create type aliases

export default () => {
  // ======== Exercise 3.1 ========
  // Instructions:
  // • Create a `CreditCard` type alias with:
  //   number:string
  //   expMonth: number
  //   expYear: number
  //   cvc: number

  type CreditCard = {
    number: string;
    expMonth: number;
    expYear: number;
    cvc: number;
  };

  function proccessPayment(creditCardInfo: CreditCard) {
    console.log(
      "[Exercise 3.1]",
      `Authorizing card ending in "${creditCardInfo.number.substr(-4)}"...`
    );
  }

  proccessPayment({
    number: "4477105327048701",
    expMonth: 12,
    expYear: 2023,
    cvc: 230
  });

  // ======== Exercise 3.2 ========
  // Instructions:
  // • Create a `CartItem` type alias and replace the param's type with it
  // • Make variantId optional

  type CartItem = {
    id: number;
    title: string;
    variantId?: number;
  };

  function addToCart(item: CartItem) {
    console.log("[Solution 2.1]", `Adding "${item.title}" to cart`);
  }

  addToCart({ id: 1, title: "Concrete shoes" });

  // ======== Solution 3.3 ========
  // Instructions:
  // • Replace the param's union type declaration with a type alias

  type Padding = number | string;

  function padLeft(value: string, padding: Padding): string {
    if (typeof padding === "number") {
      return `${Array(padding + 1).join(" ")}${value}`;
    } else {
      return padding + value;
    }
  }

  console.log("[Exercise 3.3]", `${padLeft("🐩", 0)} ${padLeft("🐩", "🐕")}`);

  // ======== Solution 3.4 ========
  // Instructions:
  // • Create an Alignment type alias that only allows the string literals "LEFT", "RIGHT" or "CENTER";

  type Alignment = "LEFT" | "CENTER" | "RIGHT";
  function doAlign(alignment: Alignment) {
    switch (alignment) {
      case "LEFT":
        console.log("[Exercise 3.3]", "Aligning to the left");
        break;
      case "RIGHT":
        console.log("[Exercise 3.3]", "Aligning to the right");
        break;
      case "CENTER":
        console.log("[Exercise 3.3]", "Aligning in the center");
        break;
      default:
        console.error(
          "[Exercise 3.3]",
          `I don't know how to align ${alignment}`
        );
    }
  }

  doAlign("CENTER");
};
