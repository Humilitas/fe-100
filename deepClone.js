function deepClone(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    let target = {};

    // 解决循环引用问题
    const objFromMap = map.get(obj)
    if (objFromMap) {
        // console.log('---',objFromMap)
        return objFromMap;
    }
    map.set(obj, target);

    if (obj instanceof Map) {
        target = new Map();
        obj.forEach((v, k) => {
            const v1 = deepClone(v);
            const k1 = deepClone(k);
            target.set(k1, v1);
        })
    }

    if (obj instanceof Set) {
        target = new Set();
        obj.forEach(v => {
            const v1 = deepClone(v);
            target.add(v1);
        });
    }

    if (obj instanceof Array) {
        target = obj.map(i => deepClone(i, map));
    }

    for (const k in obj) {
        target[k] = deepClone(obj[k], map);
    }

    return target;
}


let origin = {
    a: 1,
    arr: [2, 3],
    obj: {
        foo: 'bar'
    },
    fn: () => {
    },
    set: new Set('set'),
    map: new Map().set('map', 'map'),

}
origin.self = origin;

const clone = deepClone(origin)
for (const k in clone) {
    console.log(k, clone[k])
}
