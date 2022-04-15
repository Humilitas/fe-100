/**
 * 利用原型链查找实现
 * @param instance
 * @param origin
 * @returns {boolean}
 */
function customInstanceof(instance, origin) {
    if (instance === null) return false;

    const type = typeof instance;
    if (type !== 'object' && type !== 'function') {
        return false;
    }

    let tempInstance = instance;
    while (tempInstance) {
        // console.log('tempInstance.__proto__', tempInstance.__proto__, ' origin.prototype', origin.prototype);
        if (tempInstance.__proto__ === origin.prototype) {
            return true;
        }
        tempInstance = tempInstance.__proto__;
    }
    return false;
}

console.log(customInstanceof([], Array)); // true
console.log(customInstanceof([], Object)); // true
console.log(customInstanceof({}, Array)); // false
console.log(customInstanceof({}, Object)); // true

console.log(customInstanceof(() => {
}, Function)); // true

console.log(customInstanceof('abc', String)); // false
console.log(customInstanceof(100, Number)); // false

class Foo {
}

let foo = new Foo();
console.log(customInstanceof(foo, Foo)); // true
console.log(customInstanceof(foo, Object)); // true
