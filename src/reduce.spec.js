const reduce = require('./reduce');

describe('reduce', () => {

    it('reduce([],(x,y)=>x+y)', () => {
        expect(reduce([], (x, y) => x+y)).toEqual(undefined);
    });

    it('reduce([],(x,y)=>x+y)', () => {
        expect(reduce([], (x, y) => x+y, 10)).toEqual(10);
    });

    it('reduce([a, b, c],(x,y)=>x+y) should be abc', () => {
        expect(reduce(['a', 'b', 'c'], (x, y) => x+y)).toEqual('abc');
    });

    it('reduce([a, b, c],(x,y)=>x+y,’z’), should be zabc', () => {
        expect(reduce(['a', 'b', 'c'], (x, y) => x+y, 'z')).toEqual('zabc');
    });
})