type Admin = {
  name: string;
  role: "admin";
};

type User = {
  name: string;
  role: "user";
};

type Person = Admin | User;

function greet(person: Person): void {
  console.log("Welcome", person.name);
  if (person.role === "admin") {
    console.log("You have full access");
  }
}

// Handling API response states

type Loading = {
  status: "loading";
};

type Success = {
  status: "success";
  data: string[];
};

type ErrorState = {
  status: "error";
  message: string;
};

type ApiResponse = Loading | Success | ErrorState;

function handleResponse(response: ApiResponse) {
  switch (response.status) {
    case "loading":
      console.log("Loading...");
      break;

    case "success":
      console.log(response.data);
      break;

    case "error":
      console.log(response.message);
      break;
  }
}
