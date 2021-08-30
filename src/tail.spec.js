const tail = require('./tail');

describe('tail', () => {

    it('tail of [1, 2, 3] is [1, 2]', () => {
        expect(tail([1, 2, 3])).toEqual([1, 2]);
    });

    it('tail of [] is null or undefined', () => {
        expect(tail([])).toEqual([]);
    });

})