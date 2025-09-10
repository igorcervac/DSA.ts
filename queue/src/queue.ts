export default class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];        
    }

    enqueue(value: T):void {
        this.items.push(value);
    }

    peek():T | undefined{
        return !this.empty() ? this.items[0] : undefined;
    }

    dequeue():T | undefined{
        return this.items.shift();
    }

    size(): number{
        return this.items.length;
    }

    empty():boolean{
        return this.items.length === 0;
    }

    traverse(callback = console.log):void {
        this.items.forEach(x => callback(x));
    }
}