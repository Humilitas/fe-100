function flatten(arr) {
    console.info(arr);
    let res = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            let temp = flatten(item);
            res.push(...temp);
        } else {
            res.push(item)
        }
    });

    return res;
}

console.info(flatten([1, 2, 3, [4, 5], [6, ['a'], 7]]))
