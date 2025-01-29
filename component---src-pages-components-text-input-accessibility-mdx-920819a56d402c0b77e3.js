"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[483405],{489105:function(e,t,n){n.r(t);var a=n(28453),i=n(296540),s=n(815929);n(68476);function l(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",span:"span",ul:"ul",li:"li"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:l,AnchorLink:r,Row:o,Column:p,Caption:d}=t;return r||c("AnchorLink",!0),l||c("AnchorLinks",!0),d||c("Caption",!0),p||c("Column",!0),n||c("PageDescription",!0),o||c("Row",!0),i.createElement(i.Fragment,null,i.createElement(n,null,i.createElement(t.p,null,"No accessibility annotations are needed for text inputs, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),"\n",i.createElement(l,null,i.createElement(r,null,"What Carbon provides"),i.createElement(r,null,"Development considerations")),"\n",i.createElement(t.h2,null,"What Carbon provides"),"\n",i.createElement(t.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(t.h3,null,"Keyboard navigation"),"\n",i.createElement(t.p,null,"Carbon’s text inputs and text areas replicate the default HTML component\noperation. Each input field is a tab stop, as are any preceding information\nicons (which open with ",i.createElement(t.code,null,"Enter"),"/",i.createElement(t.code,null,"Space")," and close with ",i.createElement(t.code,null,"Esc"),"). For password\ninputs, Carbon provides a keyboard-operable ability to toggle the password\nvalue’s visibility using ",i.createElement(t.code,null,"Enter")," or ",i.createElement(t.code,null,"Space"),"."),"\n",i.createElement(o,null,i.createElement(p,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABdElEQVR42mNgQAOhWqvYAtT7S30UesKhQowMlIBolYl8fsr9cTb87S5UMPA/ow/DTK5p06aJTe1fqNmYM9/6zMEHkh8/fhR+euOpyK1zz0RB+NmtZ6J3z9zlJ2jcqtBVzEBP89y59mTfpw9f/j959OzXsycvf7949ur3m1fvfr998+EXEH//+uXH/+cPX28HO+H/fyacBsbbz+dgYLBneXTzld3rF++injx8Hv7k0fOIJ49eRbx68iri3s0n8TevPEl48vBl/J2rL5wZGIxZc1UmsmM1LJQhlDlUppcTLdyQww+dzfgfGEQeQAONjdNYsRtqATaQ6e7Nh41PHj3d+/zpizUvnr9a++Lpq7XPHr/c8Pb1u7VvX71bdf/20z23rjxoAenJ9ZjIHqpVz4Y9Sv7/B9nMfOvqw8kP7j+6+ODeo2P37z48cef2/RNA/on37z6cePPqw7Enj15evH/n8SSQnvrQVWxpxjNZGagFjIGGDS0DAQK3xSi541t8AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="example of text input keyboard navigation"\n        title=""\n        src="/static/b30f6e91324dd5a1b0d625a1086fec92/3cbba/text-input-accessibility-1.png"\n        srcset="/static/b30f6e91324dd5a1b0d625a1086fec92/7fc1e/text-input-accessibility-1.png 288w,\n/static/b30f6e91324dd5a1b0d625a1086fec92/a5df1/text-input-accessibility-1.png 576w,\n/static/b30f6e91324dd5a1b0d625a1086fec92/3cbba/text-input-accessibility-1.png 1152w,\n/static/b30f6e91324dd5a1b0d625a1086fec92/92c65/text-input-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,"Each input is a tab stop, as are any information icons."))),"\n",i.createElement(t.h3,null,"Keyboard interaction"),"\n",i.createElement(t.p,null,"On focus, users can type directly into the input field. Any existing text in the\ninput is highlighted on focus and will be replaced when the user begins typing.\n(Existing text in a text area is not highlighted on focus; instead the cursor is\nplaced at the start or the user’s prior point of interaction.) Users can\ninteract inside text inputs and text areas using standard arrow keys and\nmodifiers (",i.createElement(t.code,null,"Ctrl")," for Windows, ",i.createElement(t.code,null,"Option")," for Mac)."),"\n",i.createElement(o,null,i.createElement(p,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABcUlEQVR42mNgoAeor//P9P8/CmZGwyAxRlLMZCRCnrCB//9DFG04fD9p/cH7E9YeeNC+du/dzh2n3tTtPvuhZvvpDzWrj3yo2nDocfeuk09TIHrwuBQmeebut60bz/39P3/fuz/z9rz8v+jg+/8L93/4v/zwh/8n73z78+zT//+vP/3fBdXDRNDAO48/b3z5/uf/24/ffb/75P2vB88//bz39OPPRy8+/vz149u3/////H/w4us2og188+n/ViD7/99///78RwP/oGIvPxLlQkgYbt/3LP3kuReTT1981Xb01PO+U5fedJy98rb1yoMPtVfufaq9/vhr0+GLH6IIhiEs5jwkO5ptuBu63STboh34mxfaCzZnukq3eILk5BnkOYAUE7ExDVYQqjNpgq9K7+xQvb6MALX+TQHq/aWhhj3hDKEMbM6mAcI2Nt6CasbGIkClrEQlQg+VXHYPlYnsxsYzWe3l53MYMwBphnoWYjQDAMBT+57AQ48tAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="example of keyboard operation in text area"\n        title=""\n        src="/static/619697e90dc123ec320bf813445c0f2e/3cbba/text-input-accessibility-2.png"\n        srcset="/static/619697e90dc123ec320bf813445c0f2e/7fc1e/text-input-accessibility-2.png 288w,\n/static/619697e90dc123ec320bf813445c0f2e/a5df1/text-input-accessibility-2.png 576w,\n/static/619697e90dc123ec320bf813445c0f2e/3cbba/text-input-accessibility-2.png 1152w,\n/static/619697e90dc123ec320bf813445c0f2e/92c65/text-input-accessibility-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(t.p,null,"Users can move around in text inputs and text areas using arrows keys and\nmodifiers.")))),"\n",i.createElement(t.h3,null,"Labeling and helper text"),"\n",i.createElement(t.p,null,"Carbon programmatically surfaces both the input’s label and any helper text to\nassistive technologies such as screen readers. Any error messages for text\ninputs are also accessibly revealed."),"\n",i.createElement(o,null,i.createElement(p,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqUlEQVR42mNgGPLg////jLgwsWaAFDJDaSYoTRmobd1nP2Hm8eD+qceDVm17arPl0i/jrWe/moDwzktfjbec+Wi+/NAPNaK8B6Iv33m/8f3Hb/+fPn/77eXrj7/fvPvy+/W7zzD848v3P/+vP/y6HaqHiaCX69sP2k2YdiS4b+ox355JhwJ6Jx8Pnr/mqfXGs//11p/8abDpzE+jBXu/Kw98zFIrlgcXAADq6ouD8W0OmgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Date of release label and date input helper text are shown as being accessibly provided"\n        title=""\n        src="/static/7bfa76a3a66867f37b88eb28af059b5d/3cbba/text-input-accessibility-3.png"\n        srcset="/static/7bfa76a3a66867f37b88eb28af059b5d/7fc1e/text-input-accessibility-3.png 288w,\n/static/7bfa76a3a66867f37b88eb28af059b5d/a5df1/text-input-accessibility-3.png 576w,\n/static/7bfa76a3a66867f37b88eb28af059b5d/3cbba/text-input-accessibility-3.png 1152w,\n/static/7bfa76a3a66867f37b88eb28af059b5d/92c65/text-input-accessibility-3.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,"Labels and helper text are accessibly provided."))),"\n",i.createElement(t.h2,null,"Development considerations"),"\n",i.createElement(t.p,null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Labels are properly associated with inputs using the ",i.createElement(t.code,null,"for")," attribute."),"\n",i.createElement(t.li,null,"Helper text is surfaced to assistive technology through ",i.createElement(t.code,null,"aria-describedby"),"."),"\n"),"\n",i.createElement(s.A,{layout:"table",components:["Text input","Text area","Fluid text input","Fluid text area"]}))}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?i.createElement(t,e,i.createElement(l,e)):l(e)}}}]);