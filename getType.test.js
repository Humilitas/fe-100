const getType = require('./getType')
test('get object type', () => {
    expect(getType(1)).toBe('number');
    expect(getType("")).toBe('string');
    expect(getType([])).toBe('array');
    expect(getType({})).toBe('object');
});
