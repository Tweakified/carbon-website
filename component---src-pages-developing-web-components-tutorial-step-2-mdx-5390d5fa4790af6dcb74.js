"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[855779],{386203:function(e,n,t){t.r(n);var a=t(28453),l=t(296540),s=t(725441);function c(e){const n=Object.assign({p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code",strong:"strong",span:"span"},(0,a.R)(),e.components),{PageDescription:t,AnchorLinks:c,AnchorLink:r,InlineNotification:d,Caption:i,Row:p,Column:m}=n;return r||o("AnchorLink",!0),c||o("AnchorLinks",!0),i||o("Caption",!0),m||o("Column",!0),d||o("InlineNotification",!0),t||o("PageDescription",!0),p||o("Row",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Now that we have our app using the UI Shell, it’s time to build a few static\npages. In this step, we’ll become comfortable with the Carbon grid and various\nCarbon components.")),"\n",l.createElement(c,null,l.createElement(r,null,"Fork, clone and branch"),l.createElement(r,null,"Add landing page grid"),l.createElement(r,null,"Build landing page"),l.createElement(r,null,"Style landing page"),l.createElement(r,null,"Add repo page grid"),l.createElement(r,null,"Build repo page"),l.createElement(r,null,"Push to GitHub")),"\n",l.createElement(n.h2,null,"Preview"),"\n",l.createElement(n.p,null,"A\n",l.createElement(n.a,{href:"https://carbon-tutorial-nextjs-git-step-3-carbon-design-system.vercel.app/"},"preview"),"\nof what you’ll build:"),"\n",l.createElement(s.A,{height:"400",title:"Carbon Next Tutorial Step 2",src:"https://carbon-tutorial-nextjs-git-v11-next-step-3-carbon-design-system.vercel.app/",frameborder:"no",allowtransparency:"true",allowfullscreen:"true",className:"cds--iframe cds--iframe--border"}),"\n",l.createElement(n.h2,null,"Fork, clone and branch"),"\n",l.createElement(n.p,null,"This tutorial has an accompanying GitHub repository called\n",l.createElement(n.a,{href:"https://github.com/carbon-design-system/carbon-tutorial-web-components"},"carbon-tutorial-web-components"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the [step 1\ninstructions](",l.createElement(n.a,{href:"/developing/web-components-tutorial/step-1#fork-clone-and-branch"},"previous step"),"."),"\n",l.createElement(n.h3,null,"Branch"),"\n",l.createElement(n.p,null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"git fetch upstream\ngit checkout -b step-2 upstream/step-2\n")),"\n",l.createElement(d,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," This builds on top of step 1, but be sure to check out the upstream\nstep 2 branch because it includes the static assets required to get through this\nstep.")),"\n",l.createElement(n.h3,null,"Build and start app"),"\n",l.createElement(n.p,null,"Install the app’s dependencies (in case you’re starting fresh in your current\ndirectory and not continuing from the previous step):"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"pnpm i\n")),"\n",l.createElement(n.p,null,"Then, start the app:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"pnpm dev\n")),"\n",l.createElement(n.p,null,"You should see something similar to where the\n",l.createElement(n.a,{href:"/developing/web-components-tutorial/step-1#fork-clone-and-branch/step-1"},"previous step"),"\nleft off."),"\n",l.createElement(n.h2,null,"Add landing page grid"),"\n",l.createElement(n.p,null,"Let’s add our grid elements to our ",l.createElement(n.code,null,"LandingPage")," page component."),"\n",l.createElement(n.p,null,"Now the Carbon grid does not currently exist in web component form. This may be\nbecause it is difficult to apply a CSS grid when traversing the shadow DOM of a\ngrid and column component. This leaves us with writing our grid and columns out\nlong hand, writing the styles ourselves, or using javascript utility to add\nclasses to our columns."),"\n",l.createElement(n.p,null,"For the purposes of this tutorial the classes are written out long hand. In"),"\n",l.createElement(n.p,null,"In ",l.createElement(n.code,null,"index.html")," replace ",l.createElement(n.code,null,"LANDING PAGE")," with"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<div class="page page-landing cds--css-grid cds--css-grid--full-width">\n  <div class="page-landing__banner cds--css-grid-column cds--col-span-100">\n    1\n  </div>\n  <div class="page-landing__r2 cds--css-grid-column cds--col-span-100">\n    <div class="cds--subgrid cds--subgrid--full-wide">\n      <div\n        class="page-landing__tab-content cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-4 cds--lg:col-span-7">\n        7/16\n      </div>\n      <div\n        class="cds--sm:col-span-4 cds--md:col-span-4 cds--lg:col-start-9 cds--lg:col-span-8 cds--css-grid-column">\n        8/16\n      </div>\n    </div>\n  </div>\n  <div class="page-landing__r3 cds--css-grid-column cds--col-span-100">\n    <div class="cds--subgrid cds--subgrid--full-wide">\n      <div\n        class="page-landing__label cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-2 cds--lg:col-span-4">\n        1/4\n      </div>\n      <div\n        class="page-landing__title cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-2 cds--lg:col-span-4">\n        1/4\n      </div>\n      <div\n        class="page-landing__title cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-2 cds--lg:col-span-4">\n        1/4\n      </div>\n      <div\n        class="page-landing__title cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-2 cds--lg:col-span-4">\n        1/4\n      </div>\n    </div>\n  </div>\n</div>\n')),"\n",l.createElement(d,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Grid education")," There are many options for the Carbon Grid. For more\ninformation review\n",l.createElement(n.a,{href:"https://carbondesignsystem.com/elements/2x-grid/overview/"},"2x Grid")," on the\nCarbon Design System website. If apply classes manually it is also well worth\nchecking out the\n",l.createElement(n.a,{href:"https://carbon-elements.netlify.app/grid/examples/css-grid/"},"CSS Grid Demo")," to")),"\n",l.createElement(n.p,null,"Then import the grid styles in ",l.createElement(n.code,null,"style.scss"),"."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss",metaData:"path=style.scss"},"@use '@carbon/styles/scss/grid';\n")),"\n",l.createElement(n.p,null,"In order to use the grid, we need to wrap everything in a ",l.createElement(n.code,null,"cds--css-grid"),".\nBecause we’re building with the new CSS Grid, we won’t be using typical rows. We\nhave used a combination of ",l.createElement(n.code,null,"cds--css-grid-column")," classes to create our layout."),"\n",l.createElement(n.p,null,"The CSS Grid is a 16 column grid. The column widths and positions are specified\nusing a combination of ",l.createElement(n.code,null,"cds--BP:col-span-N")," and ",l.createElement(n.code,null,"cds--BP:col-start-N"),"classes.\nWhere BP is the Carbon breakpoint and N is column count or starting position.\nFor example, ",l.createElement(n.code,null,'<div class="cds-lg:col-start-9 cds-lg:col-span-8" >')," means the\ncolumn will start at column 9 and span 8 columns when the large (lg) breakpoint\nis active. large breakpoint."),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://carbon-elements.netlify.app/grid/examples/css-grid/"},"https://carbon-elements.netlify.app/grid/examples/css-grid/")),"\n",l.createElement(n.p,null,"We’ve included the designs for this tutorial app in the ",l.createElement(n.code,null,"design.figma")," file\nfound as a top-level file in the ",l.createElement(n.code,null,"carbon-tutorial")," repository. But, if you don’t\nhave Figma installed and available to inspect the design, we’ll provide\nscreenshots."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 82.29166666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAACxLAAAsSwGlPZapAAACkklEQVR42q2TTU8TURSG+W8mxuh/IMY1G2NisFCRRNSVcWHiypiQqBvlmwqoYFAXVGOCCthipy3QtGU633fmzsydzuu5nbYzGNzZ5Ok5536899x7zozgP/9G5N/i0jLGJ/KYvnsPk/k7yE9NIzd5G7dy+SFyflza3GTfJkzkp3BzPIe5+YVUcPfHPp6/WsXy2jssrq5jgZhfWcf65nbC+21sSDb/gsbebn3EGtn9g1IqGIgIqsGg2x4Mh0MnpPVCZIjPIlLfJcKomwpajouW7qBjOiRsQzVZ74BT3R7SzvjDMS2h2bFgMy8VdNwALc2BRhnaPIQbdMGGRHD8CMxPrM0FLIknwEUXPhFQtlE2Qx4IOsXEqWH1BKSoQ5scX9B1uuARevi0J6b1UZxUtKZGmHnTwuOdKkzfTwUZ5zisHaGs1FGuHuHgdw2/KjX8LFXoELsnJAVNL8ZWycbSdxMfFAPFKseVJwpG575A93hWMEC5rqJ60kGjraFxqtMTmOhYLMlSAPJCxUqAi48UXHhYwaVnRcx+O8bobANjhT06MEoFj9UuZl6EeLoWJtUjON1rkJlLVZbLVQbc31Bx7WUdYytl7LY83FhsYvqTAj8r6JOA6gCGS+0hMoSJmMxuRwkxNldD4VDFg0IHV1/vYaehY+XAQUHRIbqZoogoTh49SsV43x9kV6yFuF6oo1DRkF/QcHn2Kz4ft6nSlAhdRfQrNRT0+pX8F4w21i16T/JLaojNug0mn0XOC5wV5EEIg/nUW+EQk3pTkvhyLOgVz6bYpUL51F4mo3k3mZetl2lsDydNFZrlwLBd+gQZWh2DvpZB7KJNfdoi9EFMXdBUddrDCBcuz/RhHCfpSjvg/BiZ+Pw1fwDw+KCxTB5AIwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Landing page grid"\n        title=""\n        src="/static/3ea0d8c2a3a61cce13be71ff611b720a/3cbba/landing-layout.png"\n        srcset="/static/3ea0d8c2a3a61cce13be71ff611b720a/7fc1e/landing-layout.png 288w,\n/static/3ea0d8c2a3a61cce13be71ff611b720a/a5df1/landing-layout.png 576w,\n/static/3ea0d8c2a3a61cce13be71ff611b720a/3cbba/landing-layout.png 1152w,\n/static/3ea0d8c2a3a61cce13be71ff611b720a/0b124/landing-layout.png 1728w,\n/static/3ea0d8c2a3a61cce13be71ff611b720a/4ea69/landing-layout.png 2304w,\n/static/3ea0d8c2a3a61cce13be71ff611b720a/6d4cb/landing-layout.png 3712w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(i,null,"Landing page grid"),"\n",l.createElement(d,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Pro tip:")," ",l.createElement(n.code,null,"SHIFT-G")," toggles the layout in Figma.")),"\n",l.createElement(n.h2,null,"Build landing page"),"\n",l.createElement(n.p,null,"We’ll start adding HTML elements and components by row."),"\n",l.createElement(n.h3,null,"First row"),"\n",l.createElement(p,null,l.createElement(m,{colLg:8},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB4ElEQVR42q2TyW7aUBSG8waRumHYILWwQKTKkyUCCcmlZt0XiFSpm+YFml3UXbogqdSKqK0UApjBBJnBgBlqPMbYf3xOBQ1t00hVr/T7HP/X97vHd9jBf2479CiVSjg8PIDwQkCxWIQoihBfiigUCshms8jlchAEgZXP59l7SAw8Pn6LJ7sRPE08w/7+Hp7vZZDJZJBOpxGLxRCPx5FKpZBMJpFIJBCJRBCNRrnvvshjoGXr+PpRxZdLDY2uikZHxXA4ZE0mE4zHY4xGo400TWNfVX9+R3m32/0BXK18jGcDXLcq+Fy+wlVVQrPZRKvVQqVS4ShJEur1OjqdDnvVapXBruvCsiw4joPFYhECA0K6KL/XcHrUg6LWIbdl9Ho9nlGWZSiKwvnaIyj50+kUhmFA13WO9M4Ver4DpWbh7MjH5Tsf7q0D27Z5VtI6v+9RZaZpMohE+TZQMvDhjYPyiQXTWmK5NEIt/ygCrOPvwPCXfTioXVg4feWhdm6Fa7Ke2dyq4m/aqtCxXdxijsanBc5e29CN75tqaKF/reZRoOd5aN+M8O26Dd02MBwMMJvNMJ/P0e/3GUo7SYMeEvXTmM2x8VYBwhDmvO0IgmBznSh/THyeQygDfd/fAvxro1NwB7wRmcfGQUyLAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Banner vertical spacing"\n        title=""\n        src="/static/6ad4eae2273921378fbeb65c42fd8fab/3cbba/landing-r1-spacing.png"\n        srcset="/static/6ad4eae2273921378fbeb65c42fd8fab/7fc1e/landing-r1-spacing.png 288w,\n/static/6ad4eae2273921378fbeb65c42fd8fab/a5df1/landing-r1-spacing.png 576w,\n/static/6ad4eae2273921378fbeb65c42fd8fab/3cbba/landing-r1-spacing.png 1152w,\n/static/6ad4eae2273921378fbeb65c42fd8fab/92c65/landing-r1-spacing.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),l.createElement(i,null,"Banner vertical spacing"))),"\n",l.createElement(n.p,null,"In our first row we’ll need a ",l.createElement(n.code,null,"Breadcrumb")," component. First, let’s import the\ncomponents we need."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=main.js"},"import '@carbon/web-components/es/components/breadcrumb/index';\n")),"\n",l.createElement(n.p,null,"We can now add our component to the first row, replace the content of the ",l.createElement(n.code,null,"div"),"\nwith class ",l.createElement(n.code,null,"page-landing__banner")," with:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<cds-breadcrumb noTrailingSlash aria-label="Page navigation">\n  <cds-breadcrumb-item>\n    <a href="./">Getting started</a>\n  </cds-breadcrumb-item>\n</cds-breadcrumb>\n<h1 class="page-landing__heading">Design &amp; build with Carbon</h1>\n')),"\n",l.createElement(n.h3,null,"Second row"),"\n",l.createElement(n.p,null,"In our second row we’ll need ",l.createElement(n.code,null,"Tabs")," and ",l.createElement(n.code,null,"Button")," components. Add the following\nimport:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=main.js"},"import '@carbon/web-components/es/components/tabs/index';\n")),"\n",l.createElement(n.p,null,"The tabs come next going inside ",l.createElement(n.code,null,"page-landing__r2")," and before the sub\n",l.createElement(n.code,null,"cds--subgrid"),"."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<cds-tabs value="about" class="page-landing__tabs">\n  <cds-tab id="tab-about" value="about" target="panel-about">About</cds-tab>\n  <cds-tab id="tab-design" value="design" target="panel-design">Design</cds-tab>\n  <cds-tab id="tab-develop" value="develop" target="panel-develop"\n    >Develop</cds-tab\n  >\n</cds-tabs>\n')),"\n",l.createElement(n.p,null,"Each of the ",l.createElement(n.code,null,"cds-tab")," components has a ",l.createElement(n.code,null,"target")," attribute. This is used to\nidentify the content visible when that tab is selected."),"\n",l.createElement(n.p,null,"Wrap the subgrid element immediately after the closing ",l.createElement(n.code,null,"</cds-tabs>")," with the\nfollowing. This is where we will place our first tab panel."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<div id="panel-about" role="tabpanel" aria-labelledby="tab-about">\n  ... grid element is here\n</div>\n')),"\n",l.createElement(n.p,null,"Replace the content of the first column ",l.createElement(n.code,null,"7/16")," with:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<h3 class="page-landing__subheading">What is Carbon?</h3>\n<p class="page-landing__p">\n  Carbon is IBM’s open-source design system for digital products and\n  experiences. With the IBM Design Language as its foundation, the system\n  consists of working code, design tools and resources, human interface\n  guidelines, and a vibrant community of contributors.\n</p>\n<cds-button>Learn more</cds-button>\n')),"\n",l.createElement(n.p,null,"The second column content ",l.createElement(n.code,null,"8/16")," is replaced with:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<img\n  class="page-landing__illo"\n  src="./tab-illo.png"\n  alt="Carbon illustration"\n  width="640"\n  height="498" />\n')),"\n",l.createElement(n.p,null,"The ",l.createElement(n.code,null,"tab-illo.png")," image is already located in the ",l.createElement(n.code,null,"public")," folder."),"\n",l.createElement(n.p,null,"After the closing ",l.createElement(n.code,null,"</div>")," of ",l.createElement(n.code,null,'id="panel-about"'),", still inside\n",l.createElement(n.code,null,"page-landing__r2")," we add two further tab panels. This one"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<div id="panel-design" role="tabpanel" aria-labelledby="tab-design">\n  <div class="cds--subgrid cds--subgrid--full-wide">\n    <div\n      class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-16">\n      <div class="page-landing__tab-content">\n        <p class="page-landing__p">\n          Rapidly build beautiful and accessible experiences. The Carbon kit\n          contains all resources you need to get started.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n')),"\n",l.createElement(n.p,null,"and"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<div id="panel-develop" role="tabpanel" aria-labelledby="tab-develop">\n  <div class="cds--subgrid cds--subgrid--full-wide">\n    <div\n      class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-16">\n      <div class="page-landing__tab-content">\n        <p class="page-landing__p">\n          Carbon provides components and styles for all. Whether using Vanilla,\n          Web Components, React, or another reactive library, you can build with\n          Carbon.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n')),"\n",l.createElement(n.h3,null,"Third row"),"\n",l.createElement(n.p,null,"Here we replace all four columns entirely adding some offsets for medium and\nlarge column sizes after the first column."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=index.html"},'<div\n  class="page-landing__label cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-2 cds--lg:col-span-4">\n  The principles\n</div>\n<div\n  class="page-landing__title cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-6 cds--md:col-start-3 cds--lg:col-span-4 cds--lg:col-start-5">\n  Carbon is open\n</div>\n<div\n  class="page-landing__title cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-6 cds--md:col-start-3 cds--lg:col-span-4 cds--lg:col-start-9">\n  Carbon is modular\n</div>\n<div\n  class="page-landing__title cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-6 cds--md:col-start-3 cds--lg:col-span-4 cds--lg:col-start-13">\n  Carbon is consistent\n</div>\n')),"\n",l.createElement(n.h2,null,"Style landing page"),"\n",l.createElement(n.h3,null,"First row"),"\n",l.createElement(n.p,null,"Row one styling is fairly straight forward with some typography and positional\nadjustment so to align it with our other content."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss",metaData:"path=style.scss"},".page {\n  padding: 0;\n\n  > * {\n    padding-inline: $spacing-06;\n    margin: 0;\n  }\n}\n\n.page-landing__banner {\n  padding-block: $spacing-05 $spacing-13;\n  background: $layer-01;\n  box-shadow: $spacing-06 0 0 $layer-01, -1 * $spacing-06 0 0 $layer-01;\n}\n\n.page-landing__heading {\n  @include type-style('productive-heading-05');\n\n  margin: 0;\n}\n")),"\n",l.createElement(n.h3,null,"Second row"),"\n",l.createElement(n.p,null,"The styling for the second row adds further layout and typography changes. It\nalso positions the image and prevents it from causing horizontal overflow. In\norder to make use of the Carbon SCSS mixin ",l.createElement(n.code,null,"breakpoint-down")," we also add the\nbreakpoint import to our list of ",l.createElement(n.code,null,"@use")," near the top of the file."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss",metaData:"path=style.scss"},"@use '@carbon/styles/scss/breakpoint' as *; /* add near top of file */\n\n.page-landing__illo {\n  max-width: 100%;\n  float: inline-end;\n  height: auto;\n}\n\n@include breakpoint-down(md) {\n  .page-landing__illo {\n    max-width: 528px;\n    width: 100%;\n    height: 100%;\n    float: inline-start;\n  }\n}\n\n.page-landing__tabs {\n  margin: (-1 * $spacing-08) 0 $spacing-08;\n}\n\n.page-landing__tab-content {\n  padding-block: $spacing-06;\n}\n\n.page-landing__subheading {\n  @include type-style('productive-heading-03');\n\n  font-weight: 600;\n}\n\n.page-landing__p {\n  @include type-style('productive-heading-03');\n  margin-top: $spacing-06;\n  margin-bottom: $spacing-08;\n}\n")),"\n",l.createElement(n.h3,null,"Third row"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss",metaData:"path=style.scss"},".page-landing__r3 {\n  padding-block: $spacing-09;\n  background: $layer-01;\n}\n")),"\n",l.createElement(n.p,null,"Ta-da! You should see a step 2 complete landing page! Now we can move on to the\nrepo page."),"\n",l.createElement(n.h2,null,"Build repo page"),"\n",l.createElement(n.h3,null,"Add a grid to contain our content"),"\n",l.createElement(n.p,null,"Now in our ",l.createElement(n.code,null,"repositories")," page we will first add a grid wrapping\n",l.createElement(n.code,null,"REPOSITORIES PAGE")),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=repositories.html"},'<div class="page page-repositories cds--css-grid cds--css-grid--full-width">\n  <div class="repo-page__r1 cds--css-grid-column cds--col-span-100">\n    REPOSITORIES PAGE\n  </div>\n</div>\n')),"\n",l.createElement(n.p,null,"Add a minimal amount of styling to move our content away from the edge of the\npage in ",l.createElement(n.code,null,"style.scss"),"."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss",metaData:"style.scss"},".repo-page__r1 {\n  padding-block: $spacing-05;\n}\n")),"\n",l.createElement(n.h3,null,"Adding a table"),"\n",l.createElement(n.p,null,"Before we can add the table we need to import the web component. As this is only\nused in our ",l.createElement(n.code,null,"repositories.html")," page lets create a new script file ",l.createElement(n.code,null,"repos.js"),"\nand then add."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=repos.js"},"import '@carbon/web-components/es/components/data-table/index.js';\n")),"\n",l.createElement(n.p,null,"We need to include this file in ",l.createElement(n.code,null,"repositories.html")," which we can do by adding\nthe following next to the script tag that includes ",l.createElement(n.code,null,"main.js"),"."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=repositories.html"},'<script type="module" src="/repos.js"><\/script>\n')),"\n",l.createElement(n.p,null,"Next we add the table header and column titles to replace the text\n",l.createElement(n.code,null,"REPOSITORIES PAGE")),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=repositories.html"},'<cds-table expandable>\n  <cds-table-header-title slot="title"\n    >Carbon Repositories</cds-table-header-title\n  >\n  <cds-table-header-description slot="description"\n    >A collection of public Carbon repositories.</cds-table-header-description\n  >\n  <cds-table-head>\n    <cds-table-header-row>\n      <cds-table-header-cell>Name</cds-table-header-cell>\n      <cds-table-header-cell>Created</cds-table-header-cell>\n      <cds-table-header-cell>Updated</cds-table-header-cell>\n      <cds-table-header-cell>Open issues</cds-table-header-cell>\n      <cds-table-header-cell>Stars</cds-table-header-cell>\n      <cds-table-header-cell>Links</cds-table-header-cell>\n    </cds-table-header-row>\n  </cds-table-head>\n  <cds-table-body>Table body goes here</cds-table-body>\n</cds-table>\n')),"\n",l.createElement(n.p,null,"The table header should already be visible on the repositories page."),"\n",l.createElement(n.p,null,"Now we can add the rows replacing ",l.createElement(n.code,null,"Table body goes here")," with:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=repositories.html"},"<cds-table-row>\n  <cds-table-cell>Repo 1</cds-table-cell>\n  <cds-table-cell>Date</cds-table-cell>\n  <cds-table-cell>Date</cds-table-cell>\n  <cds-table-cell>123</cds-table-cell>\n  <cds-table-cell>456</cds-table-cell>\n  <cds-table-cell>Links</cds-table-cell>\n</cds-table-row>\n<cds-table-expanded-row>Repo description</cds-table-expanded-row>\n<cds-table-row>\n  <cds-table-cell>Repo 2</cds-table-cell>\n  <cds-table-cell>Date</cds-table-cell>\n  <cds-table-cell>Date</cds-table-cell>\n  <cds-table-cell>123</cds-table-cell>\n  <cds-table-cell>456</cds-table-cell>\n  <cds-table-cell>Links</cds-table-cell>\n</cds-table-row>\n<cds-table-expanded-row>Repo description</cds-table-expanded-row>\n<cds-table-row>\n  <cds-table-cell>Repo 3</cds-table-cell>\n  <cds-table-cell>Date</cds-table-cell>\n  <cds-table-cell>Date</cds-table-cell>\n  <cds-table-cell>123</cds-table-cell>\n  <cds-table-cell>456</cds-table-cell>\n  <cds-table-cell>Links</cds-table-cell>\n</cds-table-row>\n<cds-table-expanded-row>Repo description</cds-table-expanded-row>\n")),"\n",l.createElement(n.h3,null,"Using HTML templates"),"\n",l.createElement(n.p,null,"With the app running we can see that the repositories page now hosts a table.\nHowever, it is not realistic to populate a table with hard coded data way so\nwe’ll refactor to build the table from data."),"\n",l.createElement(n.p,null,"This involves the use of HTML Templates, take a look at\n",l.createElement(n.a,{href:"https://www.w3schools.com/tags/tag_template.asp"},"W3 Schools")," if you need a\nquick refresh."),"\n",l.createElement(n.p,null,"In ",l.createElement(n.code,null,"index.html")," remove the contents of the ",l.createElement(n.code,null,"<cds-table-body>")," tag and return it\nto ",l.createElement(n.code,null,"Table body goes here"),"."),"\n",l.createElement(n.p,null,"Then before the end of the html tag and after the body closing tag add the\nfollowing to define our table row template."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html",metaData:"path=repositories.html"},'<template id="template--table-row">\n  <cds-table-row>\n    <cds-table-cell key="name">Repo 1</cds-table-cell>\n    <cds-table-cell key="created">Date</cds-table-cell>\n    <cds-table-cell key="updated">Date</cds-table-cell>\n    <cds-table-cell key="openIssues">123</cds-table-cell>\n    <cds-table-cell key="stars">456</cds-table-cell>\n    <cds-table-cell key="links">Links</cds-table-cell>\n  </cds-table-row>\n  <cds-table-expanded-row key="expansion"\n    >Repo description</cds-table-expanded-row\n  >\n</template>\n')),"\n",l.createElement(n.p,null,"Next in ",l.createElement(n.code,null,"repos.js")," add the following data that we will use to populate the table\nrows."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=repos.js"},"// cds-table-row data\nlet data = [\n  {\n    name: 'Repo A',\n    created: 'Date',\n    updated: 'Date',\n    openIssues: 123,\n    stars: 456,\n    links: 'Links',\n    expansion: 'Row description',\n  },\n  {\n    name: 'Repo B',\n    created: 'Date',\n    updated: 'Date',\n    openIssues: 123,\n    stars: 456,\n    links: 'Links',\n    expansion: 'Row description',\n  },\n  {\n    name: 'Repo C',\n    created: 'Date',\n    updated: 'Date',\n    openIssues: 123,\n    stars: 456,\n    links: 'Links',\n    expansion: 'Row description',\n  },\n];\n")),"\n",l.createElement(n.p,null,"Next we create the function ",l.createElement(n.code,null,"updateTable")," and make a call to it to populate add\nour rows."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript",metaData:"path=repos.js"},"const updateTable = () => {\n  const tableRowTemplate = document.querySelector(\n    'template#template--table-row'\n  );\n  const tableBody = document.querySelector('cds-table-body');\n  if (tableBody && tableRowTemplate) {\n    tableBody.innerHTML = '';\n    // iterate over data and render rows\n    data.forEach((row) => {\n      let newRow = tableRowTemplate.content.cloneNode(true);\n      const keys = Object.keys(row);\n      keys.forEach((key) => {\n        const keyEl = newRow.querySelector(`[key=\"${key}\"]`);\n        keyEl.innerHTML = row[key];\n      });\n      tableBody.appendChild(newRow);\n    });\n  }\n};\n\nupdateTable();\n")),"\n",l.createElement(n.p,null,"Verify that the table rows are being generated by changing the data and running\nthe app."),"\n",l.createElement(n.p,null,"Congratulations! We’ve now created our static repo page!"),"\n",l.createElement(n.h2,null,"Push to GitHub"),"\n",l.createElement(n.p,null,"That is it you are done. Just one more push to save your completion of step 2."),"\n",l.createElement(n.h3,null,"Git commit and push"),"\n",l.createElement(n.p,null,"First, stage and commit all of your changes:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},'git add --all && git commit -m "feat(tutorial): complete step 2"\n')),"\n",l.createElement(n.p,null,"Then, push to your repository:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"git push -u origin step-2\n")),"\n",l.createElement(d,null,l.createElement(n.p,null,l.createElement(n.strong,null,"Note:")," If your Git remote protocol is HTTPS instead of SSH, you may be\nprompted to authenticate with GitHub when you push changes. If your GitHub\naccount has two-factor authentication enabled, we recommend that you follow\nthese instructions to\n",l.createElement(n.a,{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"},"create a personal access token for the command line"),".\nThat lets you use your token instead of password when performing Git operations\nover HTTPS.")))}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,a.R)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)}},725441:function(e,n,t){t.d(n,{A:function(){return l}});var a=t(296540);var l=({title:e,...n})=>a.createElement("iframe",Object.assign({loading:"lazy",title:e},n,{className:"Preview-module--preview--3e1df"}))}}]);