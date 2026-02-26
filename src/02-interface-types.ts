interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function canVote(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const result = canVote({
  firstName: "Alok",
  lastName: "Thakur",
  age: 23,
  email: "alokforreal@gmail.com",
});

console.log(result);
