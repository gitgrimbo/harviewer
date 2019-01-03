/*
	Downloadify: Client Side File Creation
	JavaScript + Flash Library
	
	Version: 0.1

	Copyright (c) 2009 Douglas C. Neiner

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

!function(){Downloadify=window.Downloadify={queue:{},uid:(new Date).getTime(),getTextForSave:function(n){var e=Downloadify.queue[n];return e?e.getData():""},getFileNameForSave:function(n){var e=Downloadify.queue[n];return e?e.getFilename():""},saveComplete:function(n){var e=Downloadify.queue[n];return e&&e.complete(),!0},saveCancel:function(n){var e=Downloadify.queue[n];return e&&e.cancel(),!0},saveError:function(n){var e=Downloadify.queue[n];return e&&e.error(),!0},addToQueue:function(n){Downloadify.queue[n.queue_name]=n},getUID:function(n){return""==n.id&&(n.id="downloadify_"+Downloadify.uid++),n.id}},Downloadify.create=function(n,e){var o="string"==typeof n?document.getElementById(n):n;return new Downloadify.Container(o,e)},Downloadify.Container=function(n,e){var o=this;o.el=n,o.enabled=!0,o.dataCallback=null,o.filenameCallback=null,o.data=null,o.filename=null;var a=function(){o.options=e,o.options.append||(o.el.innerHTML=""),o.flashContainer=document.createElement("span"),o.el.appendChild(o.flashContainer),o.queue_name=Downloadify.getUID(o.flashContainer),"function"==typeof o.options.filename?o.filenameCallback=o.options.filename:o.options.filename&&(o.filename=o.options.filename),"function"==typeof o.options.data?o.dataCallback=o.options.data:o.options.data&&(o.data=o.options.data);var n={queue_name:o.queue_name,width:o.options.width,height:o.options.height},a={allowScriptAccess:"always"},t={id:o.flashContainer.id,name:o.flashContainer.id};o.options.enabled===!1&&(o.enabled=!1),o.options.transparent===!0&&(a.wmode="transparent"),o.options.downloadImage&&(n.downloadImage=o.options.downloadImage),swfobject.embedSWF(o.options.swf,o.flashContainer.id,o.options.width,o.options.height,"10",null,n,a,t),Downloadify.addToQueue(o)};o.enable=function(){var n=document.getElementById(o.flashContainer.id);n.setEnabled(!0),o.enabled=!0},o.disable=function(){var n=document.getElementById(o.flashContainer.id);n.setEnabled(!1),o.enabled=!1},o.getData=function(){return o.enabled?o.dataCallback?o.dataCallback():o.data?o.data:"":""},o.getFilename=function(){return o.filenameCallback?o.filenameCallback():o.filename?o.filename:""},o.complete=function(){"function"==typeof o.options.onComplete&&o.options.onComplete()},o.cancel=function(){"function"==typeof o.options.onCancel&&o.options.onCancel()},o.error=function(){"function"==typeof o.options.onError&&o.options.onError()},a()},Downloadify.defaultOptions={swf:"media/downloadify.swf",downloadImage:"images/download.png",width:100,height:30,transparent:!0,append:!1}}(),"undefined"!=typeof jQuery&&!function(n){n.fn.downloadify=function(e){return this.each(function(){e=n.extend({},Downloadify.defaultOptions,e);var o=Downloadify.create(this,e);n(this).data("Downloadify",o)})}}(jQuery);