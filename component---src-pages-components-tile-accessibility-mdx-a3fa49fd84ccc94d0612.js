"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[482755],{412999:function(e,t,n){n.r(t);var a=n(28453),i=n(296540),l=n(815929);n(769759);function s(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",h4:"h4",code:"code",span:"span",ul:"ul",li:"li",a:"a"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:s,AnchorLink:o,Row:r,Column:b,Caption:d}=t;return o||c("AnchorLink",!0),s||c("AnchorLinks",!0),d||c("Caption",!0),b||c("Column",!0),n||c("PageDescription",!0),r||c("Row",!0),i.createElement(i.Fragment,null,i.createElement(n,null,i.createElement(t.p,null,"Design annotations are needed for specific instances shown below, but for the\nstandard tile component, Carbon already incorporates accessibility.")),"\n",i.createElement(s,null,i.createElement(o,null,"What Carbon provides"),i.createElement(o,null,"Design recommendations"),i.createElement(o,null,"Development considerations")),"\n",i.createElement(t.h2,null,"What Carbon provides"),"\n",i.createElement(t.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(t.h3,null,"Keyboard interaction"),"\n",i.createElement(t.h4,null,"Non-interactive and interactive tiles"),"\n",i.createElement(t.p,null,"A tile can serve as a non-interactive container that holds interactive elements\nor actions, such as buttons and links. Alternatively, it can be directly\ninteractive—clickable, selectable, or expandable—without containing any\ninteractive elements inside."),"\n",i.createElement(t.p,null,"For non-interactive tiles, users can press ",i.createElement(t.code,null,"Tab")," to navigate between actionable\nelements within a tile or tile group. After navigating through the last\ninteractive element within a tile, users can press ",i.createElement(t.code,null,"Tab")," to move outside of the\ntile—to the next tile in the group (if there is a group of tiles) or to the next\ncomponent in the tab order."),"\n",i.createElement(t.p,null,"For interactive tiles, users can press ",i.createElement(t.code,null,"Tab")," to navigate between the tiles\nthemselves. When tabbing through these tiles, a focus indicator appears around\nthe currently selected tile, providing a visual cue that it is focused and ready\nto be interacted with. Users can press ",i.createElement(t.code,null,"Enter")," to activate a clickable tile."),"\n",i.createElement(r,null,i.createElement(b,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 133.33333333333331%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAAACXBIWXMAABYlAAAWJQFJUiTwAAABxUlEQVR42q2Vu07DMBSG+8Q8CCsPwMrAhJBYWBFiYeEysBBCGZo0bRLbiePY/jnHbdMWVErTWPqlxur5cu4ZYcex1sFZj0PPCAOfLSB7ZFsHmWtcnN3j7uYt3HvvDwcySFcGbKvrFreXL3h+GPcHNgRxbm1IvqIxNZRS0Fr/0q6XdED2avNPSZIgeo+QZRmklBBCdOLnvcDW2OAlx2ytJUNF3tVkrAJgU+z1XuCqVdhTMa/w+jzB00uC+CPrB/SUv0a3aBuLWmlE0QxRnCOZ5P2A7BlXunuBp8Z2u/VnlTlUo+1wje0IyOEOOilc4bZ1xwM5uSy3LArnZ3XXR+sq+25EFhpiOWCDaah9uFhHAQOE8ljOapyeXOPq/LHr0YOBDGNxHhg6m9D80hoLXeD8L/2ryqvu5704TecYf34hjsbI6HeZSxRzEZTPRJio/etrufKDh1mO6TRFmqYoyxJSyU6ilCGaP4EcBi/YpjZQpQ5eFUWBqqrC7Haz/F9ga3jTmACthKFQKdw4DsZlITrluaAduSfkUBCeZb/2VgkNJTWqHwr3JLejpUar/B3TzFvAxcjZYT+j+scH6vj1RbBama0F2xf4DdWAUTBEdbjUAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of tab stops for non-interactive tile with links and interactive tile\nwithout any other actions"\n        title=""\n        src="/static/83d1de91dcab6d6181a801e64ec2e6e1/3cbba/tile-accessibility-1.png"\n        srcset="/static/83d1de91dcab6d6181a801e64ec2e6e1/7fc1e/tile-accessibility-1.png 288w,\n/static/83d1de91dcab6d6181a801e64ec2e6e1/a5df1/tile-accessibility-1.png 576w,\n/static/83d1de91dcab6d6181a801e64ec2e6e1/3cbba/tile-accessibility-1.png 1152w,\n/static/83d1de91dcab6d6181a801e64ec2e6e1/92c65/tile-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(t.p,null,"Example of tab stops for non-interactive tile with links and interactive tile\nwithout any other actions")))),"\n",i.createElement(t.h4,null,"Selectable tiles"),"\n",i.createElement(t.p,null,"Selectable tiles can be configured as either single-select or multi-select."),"\n",i.createElement(t.p,null,"For single-select tiles, the group is treated as a single tab stop. By default,\nCarbon does not require any item to be pre-selected. If no selection is made,\nfocus will land on the first item in the group. Users can navigate through the\nitems using the arrow keys (up/down or left/right). Pressing ",i.createElement(t.code,null,"Tab")," moves the\nfocus out of the single-select tile group to the next component."),"\n",i.createElement(t.p,null,"For multi-select tiles, each tile can be navigated pressing ",i.createElement(t.code,null,"Tab")," and selected\nor unselected pressing ",i.createElement(t.code,null,"Space")," or ",i.createElement(t.code,null,"Enter"),"."),"\n",i.createElement(t.p,null,"These behaviors are based on radio button and checkbox components. This\nnavigation difference is based on the principle that a checkbox represents one\nchoice as a single element, while a group of radio buttons is treated as a\nsingle element because the buttons work together to form a mutually exclusive\nchoice."),"\n",i.createElement(r,null,i.createElement(b,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 150%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAACXBIWXMAABYlAAAWJQFJUiTwAAACyElEQVR42q1WS4vUQBjcv+1FPPgPPMiCeNib4EX0Iop4FlQQEXdZ3ElmxplkMpNH59l5lF91kmEeZia4NhSdZJpKVff3VeaiaRocgqOua/ztt3O4wO4QrqZukEYFnjx4h1fPP7ePu5eMGXuEtZAVeYmqqmFde3CmISpdQxeVeZ5nuoVcD71kn7BqoLvF3sqDPbNgTWzYlo2Vu0ISJ/A8D/PZAlU5gpCDhHGYYe0FCMMAQdjOSkWIk1igEAShUX2SkDbzrESpxZ7YioIEaZwjUZkoy6CiBFEYm1lFqSishwlJwr3Z3Rff97FcOHBdF47jyP0GSZKI2tD81mDAMg+CyvYOW4jX6zXm8zmWy6Uh3GxawiiKDOngoZhTPZDPxVmWoSgKOdHcgPckTNPUXLNOBwmp8pAwjmNjLQgCA96TmKS8PqnwkJDb40qZWLZtbBMsFxKRnPaHCWX/WH+HCnWZG3s9emUE7wctl7J/VLk7WELOPEBZsmuI6ggnW4+ELJ1+JFGOl5efxJpvCvrUqR4R9inBDslSbd5+n8S52I+sxtjFTtH+l/hKVI6nD9/jzdXX+8eX7sro9vsSvye+UayL8gjj4qvLQ651nRVm8xnufk0wubMkfaT14lSibIqfP27ECUbGl8RStEklD/02vrpOUUpt6zAK1fn4MntlFEp8iaXIj01sxSo1EaZCCYYgNlASbSfja7egiy55qMp1HZM0nKmQocCZv406lL7IlST2Sj4BJOvRBwTji9eDrXdQNcYyTzHL2thihBFU1/f1yfg6stz1Na1RDWe2HtWRiDOfjSobLuIeEo7jYjqdwrIs2BJjtLn3CRhbh/wcMBwKLYmtc4OyKrYlQ5B4lGWSkZTlM7l2TYQtphtMblwhLrb7qbU+r5AL+o8V2+/Z4494++IbXl99weWjD+arR6u9ZWblWYX9X472Bfin8QccPyseAZ0jmQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of tab stops and navigation of selectable tiles with single-select and\nmulti-select functionality"\n        title=""\n        src="/static/676a6bd0ca0af2174fa3eea7e3e89661/3cbba/tile-accessibility-2.png"\n        srcset="/static/676a6bd0ca0af2174fa3eea7e3e89661/7fc1e/tile-accessibility-2.png 288w,\n/static/676a6bd0ca0af2174fa3eea7e3e89661/a5df1/tile-accessibility-2.png 576w,\n/static/676a6bd0ca0af2174fa3eea7e3e89661/3cbba/tile-accessibility-2.png 1152w,\n/static/676a6bd0ca0af2174fa3eea7e3e89661/92c65/tile-accessibility-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(t.p,null,"Example of tab stops and navigation of selectable tiles with single-select and\nmulti-select functionality")))),"\n",i.createElement(t.h4,null,"Expandable tiles"),"\n",i.createElement(t.p,null,"Similar to non-interactive and interactive tiles, expandable tiles come in two\ntypes: those containing interactive elements and those without."),"\n",i.createElement(t.p,null,"For non-interactive expandable tiles, users can ",i.createElement(t.code,null,"Tab")," to navigate between\ninteractive elements within the tile. Once users navigate to the expanding icon\nbutton, pressing ",i.createElement(t.code,null,"Space")," or ",i.createElement(t.code,null,"Enter")," expands or collapses the tile."),"\n",i.createElement(t.p,null,"For interactive expandable tiles, users can press ",i.createElement(t.code,null,"Space")," or ",i.createElement(t.code,null,"Enter")," to expand\nor collapse the tile."),"\n",i.createElement(r,null,i.createElement(b,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABf0lEQVR42s1TPU/DMBTsj+YvIDEhZiQkBmZGxIoqhqod2iEgZagUmtImIVGTOHZixz7s1y+k0nSgA5FOz1bs8707u4czf71/QRiFOeFPhMbs693lC+6v+jRXSp8mbJoGZVnuUBQFgXMOKSWqUljUEJVEI9RpQrc5CALMZjOEYUhjhzRNIQRHssxsyxl4KSGblkiNNscJq6pClmVYrVZE4sauxnGMJElIdS3q3frWtt3U6pDQbIxymweDAcbjMYbDITzPI0wmE/i+D1Yxq1SQn1tvayG7FW7bdYrcnDFGtWIV8rywle/WK9VS60cJkzjB53xBbRX5OhTXJmOltSFHEqWIFimKrAbLbThcwnSFoo09UTXQ2p2qrQJF6UrlQpAoc6u44BSE3vinZIfCx9sRHq5f0X96x83FMz6mS+tbSSG5gLTWh1fNJq3tAb8SBv4Xpm8xonkObzS3ftVorVol10q34f288E6hw9neMt1Fc0Sh84ZgF7g2TAeR+1+LvYffDk2SqszDjAUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example shows the tab stops of a non-interactive expandable tile"\n        title=""\n        src="/static/7787d671659902fdfafe2e564d5947aa/3cbba/tile-accessibility-3.png"\n        srcset="/static/7787d671659902fdfafe2e564d5947aa/7fc1e/tile-accessibility-3.png 288w,\n/static/7787d671659902fdfafe2e564d5947aa/a5df1/tile-accessibility-3.png 576w,\n/static/7787d671659902fdfafe2e564d5947aa/3cbba/tile-accessibility-3.png 1152w,\n/static/7787d671659902fdfafe2e564d5947aa/92c65/tile-accessibility-3.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(t.p,null,"Example shows the tab stops of a non-interactive expandable tile")))),"\n",i.createElement(r,null,i.createElement(b,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABlklEQVR42rWTTUvDQBCG+5+9+CMEBU9ePXjzKAgeBS9Kaam1YD9TWpukaZP9aD42m7zOLk3rwUbEujDMhsAz78y708CRT+NfgWVZoqAIFhzuNPobsCxKpEmOIi9xc/GEy9OHbRGgoH/fRS0wSwmmC3tnoYDvLeEufHiLJcI1A4sEhQRn0t55uKkH6rxAnmnKJcIVg++78DyPwoWUHGmaIkkSxHEMsREW/OMMFamUUUqqAgyHA4xGY0wmEwwGg10EQUAFCBjVKDRmZDQ/RQrNzNwPH81mE53OK1qtFrrdLtrtto3ZbEZAWQ808zMtVyasg4jUjeBMHIzHYziOg36/b9WZli2QHQAWW3erY76jNQ2ecXDOEYWMsoAQwoJMu0JwMu7ADHOld+r2zyezJsSbBJnKIHlsFZk2BeVwzREG4hCQ3FX7ds25vXrG9dkjHu96OD+5hzN0IaRRG2G1WkFrffhhf225Ak7fA4zefPhzht7LHLFMoQuNPCfjlLIm1m6KMUUpfbxdNgXNG0y3blfrZnfb5F8APwEkP5B48OhHbAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example shows the tab stops of an interactive expandable tile"\n        title=""\n        src="/static/c8205813792f1262f5d05df6cdebf8d9/3cbba/tile-accessibility-4.png"\n        srcset="/static/c8205813792f1262f5d05df6cdebf8d9/7fc1e/tile-accessibility-4.png 288w,\n/static/c8205813792f1262f5d05df6cdebf8d9/a5df1/tile-accessibility-4.png 576w,\n/static/c8205813792f1262f5d05df6cdebf8d9/3cbba/tile-accessibility-4.png 1152w,\n/static/c8205813792f1262f5d05df6cdebf8d9/92c65/tile-accessibility-4.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,"Example shows the tab stops of an interactive expandable tile"))),"\n",i.createElement(t.h2,null,"Design recommendations"),"\n",i.createElement(t.p,null,"Design annotations are needed for the following instance."),"\n",i.createElement(t.h3,null,"Interactive elements"),"\n",i.createElement(t.p,null,"For highly complex tiles, avoid placing interactive elements on top of a\ndirectly interactive tile, as actions should not overlap on an actionable\nsurface. Instead, use the base tile (without a border around it) that is\nnon-interactive."),"\n",i.createElement(r,null,i.createElement(b,{colLg:8},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+UlEQVR42t2T0WqEMBBF9///q08FlaJYrazdXXepm2piMhpYDbeTFN8b6EsbuGQYhsOdGeaAX36Hvwl0zmGaJiilgqSUQeM4hry1NtT8GLhtG6qqQpqmyLIMSZIgz3O0bQshBIwxWNc1Dri72+WdEVH4tdahJgrYNA2KokBZlqjqGq/s2Odqjn37kS07XK8d2vcj1DDAsiNiyO7WO41z6DZIMUP2C84Me+FlVAzSM2GZ5zDDaOD9NkNcLGqp8NT3eL4LDIYYRlA6Evh4rDj3hLcb4XhZcOostFzwORJOH4SmMzzDLW6Gk7FBiiV9TBaGpek7H7WU/33LX1tXmYdYhZjsAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example shows base tile with interactive elements such as a tooltip,\ndefinition tooltip, and a button"\n        title=""\n        src="/static/6501de97139cd6f1d309f5b27293f8b9/3cbba/tile-accessibility-5.png"\n        srcset="/static/6501de97139cd6f1d309f5b27293f8b9/7fc1e/tile-accessibility-5.png 288w,\n/static/6501de97139cd6f1d309f5b27293f8b9/a5df1/tile-accessibility-5.png 576w,\n/static/6501de97139cd6f1d309f5b27293f8b9/3cbba/tile-accessibility-5.png 1152w,\n/static/6501de97139cd6f1d309f5b27293f8b9/92c65/tile-accessibility-5.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(t.p,null,"Example shows base tile with interactive elements such as a tooltip,\ndefinition tooltip, and a button")))),"\n",i.createElement(t.h2,null,"Development considerations"),"\n",i.createElement(t.p,null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Include descriptive labels for interactive tiles to ensure their purpose is\nclear with. Provide an ",i.createElement(t.code,null,"aria-label")," or ",i.createElement(t.code,null,"aria-labelledby")," to the tile component\nto comply with\n",i.createElement(t.a,{href:"https://able.ibm.com/rules/archives/latest/doc/en-US/aria_accessiblename_exists.html"},"accessible naming"),"."),"\n",i.createElement(t.li,null,"Decorative images should have an empty ",i.createElement(t.code,null,"alt")," attribute (",i.createElement(t.code,null,'alt=""'),") while\ninformative images should include descriptive ",i.createElement(t.code,null,"alt")," text to convey their\ncontent."),"\n",i.createElement(t.li,null,"See the\n",i.createElement(t.a,{href:"https://w3c.github.io/aria-practices/#tooltip"},"ARIA authoring practices")," for\nmore considerations."),"\n"),"\n",i.createElement(r,null,i.createElement(b,{colLg:12},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7UlEQVR42p2UW2sTQRiG+9fECCL+Af0pXojghVRCIVak1RbbCy14IZ6tVFprNGgQ0+ZoTjRmd7M5bLKnbJJNdvM4qc1NNAnpBy/vMId3vnnnm1liHMPhvzhHLC0yeSg2GWO64Nmg9TlDdfU9tY19amt71J6EUdUqpmVhtx3BNr1ej36/j+d58wWNvTjKnReooXeowTeozyNkc2mSiRiFXJJU4iepVJyTUom22GCc8VTBXrGGFc5gf8/jfMujlWSi0UMOd5+yGbrJWvAGW+tBHm4+pqxUZwj+x6dRNLUWXyMR1lfvErgYIHDpMivLt9nYfoZU0eYIjowWvgz7Hr47AM9Hb9n8OC4QerDFhSvXCFy9zsq9R+y8iqA2rEUy/Mum43KUrfNyP8Gt4DbL93d4fZAkHFNomd3Zgm5ZQ38bw/gYR/9wjLl7hPYlQ1H4mC3KFEpV8iWV/EmFumbijk4xqw59u4v7u4ErNQU0+oLbUl3cqrjdZIL0GY+gKDK+7y1e2P3B4HSxLEvIkoRUFizLGIYu6nBOhgPdwUlKdDKygEI3LWPnKjT0Dk3hV9PoYLa7WO0OWqtNb96RXVXHPEidvhYr/AvrUxojmqfScFA1B0Vwy3QwLId6y5kvOPXtTrSHE33TBUd16PsTON9v8we3B2/IrOf06QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example shows labeling annotation of a non-interactive tile with interactive\nelements"\n        title=""\n        src="/static/1bc715c67b42fc02f60a11ebbb511499/3cbba/tile-accessibility-6.png"\n        srcset="/static/1bc715c67b42fc02f60a11ebbb511499/7fc1e/tile-accessibility-6.png 288w,\n/static/1bc715c67b42fc02f60a11ebbb511499/a5df1/tile-accessibility-6.png 576w,\n/static/1bc715c67b42fc02f60a11ebbb511499/3cbba/tile-accessibility-6.png 1152w,\n/static/1bc715c67b42fc02f60a11ebbb511499/0b124/tile-accessibility-6.png 1728w,\n/static/1bc715c67b42fc02f60a11ebbb511499/0c3f5/tile-accessibility-6.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(t.p,null,"Example shows labeling annotation of a non-interactive tile with interactive\nelements")))),"\n",i.createElement(r,null,i.createElement(b,{colLg:12},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA90lEQVR42rVRzUoDMRjsC/cJxHfwAcRrL6KgJ/EuvUgvHtqy2W4wC1kom7qb322yY5KDIBUqtgbm8n2T+WaYCc78JscIow/fgHE8TfDPDr330FrDOYdhGOAiTCfB7+fgty9oH1+xfVpASwXj7BfPWpv/HgimRdM0kFKi73vsPnYQrQB9W4EtCfjdHOTqAfTmGWyxhHIGspcQQmTxA8E0LMsShBAwxjIxgVYUFaWoNxRbxtG+c1RFiYIUqOs6H09Of4yslMqxrTEY/B5adCCXM6yn19hczKCiexvnJu4TN6VKRkIIvywlNho6gyAUfMSxhv+35XMJfgIeMgvJljUjTwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example shows labeling annotation of a selectable interactive group of tiles"\n        title=""\n        src="/static/cf201d5204aa30db6b26f7e757392477/3cbba/tile-accessibility-7.png"\n        srcset="/static/cf201d5204aa30db6b26f7e757392477/7fc1e/tile-accessibility-7.png 288w,\n/static/cf201d5204aa30db6b26f7e757392477/a5df1/tile-accessibility-7.png 576w,\n/static/cf201d5204aa30db6b26f7e757392477/3cbba/tile-accessibility-7.png 1152w,\n/static/cf201d5204aa30db6b26f7e757392477/0b124/tile-accessibility-7.png 1728w,\n/static/cf201d5204aa30db6b26f7e757392477/0c3f5/tile-accessibility-7.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(t.p,null,"Example shows labeling annotation of a selectable interactive group of tiles")))),"\n",i.createElement(t.h2,null,"Accessibility testing"),"\n",i.createElement(l.A,{layout:"table",components:"Tile"}))}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?i.createElement(t,e,i.createElement(s,e)):s(e)}}}]);