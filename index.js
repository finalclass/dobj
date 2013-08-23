function deepAccess(target, path, callback) {
    var parts = path.split('.'),
        i;

    for (i = 0; i < parts.length - 1; i += 1) {
        target = target[parts[i]];
    }

    return callback(target, parts[parts.length - 1]);
}
function DObj(target) {
    this.target = target;
}

DObj.prototype = {
    get: function (path) {
        return deepAccess(this.target, path, function (obj, property) {
            return obj[property];
        });
    },
    set: function (path, value) {
        var that = this;

        return deepAccess(this.target, path, function (obj, property) {
            obj[property] = value;
            return that;
        });
    },
    del: function (path) {
        return deepAccess(this.target, path, function (obj, property) {
            delete obj[property];
        });
    }
};


module.exports = function (target) {
    return new DObj(target);
};