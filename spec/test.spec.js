var dobj = require('../index.js');

describe('dobj', function () {

    var obj;

    beforeEach(function () {
        obj = {
            a: {
                b: {
                    c: 'test'
                }
            }
        };
    });

    it('can get', function () {
        expect(dobj(obj).get('a.b.c')).toBe('test');
    });

    it('can set', function () {
        dobj(obj).set('a.b', {d: 'test'});
        expect(dobj(obj).get('a.b.d')).toBe('test');
    });

    it('can delete', function () {
        dobj(obj).del('a.b.c');
        expect(dobj(obj).get('a.b.c')).not.toBeDefined();
    });

});