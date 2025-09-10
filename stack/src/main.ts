import Stack from "./stack.ts";

let stack = new Stack<number>();
console.group("Push");
stack.push(1);
stack.push(3);
stack.push(5);
stack.traverse();
console.groupEnd();

console.group("Peek");
console.log('Element:', stack.peek());
stack.traverse();
console.groupEnd();

console.group("Pop");
console.log('Element:', stack.pop());
stack.traverse();
console.groupEnd();
