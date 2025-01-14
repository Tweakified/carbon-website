"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[133153],{278999:function(e,t,n){n.r(t);var a=n(28453),l=n(296540),i=n(815929);n(734820);function o(e){const t=Object.assign({p:"p",h2:"h2",a:"a",span:"span",h4:"h4",code:"code",h3:"h3",ul:"ul",li:"li",ol:"ol",strong:"strong"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:o,AnchorLink:r,StorybookDemo:c,Row:g,Column:p,Caption:d}=t;return r||s("AnchorLink",!0),o||s("AnchorLinks",!0),d||s("Caption",!0),p||s("Column",!0),n||s("PageDescription",!0),g||s("Row",!0),c||s("StorybookDemo",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Toggletips use the disclosure pattern to toggle the visibility of a popover.\nThey display additional, hidden information upon the click of a UI trigger\nelement and can contain interactive elements.")),"\n",l.createElement(o,null,l.createElement(r,null,"Live demo"),l.createElement(r,null,"Overview"),l.createElement(r,null,"Formatting"),l.createElement(r,null,"Content"),l.createElement(r,null,"Behaviors"),l.createElement(r,null,"Related"),l.createElement(r,null,"References"),l.createElement(r,null,"Feedback")),"\n",l.createElement(t.h2,null,"Live demo"),"\n",l.createElement(c,{themeSelector:!0,url:"https://react.carbondesignsystem.com",variants:[{label:"Default",variant:"components-toggletip--default"}]}),"\n",l.createElement(i.A,{layout:"cards",components:"Toggletip"}),"\n",l.createElement(t.h2,null,"Overview"),"\n",l.createElement(t.p,null,"Toggletips reveal supplemental content when a user clicks a button or another UI\nelement and remains actively open until a user dismisses it. A toggletip is\ncomprised of a UI trigger and the\n",l.createElement(t.a,{href:"/components/popover/usage/"},"popover component"),". Use the disclosure pattern to\ndesign supplemental content within the component. Toggletips can include a wide\nvariety of information and interactive elements as long as\n",l.createElement(t.a,{href:"https://www.ibm.com/able/requirements/requirements/"},"accessibility requirements"),"\nare maintained including focus order and ensuring all functionality is operable\nthrough a keyboard interface."),"\n",l.createElement(g,null,l.createElement(p,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACEklEQVR42p1STY/SUBTtr3DvYoiJIqRhMTJl1MERsNAybaeRjcaNe/+JKw1xpf6KYUKaUTM42BFNSEZYlA+BFhg+yhRa2jL1tg+dRFkQT16a917vOffedy7287/QaDTq9Tr2fW2USqVvHoqieHb2A/jYztogSTIWi8UTCY4i379725FlbGM9+Hw+HMf9fn8gENy5E3qTfS3LCjaZTC5WQdO0mYfpdIpuVFWFYPgOxyqkrdVq2GKxuFwF0zR1XTcMYz6fw9H5DbTv9/uSJGHOP4DfoNhsNsvlcrVarVQq7XZ7PB6PRqPhcAiKENDr9Vwy0jRsG5Zz6dgL90KWO+l0muf5TCbDsixFURzHJZNJgiDy+TwEKIrikm2vDNWYa6blqliW7TjgZDT6AGg0TacoOs3sp2iGTKUDQVwQBE/d63mgGhcz83ykK8PZ+cToDLSBbrdarUQ8vs+xe8wex9Ac/ZBJ7T5mH22Gbh3kBC+zLEk1zHsd6NOBh4MqLCjecaDJLWKbuBuNEEToHh/kXuHsS5zPXo+8OMgd/kV2n2i5WZJbm+FIeHuX2Arfvv9840nx5tOjG89Or0WzR0LuqmxnFcCnz4VCPn9YKByXToviyQfx5OPXL59K4jH4DAHdbtclo3yWZQEBPLVtGzkJx6kH8BlGRfP2f9SXVqEDRMBMweiYloVuYKSgcwgCXeQ8AkqGMv8C/Zmo9uvKOcMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Overview of toggletip"\n        title=""\n        src="/static/f04044737e36df31baee6b2ae1cd9bad/3cbba/toggle-tip-usage-1.png"\n        srcset="/static/f04044737e36df31baee6b2ae1cd9bad/7fc1e/toggle-tip-usage-1.png 288w,\n/static/f04044737e36df31baee6b2ae1cd9bad/a5df1/toggle-tip-usage-1.png 576w,\n/static/f04044737e36df31baee6b2ae1cd9bad/3cbba/toggle-tip-usage-1.png 1152w,\n/static/f04044737e36df31baee6b2ae1cd9bad/92c65/toggle-tip-usage-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.h4,null,"Toggletips verses Tooltips"),"\n",l.createElement(t.p,null,"Toggletips and tooltips are similar visually and both contain a popover and\ninteractive trigger element. The two components differ in the way they are\ninvoked and dismissed and if the user must interact with the contents. A tooltip\nis exposed on ",l.createElement(t.code,null,"Hover")," or ",l.createElement(t.code,null,"Focus")," when you need to expose brief, supplemental\ninformation that is not interactive. A toggletip is used on ",l.createElement(t.code,null,"Click")," and ",l.createElement(t.code,null,"Enter"),"\nwhen you need to expose interactive elements, such as button, that a user needs\nto interact with."),"\n",l.createElement(t.p,null,"The exception here is that definition tooltip can be invoked on either ",l.createElement(t.code,null,"Hover"),"\nor ",l.createElement(t.code,null,"Click")," depending on use case."),"\n",l.createElement(t.h3,null,"When to use"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Use when an interactive element must be placed within the popover"),"\n",l.createElement(t.li,null,"Use for quick, in context editing"),"\n",l.createElement(t.li,null,"Use for filter panels that overlay content"),"\n"),"\n",l.createElement(g,null,l.createElement(p,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC70lEQVR42rVVTU8aURRlZUzcuvI3uNC/UH+D6y6McWEa3WqlSTc2cdGwqG50ZasIojvTJqKlfEmj1jaWABYhIF+GGQRhBoaZ4fTdZ+bD2kTTpC+53Jk3b86ce895DweeMHq9Ho+nDAf9BINBrK2tYXNzE1tbWzwvLS1hcXERsVjMXByORLC+/h5ejwcerwc+n4/dr2Nubg5er9cCLJVKSCQSyOVyKJfLyGazGBt7hpGRETQaDROwWK4i9SuLdPoSxWIRrVYLfr8fDocDExMTd4BUiq7rZmk0VFXFwqvXeLngvDcv3jRRvZHRkDQGJvO5k5MTDA4OYmZmxgLsdrschELTNJ6NQdcGYLVahSAIkOU2Z07z0WgUfX19mJqasko2Xvgz09D1nimK8TEKIkFz9IGdnR2cnp5aDB9TkFpitOUxN3CG1NxarcYFoWaTSIVCAfn8FURRNF+gMq+vr3lUKhUz8lcFtq5mlex0OjE6OgqXywUPs8TGxgZ2d3exzazw1WYbstfq6ircbje3DAWVu+11M3tFLcDp6WmuVIT5jGg3m03GX0Pgp4rzHAlEbQEkSeKMKVMLVFVjj1REkhoSBe0hYCAQMAEFoQqx3kRTapv9IRC7OJQlqYVSRURLVizA+fl5DA8P4+joiE/e3t7yPiqdDlNT4ewIyFDYHqR2py2jq9gA6/U6F0SW5XtfN7LB0G4be9C84YL/Y5uLiwuEw2F+EJAwFFQ+zaVSKfMFWkc7g9bR87uIMSeEcZlOWSV//xHHx08HODw8wPHxMc7OzvjiUCiEZDJpspucnMTAwABWVlawv7+Pvb09BL98xgefH8HYuQWosIYa+5lOnHg8fu/AMPo4OzuLoaEhc5sJggilLeFbRkOmoluA5CtJIkFUvHW9w/MXb5hQDa427SIDkBj29/czg4f4fTqdQSZfQU9XoKk2lYkdsaRot9voMLvQNalO2WC7vLyM8fFxXoFRGbcOM3i3q1qAf1PrX/8CfgP3P7HWvF+zYgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Overview of when to use toggletips"\n        title=""\n        src="/static/7a2323552aadd114ac922a8e0fbccb6c/3cbba/toggle-tip-usage-2.png"\n        srcset="/static/7a2323552aadd114ac922a8e0fbccb6c/7fc1e/toggle-tip-usage-2.png 288w,\n/static/7a2323552aadd114ac922a8e0fbccb6c/a5df1/toggle-tip-usage-2.png 576w,\n/static/7a2323552aadd114ac922a8e0fbccb6c/3cbba/toggle-tip-usage-2.png 1152w,\n/static/7a2323552aadd114ac922a8e0fbccb6c/92c65/toggle-tip-usage-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(d,null,l.createElement(t.p,null,"The examples above are patterns. Carbon currently only supports the basic\ntoggletip outlined below. In the future, other toggletip styles will be\navailable.")),"\n",l.createElement(t.h3,null,"When to not use"),"\n",l.createElement(t.p,null,"Don’t use to present critical information or request required input needed to\ncomplete a workflow. Use the ",l.createElement(t.a,{href:"/components/modal/usage/"},"modal component"),"\ninstead."),"\n",l.createElement(t.h2,null,"Formatting"),"\n",l.createElement(t.h3,null,"Anatomy"),"\n",l.createElement(g,null,l.createElement(p,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVR42mP4TwFgwCP39/uvvz9+kaD5379/f4Hgzx8g+9Op25/P3AWZ8vsPUAwoRZzNf//9//Xv95fvvz9/BxtJyGaIwc+ePlu1dvXaBcvWFnUvnrNg0dwF69avX7du3fLly589eQpS9vcvFs1/waJHjxyxs7Zx9/Bwc3fz9vZ2dXV1cnJ2cXHV09M/su8AUMEfsI9QNUPsffj+yLodgf4BkZGR4WAQEREeFR7k6WpvYqh34uix/zde/nz9Ee4RFM3/7rw+vHKLo6OTo5OLo5Ozo4O9naOrmXeOuV+JjnXwiSOH/9958/PtJwzNMGcfOXTY0MDMxMLOyMTSUF9Hy8iBL+iIcOIDbtu+o7t34HA2zOHPnz1ftWrVmjVr1gIRGKxcu2nVui0rVq598fQZzgCjQgqDJhJsgOhEQpzNAMRbqa87p5BOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Toggletip anatomy"\n        title=""\n        src="/static/29f7c5093f40673429149f2484b3c4b5/3cbba/toggle-tip-usage-4.png"\n        srcset="/static/29f7c5093f40673429149f2484b3c4b5/7fc1e/toggle-tip-usage-4.png 288w,\n/static/29f7c5093f40673429149f2484b3c4b5/a5df1/toggle-tip-usage-4.png 576w,\n/static/29f7c5093f40673429149f2484b3c4b5/3cbba/toggle-tip-usage-4.png 1152w,\n/static/29f7c5093f40673429149f2484b3c4b5/92c65/toggle-tip-usage-4.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"UI trigger button:")," Usually a button but as long as the trigger is\ninteractive, it can visually change its shape and size depending on the use\ncase."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Tip:")," An indicator that is added to a popover container to help show the\nrelationship between the popover and where it was triggered from. Toggletips\ncan utilize no tip, caret tip, or tab tip types."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Content area:")," Varies based on use case and follows disclosure guidelines."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Popover container:")," Area that contains text and interactive elements."),"\n"),"\n",l.createElement(t.h3,null,"Sizing"),"\n",l.createElement(t.p,null,"The width and height of a popover container can vary depending on the amount of\ncontent placed within it. We recommend to not exceed a popover width size of\nfour columns. Refer to the popover component for more specifications."),"\n",l.createElement(g,null,l.createElement(p,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABFUlEQVR42mP4TwFgoJXmf2BAguZv377dBYP79+9fvnz54sWLDx48uAcG375+BZmIVfPfv3+B5LFjx1xcXAICAnx8fIKDg319fb29vf38/MwtzI8dPgJU8AesDKdmoOqIyMiQkJDQ0NAwEArx8nQ3MTE+cfQYXBl2zcePH7e3s3VzdXFzdQUiVzc3Zw9/WycfIzOrk8cIaT58+LC+kZmppb2RqZWRgY62sQNf8BGRpIe8DhOOHdhNwNk3btyorKyuq2usrauvqa2uqm0oal9e2r0+t2rSratXQcqQwh8jqv7+AwXo15//Pn4HoU/f/3/4+P/zp/9/f4GkCMYzUMlfoON+//n76w+I/P3335+//+iawghqBgCD/a2XtVKG9AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Toggletip sizing"\n        title=""\n        src="/static/56206718c72b1b108a92b33b019d806e/3cbba/toggle-tip-usage-5.png"\n        srcset="/static/56206718c72b1b108a92b33b019d806e/7fc1e/toggle-tip-usage-5.png 288w,\n/static/56206718c72b1b108a92b33b019d806e/a5df1/toggle-tip-usage-5.png 576w,\n/static/56206718c72b1b108a92b33b019d806e/3cbba/toggle-tip-usage-5.png 1152w,\n/static/56206718c72b1b108a92b33b019d806e/92c65/toggle-tip-usage-5.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.h3,null,"Placement"),"\n",l.createElement(t.p,null,"Toggletips can be used on various part of the UI including, but not limited to,\nheaders, data tables, side panels, modals, and read only cards. When active, the\ntoggletip popover may be positioned ",l.createElement(t.strong,null,"top, bottom, left,")," or ",l.createElement(t.strong,null,"right")," to the\nUI trigger."),"\n",l.createElement(g,null,l.createElement(p,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABbklEQVR42pWSTWrCQBTHcxMJXRQUM6GbiFHcieBFkgoimFgEpV6ik1Rqr6Epij2ACyEGs00Vz2BTrf13JrWD/aK/RXjz/nnzvkY6CLwyTjyHn5G4vNlslsvlfD6fzWZhGK7Xa/EuHIMgCBkw8DNXpf1+D6vX6+VyuUqlUq1WS6WSbdtc3u12MJrNpp7Pl8tlqMVisdPpwAkpCbZbV/LZucKQZdkwDDgh8WDDvIRKFEVV1VQq1Wg0kmBe2HT66Lj9weAOUEo9z+OZ+dWe93DbH1B6AxzHmUwmSdmHXxEH9sI4HRiA91kAR+5HZnzjON5utzEDxlGVvt3Qn6vi/qRntOFQes9wXXc0Gok9D4dDtMpVGOPxOOmZV1Wv19PpNLal6zohpFaridM2TTOTyWiaVigUsI6jilW9Z+52r9ULLc9QCLEsSwy27Bb5ULPZbLvdToKPb8hfLAKG7/tRFImziKIn3/9UV6vVv1f19W2/AZBDfR6a9RFEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Toggletip placement"\n        title=""\n        src="/static/ba155dd9a6590059eb9ad3d33f5d3cac/3cbba/toggle-tip-usage-6.png"\n        srcset="/static/ba155dd9a6590059eb9ad3d33f5d3cac/7fc1e/toggle-tip-usage-6.png 288w,\n/static/ba155dd9a6590059eb9ad3d33f5d3cac/a5df1/toggle-tip-usage-6.png 576w,\n/static/ba155dd9a6590059eb9ad3d33f5d3cac/3cbba/toggle-tip-usage-6.png 1152w,\n/static/ba155dd9a6590059eb9ad3d33f5d3cac/e4e3d/toggle-tip-usage-6.png 1218w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.p,null,"Placement of a popover in relation to the trigger depends on the type of popover\nused. Visit the popover component for specific guidelines for no tip, caret tip,\nand tab tip types."),"\n",l.createElement(t.h2,null,"Content"),"\n",l.createElement(t.h3,null,"Main elements"),"\n",l.createElement(t.p,null,"Heading, body, and footer content can vary based on your use case. To see\nexamples of content used within toggletips, visit the\n",l.createElement(t.a,{href:"/patterns/disclosures-pattern/"},"disclosure pattern"),"."),"\n",l.createElement(t.p,null,"Interactive tooltips may contain rich text and other interactive elements like\nbuttons or links and must remain actively open until a user dismisses the\ntoggletip. Maintain accessibility requirements including focus order and ensure\nall functionality is operable through a keyboard interface."),"\n",l.createElement(t.h3,null,"Overflow content"),"\n",l.createElement(t.p,null,"Since the toggletip uses the flexible popover component and disclosure pattern,\nscrolling is usually not needed. If scrolling is needed, in a dropdown like\nsituation for instance, then the body section should scroll vertically with the\nheader and footer remaining fixed in place if those elements are present. Do not\nscroll horizontally or let content bleed off the page."),"\n",l.createElement(g,null,l.createElement(p,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABkklEQVR42qWS2WrCQBhGe+OFF6K4ReuK2iTuCqJVqRZXUPClrAXTFpdL0YfwhWz7Cr5AezJTC4HWCj0XYSaZM/83/+Tq4x9cvQnef4L3rwI5ZSAXHw6H4/Foyt1ut9Pp3Fvp9XqDwWA0Go3HY57D4bDf78vxZDJpt9v7/d6Uc7lcNptNpVI3J1RV9fl8drvd7XZfCzwej8vl8vv9Xq+XTzabbbPZmPKz4OUE4/V6TRa2yGQyLMX0ChiEw2FN05xO53a7NeUnK4ZhrFYrgimKEo1GQ6EQq2Uc0sViMaYk2u12pmxYmc/ny+Wy1WoFg8F4PM7SuxP1el3Xdc7Ip1/lxWJBzyjFunQ6XalUarVatVq9FTSbTTb9iv1oZTabER6ZqJyZdmLiFAoFXWCp/GBlOp1SHJma+XweuVgslkolZFXA+0AgcE7mhGxPe5LJpMxcLpc1AXHOyZy80Wg4HA7uibtBIyq7XFQZma5wmfK2aDLJ0S6t/C1HIhF5csBMJBLy//tbpgK/pCJgzJMpveDPlVf1CVOLdJ1yRkOgAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Scrolling toggletip example"\n        title=""\n        src="/static/1d9b695aad811866e4fefdf880f72aaa/3cbba/toggle-tip-usage-8.png"\n        srcset="/static/1d9b695aad811866e4fefdf880f72aaa/7fc1e/toggle-tip-usage-8.png 288w,\n/static/1d9b695aad811866e4fefdf880f72aaa/a5df1/toggle-tip-usage-8.png 576w,\n/static/1d9b695aad811866e4fefdf880f72aaa/3cbba/toggle-tip-usage-8.png 1152w,\n/static/1d9b695aad811866e4fefdf880f72aaa/e4e3d/toggle-tip-usage-8.png 1218w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(d,null,l.createElement(t.p,null,"Example of when to scroll within a toggletip. This example is a pattern and is\ncurrently not offered as a component.")),"\n",l.createElement(t.h3,null,"Further guidance"),"\n",l.createElement(t.p,null,"For further content guidance, see Carbon’s\n",l.createElement(t.a,{href:"/guidelines/content/general"},"content guidelines"),")."),"\n",l.createElement(t.h2,null,"Behaviors"),"\n",l.createElement(t.h3,null,"States"),"\n",l.createElement(t.p,null,"The toggletip component has two states—active and inactive. By default, the\ntoggletip is hidden and inactive. Toggletips are displayed on ",l.createElement(t.code,null,"Click")," and\n",l.createElement(t.code,null,"Enter"),"."),"\n",l.createElement(t.h3,null,"Interactions"),"\n",l.createElement(t.h4,null,"Mouse"),"\n",l.createElement(t.p,null,"Toggletips are triggered on ",l.createElement(t.code,null,"Click")," and is dismissed by clicking anywhere\noutside the toggletip’s active popover or UI trigger."),"\n",l.createElement(t.h4,null,"Keyboard"),"\n",l.createElement(t.p,null,"Users can trigger a toggletip by pressing ",l.createElement(t.code,null,"Enter")," or ",l.createElement(t.code,null,"Space")," while the trigger\nelement has focus. Users can dismiss a toggletip by pressing ",l.createElement(t.code,null,"Escape"),". For\nadditional keyboard interactions, see the accessibility tab."),"\n",l.createElement(t.h4,null,"Screen readers"),"\n",l.createElement(t.p,null,"VoiceOver: Users can trigger a toggletip by pressing ",l.createElement(t.code,null,"Enter")," or ",l.createElement(t.code,null,"Space")," while\nthe trigger element has focus."),"\n",l.createElement(t.p,null,"JAWS: Users can trigger a toggletip by pressing ",l.createElement(t.code,null,"Enter")," or ",l.createElement(t.code,null,"Space")," while the\ntrigger element has focus."),"\n",l.createElement(t.p,null,"NVDA: Users can trigger a toggletip by pressing ",l.createElement(t.code,null,"Enter")," or ",l.createElement(t.code,null,"Space")," while the\ntrigger element has focus."),"\n",l.createElement(t.h2,null,"Related"),"\n",l.createElement(t.h4,null,"Popover"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"/components/popover/usage/"},"Popovers")," are used as a base layer in some of our\ncomponents like tooltips, overflow menus, and dropdown menus. For further\nguidance, see Carbon’s popover component."),"\n",l.createElement(t.h4,null,"Disclosure"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"/patterns/disclosures-pattern/"},"Disclosures")," use popovers as a base layer.\nDisclosures are comprised of a popover container, text, and interactive\nelements. Interactive elements are kept in the tab order of the page. Further\nguidance on the disclosure pattern coming soon."),"\n",l.createElement(t.h4,null,"Tooltip"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"/components/tooltip/usage/"},"Tooltips")," display additional information upon hover\nor focus. The information included should be contextual, helpful, and\nnonessential while providing that extra ability to communicate and give clarity\nto a user."),"\n",l.createElement(t.h2,null,"Feedback"),"\n",l.createElement(t.p,null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",l.createElement(t.a,{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}}}]);