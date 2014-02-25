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

  it('can shallow get', function () {
    expect(dobj(obj).get('a')).toBe(obj.a);
  });

  it('can shallow set', function () {
    dobj(obj).set('a', 'ok');
    expect(dobj(obj).get('a')).toBe('ok');
  });

  it('can shallowe del', function () {
    dobj(obj).del('a');
    expect(dobj(obj).get('a')).not.toBeDefined();
  });

  it('has chaining api', function () {
    expect(function () {
      dobj(obj)
        .set('a.b.c', 'ok')
        .del('a.b')
        .get('a');
    }).not.toThrow();
  });

  it('can force set', function () {
    var obj2 = {};
    
    expect(function () {
      dobj(obj2).forceSet('a.b.c', 'ok');
    }).not.toThrow();

    expect(obj2.a.b.c).toBe('ok');
  });

  it('can silent get', function () {
    expect(function () {
      dobj(obj).silentGet('wrong.path');
    }).not.toThrow();
  });

  it('can silent del', function () {
    expect(function () {
      dobj(obj).silentDel('wrong.path');
    }).not.toThrow();
  });

});