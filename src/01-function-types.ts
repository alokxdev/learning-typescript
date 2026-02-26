const greet = (name: string): void => {
  alert(`Hello ${name}`);
};

function callAfterOneSecond(foo: () => void): void {
  setTimeout(foo, 1000);
}

callAfterOneSecond(() => greet("Alok"));
