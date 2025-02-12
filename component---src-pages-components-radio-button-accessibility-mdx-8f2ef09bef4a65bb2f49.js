"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[320973],{327573:function(e,n,t){t.r(n);var a=t(28453),o=t(296540),i=t(815929);t(931363);function l(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",span:"span",ul:"ul",li:"li",a:"a"},(0,a.R)(),e.components),{PageDescription:t,AnchorLinks:l,AnchorLink:s,Row:c,Column:u,Caption:b}=n;return s||r("AnchorLink",!0),l||r("AnchorLinks",!0),b||r("Caption",!0),u||r("Column",!0),t||r("PageDescription",!0),c||r("Row",!0),o.createElement(o.Fragment,null,o.createElement(t,null,o.createElement(n.p,null,"No accessibility annotations are needed for radio buttons, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),"\n",o.createElement(l,null,o.createElement(s,null,"What Carbon provides"),o.createElement(s,null,"Development considerations")),"\n",o.createElement(n.h2,null,"What Carbon provides"),"\n",o.createElement(n.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",o.createElement(n.h3,null,"Keyboard interaction"),"\n",o.createElement(n.p,null,"A group of radio buttons takes a single tab stop. Carbon does not require any\nitem to be selected by default, and the first item will always take focus in\ncase of no selection. The user changes the selected radio button using the arrow\nkeys (up/down or left/right). Pressing ",o.createElement(n.code,null,"Tab")," again will move focus out of the\nradio button group to the next component."),"\n",o.createElement(c,null,o.createElement(u,{colLg:8},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4klEQVR42mNgGKqAEUREGkxXDdaYuMNdqssFxA9lCGUm20R7+XqOXI+J7IF63To+xvUiFDsxXn4+h71kmoi6oayUqb2WhIqKCp+4uDi3jIwMJ8neBbnOQ2Ubu7FgKD8np5C0sLCwlKioqASIlpCQECXRq/M5QrXq2ZDCUkBISEgG6DoxIBCXlJQkxfv/wa6D8TxUJvK5q9eoA5ls8vLyHCAMZLMSbRwoFkFhB+NHm0xTD9bpywAyOZSUlPiBQADIZifJy6EyvZyhDKuYqZYAQ0NXMftIzuSyZ6hnQQpHRmINAADQ8CTpSjIJzgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="example of tabbing into a radio button group and arrowing between selections"\n        title=""\n        src="/static/2521f80f3ee018b28404091fd9a37a36/3cbba/radio-button-accessibility-1.png"\n        srcset="/static/2521f80f3ee018b28404091fd9a37a36/7fc1e/radio-button-accessibility-1.png 288w,\n/static/2521f80f3ee018b28404091fd9a37a36/a5df1/radio-button-accessibility-1.png 576w,\n/static/2521f80f3ee018b28404091fd9a37a36/3cbba/radio-button-accessibility-1.png 1152w,\n/static/2521f80f3ee018b28404091fd9a37a36/92c65/radio-button-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),o.createElement(b,null,o.createElement(n.p,null,"A radio button group is a single tab stop and radio buttons are selected using\narrow keys.")))),"\n",o.createElement(n.h3,null,"Labeling and states"),"\n",o.createElement(n.p,null,"Carbon surfaces the labeling of radio buttons and groups to screen readers and\nother assistive technologies. Carbon also provides state and context\ninformation, such as the number of items in the radio button group."),"\n",o.createElement(c,null,o.createElement(u,{colLg:8},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAnUlEQVR42mNgGLKgnqGeCUQHqU92jzKetj7CYMqqSMOpq6OMQHjaahg70mDyylDtyVuCNadoE2Muo796vwLQAONIg+mq4XqT1ZBxLJQO0pmk4WNcz0WEK/8zmcqHSigp6YkBuUwUe/s/w39GRTEncSkRPTUtSR85LYZQNpjLsWDigIqQEJ+cuJ6irpiNkj1DPQs14ocZiFmp4uXhCQDLLSqAyv+sZAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="&quot;color group, Purple radio button checked, 2 of 3&quot;"\n        title=""\n        src="/static/2722ac8a49148ba52b7210f315546254/3cbba/radio-button-accessibility-2.png"\n        srcset="/static/2722ac8a49148ba52b7210f315546254/7fc1e/radio-button-accessibility-2.png 288w,\n/static/2722ac8a49148ba52b7210f315546254/a5df1/radio-button-accessibility-2.png 576w,\n/static/2722ac8a49148ba52b7210f315546254/3cbba/radio-button-accessibility-2.png 1152w,\n/static/2722ac8a49148ba52b7210f315546254/92c65/radio-button-accessibility-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),o.createElement(b,null,o.createElement(n.p,null,"JAWS screen reader output, based on the information provided by Carbon.")))),"\n",o.createElement(n.h2,null,"Development considerations"),"\n",o.createElement(n.p,null,"Keep this in mind if you’re modifying Carbon or creating a custom component."),"\n",o.createElement(n.ul,null,"\n",o.createElement(n.li,null,"Carbon uses ",o.createElement(n.code,null,"fieldset")," and ",o.createElement(n.code,null,"legend")," to group and label sets of radio buttons."),"\n",o.createElement(n.li,null,"Carbon uses ",o.createElement(n.code,null,"label")," and ",o.createElement(n.code,null,"for")," to programmatically connect radio buttons with\ntheir labels."),"\n",o.createElement(n.li,null,"Required radio button groups must be identified programmatically, either via\nthe label or with ",o.createElement(n.code,null,"aria-required"),"."),"\n",o.createElement(n.li,null,"See the\n",o.createElement(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/"},"ARIA authoring practices"),"\nfor more considerations."),"\n"),"\n",o.createElement(i.A,{layout:"table",components:"Radio button"}))}function r(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,a.R)(),e.components);return n?o.createElement(n,e,o.createElement(l,e)):l(e)}}}]);