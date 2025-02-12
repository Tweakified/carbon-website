"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[518324],{815929:function(e,t,n){n.d(t,{A:function(){return T}});var a,r,o,l,s,c,i=n(296540),m=n(986462),p=n(931363),u=n(9438),d=n(32165),g=n(1446),v=n(518495),f=n(942689);const h=i.forwardRef((function(e,t){let{children:n,size:m=16,...p}=e;return 16===m||"16"===m||"16px"===m?i.createElement(f.A,{width:m,height:m,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",...p},a||(a=i.createElement("path",{d:"M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S11.3,14,8,14z"})),r||(r=i.createElement("circle",{cx:"8",cy:"11.8",r:".8"})),o||(o=i.createElement("path",{d:"M8.5,4H7.8C6.5,4,5.5,5,5.5,6.2c0,0,0,0,0,0v0.2h1V6.2C6.5,5.6,7.1,5,7.8,5h0.8c0.7,0,1.2,0.6,1.2,1.2S9.2,7.5,8.5,7.5h-1 v2.2h1V8.5c1.2,0,2.2-1,2.2-2.2S9.7,4,8.5,4z"})),n):i.createElement(f.A,{width:m,height:m,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...p},l||(l=i.createElement("path",{d:"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"})),s||(s=i.createElement("circle",{cx:"16",cy:"23.5",r:"1.5"})),c||(c=i.createElement("path",{d:"M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z"})),n)}));var b=n(97136),E=n(92137),w=n(978226),y=n(96677),C={El:{}};const A=({components:e,layout:t})=>{const n=C.El["@carbon/react"],a="string"==typeof e?[e]:e,r=a&&a.length?a.map((e=>w.d.find((t=>t.component===e)))).filter((e=>void 0!==e)):w.d.filter((e=>!1!==e.a11ystatus)),o=i.createElement(p.Gff,{className:"A11yStatus-module--help--3c81b"},i.createElement(p.yvu,{label:"Help"},i.createElement(h,{size:20})),i.createElement(p.pNg,null,i.createElement("p",null,"For every latest release, Carbon runs tests on all components to meet the"," ",i.createElement(p.N_E,{inline:!0,href:"https://www.ibm.com/able/requirements/requirements/"},"accessibility requirements"),". These different statuses report the work that Carbon has done in the back end. These tests appear only when the components are stable."))),{0:l,1:s}=(0,i.useState)(e?e[0]:null),c=e=>{s(e)},f=Object.keys(r).map((n=>{var a;const o=r[n].component,s=y.CW.find((e=>e.title.toLowerCase().includes(o.toLowerCase().replace(" ","")))),c=`https://github.com/carbon-design-system/carbon/tree/main/packages/react/src/components/${o.replace(/\b\w/g,(e=>e.toUpperCase())).replace(/\s+/g,"")}`;function d(e,t){let n=!1,a=!1;return e&&(n=e.suites.some((e=>(e.suites||[e]).some((e=>e.specs.some((e=>e.tags.some((e=>e.includes(t))))))))),a=e.suites.some((e=>(e.suites||[e]).some((e=>e.specs.some((e=>{var n;return(null===(n=e.tags)||void 0===n?void 0:n.includes(t))&&e.tests.some((e=>"skipped"===e.status))}))))))),{hasAVT:n,hasSkippedAVT:a}}const{hasAVT:g,hasSkippedAVT:f}=d(s,"avt-default-state"),{hasAVT:h,hasSkippedAVT:E}=d(s,"avt-advanced-states"),{hasAVT:w,hasSkippedAVT:C}=d(s,"avt-keyboard-nav");let A=!0;"cards"===t&&(A=!1);let T=f?"partial":g?"tested":"nottested",S=E?"partial":h?"tested":"nottested",k=C?"partial":w?"tested":"notavailable";const F=i.createElement(u.A,{tag:T,tooltip:A}),x=i.createElement(u.A,{tag:S,tooltip:A}),V=i.createElement(u.A,{tag:k,tooltip:A}),N=null===(a=r[n])||void 0===a?void 0:a.testing.screenreader,L=i.createElement(u.A,{tag:N||"notavailable",tooltip:A});let M;M="Aspect ratio"===o?"/elements/2x-grid/overview/#aspect-ratio":"Grid"===o?"/elements/2x-grid/code#css-grid":"Flex grid"===o?"/elements/2x-grid/code#flexbox-grid":"UI Shell"===o?"/components/UI-shell-header/usage":"Theme"===o?"/elements/themes/overview/":"Skeleton"===o?"/patterns/loading-pattern/#skeleton-states":"Layer"===o?"/elements/color/usage#implementing-layering":r[n].parentComponent?`/components/${r[n].parentComponent.toLowerCase().replace(" ","-")}/usage`:!1===r[n].overview&&void 0===r[n].parentComponent?null:`/components/${o.toLowerCase().replace(" ","-")}/usage`;const I=m.globalHistory.location.pathname.replace(/\/[^\/]+\/?$/,"")+"/accessibility#accessibility-testing-status";return"cards"===t?i.createElement(i.Fragment,{key:`avt-tests-${o}`},i.createElement(v.fI,{className:"A11yStatus-module--card-group--cfa45 "+(l.selectedItem!==o&&l!==o&&Array.isArray(e)?"A11yStatus-module--hidden--2b21b":""),id:o},i.createElement(v.VP,{colLg:4,colMd:4,noGutterSm:!0},i.createElement(v.zU,{subTitle:"Default state",href:I,actionIcon:"arrowRight"},F)),i.createElement(v.VP,{colLg:4,colMd:4,noGutterSm:!0},i.createElement(v.zU,{subTitle:"Advanced states",href:I,actionIcon:"arrowRight"},x)),i.createElement(v.VP,{colLg:4,colMd:4,noGutterSm:!0},i.createElement(v.zU,{subTitle:"Screen reader",href:I,actionIcon:"arrowRight"},L)),i.createElement(v.VP,{colLg:4,colMd:4,noGutterSm:!0},i.createElement(v.zU,{subTitle:"Keyboard navigation",href:I,actionIcon:"arrowRight"},V)))):i.createElement(i.Fragment,{key:`avt-tests-${o}`},i.createElement("tr",null,i.createElement("td",null,null===M?o:i.createElement(p.N_E,{href:M},o)),i.createElement("td",null,i.createElement(p.lrh,{openOnHover:!0,definition:"Test(s) that ensure the initial render state of a component is accessible."},"Default state")),i.createElement("td",null,F),i.createElement("td",null,i.createElement(p.N_E,{href:c,renderIcon:()=>i.createElement(b.MQ,{"aria-label":"Launch"})},"GitHub link"))),i.createElement("tr",null,i.createElement("td",null),i.createElement("td",null,i.createElement(p.lrh,{openOnHover:!0,definition:"Tests that ensure additional states of the component are accessible. This could be interactive states of a component or its multiple variants."},"Advanced states")),i.createElement("td",null,x),i.createElement("td",null)),i.createElement("tr",null,i.createElement("td",null),i.createElement("td",null,i.createElement(p.lrh,{openOnHover:!0,definition:"Tests that ensure focus is properly managed, and all interactive functions of a component have a proper keyboard-accessible equivalent."},"Keyboard navigation")),i.createElement("td",null,V),i.createElement("td",null)),i.createElement("tr",null,i.createElement("td",null),i.createElement("td",null,i.createElement(p.lrh,{openOnHover:!0,definition:"This manual testing ensures that the visual information on the screen is properly conveyed and read correctly by screen readers such as JAWS, VoiceOver, and NVDA."},"Screen reader")),i.createElement("td",null,L),i.createElement("td",null)))}));return"cards"===t?i.createElement(i.Fragment,null,i.createElement(g.A,{id:"accessibility-testing-status"},i.createElement("span",{id:"accessibility-testing-status"},"Accessibility testing status"),o),Array.isArray(e)&&i.createElement(v.fI,{className:"A11yStatus-module--variant--6d76c"},i.createElement(v.VP,{sm:4,colMd:4,colLg:4,noGutterSm:!0},i.createElement(p.KKo,{isCondensed:!0,className:"A11yStatus-module--dropdown--ff19e",id:"variant",titleText:"Variant",label:"Variant",items:e,initialSelectedItem:e[0],onChange:c}))),f):i.createElement(i.Fragment,null,e?i.createElement(g.A,null,i.createElement("span",{id:"accessibility-testing-status"},"Accessibility testing status"),o):i.createElement(i.Fragment,null,i.createElement("span",{id:"all-component-accessibility-status-anchor",className:"A11yStatus-module--heading-link--8af7b"}),i.createElement(d.A,null,"All component accessibility status",o),i.createElement("p",null,"This table reflects the current AVT status of stable components within @carbon/react.")),i.createElement("p",{className:"A11yStatus-module--version--986f9"},i.createElement("strong",null,"Latest version:")," ",n," |"," ",i.createElement("strong",null,"Framework:")," React (@carbon/react)"),i.createElement(v.fI,null,i.createElement(v.VP,{colLg:12,noGutterSm:!0,className:"page-table__container"},i.createElement("table",{className:"page-table"},i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Component"),i.createElement("th",null,"Accessibility test"),i.createElement("th",null,"Status"),i.createElement("th",null,"Link to source code"))),i.createElement("tbody",null,f)))),e&&i.createElement(v.fI,null,i.createElement(v.VP,{colLg:12},i.createElement("p",{className:"A11yStatus-module--moreLink--7d843"},i.createElement(p.N_E,{href:"/components/overview/accessibility-status",renderIcon:()=>i.createElement(E.Qp,null)},"Learn more about tag and test meaning"),i.createElement("br",null),i.createElement(p.N_E,{href:"/components/overview/accessibility-status#all-component-accessibility-status-anchor",renderIcon:()=>i.createElement(E.Qp,null)},"View all component accessibility status")))))};A.defaultProps={layout:"table"};var T=A},9438:function(e,t,n){n.d(t,{A:function(){return s}});var a=n(296540),r=n(931363),o="a11y-status-tag-module--tag--e43ee";const l=({tag:e,tooltip:t})=>{const n={tested:{color:"green",text:"Tested",definition:"Passes all automated tests with no reported accessibility violations."},partial:{color:"blue",text:"Partially tested",definition:"Some tests are incomplete, in progress, invalid, or temporarily skipped."},manual:{color:"teal",text:"Manually tested",definition:"A human has manually tested this component, e.g. screen reader testing."},notavailable:{color:"gray",text:"Not available",definition:"Test data is either not available or not applicable for this component state."},nottested:{color:"purple",text:"Not tested",definition:"Automated or manual testing has been temporarily deferred."}};if(!n[e])return a.createElement(r.vwO,null,e);const{color:l,text:s,definition:c}=n[e];return t?a.createElement(r.lrh,{openOnHover:!0,definition:c},a.createElement(r.vwO,{type:l,className:o},s)):a.createElement(r.vwO,{type:l,className:o},s)};l.defaultProps={tooltip:!0};var s=l},978226:function(e){e.exports=JSON.parse('{"d":[{"component":"Accordion","testing":{"screenreader":"manual"}},{"component":"AI label","testing":{"screenreader":"manual"}},{"component":"Aspect ratio","overview":false,"testing":{"screenreader":"notavailable"}},{"component":"Breadcrumb","testing":{"screenreader":"manual"}},{"component":"Button","testing":{"screenreader":"manual"}},{"component":"Checkbox","testing":{"screenreader":"manual"}},{"component":"Code snippet","testing":{"screenreader":"manual"}},{"component":"Combo box","overview":false,"parentComponent":"Dropdown","testing":{"screenreader":"manual"}},{"component":"Combo button","parentComponent":"Menu buttons","overview":false,"testing":{"screenreader":"manual"}},{"component":"Composed modal","overview":false,"parentComponent":"Modal","testing":{"screenreader":"manual"}},{"component":"Contained list","testing":{"screenreader":"manual"}},{"component":"Content switcher","testing":{"screenreader":"manual"}},{"component":"Copy button","parentComponent":"Code snippet","overview":false,"testing":{"screenreader":"manual"}},{"component":"Data table","testing":{"screenreader":"manual"}},{"component":"Date picker","testing":{"screenreader":"manual"}},{"component":"Definition tooltip","parentComponent":"Tooltip","overview":false,"testing":{"screenreader":"manual"}},{"component":"Dropdown","testing":{"screenreader":"manual"}},{"component":"File uploader","testing":{"screenreader":"manual"}},{"component":"Flex grid","overview":false,"testing":{"screenreader":"notavailable"}},{"component":"Fluid combo box","parentComponent":"Dropdown","overview":false,"testing":{"screenreader":"nottested"}},{"component":"Fluid date picker","parentComponent":"Date picker","overview":false,"testing":{"screenreader":"notavailable"}},{"component":"Fluid dropdown","parentComponent":"Dropdown","overview":false,"testing":{"screenreader":false}},{"component":"Fluid form","parentComponent":"Form","overview":false,"testing":{"screenreader":false}},{"component":"Fluid multiselect","parentComponent":"Dropdown","overview":false,"testing":{"screenreader":false}},{"component":"Fluid number input","parentComponent":"Number input","overview":false,"testing":{"screenreader":false}},{"component":"Fluid search","parentComponent":"Search","overview":false,"testing":{"screenreader":false}},{"component":"Fluid select","parentComponent":"Select","overview":false,"testing":{"screenreader":false}},{"component":"Fluid text area","parentComponent":"Text input","overview":false,"testing":{"screenreader":false}},{"component":"Fluid text input","parentComponent":"Text input","overview":false,"testing":{"screenreader":"manual"}},{"component":"Fluid time picker","parentComponent":"Date picker","overview":false,"testing":{"screenreader":false}},{"component":"Form","testing":{"screenreader":"manual"}},{"component":"Form group","parentComponent":"Form","overview":false,"testing":{"screenreader":"manual"}},{"component":"Form label","parentComponent":"Form","overview":false,"testing":{"screenreader":"manual"}},{"component":"Grid","overview":false,"testing":{"screenreader":"notavailable"}},{"component":"Heading","overview":false,"testing":{"screenreader":"manual"}},{"component":"Icon button","parentComponent":"Button","overview":false,"testing":{"screenreader":"manual"}},{"component":"Inline loading","testing":{"screenreader":"manual"}},{"component":"Layer","overview":false,"testing":{"screenreader":"notavailable"}},{"component":"Link","testing":{"screenreader":"manual"}},{"component":"List","a11ystatus":false,"testing":{"screenreader":"manual"}},{"component":"Loading","testing":{"screenreader":"manual"}},{"component":"Menu","testing":{"screenreader":"manual"}},{"component":"Menu buttons","featureFlag":true,"testing":{"screenreader":"manual"}},{"component":"Modal","featureFlag":true,"testing":{"screenreader":"manual"}},{"component":"Multiselect","parentComponent":"Dropdown","testing":{"screenreader":"manual"}},{"component":"Notification","featureFlag":true,"testing":{"screenreader":"manual"}},{"component":"Number input","testing":{"screenreader":"manual"}},{"component":"Ordered list","parentComponent":"List","overview":false,"testing":{"screenreader":"manual"}},{"component":"Overflow menu","parentComponent":"Menu buttons","overview":false,"testing":{"screenreader":"manual"}},{"component":"Pagination","testing":{"screenreader":"manual"}},{"component":"Pagination nav","parentComponent":"Pagination","overview":false,"testing":{"screenreader":"manual"}},{"component":"Popover","testing":{"screenreader":"manual"}},{"component":"Progress bar","testing":{"screenreader":"manual"}},{"component":"Progress indicator","testing":{"screenreader":"manual"}},{"component":"Radio button","testing":{"screenreader":"manual"}},{"component":"Search","testing":{"screenreader":"manual"}},{"component":"Select","testing":{"screenreader":"manual"}},{"component":"Skeleton","overview":false,"testing":{"screenreader":"manual"}},{"component":"Slider","testing":{"screenreader":"manual"}},{"component":"Structured list","featureFlag":true,"testing":{"screenreader":"manual"}},{"component":"Tabs","testing":{"screenreader":"manual"}},{"component":"Tag","testing":{"screenreader":"manual"}},{"component":"Text area","parentComponent":"Text input","overview":false,"testing":{"screenreader":"manual"}},{"component":"Text input","testing":{"screenreader":"manual"}},{"component":"Theme","overview":false,"testing":{"screenreader":"notavailable"}},{"component":"Tile","featureFlag":true,"testing":{"screenreader":"manual"}},{"component":"Time picker","parentComponent":"Date picker","overview":false,"testing":{"screenreader":"manual"}},{"component":"Toggle","testing":{"screenreader":"manual"}},{"component":"Toggletip","testing":{"screenreader":"manual"}},{"component":"Tooltip","testing":{"screenreader":"manual"}},{"component":"Treeview","featureFlag":true,"testing":{"screenreader":"manual"}},{"component":"UI shell","testing":{"screenreader":"manual"}},{"component":"Unordered list","parentComponent":"List","overview":false,"testing":{"screenreader":"manual"}},{"component":"Menu button","parentComponent":"Menu buttons","overview":false,"testing":{"screenreader":"manual"}}]}')}}]);