export class Queue<T> {
    container: T[] = [];

    constructor() {
        
    }

    enqueue(data: T): void {
        this.container.push(data);
    }

    dequeue() {
        return this.container.shift();
    }

    size() {
        return this.container.length;
    }
}