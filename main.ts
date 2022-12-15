import { Queue } from "./Queue";
import { Stack } from "./Stack";

let stack = new Stack;
let queue = new Queue;

stack.container.push('able was');
stack.container.push('ere');
stack.container.push('saw elba');

queue.container.push('able was');
queue.container.push('ere');
queue.container.push('saw elba');

for (let i = 0; i < queue.size(); i++) {
    if (stack.pop() == queue.dequeue()) {
        console.log('Reflection') 
    }
    else {
        console.log('No Reflection')
    }
}








