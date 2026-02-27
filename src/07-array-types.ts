interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alok", age: 23 },
  { name: "Rahul", age: 17 },
  { name: "Sneha", age: 29 },
  { name: "Aman", age: 15 },
  { name: "Priya", age: 18 },
];

const filterAdults = (users: User[]) => users.filter((user) => user.age >= 18);
/* 
const filterAdults: (users: User[]) => User[] =
  (users: User[]): User[] =>
    users.filter((user: User): boolean => user.age >= 18);
*/
const adults = filterAdults(users);
console.log(adults);
