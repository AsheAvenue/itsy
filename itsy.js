/*!
 * itsy.js 0.0.1
 * https://github.com/AsheAvenue/itsy
 *
 * Copyright 2014 Ashe Avenue. Created by Heath Beckett and Tim Boisvert.
 * Released under the MIT license
 */

var itz = function() {};

itz.version    = '0.0.1';

itz.getId = function(id) {
    if (id == null) return;
    return document.getElementById(id);
}

itz.getTag = function(tagName) {
    if (tagName == null) return;
    return document.getElementsByTagName(tagName);
};

itz.getClass = function(className) {
    var els = document.getElementsByTagName('*'),
        returnEls = [],
        i;
    for (i in els) {
        if ((' ' + els[i].className + ' ').indexOf(' ' + className + ' ') > -1) {
            returnEls.push(els[i]);
        }
    }
    if (returnEls.length) {
        return returnEls;
    } else {
        return false;
    }
};

itz.each = function(obj, iterator, context) {
    if (obj == null) return;
    if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
        for (var i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(context, obj[i], i, obj) === {}) return;
        }
    } else {
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === {}) return;
        }
    }
};

// todo: itz.post

// todo: itz.get