/**
 * 自定义 call，利用“调用对象方法时 this 指向此对象”的特性来实现
 * @param context
 * @param args
 * @returns {*}
 */
Function.prototype.customCall = function (context, ...args) {
    if (!context) {
        context = globalThis; // 未传入则为全局对象
    }
    if (typeof context !== 'object') {
        context = new Object(context);
    }

    const fnKey = Symbol(); // 避免冲突
    context[fnKey] = this; // 此处 this 即目标函数
    const res = context[fnKey](...args); // 在 context 对象中调用目标函数，调用时的 this 即为 context
    delete context[fnKey]; // 清理

    return res;
}
/**
 * 自定义 apply，利用“调用对象方法时 this 指向此对象”的特性来实现
 * @param context
 * @param args
 * @returns {*}
 */
Function.prototype.customApply = function (context, args) {
    if (!context) {
        context = globalThis; // 未传入则为全局对象
    }
    if (typeof context !== 'object') {
        context = new Object(context);
    }

    const fnKey = Symbol(); // 避免冲突
    context[fnKey] = this; // 此处 this 即目标函数
    const res = context[fnKey](...args); // 在 context 对象中调用目标函数，调用时的 this 即为 context
    delete context[fnKey]; // 清理

    return res;
}

function fn(a, b) {
    console.log(this);
    return a + b + this.x;
}

let callRes = fn.customCall({x: 10}, 5, 6);
let callRes2 = fn.customCall(null, 5, 6);
let applyRes = fn.customApply({x: 10}, [5, 6]);
console.table({
    callRes,
    callRes2,
    applyRes
})
