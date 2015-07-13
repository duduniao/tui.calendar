/**
 * @fileoverview Helpers for handlebar templates.
 * @author NHN Ent. FE Development Team <e0242@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var Handlebars = require('hbsfy/runtime');

Handlebars.registerHelper('eventName', function() {
    return util.stamp(this) + ': ' + this.title;
});

