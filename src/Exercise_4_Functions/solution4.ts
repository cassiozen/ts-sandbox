// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Solution 4 – Functions
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Convert existing JavaScript functions to TypeScript
// • Understand functions as types
// • Convert specifically-typed functions to more
//   flexible generic functions

export default () => {
  // ======== Solution 4.1 ========
  // Instructions:
  // • Add explicit parameter types and return type
  // • Fix any errors resulting from invalid types

  function add(x: number, y: number): number {
    return x + y;
  }

  function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
  }

  const someSum: number = sumArray([3, 6, 9]);

  console.log("[Solution 4.1]", `3 + 6 + 9 == ${someSum}`);

  // ======== Solution 4.2 ========
  // Instructions:
  // • Add explicit parameter types and return types to the `deposit` function
  // • Make the function's `message` parameter *optional*

  const bankAccount = {
    money: 0,
    deposit(value: number, message?: string): void {
      this.money += value;
      if (message) {
        console.log(message);
      }
    }
  };

  bankAccount.deposit(20);
  bankAccount.deposit(10, "Deposit received");

  console.log("[Solution 4.2]", `Account value: $${bankAccount.money}`);

  // ======== Solution 4.3 ========
  // For a given word, we compute its Scrabble® score.
  // Instructions:
  // • Add type annotations wherever possible

  function computeScore(word: string): number {
    const letters: string[] = word.toUpperCase().split("");
    return letters.reduce(
      (accum: number, curr: string) => (accum += getPointsFor(curr)),
      0
    );
  }

  function getPointsFor(letter: string) {
    const lettersAndPoints: [string, number][] = [
      ["AEOIULNRST", 1],
      ["DG", 2],
      ["BCMP", 3],
      ["FHVWY", 4],
      ["K", 5],
      ["JX", 8],
      ["QZ", 10]
    ];

    return lettersAndPoints.reduce(
      (computedScore: number, pointsTuple: [string, number]) => {
        const [letters, score]: [string, number] = pointsTuple;
        if (letters.split("").find(ll => ll === letter)) {
          return (computedScore += score);
        }
        return computedScore;
      },
      0
    );
  }

  console.log("[Solution 4.3]", `zoo is worth ${computeScore("zoo")} points.`);

  // ======== Solution 4.4 ========
  // Instructions:
  // • Add explicit parameter types and return types
  // • Add a default greeting: "hello"

  function greet(greeting: string = "hello") {
    return greeting.toUpperCase();
  }

  const defaultGreeting = greet();
  const portugueseGreeting = greet("Oi como vai!");

  console.log("[Solution 4.4]", defaultGreeting, portugueseGreeting);

  // ======== Solution 4.5 ========
  // Instructions:
  // • Add parameter type annotation
  // • Even though this function doesn't return, add an explicit return type

  function layEggs(quantity: number, color: string): void {
    console.log(
      `[Solution 4.5] You just laid ${quantity} ${color} eggs. Good job!`
    );
  }

  layEggs(10, "blue");

  // ======== Solution 4.6 ========
  // Here we've initialized two variables with function types.
  // Later we assign them to functions.
  // Instructions:
  // • Fix the errors

  let multiply: (val1: number, val2: number) => number;
  let capitalize: (val: string) => string;

  capitalize = function(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  };

  multiply = function(x: number, y: number): number {
    return x * y;
  };

  console.log("[Solution 4.6]", capitalize(`nifty ${multiply(5, 10)}`));
};
