dobj
====

Object deep dot access. set, get, del methods available

---------------------------------------

## License

**MIT License** see LICENSE file.

## Installation

```bash
npm install dobj
```

## API documentation

### `get(path:string) : *`

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

### `set(path:string, value:*) : dobj`

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

### `forceSet(path:string, value:*) : dobj`

This method sets the property (by path) even if the path does not exists. For example:

```js
var obj = {};

dobj(obj)
    .forceSet('a.b.c', 'ok')
    .get('a.b.c');
// => 'ok'
```

### `del(path:string) : dobj`

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

### `silentGet(path:string) : *` and silentDel(path:string) : dobj`

These methods are a "silent" version of get and del. If you call them on paths that does not exists
no exception will be thrown. 
If path is incorrect `silentGet` will return `undefined` and silentDel will remain silent and return dobj as normal `del`.