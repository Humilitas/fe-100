class LazyMan {
    name = '';
    tasks = [];
    constructor(name) {
        this.name = name;
        // setTimeout(() => {
        //     this.next();
        // }, 0);
    }
    next() {
        const task = this.tasks.shift();
        task && task();
    }
    eat(food) {
        const task = () => {
            console.log(`${this.name} eat ${food}`);
            this.next();
        }
        this.tasks.push(task);
        return this;
    }
    sleep(second) {
        const task = () => {
            console.log(`${this.name} sleep ${second} seconds`);
            setTimeout(() => {
                console.log(`${this.name} awake`);
                this.next();
            }, second * 1000);
        }
        this.tasks.push(task);
        return this;
    }
}

const man = new LazyMan('loo');
man.eat('apple').sleep(4).eat('orange');
man.next(); // initial excution

let m = new Map();
m.set('a',1)
m.set('b',1)
m.set('c',1)
m.set('a',999)

console.log(m);
