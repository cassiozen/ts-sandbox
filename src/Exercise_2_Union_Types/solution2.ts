// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Solution 2 – Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Understand how TypeScript performs code flow analysis
// • Non-Nullable types
// • Create and apply union and intersection types
// • Use basic type guards (narrowing types w/ typeof, instanceof, etc.)

export default () => {
  // ======== Exercise 2.0 ========
  // In strict mode, types in Typescript are non-nullable - you cannot assign `null` or `undefined`.
  // Instructions:
  // • Fix the error on lines 19 and 20 by setting the type of `secretWord` to `string OR null OR undefined`
  //   (Also called a Union type)

  let secretWord: string | null | undefined;
  secretWord = "supercalifragilisticexpialidocious";
  secretWord = null;
  secretWord = undefined;

  console.log("[Exercise 2.0]", `The secret word is ${secretWord}`);

  // ======== Solution 2.2 ========
  // Instructions:
  // • Restrict type of `value` to `string OR number`
  // • Fix any resulting errors.

  function doStuff(value: string | number): void {
    if (typeof value === "string") {
      console.log(
        value
          .toUpperCase()
          .split("")
          .join(" ")
      );
    } else if (typeof value === "number") {
      console.log(value.toPrecision(5));
    }
  }

  doStuff(2);
  doStuff(22);
  doStuff(222);
  doStuff("hello");
  doStuff("true");
  doStuff("{}");

  console.log("[Solution 2.2]");

  // ======== Solution 2.3 ========
  // Instructions:
  // • Use a type guard to fill out the body of the `padLeft` function.

  function padLeft(value: string, padding: number | string): string {
    if (typeof padding === "number") {
      return `${Array(padding + 1).join(" ")}${value}`;
    } else {
      return padding + value;
    }
  }

  console.log(
    "[Solution 2.3]",
    `
    ${padLeft("🐕", 0)}
    ${padLeft("🐕", "🐩")}
    ${padLeft("🐕", "🐩🐩")}
    ${padLeft("🐕", "🐩🐩🐩")}
    ${padLeft("🐕", "🐩🐩🐩🐩")}
  `
  );
};
