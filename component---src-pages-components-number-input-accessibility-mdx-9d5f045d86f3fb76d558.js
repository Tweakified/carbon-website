"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[485783],{571659:function(e,n,t){t.r(n);var a=t(28453),i=t(296540),s=t(815929);t(68476);function r(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",span:"span",ul:"ul",li:"li",code:"code"},(0,a.R)(),e.components),{PageDescription:t,AnchorLinks:r,AnchorLink:c,Row:o,Column:p,Caption:m}=n;return c||l("AnchorLink",!0),r||l("AnchorLinks",!0),m||l("Caption",!0),p||l("Column",!0),t||l("PageDescription",!0),o||l("Row",!0),i.createElement(i.Fragment,null,i.createElement(t,null,i.createElement(n.p,null,"Design annotations are needed for specific instances shown below, but for the\nstandard number input component, Carbon already incorporates accessibility.")),"\n",i.createElement(r,null,i.createElement(c,null,"What Carbon provides"),i.createElement(c,null,"Design recommendations"),i.createElement(c,null,"Development considerations")),"\n",i.createElement(n.h2,null,"What Carbon provides"),"\n",i.createElement(n.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(n.h3,null,"Keyboard interaction"),"\n",i.createElement(n.p,null,"The Carbon number input replicates the behavior of the stock HTML component. The\nnumber input takes a single tab stop. The + and - buttons, operable by pointer,\nare not in the tab order. When the input has focus, the arrow keys give keyboard\nusers the same ability to incrementally adjust the values. As well, users can\ndirectly type numeric values in the input. Only numerals are allowed to be\nentered."),"\n",i.createElement(o,null,i.createElement(p,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABGklEQVR42mNgwArqmSB4EAJGEA7Xnurmo9wfABL4//8/Iy5M0LRQrXo2Y4Y0Vn/1rnRHsdZCip1nLz+fAxR2r37cUf3//6fe169fjYHYBBl/+PDVFEibf/z4UQ2vYfX19Uw+xjO5RBmyeJ49ebXz1avX/z99+vQDiH/D8MePn/78/P397ffv3/4DDdwODRLMyKsHuspVvJs7lGEVM4h/69Yt5Tt37hg/fvxY/8mTJwYgfP/+E8N//z9pTqzYVrBi5r7gWw/PKAOVMmtpabEBaSY0r9Zz2DPUs+APEEgy8pLu9naUKlUHMlkFBZX4BQUF+eXl5TlQI0OmlzOUIZQZxqcoZol3IdRyiMWMUIzDM0Dv+EjO5IKFISUAABZQqKMMjWGJAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="example of number input keyboard interaction"\n        title=""\n        src="/static/8e4e8ac90747742906eacfe076460b87/3cbba/number-input-accessibility-1.png"\n        srcset="/static/8e4e8ac90747742906eacfe076460b87/7fc1e/number-input-accessibility-1.png 288w,\n/static/8e4e8ac90747742906eacfe076460b87/a5df1/number-input-accessibility-1.png 576w,\n/static/8e4e8ac90747742906eacfe076460b87/3cbba/number-input-accessibility-1.png 1152w,\n/static/8e4e8ac90747742906eacfe076460b87/92c65/number-input-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(m,null,i.createElement(n.p,null,"The number input is reachable by Tab and changed with the arrow keys or by\ndirectly entering a number.")))),"\n",i.createElement(n.h3,null,"Error handling"),"\n",i.createElement(n.p,null,"Carbon provides errors and warning messages to assistive technology. This is an\nimprovement on the stock HTML number input, which simply prevents the typing of\nalphabetic characters without explanation. Carbon also adds an error or warning\nicon and puts error messages in red as a further visual cue."),"\n",i.createElement(o,null,i.createElement(p,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqklEQVR42mNgGLLg////jIQwKeYxATEj1Vx3dNocw4frN9t+2XPQ6MOu/SZgvHWXyYcNW00+7Dts/GbnPvOP67aqEeVNEP3u1p31P79+/f/57dvvn968+fXp3bvfHx8/+f3+8tXfH9++/fHj06f/765d3w7Vw0TQ4Pv1LQbPJ01zejVlhh0Iv9+y0+D9+i0G71etN3i3Y4f++03bjV4uX6c8uGOY1FgePAAA0f2U+F0RRecAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="The letter e is in the input, a red exclamation mark appears beside it, the border of the input is in red and a red text message appears underneath &#39;Number is not valid&#39;"\n        title=""\n        src="/static/e8ff63c3acc1b26e0367986d0e4117c8/3cbba/number-input-accessibility-2.png"\n        srcset="/static/e8ff63c3acc1b26e0367986d0e4117c8/7fc1e/number-input-accessibility-2.png 288w,\n/static/e8ff63c3acc1b26e0367986d0e4117c8/a5df1/number-input-accessibility-2.png 576w,\n/static/e8ff63c3acc1b26e0367986d0e4117c8/3cbba/number-input-accessibility-2.png 1152w,\n/static/e8ff63c3acc1b26e0367986d0e4117c8/92c65/number-input-accessibility-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(m,null,i.createElement(n.p,null,"Messages are surfaced to assistive technologies, and color alone is not used\nto visually signal errors.")))),"\n",i.createElement(n.h2,null,"Design recommendations"),"\n",i.createElement(n.p,null,"Design annotations are needed for the following instance."),"\n",i.createElement(n.h3,null,"Cue users for value and step"),"\n",i.createElement(n.p,null,"Carbon offers the ability for the author to set minimum and maximum values for\nthe input. When setting limits on number entry, designers should warn the user\nin advance, instead of users discovering limits through an error message. This\nis particularly the case if designers alter the step value, which determines the\nincrement change when activating the +/- buttons or arrow keys. If a user\ndirectly enters a value that does not match the step increment, it will be\ndisallowed for no apparent reason, so advanced warnings are crucial."),"\n",i.createElement(o,null,i.createElement(p,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAjklEQVR42mNgGLLg////jIQwKeYxATEj1Vx36tQpw4cPH9p+/frV+MOHD6ZA2gQJG3/8+NEciNWI8iaIfvPmzYYvX778B+Ifnz9//gnEvz59+vQbRAMN+gEE/9+/f78dqoeJoMGHDh3SO3r0qPPx48cdYPjYsWP2Z86csQXRFy5csAH6QHlwxzCpsTx4AABbKZxLTw/JSwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="a numeric input with helper text to enter values between 30 and 70, in increments of 5"\n        title=""\n        src="/static/52e4da35f59de05987571f67dd0b5fb2/3cbba/number-input-accessibility-3.png"\n        srcset="/static/52e4da35f59de05987571f67dd0b5fb2/7fc1e/number-input-accessibility-3.png 288w,\n/static/52e4da35f59de05987571f67dd0b5fb2/a5df1/number-input-accessibility-3.png 576w,\n/static/52e4da35f59de05987571f67dd0b5fb2/3cbba/number-input-accessibility-3.png 1152w,\n/static/52e4da35f59de05987571f67dd0b5fb2/92c65/number-input-accessibility-3.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(m,null,"Notify users of allowable input ranges through helper text."))),"\n",i.createElement(n.h2,null,"Development considerations"),"\n",i.createElement(n.p,null,"Keep this in mind if you’re modifying Carbon or creating a custom component."),"\n",i.createElement(n.ul,null,"\n",i.createElement(n.li,null,"Carbon uses ",i.createElement(n.code,null,"aria-describedby")," to associate the helper text and error messages\nwith the input."),"\n",i.createElement(n.li,null,"The red error SVG icons have ",i.createElement(n.code,null,'aria-hidden="true"')," set, since the helper text\nprovides the same information."),"\n"),"\n",i.createElement(s.A,{layout:"table",components:["Number input","Fluid number input"]}))}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,a.R)(),e.components);return n?i.createElement(n,e,i.createElement(r,e)):r(e)}}}]);