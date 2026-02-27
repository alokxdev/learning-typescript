interface Person {
  name: string;
  age: number;
  sex: string;
}

class Employee implements Person {
  name: string;
  age: number;
  sex: string;

  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

const greet: (employee: Employee) => void = (employee: Employee) =>
  console.log(`Hello, ${employee.name}`);

const emnployee = new Employee("Alok", 23, "Male");

greet(emnployee);
