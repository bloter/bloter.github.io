/**
* Copyright 2012-2015, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var Plotly = require('../../plotly');

Plotly.Plots.register(exports, 'contour',
    ['cartesian', '2dMap', 'contour'], {
    description: [
        'The data from which contour lines are computed is set in `z`.',
        'Data in `z` must be a {2D array} of numbers.',

        'Say that `z` has N rows and M columns, then by default,',
        'these N rows correspond to N y coordinates',
        '(set in `y` or auto-generated) and the M columns',
        'correspond to M x coordinates (set in `x` or auto-generated).',

        'By setting `transpose` to *true*, the above behavior is flipped.'
    ].join(' ')
});

exports.attributes = require('./attributes');

exports.supplyDefaults = require('./defaults');

exports.calc = require('./calc');

exports.plot = require('./plot');

exports.style = require('./style');

exports.colorbar = require('./colorbar');

exports.hoverPoints = require('./hover');
