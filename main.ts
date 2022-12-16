import { Queue } from "./Queue";
import { Stack } from "./Stack";

let stack: any = new Stack;
let queue = new Queue;

let words: any = "ablewas / ere / sawelba"

stack.push(words)
queue.enqueue(words)

let checktimes = stack.size()
let counts = 0
let result = true;
while(counts < checktimes) {
    if (stack.pop() !== queue.dequeue()) {
        result = false
    }
    else {
        result = true
    }
    counts++
}

if (result) {
    console.log('Reflection')
}
else {
    console.log('No Reflection')
}










