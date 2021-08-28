const tail = require('./tail');

describe('tail', () => {

    it('tail of [1, 2, 3] is 3', () => {
        expect(tail([1, 2, 3])).toEqual(3);
    });

    it('tail of [] is null or undefined', () => {
        expect(tail([])).toEqual(null || undefined);
    });

})