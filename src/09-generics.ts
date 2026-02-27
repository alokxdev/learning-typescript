function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(25);
const str = identity<string>("Alok");

console.log(num, str);

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const nums: number[] = [1, 2, 3, 4];

console.log(firstElement<number>(nums));

function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alok", age: 23 },
  { name: "Sneha", age: 17 },
  { name: "Aman", age: 30 },
];

const adults: User[] = filterItems<User>(users, (user) => user.age >= 18);
console.log(adults);
