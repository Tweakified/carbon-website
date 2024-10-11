"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[914204,687670,441124,305517,234518,47327,138304,579036],{649817:function(e,t,r){var n=r(275086),i=r(605556),o=r(296540);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=a(i),u=a(o);const l=u.default.forwardRef((function(e,t){let{className:r,children:i,tabIndex:o,xmlns:a="http://www.w3.org/2000/svg",preserveAspectRatio:c="xMidYMid meet",...l}=e;const{tabindex:f,...s}=n.getAttributes({...l,tabindex:o}),d=s;return r&&(d.className=r),null!=f&&(d.tabIndex="number"==typeof f?f:Number(o)),t&&(d.ref=t),a&&(d.xmlns=a),c&&(d.preserveAspectRatio=c),u.default.createElement("svg",d,i)}));l.displayName="Icon",l.propTypes={"aria-hidden":c.default.oneOfType([c.default.bool,c.default.oneOf(["true","false"])]),"aria-label":c.default.string,"aria-labelledby":c.default.string,children:c.default.node,className:c.default.string,height:c.default.oneOfType([c.default.number,c.default.string]),preserveAspectRatio:c.default.string,tabIndex:c.default.oneOfType([c.default.number,c.default.string]),viewBox:c.default.string,width:c.default.oneOfType([c.default.number,c.default.string]),xmlns:c.default.string},e.exports=l},798559:function(e,t){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(null,arguments)}t._extends=r},950376:function(e,t,r){var n=r(798559),i=r(296540),o=r(649817);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(275086),r(605556);var c,u=a(i);const l=u.default.forwardRef((function(e,t){let{children:r,...i}=e;return u.default.createElement(o,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},i),c||(c=u.default.createElement("path",{d:"M14,28.36c-2.404,0-4.36-1.956-4.36-4.36h0.72c0,2.007,1.633,3.64,3.64,3.64s3.64-1.633,3.64-3.64\ts-1.632-3.64-3.64-3.64H3v-0.72h11c2.404,0,4.36,1.956,4.36,4.36S16.404,28.36,14,28.36z M27,24.36c-2.404,0-4.36-1.956-4.36-4.36\th0.721c0,2.007,1.633,3.64,3.64,3.64s3.64-1.633,3.64-3.64s-1.633-3.64-3.64-3.64H1v-0.72h26c2.404,0,4.36,1.956,4.36,4.36\tS29.404,24.36,27,24.36z M21,12.36H6v-0.72h15c2.007,0,3.64-1.633,3.64-3.64S23.007,4.36,21,4.36S17.36,5.993,17.36,8h-0.72\tc0-2.404,1.956-4.36,4.36-4.36S25.36,5.596,25.36,8S23.404,12.36,21,12.36z"})),r)}));e.exports=l},275086:function(e,t,r){function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.r(t),r.d(t,{defaultAttributes:function(){return l},formatAttributes:function(){return d},getAttributes:function(){return f},toSVG:function(){return b},toString:function(){return s}});var c=["width","height","viewBox"],u=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,i=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=a(e,c),s=f.tabindex,d=a(f,u),b=o(o(o({},l),d),{},{width:t,height:r,viewBox:i});return b["aria-label"]||b["aria-labelledby"]||b.title?(b.role="img",null!=s&&(b.focusable="true",b.tabindex=s)):b["aria-hidden"]=!0,b}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,i=void 0===n?{}:n,o=e.content,a=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(d(i),">").concat(a,"</").concat(r,">"):"<".concat(r," ").concat(d(f(i)),">").concat(a,"</").concat(r,">")}function d(e){return Object.keys(e).reduce((function(t,r,n){var i="".concat(r,'="').concat(e[r],'"');return 0===n?i:t+" "+i}),"")}function b(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,i=void 0===n?{}:n,o=e.content,a=void 0===o?[]:o,c=document.createElementNS("http://www.w3.org/2000/svg",r),u="svg"!==r?i:f(i);Object.keys(u).forEach((function(e){c.setAttribute(e,i[e])}));for(var l=0;l<a.length;l++)c.appendChild(b(a[l]));return c}}}]);