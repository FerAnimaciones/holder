/*!

Holder - client side image placeholders
Version 2.4.0+8fvge
© 2014 Ivan Malopinsky - http://imsky.co

Site:		http://imsky.github.io/holder
Issues:		https://github.com/imsky/holder/issues
License:	http://opensource.org/licenses/MIT

*/
!function(t,e,n){e[t]=n}("onDomReady",this,function(t){"use strict";function e(t){if(!y){if(!a.body)return r(e);for(y=!0;t=S.shift();)r(t)}}function n(t){(v||t.type===l||a[h]===c)&&(i(),e())}function i(){v?(a[x](p,n,s),t[x](l,n,s)):(a[g](w,n),t[g](u,n))}function r(t,e){setTimeout(t,+e>=0?e:1)}function o(t){y?r(t):S.push(t)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function _(){document.removeEventListener("DOMContentLoaded",_,!1),document.readyState="complete"},!1),document.readyState="loading");var a=t.document,d=a.documentElement,l="load",s=!1,u="on"+l,c="complete",h="readyState",f="attachEvent",g="detachEvent",m="addEventListener",p="DOMContentLoaded",w="onreadystatechange",x="removeEventListener",v=m in a,b=s,y=s,S=[];if(a[h]===c)r(e);else if(v)a[m](p,n,s),t[m](l,n,s);else{a[f](w,n),t[f](u,n);try{b=null==t.frameElement&&d}catch(C){}b&&b.doScroll&&!function A(){if(!y){try{b.doScroll("left")}catch(t){return r(A,50)}i(),e()}}()}return o.version="1.4.0",o.isReady=function(){return y},o}(this)),document.querySelectorAll||(document.querySelectorAll=function(t){var e,n=document.createElement("style"),i=[];for(document.documentElement.firstChild.appendChild(n),document._qsa=[],n.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),n.parentNode.removeChild(n);document._qsa.length;)e=document._qsa.shift(),e.style.removeAttribute("x-qsa"),i.push(e);return document._qsa=null,i}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),document.getElementsByClassName||(document.getElementsByClassName=function(t){return t=String(t).replace(/^|\s+/g,"."),document.querySelectorAll(t)}),function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.atob=t.atob||function(t){t=String(t);var n,i=0,r=[],o=0,a=0;if(t=t.replace(/\s/g,""),t.length%4===0&&(t=t.replace(/=+$/,"")),t.length%4===1)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(t))throw Error("InvalidCharacterError");for(;i<t.length;)n=e.indexOf(t.charAt(i)),o=o<<6|n,a+=6,24===a&&(r.push(String.fromCharCode(o>>16&255)),r.push(String.fromCharCode(o>>8&255)),r.push(String.fromCharCode(255&o)),a=0,o=0),i+=1;return 12===a?(o>>=4,r.push(String.fromCharCode(255&o))):18===a&&(o>>=2,r.push(String.fromCharCode(o>>8&255)),r.push(String.fromCharCode(255&o))),r.join("")},t.btoa=t.btoa||function(t){t=String(t);var n,i,r,o,a,d,l,s=0,u=[];if(/[^\x00-\xFF]/.test(t))throw Error("InvalidCharacterError");for(;s<t.length;)n=t.charCodeAt(s++),i=t.charCodeAt(s++),r=t.charCodeAt(s++),o=n>>2,a=(3&n)<<4|i>>4,d=(15&i)<<2|r>>6,l=63&r,s===t.length+2?(d=64,l=64):s===t.length+1&&(l=64),u.push(e.charAt(o),e.charAt(a),e.charAt(d),e.charAt(l));return u.join("")}}(this),function(){function t(e,n,i){e.document;var r,o=e.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],a=o[1],d=o[2];return i=i?/%|em/.test(d)&&e.parentElement?t(e.parentElement,"fontSize",null):16:i,r="fontSize"==n?i:/width/i.test(n)?e.clientWidth:e.clientHeight,"%"==d?a/100*r:"cm"==d?.3937*a*96:"em"==d?a*i:"in"==d?96*a:"mm"==d?.3937*a*96/10:"pc"==d?12*a*96/72:"pt"==d?96*a/72:a}function e(t,e){var n="border"==e?"Width":"",i=e+"Top"+n,r=e+"Right"+n,o=e+"Bottom"+n,a=e+"Left"+n;t[e]=(t[i]==t[r]&&t[i]==t[o]&&t[i]==t[a]?[t[i]]:t[i]==t[o]&&t[a]==t[r]?[t[i],t[r]]:t[a]==t[r]?[t[i],t[r],t[o]]:[t[i],t[r],t[o],t[a]]).join(" ")}function n(n){var i,r=this,o=n.currentStyle,a=t(n,"fontSize"),d=function(t){return"-"+t.toLowerCase()};for(i in o)if(Array.prototype.push.call(r,"styleFloat"==i?"float":i.replace(/[A-Z]/,d)),"width"==i)r[i]=n.offsetWidth+"px";else if("height"==i)r[i]=n.offsetHeight+"px";else if("styleFloat"==i)r.float=o[i];else if(/margin.|padding.|border.+W/.test(i)&&"auto"!=r[i])r[i]=Math.round(t(n,i,a))+"px";else if(/^outline/.test(i))try{r[i]=o[i]}catch(l){r.outlineColor=o.color,r.outlineStyle=r.outlineStyle||"none",r.outlineWidth=r.outlineWidth||"0px",r.outline=[r.outlineColor,r.outlineWidth,r.outlineStyle].join(" ")}else r[i]=o[i];e(r,"margin"),e(r,"padding"),e(r,"border"),r.fontSize=Math.round(a)+"px"}window.getComputedStyle||(n.prototype={constructor:n,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")},getPropertyValue:function(t){return this[t.replace(/-\w/g,function(t){return t[1].toUpperCase()})]},item:function(t){return this[t]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")}},window.getComputedStyle=Window.prototype.getComputedStyle=function(t){return new n(t)})}(),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(t){var e=this.__proto__||this.constructor.prototype;return t in this&&(!(t in e)||e[t]!==this[t])}),function(t,e){function n(t,e,n,r){var o=i(n.substr(n.lastIndexOf(t.domain)+t.domain.length+1).split("/"),t);o&&(o.fluid?a("fluid",r,o,n,e):a("image",r,o,n,e))}function i(t,e){for(var n={theme:u(m.settings.themes.gray,{})},i=!1,r=t.length,o=0;r>o;o++){var a=t[o];if(m.flags.dimensions.match(a))i=!0,n.dimensions=m.flags.dimensions.output(a);else if(m.flags.fluid.match(a))i=!0,n.dimensions=m.flags.fluid.output(a),n.fluid=!0;else if(m.flags.textmode.match(a))n.textmode=m.flags.textmode.output(a);else if(m.flags.colors.match(a)){var d=m.flags.colors.output(a);n.theme=u(d,n.theme)}else e.themes[a]?e.themes.hasOwnProperty(a)&&(n.theme=u(e.themes[a],{})):m.flags.font.match(a)?n.font=m.flags.font.output(a):m.flags.auto.match(a)?n.auto=!0:m.flags.text.match(a)&&(n.text=m.flags.text.output(a))}return i?n:!1}function r(t,e,n){e=parseInt(e,10),t=parseInt(t,10);var i=Math.max(e,t),r=Math.min(e,t),o=1/12,a=Math.min(.75*r,.75*i*o);return Math.round(Math.max(n,a))}function o(t,e,n,i){var o=null,a=e.dimensions,d=e.template,l=e.holder,s=a.width,u=a.height,c=r(s,u,d.size),h=d.font?d.font:"Arial, Helvetica, sans-serif",f=d.fontweight?d.fontweight:"bold",g=Math.floor(s)+"x"+Math.floor(u),m=d.text?d.text:g;if("literal"==l.textmode){var a=l.dimensions;m=a.width+"x"+a.height}else if("exact"==l.textmode&&l.exact_dimensions){var a=l.exact_dimensions;m=Math.floor(a.width)+"x"+Math.floor(a.height)}var p={text:m,width:s,height:u,text_height:c,font:h,font_weight:f,template:d};if("canvas"==i.renderer?o=w(p):"svg"==i.renderer&&(o="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(x(p))))),null==o)throw"Holder: couldn't render placeholder";"background"==t?(n.style.backgroundImage="url("+o+")",n.style.backgroundSize=e.dimensions.width+"px "+e.dimensions.height+"px"):n.setAttribute("src",o),n.setAttribute("data-holder-rendered",!0)}function a(t,e,n,i,r){var a=n.dimensions,l=n.theme,c=n.text?decodeURIComponent(n.text):n.text,h=a.width+"x"+a.height;l=c?u(l,{text:c}):l,l=n.font?u(l,{font:n.font}):l,e.setAttribute("data-src",i),n.theme=l,e.holderData=n,e.configData=r,"image"==t?(e.setAttribute("alt",c?c:l.text?l.text+" ["+h+"]":h),"html"!=r.renderer&&n.auto||(e.style.width=a.width+"px",e.style.height=a.height+"px"),"html"==r.renderer?e.style.backgroundColor=l.background:(o(t,{dimensions:a,template:l,ratio:m.config.ratio,holder:n},e,r),n.textmode&&"exact"==n.textmode&&(m.runtime.resizableImages.push(e),d(e)))):"background"==t?"html"!=r.renderer&&o(t,{dimensions:a,template:l,ratio:m.config.ratio,holder:n},e,r):"fluid"==t&&(e.setAttribute("alt",c?c:l.text?l.text+" ["+h+"]":h),"%"==a.height.slice(-1)?e.style.height=a.height:null!=n.auto&&n.auto||(e.style.height=a.height+"px"),"%"==a.width.slice(-1)?e.style.width=a.width:null!=n.auto&&n.auto||(e.style.width=a.width+"px"),("inline"==e.style.display||""===e.style.display||"none"==e.style.display)&&(e.style.display="block"),s(e),"html"==r.renderer?e.style.backgroundColor=l.background:(m.runtime.resizableImages.push(e),d(e)))}function d(t){var e;e=null==t||null==t.nodeType?m.runtime.resizableImages:[t];for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i.holderData){var r=i.holderData,a=l(i,p.invisibleErrorFn(d));if(a){if(r.fluid&&r.auto)switch(r.fluid_data.mode){case"width":a.height=a.width/r.fluid_data.ratio;break;case"height":a.width=a.height*r.fluid_data.ratio}var s={dimensions:a,template:r.theme,ratio:m.config.ratio,holder:r};r.textmode&&"exact"==r.textmode&&(r.exact_dimensions=a,s.dimensions=r.dimensions),o("image",s,i,i.configData)}}}}function l(t,e){var n={height:t.clientHeight,width:t.clientWidth};return n.height||n.width?(t.removeAttribute("data-holder-invisible"),n):(t.setAttribute("data-holder-invisible",!0),void e.call(this,t))}function s(t){if(t.holderData){var e=l(t,p.invisibleErrorFn(s));if(e){var n=t.holderData;n.initial_dimensions=e,n.fluid_data={fluid_height:"%"==n.dimensions.height.slice(-1),fluid_width:"%"==n.dimensions.width.slice(-1),mode:null},n.fluid_data.fluid_width&&!n.fluid_data.fluid_height?(n.fluid_data.mode="width",n.fluid_data.ratio=n.initial_dimensions.width/parseFloat(n.dimensions.height)):!n.fluid_data.fluid_width&&n.fluid_data.fluid_height&&(n.fluid_data.mode="height",n.fluid_data.ratio=parseFloat(n.dimensions.width)/n.initial_dimensions.height)}}}function u(t,e){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return n}function c(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+":"+t[n]);return e.join(";")}function h(t){m.runtime.debounceTimer||t.call(this),m.runtime.debounceTimer&&clearTimeout(m.runtime.debounceTimer),m.runtime.debounceTimer=setTimeout(function(){m.runtime.debounceTimer=null,t.call(this)},m.config.debounce)}function f(){h(function(){d(null)})}function g(t,e){var n=new Image;n.onerror=function(){e.call(this,!1,t)},n.onload=function(){e.call(this,!0,t)},n.src=t.src}var m={},p={addTheme:function(t,e){return null!=t&&null!=e&&(m.settings.themes[t]=e),this},addImage:function(t,e){var n=document.querySelectorAll(e);if(n.length)for(var i=0,r=n.length;r>i;i++){var o=document.createElement("img");o.setAttribute("data-src",t),n[i].appendChild(o)}return this},run:function(t){var e=u({},m.config);m.runtime.preempted=!0;var r=u(m.settings,t),o=[],d=[],l=[];for(r.use_canvas?e.renderer="canvas":r.use_svg&&(e.renderer="svg"),"string"==typeof r.images?d=document.querySelectorAll(r.images):window.NodeList&&r.images instanceof window.NodeList?d=r.images:window.Node&&r.images instanceof window.Node?d=[r.images]:window.HTMLCollection&&r.images instanceof window.HTMLCollection&&(d=r.images),"string"==typeof r.bgnodes?l=document.querySelectorAll(r.bgnodes):window.NodeList&&r.elements instanceof window.NodeList?l=r.bgnodes:window.Node&&r.bgnodes instanceof window.Node&&(l=[r.bgnodes]),h=0,c=d.length;c>h;h++)o.push(d[h]);for(var s=new RegExp(r.domain+'/(.*?)"?\\)'),c=l.length,h=0;c>h;h++){var f=window.getComputedStyle(l[h],null).getPropertyValue("background-image"),p=f.match(s),w=l[h].getAttribute("data-background-src");if(p){var x=i(p[1].split("/"),r);x&&a("background",l[h],x,f,e)}else if(null!=w){var x=i(w.substr(w.lastIndexOf(r.domain)+r.domain.length+1).split("/"),r);x&&a("background",l[h],x,f,e)}}for(c=o.length,h=0;c>h;h++)!function(t,e,i){var r,o;o=r=f=null;var a=null;try{o=t.getAttribute("src"),attr_datasrc=t.getAttribute("data-src"),a=t.getAttribute("data-holder-rendered")}catch(d){}var l=null!=o,s=null!=attr_datasrc,u=null!=a&&"true"==a;l?0===o.indexOf(e.domain)?n(e,i,o,t):s&&0===attr_datasrc.indexOf(e.domain)&&(u?n(e,i,attr_datasrc,t):g({src:o,options:e,instanceConfig:i,dataSrc:attr_datasrc,image:t},function(t,e){t||n(e.options,e.instanceConfig,e.dataSrc,e.image)})):s&&0===attr_datasrc.indexOf(e.domain)&&n(e,i,attr_datasrc,t)}(o[h],r,e);return this},invisibleErrorFn:function(){return function(t){if(t.hasAttribute("data-holder-invisible"))throw"Holder: invisible placeholder"}}},w=function(){var t=document.createElement("canvas"),e=t.getContext("2d");return function(n){return t.width=n.width,t.height=n.height,e.fillStyle=n.template.background,e.fillRect(0,0,n.width,n.height),e.textAlign="center",e.textBaseline="middle",e.font=n.font_weight+" "+n.text_height*m.config.ratio+"px "+n.font,e.fillStyle=n.template.foreground,e.fillText(n.text,n.width/2,n.height/2,n.width),t.toDataURL("image/png")}}(),x=function(){if(window.XMLSerializer){var t=new XMLSerializer,e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.webkitMatchesSelector&&n.setAttribute("xmlns","http://www.w3.org/2000/svg");var i="",r=document.createElementNS(e,"rect"),o=document.createElementNS(e,"text"),a=document.createTextNode(null);return o.setAttribute("text-anchor","middle"),o.appendChild(a),n.appendChild(r),n.appendChild(o),function(e){if(isNaN(e.width)||isNaN(e.height)||isNaN(e.text_height))throw"Holder: incorrect properties passed to SVG constructor";return n.setAttribute("width",e.width),n.setAttribute("height",e.height),n.setAttribute("viewBox","0 0 "+e.width+" "+e.height),n.setAttribute("preserveAspectRatio","none"),r.setAttribute("width",e.width),r.setAttribute("height",e.height),r.setAttribute("fill",e.template.background),o.setAttribute("x",e.width/2),o.setAttribute("y",e.height/2),a.nodeValue=e.text,o.setAttribute("style",c({fill:e.template.foreground,"font-weight":e.font_weight,"font-size":e.text_height+"px","font-family":e.font,"dominant-baseline":"central"})),i+t.serializeToString(n)}}}();m.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(t){var e=this.regex.exec(t);return{width:+e[1],height:+e[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(t){var e=this.regex.exec(t);return{width:e[1],height:e[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(t){var e=this.regex.exec(t);return{foreground:"#"+e[2],background:"#"+e[1]}}},text:{regex:/text\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},font:{regex:/font\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(t){return this.regex.exec(t)[1]}}};for(var v in m.flags)m.flags.hasOwnProperty(v)&&(m.flags[v].match=function(t){return t.match(this.regex)});m.settings={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12},sky:{background:"#0D8FDB",foreground:"#fff",size:12},vine:{background:"#39DBAC",foreground:"#1E292C",size:12},lava:{background:"#F8591A",foreground:"#1C2846",size:12}}},p.add_theme=p.addTheme,p.add_image=p.addImage,p.invisible_error_fn=p.invisibleErrorFn,m.config={renderer:"html",debounce:100,ratio:1},m.runtime={preempted:!1,resizableImages:[],debounceTimer:null},function(){var t=1,e=1,n=document.createElement("canvas"),i=null;n.getContext&&-1!=n.toDataURL("image/png").indexOf("data:image/png")&&(m.config.renderer="canvas",i=n.getContext("2d")),"canvas"==m.config.renderer&&(t=window.devicePixelRatio||1,e=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1),m.config.ratio=t/e,document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(m.config.renderer="svg")}(),t(p,"Holder",e),e.onDomReady&&e.onDomReady(function(){m.runtime.preempted||p.run({}),e.addEventListener?(e.addEventListener("resize",f,!1),e.addEventListener("orientationchange",f,!1)):e.attachEvent("onresize",f),"object"==typeof e.Turbolinks&&e.document.addEventListener("page:change",function(){p.run({})})})}(function(t,e,n){var i="function"==typeof define&&define.amd;i?define(t):n[e]=t},this);