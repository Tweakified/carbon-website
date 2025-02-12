"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[354306],{786546:function(e,n,t){t.r(n);var a=t(28453),i=t(296540),o=t(815929);t(931363);function l(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",h4:"h4",span:"span",ul:"ul",li:"li"},(0,a.R)(),e.components),{PageDescription:t,AnchorLinks:l,AnchorLink:s,Row:r,Column:u,Caption:d}=n;return s||c("AnchorLink",!0),l||c("AnchorLinks",!0),d||c("Caption",!0),u||c("Column",!0),t||c("PageDescription",!0),r||c("Row",!0),i.createElement(i.Fragment,null,i.createElement(t,null,i.createElement(n.p,null,"No accessibility annotations are needed for notifications, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),"\n",i.createElement(l,null,i.createElement(s,null,"What Carbon provides"),i.createElement(s,null,"Design recommendations"),i.createElement(s,null,"Development considerations")),"\n",i.createElement(n.h2,null,"What Carbon provides"),"\n",i.createElement(n.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(n.h3,null,"Keyboard interactions"),"\n",i.createElement(n.p,null,"Users can navigate through the interactive elements within the notification\nusing the ",i.createElement(n.code,null,"Tab")," key. Actions such as closing or activating buttons can be\nperformed using the ",i.createElement(n.code,null,"Enter")," or ",i.createElement(n.code,null,"Space")," keys. Additionally, some notifications\ncan optionally be closed by pressing the ",i.createElement(n.code,null,"Escape")," key."),"\n",i.createElement(n.h4,null,"Inline and toast"),"\n",i.createElement(n.p,null,"Inline and toast notifications do not contain interactive elements, and they do\nnot receive focus."),"\n",i.createElement(n.h4,null,"Actionable"),"\n",i.createElement(n.p,null,"Actionable notifications may contain interactive elements such as links and\nbuttons. This component grabs and traps focus until an action is taken or the\nnotification is dismissed. Users can navigate through the interactive elements\nusing the ",i.createElement(n.code,null,"Tab")," key, and actions like closing or activating buttons can be\nperformed using the ",i.createElement(n.code,null,"Enter")," or ",i.createElement(n.code,null,"Space")," keys. Additionally, the notification can\nbe optionally closed by pressing the ",i.createElement(n.code,null,"Escape")," key."),"\n",i.createElement(r,null,i.createElement(u,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABWUlEQVR42p2TzUrDQBDH+6i+gwiefQEFn8GbFy8ieFJ6EqQehGqV2tpWYhKTZtNN9vvv7iaFVpPaOjBkd7Lz2/najtYaxphGFVyClcKrEKr1nFMnQgh0lps1sSZeSkih/dqp4MrbNomUshkopYZS+pddMHeJ2g3oYNGM+Ih+iruEM+WhWpvNQFMfGD9HONo7x+PdxO/1SqRunScFpK1tueBVOVqB9c+ESPTHDGHKkBUSOQNICWTUIJ5LzEKOMGYIwgKszsJsAk6tQ3cg8DCYotd/Q0AUYgp8ZhqjQKA/UxiMKIYfFAuq1nwbgVEqENkI0lxi8kEQJgxU2CjrSL8SDlJoa7ejpMzfNXx/iXFycIX72yFOD69xedZDUea2GbxyEtX4KKm3a4oDHu9bYPcVJCO++O6gewDLTJo63JBy9U0jipuLJwSTuS+3MdhaWgf7v9IKXH2fuwK/AXwn+KhIbXWVAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Retaining focus until an action is taken or the notification is dismissed."\n        title=""\n        src="/static/42a04344ec5a4e8e783f12c12fe15012/3cbba/notification-accessibility-actionable.png"\n        srcset="/static/42a04344ec5a4e8e783f12c12fe15012/7fc1e/notification-accessibility-actionable.png 288w,\n/static/42a04344ec5a4e8e783f12c12fe15012/a5df1/notification-accessibility-actionable.png 576w,\n/static/42a04344ec5a4e8e783f12c12fe15012/3cbba/notification-accessibility-actionable.png 1152w,\n/static/42a04344ec5a4e8e783f12c12fe15012/92c65/notification-accessibility-actionable.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,i.createElement(n.p,null,"Retaining focus until an action is taken or the notification is dismissed.")))),"\n",i.createElement(n.h4,null,"Callout"),"\n",i.createElement(n.p,null,"A callout can include interactive elements such as links, which users can\nnavigate through using the ",i.createElement(n.code,null,"Tab")," key. Actions on these links can be performed\nusing the ",i.createElement(n.code,null,"Enter")," or ",i.createElement(n.code,null,"Space")," keys."),"\n",i.createElement(r,null,i.createElement(u,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABX0lEQVR42tVSTUvDQBDtv/XgwX8h6B8Rbx56EcGTJ6EUCi22ijStYmyTNh/N7s5+5DmbNLUfCqInH0x2Z97M28duWs45lGW5E/yBNY7DonRcwxbH8DOea3pQl6G1RqtpauBYQEkDTbYKv/eDHr7V12iLb/KSW4w1h4JaWzjrNrnnldCVU1IGhvl9uDWnFO0KrjKFKMwPBrxDsSIWc/gWLFPkshb0J3jcXPZwenQFWeiNO9/pWDBPZD21rn0FUahdh9MZYTiRWOSETDqwKRQGSAuLKFYQvF/xWZmsI+UQ9Dlv9N4d9gOFu6FEd/CEwXOIcZhh9LJEdyTQGSo8BJxP5nhdEKICmPHtpGJL0OwJvs0Ji6VGnBLG0wRRohBnGtN3jSA0CGOfKySFAy+1Q/2FYHOH1xc9nJ+0cX/7iLPjNvqdAEqL+l/7AQ4ckrTVSxMZfjGqVussyhK/E/wr/ofgBwCR+d7S+eBrAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Navigating through interactive elements using the Tab key."\n        title=""\n        src="/static/de6136d76187aaef843f6196baa55da1/3cbba/notification-accessibility-callout.png"\n        srcset="/static/de6136d76187aaef843f6196baa55da1/7fc1e/notification-accessibility-callout.png 288w,\n/static/de6136d76187aaef843f6196baa55da1/a5df1/notification-accessibility-callout.png 576w,\n/static/de6136d76187aaef843f6196baa55da1/3cbba/notification-accessibility-callout.png 1152w,\n/static/de6136d76187aaef843f6196baa55da1/92c65/notification-accessibility-callout.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(d,null,"Navigating through interactive elements using the Tab key."))),"\n",i.createElement(n.h2,null,"Development considerations"),"\n",i.createElement(n.p,null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),"\n",i.createElement(n.ul,null,"\n",i.createElement(n.li,null,"Use the roles ",i.createElement(n.code,null,"alert"),", ",i.createElement(n.code,null,"log"),", or ",i.createElement(n.code,null,"status")," for notifications that do not\nrequire user action."),"\n",i.createElement(n.li,null,"Use the role ",i.createElement(n.code,null,"alertdialog")," for notifications that require user action."),"\n",i.createElement(n.li,null,"Callouts do not have an aria-live attribute, and are not automatically\nannounced by screen readers."),"\n"),"\n",i.createElement(n.p,null,"Special care should be given to focus management for notifications with\ninteractive elements or actions. It is not recommended to venture beyond using\nthe roles ",i.createElement(n.code,null,"alert"),", ",i.createElement(n.code,null,"log"),", ",i.createElement(n.code,null,"status"),", or ",i.createElement(n.code,null,"alertdialog")," for event-driven\nnotifications, as this can present unique challenges. If you choose to do so,\nthere are two known approaches you may want to research further:"),"\n",i.createElement(n.ul,null,"\n",i.createElement(n.li,null,"Collect notifications in a persistent area in your application for users to be\nable to navigate to and take action on notifications."),"\n",i.createElement(n.li,null,"Render notifications in an already-existing ",i.createElement(n.code,null,"region")," that can be accessed via\na hotkey. Focus should jump to the notification region after the hotkey is\ninvoked. Once the user has reached the end of the region, focus should return\nto the previously focused item in the document before the hotkey was invoked."),"\n"),"\n",i.createElement(n.p,null,"Neither approach is perfect, but in either case, ensure that notifications are\nproperly announced, respect user timeout preferences, and are easily navigable\nby keyboard or screen reader for users to take action."),"\n",i.createElement(o.A,{layout:"table",components:"Notification"}))}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,a.R)(),e.components);return n?i.createElement(n,e,i.createElement(l,e)):l(e)}}}]);