export class Queue<T> {
    container: T[] = [];

    constructor() {
        
    }

    enqueue(data: any): void {
        this.container.push(...data.split(''));
    }

    dequeue() {
        return this.container.shift();
    }

    size() {
        return this.container.length;
    }
}