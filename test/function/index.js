'use strict';

let apiDsl = require('../../');

let {
    api
} = apiDsl();

let assert = require('assert');

describe('api', () => {
    it('base', () => {
        let add = api((v1, v2) => v1 + v2);

        assert(add(1, 2), 3);
    });
});
