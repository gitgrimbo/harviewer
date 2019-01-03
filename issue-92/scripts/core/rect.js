/* See license.txt for terms of usage */

define(["./trace"],function(t){var e={};return e.inflateRect=function(t,e,n){return{top:t.top-n,left:t.left-e,height:t.height+2*n,width:t.width+2*e}},e.pointInRect=function(t,e,n){return n>=t.top&&n<=t.top+t.height&&e>=t.left&&e<=t.left+t.width},e});