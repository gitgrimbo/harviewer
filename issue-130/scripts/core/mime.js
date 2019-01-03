/* See license.txt for terms of usage */

define(["core/trace"],function(r){var t={};return t.extractMimeType=function(r){if("string"!=typeof r)throw new Error(typeof r+" is not of type string");var t=r.indexOf(";");return t>-1&&(r=r.substring(0,t).trim()),r},t});