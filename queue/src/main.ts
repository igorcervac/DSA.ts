import Queue from "./queue.ts";
const queue = new Queue<string>();

console.group("Enqueue:");
queue.enqueue("one");
queue.enqueue("two");
queue.enqueue("three");
queue.traverse();
console.groupEnd();

console.group("Peek:");
console.log(queue.peek());
console.groupEnd();

console.group("Dequeue:");
console.log(queue.dequeue());
queue.traverse();
console.groupEnd();

