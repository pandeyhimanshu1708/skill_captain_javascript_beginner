class MyStack {
    constructor() {
        this.mainQueue = [];
        this.tempQueue = [];
    }
    push(x) {
        this.tempQueue.push(x);
        while (this.mainQueue.length > 0) {
            this.tempQueue.push(this.mainQueue.shift());
        }
        [this.mainQueue, this.tempQueue] = [this.tempQueue, this.mainQueue];
    }
    pop() {
        return this.mainQueue.shift();
    }
    top() {
        return this.mainQueue[0];
    }
    empty() {
        return this.mainQueue.length === 0;
    }
}

