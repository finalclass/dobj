dobj
====

Object deep dot access. set, get, del methods available

---------------------------------------

## Set

```js
var obj = {
    a: {
        b: {
            c: 'test'
        }
    }
};

dobj(obj).get('a.b.c');
// => 'test'

```

## Get

```js
var obj = {
    a: {
        b: {
            c: 'test'
        }
    }
};

dobj(obj)
    .set('a.b.c', 'ok')
    .get('a.b.c');
// => 'ok'
```

## Del

```js
var obj = {
    a: {
        b: {
            c: 'test'
        }
    }
};

dobj(obj)
    .del('a.b.c')
    .get('a.b.c');
// => undefined
```

**MIT License**