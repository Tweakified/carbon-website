"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[198084,687670,441124,305517,234518,47327,138304,579036],{649817:function(e,t,r){var n=r(275086),i=r(605556),o=r(296540);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=a(i),u=a(o);const l=u.default.forwardRef((function(e,t){let{className:r,children:i,tabIndex:o,xmlns:a="http://www.w3.org/2000/svg",preserveAspectRatio:c="xMidYMid meet",...l}=e;const{tabindex:f,...s}=n.getAttributes({...l,tabindex:o}),d=s;return r&&(d.className=r),null!=f&&(d.tabIndex="number"==typeof f?f:Number(o)),t&&(d.ref=t),a&&(d.xmlns=a),c&&(d.preserveAspectRatio=c),u.default.createElement("svg",d,i)}));l.displayName="Icon",l.propTypes={"aria-hidden":c.default.oneOfType([c.default.bool,c.default.oneOf(["true","false"])]),"aria-label":c.default.string,"aria-labelledby":c.default.string,children:c.default.node,className:c.default.string,height:c.default.oneOfType([c.default.number,c.default.string]),preserveAspectRatio:c.default.string,tabIndex:c.default.oneOfType([c.default.number,c.default.string]),viewBox:c.default.string,width:c.default.oneOfType([c.default.number,c.default.string]),xmlns:c.default.string},e.exports=l},798559:function(e,t){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(null,arguments)}t._extends=r},186208:function(e,t,r){var n=r(798559),i=r(296540),o=r(649817);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(275086),r(605556);var c,u=a(i);const l=u.default.forwardRef((function(e,t){let{children:r,...i}=e;return u.default.createElement(o,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},i),c||(c=u.default.createElement("path",{d:"M30,30.36h-7v-0.72h6.64V14h0.721v16\tC30.36,30.199,30.199,30.36,30,30.36z M18,30.36H2c-0.199,0-0.36-0.161-0.36-0.36v-7h0.72v6.64H18V30.36z M11,23.36\tc-0.062,0-0.124-0.017-0.179-0.048C10.709,23.248,10.64,23.129,10.64,23V9c0-0.129,0.069-0.248,0.181-0.312\tc0.111-0.065,0.249-0.064,0.36,0.001l12,7c0.11,0.064,0.179,0.183,0.179,0.311s-0.068,0.247-0.179,0.311l-12,7\tC11.125,23.344,11.062,23.36,11,23.36z M11.36,9.627v12.746L22.285,16L11.36,9.627z M2.36,18H1.64V2c0-0.199,0.161-0.36,0.36-0.36h7\tv0.72H2.36V18z M30.36,9h-0.72V2.36H14V1.64h16c0.199,0,0.36,0.161,0.36,0.36V9z"})),r)}));e.exports=l},275086:function(e,t,r){function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.r(t),r.d(t,{defaultAttributes:function(){return l},formatAttributes:function(){return d},getAttributes:function(){return f},toSVG:function(){return b},toString:function(){return s}});var c=["width","height","viewBox"],u=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,i=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=a(e,c),s=f.tabindex,d=a(f,u),b=o(o(o({},l),d),{},{width:t,height:r,viewBox:i});return b["aria-label"]||b["aria-labelledby"]||b.title?(b.role="img",null!=s&&(b.focusable="true",b.tabindex=s)):b["aria-hidden"]=!0,b}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,i=void 0===n?{}:n,o=e.content,a=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(d(i),">").concat(a,"</").concat(r,">"):"<".concat(r," ").concat(d(f(i)),">").concat(a,"</").concat(r,">")}function d(e){return Object.keys(e).reduce((function(t,r,n){var i="".concat(r,'="').concat(e[r],'"');return 0===n?i:t+" "+i}),"")}function b(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,i=void 0===n?{}:n,o=e.content,a=void 0===o?[]:o,c=document.createElementNS("http://www.w3.org/2000/svg",r),u="svg"!==r?i:f(i);Object.keys(u).forEach((function(e){c.setAttribute(e,i[e])}));for(var l=0;l<a.length;l++)c.appendChild(b(a[l]));return c}}}]);