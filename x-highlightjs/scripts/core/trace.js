/* See license.txt for terms of usage */

/**
 * @module core/trace
 */
define([
],

function() {

//*************************************************************************************************

var Trace = {
    log: function(){},
    error: function(){},
    exception: function(){},
    time: function(){},
    timeEnd: function(){}
};

if (typeof(console) === "undefined")
    return Trace;


Trace.error = function()
{
    if (typeof(console.error) === "function")
        console.error.apply(console, arguments);
};

Trace.exception = function()
{
    if (typeof(console.error) === "function")
        console.error.apply(console, arguments);
};

return Trace;

//*************************************************************************************************
});
