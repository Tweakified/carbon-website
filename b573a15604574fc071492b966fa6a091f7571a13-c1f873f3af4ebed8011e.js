"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[896507],{503624:function(e,t,a){a.d(t,{Z:function(){return P}});var l=a(667294),r=a(231304),s=a.n(r),n=a(871082),c=a(715780),i=a(675450),d=a(825512),m=a.n(d);var o=({title:e,theme:t,tabs:a=[]})=>l.createElement("div",{className:m()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":a.length,"PageHeader-module--dark-mode--58278":"dark"===t})},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},e)))));var u=({relativePagePath:e,repository:t})=>{const{site:{siteMetadata:{repository:a}}}=(0,n.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:c}=t||a,i=`${r}/edit/${c}${s}/src/pages${e}`;return r?l.createElement("div",{className:"cds--row EditLink-module--row--04499"},l.createElement("div",{className:"cds--col"},l.createElement("a",{className:"EditLink-module--link--203ae",href:i},"Edit this page on GitHub"))):null},g=a(874703),p=a(151721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],c=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),c=t===r,i=new RegExp(`${r}/?(#.*)?$`),d=a.replace(i,t);return l.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--68107":c},"PageTabs-module--list-item--d36e2")},l.createElement(n.Link,{className:"PageTabs-module--link--2b3ff",to:`${d}`},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},l.createElement("nav",{"aria-label":e},l.createElement("ul",{className:"PageTabs-module--list--c4bab"},c))))))},t}(l.Component);var E=b,h=a(637296),v=a(675387),f=a(603732);var N=({date:e})=>{const t=new Date(e);return e?l.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},l.createElement(f.sg,null,l.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var P=({pageContext:e,children:t,location:a,Title:r})=>{const{frontmatter:d={},relativePagePath:m,titleType:p}=e,{tabs:b,title:f,theme:P,description:y,keywords:w,date:k}=d,{interiorTheme:T}=(0,v.Z)(),{site:{pathPrefix:Z}}=(0,n.useStaticQuery)("2456312558"),$=Z?a.pathname.replace(Z,""):a.pathname,x=b?$.split("/").filter(Boolean).slice(-1)[0]||s()(b[0],{lower:!0}):"",C=P||T;return l.createElement(i.Z,{tabs:b,homepage:!1,theme:C,pageTitle:f,pageDescription:y,pageKeywords:w,titleType:p},l.createElement(o,{title:r?l.createElement(r,null):f,label:"label",tabs:b,theme:C}),b&&l.createElement(E,{title:f,slug:$,tabs:b,currentTab:x}),l.createElement(h.Z,{padded:!0},t,l.createElement(u,{relativePagePath:m}),l.createElement(N,{date:k})),l.createElement(g.Z,{pageContext:e,location:a,slug:$,tabs:b,currentTab:x}),l.createElement(c.Z,null))}}}]);