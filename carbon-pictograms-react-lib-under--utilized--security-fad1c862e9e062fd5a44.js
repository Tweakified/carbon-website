"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[675289,687670,441124,305517,234518,47327,138304,579036],{649817:function(e,t,r){var n=r(275086),i=r(605556),o=r(296540);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(i),u=a(o);const c=u.default.forwardRef((function(e,t){let{className:r,children:i,tabIndex:o,xmlns:a="http://www.w3.org/2000/svg",preserveAspectRatio:l="xMidYMid meet",...c}=e;const{tabindex:f,...s}=n.getAttributes({...c,tabindex:o}),d=s;return r&&(d.className=r),null!=f&&(d.tabIndex="number"==typeof f?f:Number(o)),t&&(d.ref=t),a&&(d.xmlns=a),l&&(d.preserveAspectRatio=l),u.default.createElement("svg",d,i)}));c.displayName="Icon",c.propTypes={"aria-hidden":l.default.oneOfType([l.default.bool,l.default.oneOf(["true","false"])]),"aria-label":l.default.string,"aria-labelledby":l.default.string,children:l.default.node,className:l.default.string,height:l.default.oneOfType([l.default.number,l.default.string]),preserveAspectRatio:l.default.string,tabIndex:l.default.oneOfType([l.default.number,l.default.string]),viewBox:l.default.string,width:l.default.oneOfType([l.default.number,l.default.string]),xmlns:l.default.string},e.exports=c},798559:function(e,t){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(null,arguments)}t._extends=r},69475:function(e,t,r){var n=r(798559),i=r(296540),o=r(649817);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(275086),r(605556);var l,u=a(i);const c=u.default.forwardRef((function(e,t){let{children:r,...i}=e;return u.default.createElement(o,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},i),l||(l=u.default.createElement("path",{d:"M28.811,26.812l-4.33-2.5l0.359-0.623l4.33,2.5L28.811,26.812z M31,19.36h-5v-0.72h5\tV19.36z M16,19.36L1,19.355v-0.721l15,0.005V19.36z M24.84,14.312l-0.359-0.624l4.33-2.5l0.359,0.624L24.84,14.312z M7.16,14.312\tl-4.33-2.5l0.36-0.624l4.33,2.5L7.16,14.312z M21.312,10.52l-0.623-0.36l2.5-4.33l0.623,0.36L21.312,10.52z M10.688,10.52l-2.5-4.33\tl0.624-0.36l2.5,4.33L10.688,10.52z M16.36,9h-0.72V4h0.72V9z"})),r)}));e.exports=c},275086:function(e,t,r){function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.r(t),r.d(t,{defaultAttributes:function(){return c},formatAttributes:function(){return d},getAttributes:function(){return f},toSVG:function(){return b},toString:function(){return s}});var l=["width","height","viewBox"],u=["tabindex"],c={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,i=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=a(e,l),s=f.tabindex,d=a(f,u),b=o(o(o({},c),d),{},{width:t,height:r,viewBox:i});return b["aria-label"]||b["aria-labelledby"]||b.title?(b.role="img",null!=s&&(b.focusable="true",b.tabindex=s)):b["aria-hidden"]=!0,b}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,i=void 0===n?{}:n,o=e.content,a=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(d(i),">").concat(a,"</").concat(r,">"):"<".concat(r," ").concat(d(f(i)),">").concat(a,"</").concat(r,">")}function d(e){return Object.keys(e).reduce((function(t,r,n){var i="".concat(r,'="').concat(e[r],'"');return 0===n?i:t+" "+i}),"")}function b(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,i=void 0===n?{}:n,o=e.content,a=void 0===o?[]:o,l=document.createElementNS("http://www.w3.org/2000/svg",r),u="svg"!==r?i:f(i);Object.keys(u).forEach((function(e){l.setAttribute(e,i[e])}));for(var c=0;c<a.length;c++)l.appendChild(b(a[c]));return l}}}]);