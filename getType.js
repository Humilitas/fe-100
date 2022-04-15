function getType(obj) {
    let str = Object.prototype.toString.call(obj);
    return str.slice(8, -1).toLowerCase();
}


module.exports = getType
