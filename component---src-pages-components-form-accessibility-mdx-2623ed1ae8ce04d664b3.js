"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[511505],{259977:function(e,n,t){t.r(n);var i=t(28453),a=t(296540),l=t(815929);t(68476);function o(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",code:"code",span:"span",ul:"ul",li:"li"},(0,i.R)(),e.components),{PageDescription:t,AnchorLinks:o,AnchorLink:s,Row:c,Column:m,Caption:d}=n;return s||r("AnchorLink",!0),o||r("AnchorLinks",!0),d||r("Caption",!0),m||r("Column",!0),t||r("PageDescription",!0),c||r("Row",!0),a.createElement(a.Fragment,null,a.createElement(t,null,a.createElement(n.p,null,"Design annotations are needed for specific instances shown below, but Carbon\nalready incorporates accessibility into the components that make up a form.\nRefer to form components’ individual accessibility tabs for specific\nconsiderations.")),"\n",a.createElement(o,null,a.createElement(s,null,"What Carbon provides"),a.createElement(s,null,"Design recommendations"),a.createElement(s,null,"Development considerations")),"\n",a.createElement(n.h2,null,"What Carbon provides"),"\n",a.createElement(n.p,null,"Carbon bakes keyboard operation into the components that make up a form,\nimproving the experience of blind users and others who operate via the keyboard.\nCarbon incorporates many other accessibility considerations, some of which are\ndescribed below."),"\n",a.createElement(n.h3,null,"Information icons"),"\n",a.createElement(n.p,null,"A common challenge for forms is how to surface additional information to the\nuser without making the form too dense. Carbon provides an information icon\n",a.createElement(n.a,{href:"/components/toggletip/usage"},"toggletip")," to ensure such information is\npredictable and keyboard accessible. The toggletip is a button, which is in the\ntab order. Both ",a.createElement(n.code,null,"Space")," and ",a.createElement(n.code,null,"Enter")," open the tip, and ",a.createElement(n.code,null,"Esc")," dismisses it."),"\n",a.createElement(c,null,a.createElement(m,{colLg:8},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0klEQVR42mNgIAD+M/xnrGeoZ2IYhOA/I4iM0p3rGagyI5Fi49KM01gZgF6NM5kbE6o2s4JiAz1UJrIbM8xkpZqHQxlWMYebtyt4qJXo1fvM5Pr//z/TqtD/zP/r/5McQYwQyoLz+vmHmx/ef/rryeMXT549ffn45Yu3H589fL0OHML/iTQYlEQKLVZxAt3Idu/6i/TXL99OfPr4Rffjh897nj19NeXRg5fZUAMZifOqTC8n0FAWqoVbvPx8DnjC+Q8Ms///WdAwM0kG2iMZSA4AALq1Yurhf6wdAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="example of information icon taking separate focus in a text input"\n        title=""\n        src="/static/f0ee07d07800ce262cec7e69779db250/3cbba/form-accessibility-1.png"\n        srcset="/static/f0ee07d07800ce262cec7e69779db250/7fc1e/form-accessibility-1.png 288w,\n/static/f0ee07d07800ce262cec7e69779db250/a5df1/form-accessibility-1.png 576w,\n/static/f0ee07d07800ce262cec7e69779db250/3cbba/form-accessibility-1.png 1152w,\n/static/f0ee07d07800ce262cec7e69779db250/92c65/form-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),a.createElement(d,null,a.createElement(n.p,null,"The toggletip pattern is used to make form help text keyboard accessible.")))),"\n",a.createElement(n.h3,null,"Error handling"),"\n",a.createElement(n.p,null,"Carbon incorporates accessible inline error and warning messages into many\ncomponents, such as text inputs. Error states are also conveyed programmatically\nto assistive technologies."),"\n",a.createElement(n.h2,null,"Design recommendations"),"\n",a.createElement(n.p,null,"Design annotations and considerations are needed for the following situations."),"\n",a.createElement(n.h3,null,"Identify requirements at the start of the form"),"\n",a.createElement(n.p,null,"Traditionally, a legend at the start of a form identifies the symbol (often an\nasterisk) used for required fields, and the symbol is repeated as part of the\nlabel for each appropriate field. This is still considered the most accessible\nimplementation. However, as discussed in\n",a.createElement(n.a,{href:"/components/form/usage/#optional-versus-required-fields"},"Optional versus required fields"),",\nCarbon allows for either the required or optional fields to be the inputs\nidentified. Especially where only optional fields are indicated, an instruction\nshould precede a form, providing the context for whether required or optional\nfields are indicated. The traditional phrasing is “All fields are required\nunless marked as optional” (or the reverse). See the Equal Access Toolkit topic\n",a.createElement(n.a,{href:"https://www.ibm.com/able/toolkit/design/visual/#required-fields"},"Required fields"),"\nfor more information."),"\n",a.createElement(n.p,null,"By convention, simple username/password login forms do not need such an\ninstruction (or even to be marked as required), since the context is clear to\nusers."),"\n",a.createElement(n.h3,null,"Be familiar with the accessibility of common form components"),"\n",a.createElement(n.p,null,"The following topics each have their own accessibility considerations, which\nimprove the overall form experience:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/checkbox/accessibility"},"Checkbox")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/date-picker/accessibility"},"Date picker")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/dropdown/accessibility"},"Dropdown")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/file-uploader/accessibility"},"File uploader")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/loading/accessibility"},"Loading")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/modal/accessibility"},"Modal")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/notification/accessibility"},"Notification")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/number-input/accessibility"},"Number input")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/radio-button/accessibility"},"Radio button")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/select/accessibility"},"Select")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/slider/accessibility"},"Slider")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/components/text-input/accessibility"},"Text input")),"\n"),"\n",a.createElement(n.h2,null,"Development considerations"),"\n",a.createElement(n.p,null,"Keep these considerations in mind if you are modifying Carbon patterns or\ncreating a custom form or input component."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"A form must be wrapped in a ",a.createElement(n.code,null,"<form>")," element."),"\n",a.createElement(n.li,null,"Required fields must be identified programmatically, either via the label or\nwith ",a.createElement(n.code,null,"aria-required"),"."),"\n",a.createElement(n.li,null,"Remember to supply an ",a.createElement(n.code,null,"aria-label"),", ",a.createElement(n.code,null,"aria-labelledby")," or ",a.createElement(n.code,null,"title")," to the\ncomponent to comply with\n",a.createElement(n.a,{href:"https://able.ibm.com/rules/archives/latest/doc/en-US/aria_accessiblename_exists.html"},"accessible naming")),"\n",a.createElement(n.li,null,"Helper text and other instructions should be surfaced to users via\n",a.createElement(n.code,null,"aria-describedby")," or other accessible techniques. See\n",a.createElement(n.a,{href:"https://www.ibm.com/able/toolkit/develop/user-input/#inputs"},"Programmatically associate inputs with labels"),"."),"\n",a.createElement(n.li,null,"See the ARIA authoring practices on\n",a.createElement(n.a,{href:"https://w3c.github.io/aria-practices/#aria_lh_form"},"forms")," and\n",a.createElement(n.a,{href:"https://w3c.github.io/aria-practices/#naming_with_labels"},"labels")," for more\nconsiderations."),"\n"),"\n",a.createElement(l.A,{layout:"table",components:["Form","Form group","Form label","Fluid form"]}))}function r(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,i.R)(),e.components);return n?a.createElement(n,e,a.createElement(o,e)):o(e)}}}]);