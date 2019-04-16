"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = function (a) {
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};
exports.throwIfUndefined = function (a, errorMessage) {
    if (a != null) {
        return a;
    }
    else {
        throw Error(errorMessage);
    }
};
//# sourceMappingURL=utils.js.map