"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[234990],{380886:function(e,t,n){n.r(t);var a=n(28453),i=n(296540),c=n(815929);n(734820);function s(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",span:"span",code:"code",ul:"ul",li:"li",a:"a"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:s,AnchorLink:l,Row:r,Column:d,Caption:h}=t;return l||o("AnchorLink",!0),s||o("AnchorLinks",!0),h||o("Caption",!0),d||o("Column",!0),n||o("PageDescription",!0),r||o("Row",!0),i.createElement(i.Fragment,null,i.createElement(n,null,i.createElement(t.p,null,"Design annotations are needed for specific instances shown below, but for the\nstandard content switcher component, Carbon already incorporates accessibility.")),"\n",i.createElement(s,null,i.createElement(l,null,"What Carbon provides"),i.createElement(l,null,"Design recommendations"),i.createElement(l,null,"Development considerations")),"\n",i.createElement(t.h2,null,"What Carbon provides"),"\n",i.createElement(t.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(t.h3,null,"Keyboard interactions"),"\n",i.createElement(t.p,null,"Like tabs, content switchers can be automatic or manual. In both instances, the\ncontent switcher takes one tab stop, and arrow keys are used to navigate between\ncontent tabs."),"\n",i.createElement(r,null,i.createElement(d,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVR42mNgGKqAEQmTA/6DNUYbzNUK05q+wlWyzxrEr2eoZyLbScYMM1ntVVJkTOT9EpWkDJ1FRPiNNJSNjTzMcvmA0mwgrCLkwWesFMrPoAXmc0AxpqX2DPYs////Z5QW0fRUVJb/oqmp8V1UXOiXjW7Q/+LgxWHGoQz8oasYmAN1egODDduT9GIYuF2MXfhBBmppabFhGOgjWc/1H+JtblZWVh02NjZNIFsH6Cg1IM2M5A9WUVF7HhkZGU6cLgxlCGUOlekFKWBYunSp4PLly53Xr19vu2jRItedO7dan7101vjUqVOmx48fNz958qT2/v37WfCGHSjg04xncoHYZ88elT998mjj6ZPHG06dOlZ/4sSJpmPHjjUDcdPRo0fbgIYGnTlzhpVghIRqrWLzYMhlT/JbJlXcdMK4puOYLggDXSSBjletWsVMhIH1bK7i3dz2/P0CDCon+BjEd3KLAzE5yQUAXZN4LUdcuxIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="A user tabs to the content switcher then changes the selection with left and right arrow keys. Pressing tab again moves focus to a link inside the section&#39;s content."\n        title=""\n        src="/static/e78497ba29efda0946cb40578bd61a23/3cbba/content-switcher-accessibility-1.png"\n        srcset="/static/e78497ba29efda0946cb40578bd61a23/7fc1e/content-switcher-accessibility-1.png 288w,\n/static/e78497ba29efda0946cb40578bd61a23/a5df1/content-switcher-accessibility-1.png 576w,\n/static/e78497ba29efda0946cb40578bd61a23/3cbba/content-switcher-accessibility-1.png 1152w,\n/static/e78497ba29efda0946cb40578bd61a23/92c65/content-switcher-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(h,null,i.createElement(t.p,null,"Manual and automatic content switchers have the same basic keyboard\ninteraction.")))),"\n",i.createElement(t.p,null,"Automatic and manual switchers differ in how they are activated. The following\nillustration shows what will happen for each variant when a right arrow key is\npressed with the All content tab selected and focused."),"\n",i.createElement(t.p,null,"For automatic switchers, focus and selection are synchronized. When the user\narrows to a tab, it is selected and the content section under the switcher is\nupdated in real time."),"\n",i.createElement(t.p,null,"Manual switchers allow the user to arrow between the content tabs without\nupdating the content section underneath. When the user right arrows, the All\ncontent tab remains selected while focus moves to the Read tab. In order to\nselect the Read tab (and update the content section under the switcher) the user\nwould press ",i.createElement(t.code,null,"Enter")," or ",i.createElement(t.code,null,"Space"),"."),"\n",i.createElement(r,null,i.createElement(d,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABTElEQVR42mNgIAhCmVHxAAM2dXV1XiDNAcTMPCoeoor6no1yGuatInK67SKK5tXChklSZmYqfDIyMpxANSDMgtM0kCJjY2MRcT097lCggQKaQfJqhu7nFNVNropIa1wXkTc5Im+ZpuFkriMOslhUVJRHRUWFHZ8LGbFgbGoY8MhTGdy/f5+Dmpjh////TGiYERXXo4sx4cNE+OE/I0M9UGHof2YwJjIMwSYLCwubKikpPRAXl7grKiryWFRc7pR8/A4NjYKDkkBDeRgK/wvJePdKO1noS2tp2fPgi2WwTeLi4gqysrJdYmISHWJiIt2ikooNdh7bDC2890jb+p+SNXE+rCRlWiEMSofy8vIcBNMhijdBmU6rVyhCf/JWH4XO2Aj9Sd0BKn09oEQvKSnJRWykM0JthGJ7FhWViez2DPUsWgz1bFpa9WyETAAADtWtxeRUD7wAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Two variants of a content switcher with tabs called All, Read and Unread. In the first, the Read tab is selected and focused. In the second the All tab is selected and the Read tab has a focus indicator"\n        title=""\n        src="/static/fe086ec955618cdb5e241c826b2fbb28/3cbba/content-switcher-accessibility-2.png"\n        srcset="/static/fe086ec955618cdb5e241c826b2fbb28/7fc1e/content-switcher-accessibility-2.png 288w,\n/static/fe086ec955618cdb5e241c826b2fbb28/a5df1/content-switcher-accessibility-2.png 576w,\n/static/fe086ec955618cdb5e241c826b2fbb28/3cbba/content-switcher-accessibility-2.png 1152w,\n/static/fe086ec955618cdb5e241c826b2fbb28/92c65/content-switcher-accessibility-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(h,null,i.createElement(t.p,null,"Arrows keys alone update the selected tab in an automatic content switcher.\nThe Space and Enter keys are used to select a content tab after arrowing to it\nin a manual variant.")))),"\n",i.createElement(t.h2,null,"Design recommendations"),"\n",i.createElement(t.h3,null,"Indicate which variant to implement"),"\n",i.createElement(t.p,null,"The automatic and manual switchers are visually indistinguishable in a\nwireframe, so designers should annotate which variant the team has decided to\nimplement. Since the choice largely concerns technical considerations about\npotential latency when updating the content section’s information, architects or\ndevelopers should be involved in the discussion."),"\n",i.createElement(r,null,i.createElement(d,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABK0lEQVR42mNggIL/DAyMDBDMjIYHAZhpnMb61LTFvUDJ1UlMVqpTUly8V1RUdKKIiEitvr6+gJaWFg9QGbu8vDwHiK2rqysIYgPFOIGYBcPA+fLxHPfNGpsqVTzzxRVkrkmKSdwHGvgEaOARQ0NDKVNTU2GgMg5jY2MuNzc3IQsLC2mQwUA1PCoqKuzkeIIRDTOgsTFBPQMD0398CogF9+/f56AmZvj//z/T/1X/mc/MnMn6f9UqZiCfEQ0zkYJpE4ZnjCptH9q1TCpSccuUUpS9LimBiGUzMzMZe3t7EVgsBwQECNva2srijeUzOkUad4zqEwqV3RxFZSRaJSQkOoGKe4AGVgE18IEMgqVDPT09bnV1dV686ZDq4D/Df8Z6hnomaJiwIGGS8zIAkCym1vHEDT8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Two content switchers, one with a pink annotation reading &quot;auto&quot;, the other with an annotation &quot;manual&quot;"\n        title=""\n        src="/static/e6185f497f21bd8a8f3561fa4d3c761e/3cbba/content-switcher-accessibility-3.png"\n        srcset="/static/e6185f497f21bd8a8f3561fa4d3c761e/7fc1e/content-switcher-accessibility-3.png 288w,\n/static/e6185f497f21bd8a8f3561fa4d3c761e/a5df1/content-switcher-accessibility-3.png 576w,\n/static/e6185f497f21bd8a8f3561fa4d3c761e/3cbba/content-switcher-accessibility-3.png 1152w,\n/static/e6185f497f21bd8a8f3561fa4d3c761e/92c65/content-switcher-accessibility-3.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(h,null,i.createElement(t.p,null,"Annotate whether the switcher should be implemented as automatic or manual.")))),"\n",i.createElement(t.h2,null,"Development considerations"),"\n",i.createElement(t.p,null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"The Content switcher is implemented as a ",i.createElement(t.code,null,"tablist"),", with each content tab\nimplemented as a ",i.createElement(t.code,null,"<button>")," with a role of ",i.createElement(t.code,null,"tab"),"."),"\n",i.createElement(t.li,null,"The selected content tab has attributes ",i.createElement(t.code,null,'aria-selected="true"')," and\n",i.createElement(t.code,null,'tabindex="0"'),". All other tabs have these attribute values set to ",i.createElement(t.code,null,'"false"'),"\nand ",i.createElement(t.code,null,'"-1"'),"."),"\n",i.createElement(t.li,null,"See the\n",i.createElement(t.a,{href:"https://w3c.github.io/aria-practices/#tabpanel"},"ARIA authoring practices guidance for tabs"),"\nfor more considerations."),"\n",i.createElement(t.li,null,"For accessibility considerations for manual content switchers, see\n",i.createElement(t.a,{href:"https://w3c.github.io/aria-practices/#kbd_selection_follows_focus"},"Deciding when to make selection automatically follow focus"),"."),"\n"),"\n",i.createElement(c.A,{layout:"table",components:"Content switcher"}))}function o(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?i.createElement(t,e,i.createElement(s,e)):s(e)}}}]);