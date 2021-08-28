const map = require('./map');

describe('map', () => {

    it('map([1,2,3], cube) should give [1,8,27]', () => {
        const res = map([1, 2, 3], "cube");
        expect(res).toEqual([1, 8, 27]);
    });

    it('map([], cube) should give []', () => {
        const res = map([], "cube");
        expect(res).toEqual([]);
    });

    it('map([1,2,3], identity) should give [1,2,3]', () => {
        const res = map([1, 2, 3], "identity");
        expect(res).toEqual([1, 2, 3]);
    });

})