// Basic Union
let Id: string | number;
Id = 101;
Id = "A101";

// Union in function parameters
function printId(Id: string | number): void {
  console.log("ID: ", Id);
}

printId(3026);
printId("I-3026");
