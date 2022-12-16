export class Stack<T> {
    container: T[] = [];

    constructor() {

    }

    push(data: any): void {
        this.container.push(...data.split(''))
    }

    pop(): T | undefined{
        return this.container.pop();
    }

    size(): number {
        return this.container.length;
    }
}