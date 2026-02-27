enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

type User = {
  name: string;
  role: Role;
};

const users: User[] = [
  { name: "Alok", role: Role.Admin },
  { name: "Sneha", role: Role.User },
  { name: "Aman", role: Role.Guest },
];

// Check who has admin access
users.forEach((user) => {
  if (user.role === Role.Admin) {
    console.log(`${user.name} has full access`);
  } else {
    console.log(`${user.name} has limited access`);
  }
});
