"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[453079],{969673:function(e,t,n){n.r(t);var a=n(28453),i=n(296540),s=n(815929);n(68476);function l(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",span:"span",ul:"ul",li:"li"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:l,AnchorLink:c,Row:r,Column:g,Caption:b}=t;return c||o("AnchorLink",!0),l||o("AnchorLinks",!0),b||o("Caption",!0),g||o("Column",!0),n||o("PageDescription",!0),r||o("Row",!0),i.createElement(i.Fragment,null,i.createElement(n,null,i.createElement(t.p,null,"No accessibility annotations are needed for tags, but keep these considerations\nin mind if you are modifying Carbon or creating a custom component.")),"\n",i.createElement(l,null,i.createElement(c,null,"What Carbon provides"),i.createElement(c,null,"Design recommendations"),i.createElement(c,null,"Development considerations")),"\n",i.createElement(t.h2,null,"What Carbon provides"),"\n",i.createElement(t.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(t.h3,null,"Keyboard interaction"),"\n",i.createElement(t.p,null,"Read-only tags are not in the tab order, are not interactive, and do not receive\nfocus."),"\n",i.createElement(t.p,null,"Dismissible tags are in the tab order and receive focus around the close icon.\nPressing ",i.createElement(t.code,null,"Enter")," or ",i.createElement(t.code,null,"Space")," will dismiss the tag. Tabbing away from the tag will\nmove focus to the next element in the tab order."),"\n",i.createElement(r,null,i.createElement(g,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAlUlEQVR42q2R3QqCQBCF9/V7il5D6K6LegKviqACQRDNLPdnZve0riAIZrL5wbka+DiHEViIcy7kFwIrI5Y067ikOQ7JCaql/4TW9sLj7oztZo+mkiDD+LZ+XuhlnNfgewlXNDAPhfZlQhAl9DUoq6CvRcjzVkO+CUYRtM/Uk6KfwmShJUUIuxZDxqc44QyrCpmnJ38AVe8XzJ6X+8YAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Dismissible tag in the tab order receiving focus on the close icon to potentially dismiss the tag."\n        title=""\n        src="/static/23d367afb46dd69276d0ccc98806b56c/3cbba/tag-accessibility-dismissible.png"\n        srcset="/static/23d367afb46dd69276d0ccc98806b56c/7fc1e/tag-accessibility-dismissible.png 288w,\n/static/23d367afb46dd69276d0ccc98806b56c/a5df1/tag-accessibility-dismissible.png 576w,\n/static/23d367afb46dd69276d0ccc98806b56c/3cbba/tag-accessibility-dismissible.png 1152w,\n/static/23d367afb46dd69276d0ccc98806b56c/92c65/tag-accessibility-dismissible.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",i.createElement(t.p,null,"Selectable tags are in the tab order and focus is shown around each tag.\nPressing ",i.createElement(t.code,null,"Enter")," or ",i.createElement(t.code,null,"Space")," toggles the selection on and off."),"\n",i.createElement(r,null,i.createElement(g,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuElEQVR42q2SvQrCMBSF+7bu4tRdfQ2XLg4ugi8hOikqUgWRgraDYJs/c+9R0ganKoQGQkhCvnvOuYnQ8Yhab7heRKmRbm54PmR9zBwGZKofnvc5hr05duvM7ZV8BSr0YCZYa0BkwZahKhOosLF2zQpMkhmS6QKnNIeRFhwCpMby9nDBIB6hH4+xXB1hBP3M8a9lrQ3ueeFmVSooYVyOvmBAht7+F0CWoFuaE4X+N9dt7gr4AbUpfAPbNRIJAUyd2gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="A group of selectable tags in the tab order, with each tag receiving focus to select or deselect."\n        title=""\n        src="/static/663fa25c58b1bc608731286a706b78ef/3cbba/tag-accessibility-selectable.png"\n        srcset="/static/663fa25c58b1bc608731286a706b78ef/7fc1e/tag-accessibility-selectable.png 288w,\n/static/663fa25c58b1bc608731286a706b78ef/a5df1/tag-accessibility-selectable.png 576w,\n/static/663fa25c58b1bc608731286a706b78ef/3cbba/tag-accessibility-selectable.png 1152w,\n/static/663fa25c58b1bc608731286a706b78ef/92c65/tag-accessibility-selectable.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",i.createElement(t.p,null,"Operational tags are in the tab order and focus is shown around each tag.\nPressing ",i.createElement(t.code,null,"Enter")," or ",i.createElement(t.code,null,"Space")," will disclose additional related tags."),"\n",i.createElement(r,null,i.createElement(g,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA70lEQVR42p3SwW7CMAwGYN7/NQobXLhsSLsgDlRCcNxhmjbghFqpgNoQ2NKkzo+TMaZVgBoiWfYh/Wq3bqHBiV8+MOy/+ZrI3rzbagLOnt4xenhlDFBfGtba+0A65cleYywUaxUOXFN1L+g6qQymmUS8ElBSQSkDXVYoOV/q9Cror/IDi6LAYJ3heZNhuRPwc8O9h6C+HRoKCoFOkiLimIsf8NcwmqD5MwSD3TTFI8eiBrpTcpdB4JKRHmPdK6D760GgG7OdJIgY/KyBlneycYc4gVspMc9zH662RP/GNYbCFvu8Gpz/avi1cetTX5sjw5ZekIQWsHQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="An operational tag in the tab order, disclosing related tags."\n        title=""\n        src="/static/732f00ec25829e41604eb04ce47e9b5b/3cbba/tag-accessibility-operational.png"\n        srcset="/static/732f00ec25829e41604eb04ce47e9b5b/7fc1e/tag-accessibility-operational.png 288w,\n/static/732f00ec25829e41604eb04ce47e9b5b/a5df1/tag-accessibility-operational.png 576w,\n/static/732f00ec25829e41604eb04ce47e9b5b/3cbba/tag-accessibility-operational.png 1152w,\n/static/732f00ec25829e41604eb04ce47e9b5b/92c65/tag-accessibility-operational.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",i.createElement(t.h2,null,"Design recommendations"),"\n",i.createElement(t.p,null,"Design annotations are not needed, but keep the following point in mind."),"\n",i.createElement(t.p,null,"When the tag’s title is too long to fit within the available space of the tag\ncontainer, the title can be truncated with an ellipsis. By mouse, the full title\nis disclosed in a browser tooltip on hover. By keyboard, the full title is\ndisclosed on focus in a tooltip. Truncation should be set at the title’s start,\nmiddle, or end, depending on what is best for the given use case."),"\n",i.createElement(r,null,i.createElement(g,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAvElEQVR42uWR3QqCQBBGfdpMeg7Jd9Jwicg0COrGi1RY8gECa4P98WvWMIS6sIsgaOEwwzB7Zth1MOK0bQtjzJhWOP8ulPKB1sBAMBRSCi01jEUZaMLWXoVKQW13uK3WuLAlzskGomkgqa5pQC8UV4U8znFc7IkDiqSEEPo5zBms0W1lJbyqUBUlOOc41TVdEF2LlQbzAO7ExWzqwaNoc9/3P3/DnizLEEYRGGOIiTAKkabpD/2yje/42oZ3SSRXd39ZdX8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="A tag’s truncated full title disclosed in a tooltip on hover by mouse and on focus by keyboard."\n        title=""\n        src="/static/b68e91745afe6210cfdab1cbfec03055/3cbba/tag-usage-overflow.png"\n        srcset="/static/b68e91745afe6210cfdab1cbfec03055/7fc1e/tag-usage-overflow.png 288w,\n/static/b68e91745afe6210cfdab1cbfec03055/a5df1/tag-usage-overflow.png 576w,\n/static/b68e91745afe6210cfdab1cbfec03055/3cbba/tag-usage-overflow.png 1152w,\n/static/b68e91745afe6210cfdab1cbfec03055/92c65/tag-usage-overflow.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",i.createElement(b,null,i.createElement(t.p,null,"Truncated tag title disclosed in a tooltip on hover by mouse and on focus by\nkeyboard.")),"\n",i.createElement(t.h2,null,"Development considerations"),"\n",i.createElement(t.p,null,"Keep this in mind if you’re modifying Carbon or creating a custom component."),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Do not add an ",i.createElement(t.code,null,"onClick")," functionality to the dismissible tag, and only reserve\ninteractions for the close icon in the tag."),"\n",i.createElement(t.li,null,"Do not nest buttons within the operational tag. Consider using the ",i.createElement(t.code,null,"as")," prop\nto change an element tag to avoid nesting buttons."),"\n"),"\n",i.createElement(s.A,{layout:"table",components:"Tag"}))}function o(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?i.createElement(t,e,i.createElement(l,e)):l(e)}}}]);