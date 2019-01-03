/* See license.txt for terms of usage */

define(["./trace"],function(n){var r={};return r.cloneJSON=function(r){if(null===r||"object"!=typeof r)return r;try{var t=r.constructor();for(var e in r)t[e]=this.cloneJSON(r[e]);return t}catch(r){n.exception(r)}return null},r});