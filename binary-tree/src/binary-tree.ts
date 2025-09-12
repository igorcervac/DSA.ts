class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }   
}

export default class BinaryTree<T>{
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value: T):void {
        const node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }

        let current: TreeNode<T> = this.root;

        while (true){
            if (value < current.value) {
                if (!current.left){
                    current.left = node;
                    return;
                }

                current = current.left;
            }
            else {
                if (!current.right){
                    current.right = node;
                    return;
                }

                current = current.right;
            }
        }
    }

    traverseInOrder(node: TreeNode<T> | null = this.root, callback = console.log){
        if (node) {
            this.traverseInOrder(node.left);
            callback(node.value);
            this.traverseInOrder(node.right);
        }
    }

    traversePreOrder(node: TreeNode<T> | null = this.root, callback = console.log){
        if (node) {
            callback(node.value);
            this.traversePreOrder(node.left, callback);
            this.traversePreOrder(node.right, callback);
        }
    }

     traversePostOrder(node: TreeNode<T> | null = this.root, callback = console.log){
        if (node) {
            this.traversePostOrder(node.left, callback);
            this.traversePostOrder(node.right, callback);
            callback(node.value);
        }
    }
}