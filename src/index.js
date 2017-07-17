'use strict';

let {
    mergeMap
} = require('bolzano');

let {
    isNumber, isArray, likeArray, isString, isObject, isFunction, isBool, isPromise, isNull, isUndefined, isFalsy, isRegExp, isReadableStream, isWritableStream
} = require('basetype');

const defaultTypeMap = {
    'Number': isNumber,
    'Array': isArray,
    'ArrayLike': likeArray,
    'String': isString,
    'Object': isObject,
    'Function': isFunction,
    'Boolean': isBool,
    'Promise': isPromise,
    'Null': isNull,
    'Undefined': isUndefined,
    'Falsy': isFalsy,
    'RegExp': isRegExp,
    'readableStream': isReadableStream,
    'writableStream': isWritableStream
};

module.exports = ({
    typeMap = {}
} = {}) => {
    // merge user's types
    let types = mergeMap(typeMap, defaultTypeMap);

    /**
     * api definition
     *
     * - api name
     *
     * - param list
     *
     * - return value
     */

    let api = (fun, options = {}) => {
        return function(...args) {
            return fun.apply(this, args);
        };
    };

    return {
        api
    };
};
