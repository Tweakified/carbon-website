"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[687670],{649817:function(e,t,r){var n=r(275086),i=r(605556),o=r(296540);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=a(i),c=a(o);const l=c.default.forwardRef((function(e,t){let{className:r,children:i,tabIndex:o,xmlns:a="http://www.w3.org/2000/svg",preserveAspectRatio:u="xMidYMid meet",...l}=e;const{tabindex:f,...s}=n.getAttributes({...l,tabindex:o}),d=s;return r&&(d.className=r),null!=f&&(d.tabIndex="number"==typeof f?f:Number(o)),t&&(d.ref=t),a&&(d.xmlns=a),u&&(d.preserveAspectRatio=u),c.default.createElement("svg",d,i)}));l.displayName="Icon",l.propTypes={"aria-hidden":u.default.oneOfType([u.default.bool,u.default.oneOf(["true","false"])]),"aria-label":u.default.string,"aria-labelledby":u.default.string,children:u.default.node,className:u.default.string,height:u.default.oneOfType([u.default.number,u.default.string]),preserveAspectRatio:u.default.string,tabIndex:u.default.oneOfType([u.default.number,u.default.string]),viewBox:u.default.string,width:u.default.oneOfType([u.default.number,u.default.string]),xmlns:u.default.string},e.exports=l},275086:function(e,t,r){function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.r(t),r.d(t,{defaultAttributes:function(){return l},formatAttributes:function(){return d},getAttributes:function(){return f},toSVG:function(){return b},toString:function(){return s}});var u=["width","height","viewBox"],c=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,i=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=a(e,u),s=f.tabindex,d=a(f,c),b=o(o(o({},l),d),{},{width:t,height:r,viewBox:i});return b["aria-label"]||b["aria-labelledby"]||b.title?(b.role="img",null!=s&&(b.focusable="true",b.tabindex=s)):b["aria-hidden"]=!0,b}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,i=void 0===n?{}:n,o=e.content,a=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(d(i),">").concat(a,"</").concat(r,">"):"<".concat(r," ").concat(d(f(i)),">").concat(a,"</").concat(r,">")}function d(e){return Object.keys(e).reduce((function(t,r,n){var i="".concat(r,'="').concat(e[r],'"');return 0===n?i:t+" "+i}),"")}function b(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,i=void 0===n?{}:n,o=e.content,a=void 0===o?[]:o,u=document.createElementNS("http://www.w3.org/2000/svg",r),c="svg"!==r?i:f(i);Object.keys(c).forEach((function(e){u.setAttribute(e,i[e])}));for(var l=0;l<a.length;l++)u.appendChild(b(a[l]));return u}}}]);