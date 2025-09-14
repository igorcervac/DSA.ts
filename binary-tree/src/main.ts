import BinaryTree from "./binary-tree.ts";

const binaryTree = new BinaryTree<number>();

binaryTree.insert(9);
binaryTree.insert(7);
binaryTree.insert(11);
binaryTree.insert(5);
binaryTree.insert(8);

console.group("In-order:");
binaryTree.traverseInOrder();
console.groupEnd();

console.group("Pre-order:");
binaryTree.traversePreOrder();
console.groupEnd();

console.group("Post-order:");
binaryTree.traversePostOrder();
console.groupEnd();

console.group("In-breadth:");
binaryTree.traverseInBreadth();
console.groupEnd();