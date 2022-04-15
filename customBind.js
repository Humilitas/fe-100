/**
 * 借助 apply 指定 this 来实现
 * @param context
 * @param bindArgs
 * @returns {function(...[*]=): *}
 */
Function.prototype.customBind = function (context, ...bindArgs) {
    const self = this;
    return function (...args) {
        const newArgs = bindArgs.concat(args);
        return self.apply(context, newArgs);
    }
}

let fn = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c + this.x;
}
let fn1 = fn.customBind({x: 99});
let res1 = fn1(10, 20, 30);
console.log(res1);
let fn2 = fn.customBind({x: 99}, 10, 20);
let res2 = fn2(30);
console.log(res2);
