type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "Alok",
  age: 23,
  employeeId: 101,
  department: "Engineering",
};
