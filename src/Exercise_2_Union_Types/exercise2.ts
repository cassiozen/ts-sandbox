// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 2 – Union Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • See how TypeScript performs code flow analysis
// • Understand Non-Nullable types
// • Create and apply union types
// • Use basic type guards (narrowing types w/ typeof)

export default () => {
  // ======== Exercise 2.0 ========
  // In strict mode, types in Typescript are non-nullable - you cannot assign `null` or `undefined`.
  // Instructions:
  // • Fix the error on lines 19 and 20 by setting the type of `secretWord` to `string OR null OR undefined`
  //   (Also called a Union type)

  let secretWord: string;
  secretWord = "supercalifragilisticexpialidocious";
  secretWord = null;
  secretWord = undefined;

  console.log("[Exercise 2.0]", `The secret word is ${secretWord}`);

  // ======== Exercise 2.1 ========
  // When using Union Types, TypeScript is intelligent about the possible types of a variable,
  // depending on the code path.
  // Instructions:
  // • Simply inspect the possible types by hovering over `text` to see
  //   how the inferred type changes if assumptions can be safely made
  //   about the possible types within the given code path.

  function trimmedLength1(text: string | null | undefined) {
    text; // text: string | null | undefined

    if (typeof text === "string") {
      text; // text: string

      return text.trim().length;
    }

    text; // text: null | undefined
  }

  function trimmedLength2(text: string | null | undefined) {
    text; // text: string | null | undefined

    if (typeof text === "string") {
      text; // text: string

      return text.trim().length;
    } else if (text == null) {
      text; // text: null | undefined (remember == coerces undefined)

      return;
    }

    text; // text: never
  }

  function trimmedLength3(text: any) {
    text; // text: any

    if (typeof text === "string") {
      return text.trim().length; // text: string
    }

    text; // text: any (note how TS does not subtract types from `any`)
  }

  console.log("[Exercise 2.1]", `${trimmedLength1("   hi     ")}`);

  // ======== Exercise 2.2 ========
  // Instructions:
  // • Restrict type of `value` to `string OR number`
  // • Fix any resulting errors.

  function doStuff(value: any): void {
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

    value; // hover over `value` here
  }

  doStuff(2);
  doStuff(22);
  doStuff(222);
  doStuff("hello");
  doStuff(true);
  doStuff({});

  console.log("[Exercise 2.2]");

  // ======== Exercise 2.3 ========
  // Instructions:
  // • Use a type guard to fill out the body of the `padLeft` function.

  function padLeft(value: string, padding: number | string): string {
    // if padding is a number, return `${Array(padding + 1).join(' ')}${value}`
    // if padding is a string, return padding + value
  }

  console.log(
    "[Exercise 2.3]",
    `
    ${padLeft("🐕", 0)}
    ${padLeft("🐕", "🐩")}
    ${padLeft("🐕", "🐩🐩")}
    ${padLeft("🐕", "🐩🐩🐩")}
    ${padLeft("🐕", "🐩🐩🐩🐩")}
  `
  );
};
