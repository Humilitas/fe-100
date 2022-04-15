function curry(fn) {
    const fnArgLength = fn.length;
    let args = [];

    function calc(...newArgs) {
        this.aaa = 'aaa';
        console.log(newArgs);
        args = [...args, ...newArgs];
        if (args.length < fnArgLength) {
            return calc;
        } else {
            // this | null 均可，此处 this 为 global
            return fn.apply(this, args.slice(0, fnArgLength));
        }
    }

    return calc;
}

function add(a, b, c) {
    return a + b + c;
}

let curryFunc1 = curry(add);
let curryFunc2 = curry(add);
let curryFunc3 = curry(add);
let res1 = curryFunc1(10)(20)(30); // 从左至右依次调用
let res2 = curryFunc2(10)(20, 30);
let res3 = curryFunc3(10, 20, 30);
console.table({
    'curryFunc1(10)(20)(30)': res1,
    'curryFunc2(10)(20,30)': res2,
    'curryFunc3(10, 20, 30)': res3,
})
