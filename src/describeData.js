'use strict';

/**
 * define a simple dsl used to describe data
 *
 * data's factors
 *
 * - name
 *
 * - type
 *
 * - description
 *
 * - structure
 *
 * - examples
 */

/**
 * name grammer
 *
 * *: for all child structure
 *
 * type will decide structures of childs
 */

/**
 * TODO type dsl
 */

/**
 * a data can have one or more formats
 *
 * d('details', 'all the detail of project')
 *
 * d('results')
 *
 * d('callback', 'callback function')
 */

let d = (...args) => {
    let name = '',
        detail = '',
        patterns = [];
    if (args.length < 2) {
        name = args[0];
    } else if (args.length === 2) {
        name = args[0];
        patterns = [args[1]];
    } else {
        name = args[0];
        detail = args[1];
        patterns = args.slice(2);
    }
    return {
        name, detail, patterns, descriptionSide: 'data'
    };
};

/**
 * describe a format of data
 *
 * p('array',
 *     d('*', p('Number'))
 * )
 *
 * p('object',
 *     d('name', p('String')),
 *     d('age', p('Number'))
 * )
 */
let p = (type, ...nexts) => {
    return {
        type,
        nexts, descriptionSide: 'pattern'
    };
};

/**
 * describe an object
 *
 * d('headers',
 *   p('Object', d('*', 'String')),
 *   p('Null')
 * )
 *
 * describe an function
 *
 * d('callback', p('Function',
 *    d('params', p('Array', d('filter'), d('listen')), p('Array', d('listen'))),
 *    d('return', p('Object'), p('Undefined'))
 * ))
 */

module.exports = {
    d,
    p,
    data: d, pattern: p
};
