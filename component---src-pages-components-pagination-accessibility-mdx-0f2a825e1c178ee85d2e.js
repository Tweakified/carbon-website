"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[369055],{100199:function(e,n,a){a.r(n);var t=a(28453),i=a(296540),o=a(815929);a(931363);function l(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",h4:"h4",code:"code",span:"span",ul:"ul",li:"li",a:"a"},(0,t.R)(),e.components),{PageDescription:a,AnchorLinks:l,AnchorLink:c,Row:r,Column:g,Caption:p}=n;return c||s("AnchorLink",!0),l||s("AnchorLinks",!0),p||s("Caption",!0),g||s("Column",!0),a||s("PageDescription",!0),r||s("Row",!0),i.createElement(i.Fragment,null,i.createElement(a,null,i.createElement(n.p,null,"No accessibility annotations are needed for pagination, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),"\n",i.createElement(l,null,i.createElement(c,null,"What Carbon provides"),i.createElement(c,null,"Development considerations")),"\n",i.createElement(n.h2,null,"What Carbon provides"),"\n",i.createElement(n.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(n.h3,null,"Keyboard interaction"),"\n",i.createElement(n.h4,null,"Pagination"),"\n",i.createElement(n.p,null,"The tab order goes from left to right through the controls in the pagination\nvariant. On focus, the selects are opened with ",i.createElement(n.code,null,"Space")," or with ",i.createElement(n.code,null,"Up")," or ",i.createElement(n.code,null,"Down"),"\narrows, which also cycle through the values. Both ",i.createElement(n.code,null,"Space")," and ",i.createElement(n.code,null,"Enter")," select a\nvalue and close the select. The select can also be closed by pressing ",i.createElement(n.code,null,"Esc"),". The\nprevious and next page arrow buttons are activated by pressing ",i.createElement(n.code,null,"Space")," or\n",i.createElement(n.code,null,"Enter"),"."),"\n",i.createElement(r,null,i.createElement(g,{colLg:12},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABA0lEQVR42s1SQW7CMBDM//+CeuDAparUQ1+AWtoD6qUC4jgGgk1ie+2p10YtFURFPXWkib3OenZ3kgojiBEgH+DdNwNF/IZq7IV3BGIB1jiRRYnC7YKlIypi/vpFZwkxxMJYOuZnSDHzS7CtNYbe531vXMm6Ai5kUx6vjm1IIueNVMWviIe7Z9Qf+3zJdEPyK+Tzc3IVO3gctS3iKUd3PfpT/GPkg+4gRI31agOxkdht91BbBSkllFIwxkBrnc8b0aKRTV7FWqJtdpeCRJQ7eH8VWC5WKfZpnJDPmbxnPM3e8Dh9wf1knguwp9758a/MPnDSGHjc48EWW0K4/bf5K/6/4CfxMGLCu64vsAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="example of tabbing into a pagination group and arrowing between selections"\n        title=""\n        src="/static/0ab43d837df1d7da9609d834939626da/3cbba/pagination-a11y-1.png"\n        srcset="/static/0ab43d837df1d7da9609d834939626da/7fc1e/pagination-a11y-1.png 288w,\n/static/0ab43d837df1d7da9609d834939626da/a5df1/pagination-a11y-1.png 576w,\n/static/0ab43d837df1d7da9609d834939626da/3cbba/pagination-a11y-1.png 1152w,\n/static/0ab43d837df1d7da9609d834939626da/0b124/pagination-a11y-1.png 1728w,\n/static/0ab43d837df1d7da9609d834939626da/0c3f5/pagination-a11y-1.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(n.p,null,"Interactive elements in pagination maintain their usual Carbon keyboard\nbehaviors and tab order.")))),"\n",i.createElement(n.p,null,"When the pagination is at either end of its range, one of the page navigation\nbuttons becomes invalid. When that happens, the button is no longer navigable or\noperable, like any other disabled control."),"\n",i.createElement(r,null,i.createElement(g,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABA0lEQVR42uVRQU7DMBDMo/kHz+HGA7hwroQUVah1UtqkidPEu157WDtBAZWCxBVLI3l2dmc2ToEfTgwRQUK6zTxGiHLxYa7H65nilplngZs8mATsBEHNaeFJSzV2PvdmTTkpv2mYtojLBkQeF0t58DqUc1DSEr4YxsXBbFvc3z1g82wyd6Ma9vRt8NA5/fw1qPDe4wPMmhQDzqcBT48veDOdPtPM2+OQdRHJSP3OMU51r3VZDZumQVVVqOsaxuwVBsPQq8SY3Ihz22G/qxUVXrc7lGWZe6y1OB501hxg+3E1ZGZ8BhEt92VrYn2/KcNNpFu5DC8+84sdtcf//pf/ev6h4TsVUmGt84HeIQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="tab order bypasses the disabled left-arrow icon"\n        title=""\n        src="/static/23839a90fd94c3b913ec53819ba08b73/3cbba/pagination-a11y-2.png"\n        srcset="/static/23839a90fd94c3b913ec53819ba08b73/7fc1e/pagination-a11y-2.png 288w,\n/static/23839a90fd94c3b913ec53819ba08b73/a5df1/pagination-a11y-2.png 576w,\n/static/23839a90fd94c3b913ec53819ba08b73/3cbba/pagination-a11y-2.png 1152w,\n/static/23839a90fd94c3b913ec53819ba08b73/92c65/pagination-a11y-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(n.p,null,"The prior page button is disabled and unreachable when the pagination is at\nthe start of its range.")))),"\n",i.createElement(n.h4,null,"Pagination nav"),"\n",i.createElement(n.p,null,"The tab order goes left to right through the button controls in the pagination\nnav variant. When page buttons have focus, ",i.createElement(n.code,null,"Space")," or ",i.createElement(n.code,null,"Enter")," activates the page\nbutton and changes the current page to the button that currently has selection.\nWhen the previous and next page arrow buttons have focus, ",i.createElement(n.code,null,"Space")," or ",i.createElement(n.code,null,"Enter"),"\nactivates them."),"\n",i.createElement(r,null,i.createElement(g,{colLg:12},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAx0lEQVR42r2SyQrCMBCG8/4v49mLBw8eFQRBFKQXbV1oa9YuaX6TtNVaUBGXgZ8kk5lvJgvBl418CjDGXAXTAbaOd6yqDIpcQ5cVykKjtCPpB7jNbtVncjDfSGMul7SOXZBgNQ+RqQI0lqCpgmAZpJVgOZhd01TWSiTONkaJvHd+3IDbTYzlLLRVS3CqoHiG457jEDGcIup9wsNVM7cxMn/9KI6vdV1kOg4wGa4xGizAmfBX4q+6o4dA16lL6NPvXvEf3+bnwAv0qRW7oEMsSgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Interactive elements in pagination nav maintain their usual Carbon keyboard behaviors and tab order."\n        title=""\n        src="/static/3f151575d6a8556e69cd41660a9db162/3cbba/pagination-a11y-3.png"\n        srcset="/static/3f151575d6a8556e69cd41660a9db162/7fc1e/pagination-a11y-3.png 288w,\n/static/3f151575d6a8556e69cd41660a9db162/a5df1/pagination-a11y-3.png 576w,\n/static/3f151575d6a8556e69cd41660a9db162/3cbba/pagination-a11y-3.png 1152w,\n/static/3f151575d6a8556e69cd41660a9db162/0b124/pagination-a11y-3.png 1728w,\n/static/3f151575d6a8556e69cd41660a9db162/0c3f5/pagination-a11y-3.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(n.p,null,"Interactive elements in pagination nav maintain their usual Carbon keyboard\nbehaviors and tab order.")))),"\n",i.createElement(n.p,null,"If an overflow ellipsis is present in the pagination nav, once focused, pressing\n",i.createElement(n.code,null,"Space"),", ",i.createElement(n.code,null,"Up")," arrow, or ",i.createElement(n.code,null,"Down")," arrow activates the select menu to choose an\navailable page to navigate to. ",i.createElement(n.code,null,"Up")," or ",i.createElement(n.code,null,"Down")," arrows navigate between page\noptions in the menu. ",i.createElement(n.code,null,"Space")," or ",i.createElement(n.code,null,"Enter")," selects a page from the menu and closes\nit. The menu can also be closed by pressing ",i.createElement(n.code,null,"Esc"),"."),"\n",i.createElement(r,null,i.createElement(g,{colLg:12},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAq0lEQVR42q2SwQrCMAyG9/5v4Rt4E68TPAiiyBDmDttEvYhubFa7bslva+1FvGxrIATS9ufL3wTwHEGfy0QMZpOeBL0SKtliE6aIt2dUpbBN7iFoR3NJkFowjm44ZQXkq+lHaESI6FsZUhGehjB/oKgbUNd+zgaN7N5VQmGyOGI23SNapciTqyZVwz1kTYxOINldsA4zLOcHlPd65Nrw338YtzZM1l/n8a/gG986FcZEqLAQAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="The menu opens by pressing Space, Up arrow, or Down arrow, and closes by pressing Space or Enter to select an item."\n        title=""\n        src="/static/db0cdc03e7bac89bbb74b4798434fb29/3cbba/pagination-a11y-4.png"\n        srcset="/static/db0cdc03e7bac89bbb74b4798434fb29/7fc1e/pagination-a11y-4.png 288w,\n/static/db0cdc03e7bac89bbb74b4798434fb29/a5df1/pagination-a11y-4.png 576w,\n/static/db0cdc03e7bac89bbb74b4798434fb29/3cbba/pagination-a11y-4.png 1152w,\n/static/db0cdc03e7bac89bbb74b4798434fb29/0b124/pagination-a11y-4.png 1728w,\n/static/db0cdc03e7bac89bbb74b4798434fb29/0c3f5/pagination-a11y-4.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(n.p,null,"The menu opens by pressing Space, Up arrow, or Down arrow, and closes by\npressing Space or Enter to select an item.")))),"\n",i.createElement(n.h3,null,"Labeling"),"\n",i.createElement(n.h4,null,"Pagination"),"\n",i.createElement(n.p,null,"Not all the elements in pagination have static or visually isolated labels.\nCarbon constructs a programmatic name for the second select by concatenating\ndynamically generated text on the screen. Carbon also provides accessible names\nfor the icon-only buttons."),"\n",i.createElement(r,null,i.createElement(g,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA9klEQVR42sWSvU7DMBSF8568AhMrIwsTYmdnYUViZENi5gFoC3HiJI3iOIl/8vPhBpEyIVVFqqWj62tZn459bsQ/r+gkQGs8pvNLP44TXePoWscU9gcD729fuLt6Xvpc1FyfP3Jz8UQWq/lsmr7BUd/3/CXvPYWsyROFd55hHHChZkIhPyva2tD7Ye+wLEvSNEVKiRCCJElQSqG1RjcaVdXINAt3JJt1zGr1ThwLtkVJLguKYkujuz1w5+C3nHNzXRwGN602s6yxWGsxoXatRVctYlNiwl8elfJPEMm64vLsgbfXjyWso8ZmB2i1Cy8ZTzyHhwC/AAN3XSYSIiJ5AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="illustration showing labels for select and icon-only buttons"\n        title=""\n        src="/static/46ba61c90402c274a13fba5e66f74295/3cbba/pagination-a11y-5.png"\n        srcset="/static/46ba61c90402c274a13fba5e66f74295/7fc1e/pagination-a11y-5.png 288w,\n/static/46ba61c90402c274a13fba5e66f74295/a5df1/pagination-a11y-5.png 576w,\n/static/46ba61c90402c274a13fba5e66f74295/3cbba/pagination-a11y-5.png 1152w,\n/static/46ba61c90402c274a13fba5e66f74295/92c65/pagination-a11y-5.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(n.p,null,"Carbon provides the accessible names “Page”, “Previous”, and “Next” for\nassistive technology.")))),"\n",i.createElement(n.h4,null,"Pagination nav"),"\n",i.createElement(n.p,null,"Carbon constructs a programmatic name for the page ghost buttons by\nconcatenating dynamically generated text on the screen. Carbon also provides\naccessible names for the icon-only buttons."),"\n",i.createElement(r,null,i.createElement(g,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAzElEQVR42sVSOQ4CMQzkpfsIengCv0DbQAt8YymhokPcWjbZJHYymACLAoKKw5JlZTIZje208OFofVWwVg77dRXrHbModxohhOQhkReugnP8LBj8hTzqF+hkA0zyoiFM8il67TF0ZePZX7mL2QbdbIh5sUzw1KEWhyuVOKxKg8NWgdknTpyl6NAaet2yMyyiNiYzSxKqY42yrAUz0raXVineKcHJEYx+I8gylzPhXG+hNWN/oGYsl1kGEWPYmqT6H275VTws+I//8BOCJ9rgYcuqUlSyAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Carbon provides the accessible names &quot;Page&quot;, &quot;Previous&quot;, and &quot;Next&quot; for assistive technology."\n        title=""\n        src="/static/b04625197c131edac24c009859a76e34/3cbba/pagination-a11y-6.png"\n        srcset="/static/b04625197c131edac24c009859a76e34/7fc1e/pagination-a11y-6.png 288w,\n/static/b04625197c131edac24c009859a76e34/a5df1/pagination-a11y-6.png 576w,\n/static/b04625197c131edac24c009859a76e34/3cbba/pagination-a11y-6.png 1152w,\n/static/b04625197c131edac24c009859a76e34/92c65/pagination-a11y-6.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(p,null,i.createElement(n.p,null,"Carbon provides the accessible names “Page”, “Previous”, and “Next” for\nassistive technology.")))),"\n",i.createElement(n.h2,null,"Development considerations"),"\n",i.createElement(n.p,null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),"\n",i.createElement(n.ul,null,"\n",i.createElement(n.li,null,"Carbon uses ",i.createElement(n.code,null,"<select>")," elements for the dropdowns."),"\n",i.createElement(n.li,null,"Consult the\n",i.createElement(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html"},"ARIA authoring practices"),"\nfor more considerations."),"\n"),"\n",i.createElement(o.A,{layout:"table",components:["Pagination","Pagination nav"]}))}function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,t.R)(),e.components);return n?i.createElement(n,e,i.createElement(l,e)):l(e)}}}]);