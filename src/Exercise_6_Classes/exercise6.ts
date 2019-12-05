// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//    Exercise 6 – Classes
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Create classes with typed properties and methods
// • Add access modifiers to class members

export default () => {
  // ======== Exercise 6.1 ========
  // Goals:
  // • Add explicit parameter type to the greet method
  // • Add explicit return type to the greet method

  class MC {
    greet(event = "party") {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log("[Exercise 6.1]", mc.greet("show"));

  // ======== Exercise 6.2 ========
  // Goals:
  // • Add explicit parameter types to constructor
  // • Add typed parameters for storing values

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const jane = new Person("Jane", 31);

  console.log("[Exercise 6.2]", `The new person's name is ${jane.name}.`);

  // ======== Exercise 6.3 ========
  // Goals:
  // • Explicitly make the title and salary properties publicly available
  // • Reduce class to three lines of code while maintaining functionality

  class Employee {
    title: string;
    salary: number;
    constructor(title: string, salary: number) {
      this.title = title;
      this.salary = salary;
    }
  }

  const employee = new Employee("Engineer", 100000);

  console.log(
    "[Exercise 6.3]",
    `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`
  );

  // ======== Exercise 6.4 ========
  // Goals:
  // • Add complete typing
  // • Make the Snake class inherit from Animal
  // • Make the Pony class inherit from Animal
  // • Make it so that the name member cannot be publicly accessed

  class Animal {
    constructor(name) {}
    move(meters) {
      console.log(`${this.name} moved ${meters}m.`);
    }
  }

  class Snake {
    move(meters) {
      console.log("Slithering...");
      // should call on parent's `move` method, w/ a default
      // slither of 5 meters
    }
  }

  class Pony {
    move(meters) {
      console.log("Galloping...");
      // should call on parent's `move` method, w/ a default
      // gallop of 60 meters
    }
  }

  // The class Animal should not be instantiable.
  // Delete or comment out once the desired error is achieved.
  const andrew = new Animal("Andrew the Animal");
  andrew.move(5);

  const sammy = new Snake("Sammy the Snake");
  sammy.move();
  console.log(sammy.name); // Should return error

  const pokey = new Pony("Pokey the Pony");
  pokey.move(34);
  console.log(pokey.name); // Should return error

  // ======== Exercise 6.5 ========
  // Goals:
  // • Make it so that only the Desk and Chair classes can see the
  //   manufacturer member

  class Furniture {
    constructor(manufacturer: string = "IKEA") {}
  }

  class Desk extends Furniture {
    kind() {
      console.log(
        "[Exercise 6.5]",
        `This is a desk made by ${this.manufacturer}`
      );
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log(
        "[Exercise 6.5]",
        `This is a chair made by ${this.manufacturer}`
      );
    }
  }

  const desk = new Desk();
  desk.kind();
  desk.manufacturer; // Should return error

  const chair = new Chair();
  chair.kind();
  chair.manufacturer; // Should return error

  // ======== Exercise 6.6 ========
  // Goals:
  // • Eliminate the error without changing references to `Student.school`

  class Student {
    public school: string = "Harry Herpson High School";
    constructor(private name: string) {}
    introduction() {
      console.log(
        "[Exercise 6.6]",
        `Hi, my name is ${this.name} and I attend ${Student.school}`
      );
    }
  }

  const student = new Student("Morty");
  console.log(Student.school);
  student.introduction();
};
