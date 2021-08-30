const map = require('./map');

describe('map', () => {

    it('map([1,2,3], cube) should give [1,8,27]', () => {
        const res = map([1, 2, 3], x => x*x*x);
        expect(res).toEqual([1, 8, 27]);
    });

    it('map([], cube) should give []', () => {
        const res = map([], x => x*x*x);
        expect(res).toEqual([]);
    });

    it('map([1,2,3], identity) should give [1,2,3]', () => {
        const res = map([1, 2, 3], x => x);
        expect(res).toEqual([1, 2, 3]);
    });

    it('map([a{x : 10}],someObject => someObject.x + 1) -> [11]', () => {
        const res = map([{x : 10}], a => a.x + 1);
        expect(res).toEqual([11]);
    });
    
})