export default class Stack<T>  {
    private items: T[] = [];

    push(value: T): void {
        this.items.push(value);
    }

    pop(){
       return this.items.pop(); 
    }

    peek():T | null{
        return !this.empty() ? this.items[this.items.length - 1] : null;
    }

    size():number{
        return this.items.length;
    }

    empty():boolean{
        return this.items.length === 0;
    }    

    traverse(callback = console.log):void{
        this.items.forEach(x => callback(x));
    }
}