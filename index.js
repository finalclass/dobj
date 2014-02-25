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
  silentGet: function (path) {
    try {
      this.get(path);
    } catch (err) {
      return undefined;
    }
  },
  set: function (path, value) {
    var that = this;

    return deepAccess(this.target, path, function (obj, property) {
      obj[property] = value;
      return that;
    });
  },
  forceSet: function (path, value) {
    var parts = path.split('.');
    var target = this.target;
    var i;

    for (i = 0; i < parts.length - 1; i += 1) {
      var part = parts[i];
      if (!(target[part] instanceof Object)) {
        target[part] = {};
      }
      target = target[part];
    }

    target[parts[parts.length - 1]] = value;
    return this;
  },
  del: function (path) {
    var that = this;

    return deepAccess(this.target, path, function (obj, property) {
      delete obj[property];
      return that;
    });
  },
  silentDel: function (path) {
    try {
      return this.del(path);
    } catch (err) {
      return this;
    }
  }
};

var constr = function (target) {
  return new DObj(target);
};

if (typeof window === 'undefined') {
  module.exports = constr;
  constr.expressRoute = require('./express-route.js');
} else {
  window.dobj = constr
}
