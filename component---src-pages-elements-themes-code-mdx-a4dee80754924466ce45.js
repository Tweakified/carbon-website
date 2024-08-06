"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[452159],{749954:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return f}});var a=t(145987),s=(t(667294),t(603905)),o=t(503624);const r=["components"],m={},c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",n)},l=c("PageDescription"),i=c("InlineNotification"),h=c("Row"),u=c("Column"),p=c("ResourceCard"),d=c("MdxIcon"),g={_frontmatter:m},k=o.Z;function f(e){let{components:n}=e,t=(0,a.Z)(e,r);return(0,s.kt)(k,Object.assign({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(l,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Use the themes package to customize your product while maintaining consistency.")),(0,s.kt)(i,{mdxType:"InlineNotification"},(0,s.kt)("p",null,"If you’re using ",(0,s.kt)("inlineCode",{parentName:"p"},"@carbon/react"),", you probably don’t need need to install the\nthemes package separately. See our ",(0,s.kt)("a",{parentName:"p",href:"/developing/frameworks/react/"},"Carbon React"),"\nguide to start building.")),(0,s.kt)("h2",null,"Usage"),(0,s.kt)("p",null,"You can use ",(0,s.kt)("inlineCode",{parentName:"p"},"@carbon/themes")," in JavaScript or Sass by including this package in\nyour project. By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"@carbon/themes")," provides a set of color tokens that\nare pre-defined for a specific theme. Currently, we offer the following color\nthemes: white, gray 10, gray 90, gray 100."),(0,s.kt)("p",null,"You can preview all of the token values for this on the\n",(0,s.kt)("a",{parentName:"p",href:"/guidelines/color/usage"},"color guidelines")," page."),(0,s.kt)("h3",null,"Sass"),(0,s.kt)("p",null,"If your project is using Sass, you can include this package and the\ncorresponding default theme by writing the following in your Sass file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/themes';\n\n.my-component {\n  // Use tokens from the theme, this will map to a CSS Custom Property\n  color: themes.$token-01;\n}\n\n:root {\n  // Emit CSS Custom Properties for the current theme\n  @include themes.theme();\n}\n\n// Get the value of a specific token\n$custom-variable: rgba(themes.get('token-01'), 0.25);\n")),(0,s.kt)("p",null,"By default, the white theme will be initialized. If you would like to include\nanother theme, you can do so by configuring the sass module using ",(0,s.kt)("inlineCode",{parentName:"p"},"with"),". For\nexample:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/themes/scss/themes' as *;\n@use '@carbon/themes' with (\n  $theme: $g100\n);\n")),(0,s.kt)("p",null,"Inline theming of theme switching can be done by using the mixin. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/themes/scss/themes' as *;\n@use '@carbon/themes';\n\n:root {\n  @include themes.theme($white);\n}\n\n[data-carbon-theme='g10'] {\n  @include themes.theme($g10);\n}\n\n[data-carbon-theme='g90'] {\n  @include themes.theme($g90);\n}\n\n[data-carbon-theme='g100'] {\n  @include themes.theme($g100);\n}\n")),(0,s.kt)("p",null,"Themes can also be extended with your own custom tokens:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/themes/scss/themes';\n@use '@carbon/themes' with (\n  $fallback: themes.$g100,\n  $theme: (\n    token-01: #000000,\n  )\n);\n")),(0,s.kt)("h4",null,"System preferences"),(0,s.kt)("p",null,"Modern browsers and systems have adopted the idea of dark and light themes\napplied at a system level. Where no user preference has been specified their\nsystem level theme should be matched."),(0,s.kt)("p",null,"For example applying ",(0,s.kt)("inlineCode",{parentName:"p"},"g10")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"g100")," automaticcally based on system preferences."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/themes/scss/themes' as *;\n@use '@carbon/themes';\n\n/* system preference theme by default */\n:root {\n  @include themes.theme($g10);\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    @include themes.theme($g100);\n  }\n}\n\n/* user has configured a theme preference for the current page/app */\n[data-carbon-theme='white'] {\n  @include themes.theme($white);\n}\n\n[data-carbon-theme='g10'] {\n  @include themes.theme($g10);\n}\n\n[data-carbon-theme='g90'] {\n  @include themes.theme($g90);\n}\n\n[data-carbon-theme='g100'] {\n  @include themes.theme($g100);\n}\n")),(0,s.kt)("p",null,"Some designs include a sections in the opposite theme."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin theme-scheme($default, $compliment) {\n  /* apply default theme */\n  @include theme($default, true);\n\n  /* apply to the compliment theme */\n  [data-carbon-theme--compliment] {\n    @include theme($compliment, true);\n  }\n\n  /* apply the default theme */\n  /* to switch back from within a compliment */\n  [data-carbon-theme] {\n    @include theme($default, true);\n  }\n}\n\n/* system preference theme by default */\n:root {\n  @include theme-scheme(themes.$g10, themes.$g100);\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    @include theme-scheme(themes.$g100, themes.$g10);\n  }\n}\n\n/* user has configured a theme preference for the current page/app */\n[data-carbon-theme='white'] {\n  @include theme-scheme(themes.$white, themes.$g90);\n}\n\n[data-carbon-theme='g10'] {\n  @include theme-scheme(themes.$g10, themes.$g100);\n}\n\n[data-carbon-theme='g90'] {\n  @include theme-scheme(themes.$g90, themes.$white);\n}\n\n[data-carbon-theme='g100'] {\n  @include theme-scheme(themes.$g100, themes.$g10);\n}\n")),(0,s.kt)("h3",null,"JavaScript"),(0,s.kt)("p",null,"If you’re looking to use these themes in JavaScript, we export a variety of\nbindings for you to use, including:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  // An object of all themes\n  themes,\n\n  // Direct theme values\n  white,\n  g10,\n  g90,\n  g100,\n\n  // Specific token values\n  interactive01,\n  interactive02,\n} from '@carbon/themes';\n")),(0,s.kt)("h2",null,"Resources"),(0,s.kt)(h,{className:"resource-card-group",mdxType:"Row"},(0,s.kt)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(p,{subTitle:"Carbon theme package",href:"https://github.com/carbon-design-system/carbon/tree/main/packages/themes",mdxType:"ResourceCard"},(0,s.kt)(d,{name:"bee",mdxType:"MdxIcon"}))),(0,s.kt)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(p,{subTitle:"Themes package demo",href:"https://carbon-elements.netlify.app/themes/examples/preview/",mdxType:"ResourceCard"},(0,s.kt)(d,{name:"bee",mdxType:"MdxIcon"})))))}f.isMDXComponent=!0}}]);