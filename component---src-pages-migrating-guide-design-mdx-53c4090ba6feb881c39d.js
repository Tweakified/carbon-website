"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[979707],{321869:function(e,t,n){n.r(t);var a=n(28453),l=n(296540),i=n(734820);function o(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",h4:"h4",ol:"ol",img:"img",span:"span",em:"em",strong:"strong"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:o,AnchorLink:s,Row:c,Column:m,GifPlayer:d,ResourceCard:g,MdxIcon:p,Caption:h}=t;return s||r("AnchorLink",!0),o||r("AnchorLinks",!0),h||r("Caption",!0),m||r("Column",!0),d||r("GifPlayer",!0),p||r("MdxIcon",!0),n||r("PageDescription",!0),g||r("ResourceCard",!0),c||r("Row",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"The transition from v10 to v11 includes significant updates and additions to\ncolor tokens, theming, size naming, with new components providing better\naccessibility, collaboration, and efficiency for users.")),"\n",l.createElement(o,null,l.createElement(s,null,"Design kit"),l.createElement(s,null,"Components"),l.createElement(s,{to:"#sizing-breaking"},"Sizing"),l.createElement(s,{to:"#type-tokens-breaking"},"Type tokens"),l.createElement(s,{to:"#color-tokens-breaking"},"Color tokens"),l.createElement(s,null,"Theming")),"\n",l.createElement(t.h2,null,"Design kit"),"\n",l.createElement(t.h3,null,"What’s new"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Added new color tokens."),"\n",l.createElement(t.li,null,"Introduced layering models: layer set tokens and contextual layer tokens."),"\n"),"\n",l.createElement(t.h3,null,"What’s changed"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Updated existing color token names to better reflect their usage."),"\n",l.createElement(t.li,null,"Updated layer styles with new color tokens."),"\n",l.createElement(t.li,null,"Updated text styles with new token names."),"\n",l.createElement(t.li,null,"Removal of ",l.createElement(t.code,null,"light")," variants (in favor of new layer and contextual token sets)."),"\n"),"\n",l.createElement(t.h3,null,"Kit migration"),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Design tool"),l.createElement(t.th,null,"v11"),l.createElement(t.th,null,"Migration strategy"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.a,{href:"/designing/kits/figma"},"Figma")),l.createElement(t.td,null,"Update available"),l.createElement(t.td,null,"The v11 Figma update is available as a new library with all themes in one file. See the ",l.createElement(t.a,{href:"https://carbondesignsystem.com/designing/kits/figma/"},"Design Kit Figma")," tab for more information. Teams need to swap out assets from v10 to v11 assets to migrate. The v10 Figma files will not receive continuous updates and will remain permanently on v10.")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.a,{href:"/designing/kits/sketch"},"Sketch")),l.createElement(t.td,null,"Update available"),l.createElement(t.td,null,"The same Sketch Cloud libraries that were used in v10 have been updated to include the v11 changes. Do not accept the library update until you are ready to work in v11. There are new ",l.createElement(t.a,{href:"https://v10.carbondesignsystem.com/designing/kits/sketch#get-the-kit"},"v10")," libraries available for teams that still need them. Note that Sketch kits will not be prioritized or maintained in the future.")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.a,{href:"https://github.com/IBM/design-kit/tree/master/Adobe%20XD"},"Adobe XD")),l.createElement(t.td,null,"Partial update available"),l.createElement(t.td,null,"Some of the v11 changes have been made in the XD files, available in GitHub. Note that Adobe XD kits will no longer be prioritized or maintained.")))),"\n",l.createElement(t.h4,null,"Figma"),"\n",l.createElement(t.p,null,"Migration to the new v11 Carbon libraries will be a manual process from v10.\nHere are some steps of how to migrate your Text and Color styles from v10 to\nv11."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Swap the library from v10 to v11."),"\n",l.createElement(t.li,null,"Open the library panel and select the ",l.createElement(t.code,null,"v10")," library."),"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.code,null,"Swap library")," button."),"\n",l.createElement(t.li,null,"Take a screenshot of the styles that didn’t swap."),"\n",l.createElement(t.li,null,"Visit the ",l.createElement(t.code,null,"v11")," Text or Color styles file in ",l.createElement(t.code,null,"IBM Design Systems"),"."),"\n",l.createElement(t.li,null,"Duplicate the file and move it to your team’s space."),"\n",l.createElement(t.li,null,"Rename the duplicate file to a temporary name."),"\n",l.createElement(t.li,null,"Change the names of the text or color styles that didn’t swap in Step 5 to\nmatch the name and organization of v10."),"\n",l.createElement(t.li,null,"Swap to this temporary library."),"\n",l.createElement(t.li,null,"Update the names back to v11 and swap to the actual v11 library."),"\n",l.createElement(t.li,null,"Check nested components for text style overrides."),"\n"),"\n",l.createElement(t.h2,null,"Components"),"\n",l.createElement(t.h3,null,"Notifications ",l.createElement(i.vwO,{type:"cyan"},"Breaking")),"\n",l.createElement(t.p,null,"An actionable variant has been added to the notification component. Actionable\nnotifications allow for interactive elements within a notification, like\nbuttons. Actionable notifications can be styled like an inline or toast\nnotification."),"\n",l.createElement(t.p,null,"See Carbon’s\n",l.createElement(t.a,{href:"/components/notification/usage/#actionable"},"actionable notification")," usage\nguidance for more information."),"\n",l.createElement(c,null,l.createElement(m,{colLg:8},l.createElement(d,{color:"dark"},l.createElement(t.img,{src:"/ce70785b5526700899acb8c7c7ed02d7/05_toast_context_608.gif",alt:"Example of toast notifications stacking."}),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 64.58333333333334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACRklEQVR42q2SQU8aURSF+RNuG8BEEzXSqo0I0WoxMUokFhFMaigYCsqipdWIaSNWY+JK06bb7v1TrdiGIFDrDM4AMyh8nXkEqYu68ibfvLw3kzPnnvsszWaTh6BdFh64LOvr69xHIpEgHo/fYW1tTbxLJpNin06nkSSpJdjV1cV92B5Z6bZ3Y7PZsNvtWK1Went76evrY2BgQKyTk5PkcrmWYKFQoFgs3qFQLFAqlsgX8nz+9pUPmY/s7e0J9vf3yWQyHBwciP3W1hYnJyedlv8NtF3tM71RZ+ntCk+fOQkuBQksBQiFQvj9fubn55mYmBBuzZ+Y1Wg0sJiP/wpyTSSxinvUxcKLBebm5vB6vfh8PmZnZ0Wrw8PDHB4edgQ1TUPXdTStQ61mnGl1rmoVAq9COAYdTE1NCQGn04nD4WBoaIiRkRF6enrY2dnpCJbLZRRFQVWvUJUWilKmoirIqsTxl2Pep96R3t4WeW1ubrKxsSFWc7qpVOo2Q7MzS61aRa3UyP/R+S3XKRkUJZ2SQe5C5fWnN3iDPqLhCJFohFgsRjgcJhqNEgwGheujo6OOYL2uU1Y18hdVY8LGZM+LXEqy+EBrXLMcX2HUOXo7jMXFRQKBgMjT7XbT39/P7u5uR7DZbFC/wXCnoVzJyMYFlWXJaLnCpSKxHHnJk8HHIsPx8XFcLpfIcWxsTKzmPWwLigzrukZVu+HX+SU/z7KcnmbJZrOcGXw/+8FqMobnuQe/4cx0aDrzeDxMT08zMzMjXLanbDr8C4sMA4Rf/7tPAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of toast notifications stacking."\n        title=""\n        src="/static/482098a8bddec64f23bf908d3cd6f295/3cbba/05_toast_context_608.png"\n        srcset="/static/482098a8bddec64f23bf908d3cd6f295/7fc1e/05_toast_context_608.png 288w,\n/static/482098a8bddec64f23bf908d3cd6f295/a5df1/05_toast_context_608.png 576w,\n/static/482098a8bddec64f23bf908d3cd6f295/3cbba/05_toast_context_608.png 1152w,\n/static/482098a8bddec64f23bf908d3cd6f295/e1971/05_toast_context_608.png 1256w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})))),"\n",l.createElement(t.h3,null,"Popover ",l.createElement(i.vwO,{type:"green"},"New")),"\n",l.createElement(t.p,null,"Popover is a new component we have added to our system. A popover is a layer\nthat appears above all other content on the page and is used to display\nadditional details for specific elements whether it be text or interactive\nelements."),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/components/popover/usage/"},"popover")," usage guidance for more\ninformation."),"\n",l.createElement(c,null,l.createElement(m,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADGklEQVR42rVUXUhTYRh27SajX+vOhqAgonhhSCAoVhdBRD/0gyFOWT8jgoJExXYzIuiui4IKgiyRaY6tjegHoZuykFxqkImzbM3pftS54zbPOTvnbF/PdzznNMsoL/zg2XN23vc87/d9z/t9OTnrMQghuQsLC9vm5+e3ZiMSiWymcavVuoFyW1tbS3Nz8/PW1tYei8XSS9FusfTcsF57dt3a3qIJMgzTkUgkuHg8HgLPgsPgRYwhhHUoKAtOT0+7UIiEQiEROYRhFkkizki+WUI+fWPcmqAgCE58RDKZjESWR1r+Sad92YJghxJnAYFCFHjua0gigEMTRMXL0WjUPjc39wjoBB5jJt1Y8i1FUK8IuhRBkaiV02lJYfda9lieYSqVMomi+BC4DdwF7kAIIB2SJDXJyT6fb+PU1FTuzMzMptVA4ypU4dWG3W7X0xxaXfeP2enUnNra2l1VVVUFNTU1hrKyMkNRUZGhsrLSUFFRUUBj2kexWGw/nDbD1Ua4dxFswrtzwCm1OuXubrut50kvsdlsUYfDyTidTwFnFEgDNk0wmUzKLnMcJ2GfKMsusyy7wuVoLOFW3otLS0nCc0mtM1aY8r9tw3Gs5vK9+w/I1fab6EVGUor8EpycnNzr9/tPA8dg0HHKgUDgBPigso/6ZUH+MZ9K8ZIoBj9/GY+8G/4RgVAQK2SxVZ1rPqKjo6N5g4ODhpGRkXwUkeH1evMnJiZ2j42N7ZSTaMvQcwsDtqvAMnagubdQd2lchWrOX7pBT3Pos+73NlHOdx7cPqLE5T00m83VJpOp0Wg01jU0NJyhqK831l26YDReMRurs9tmDz4+ChwCDuP/AexLC0zxZwuWl5e70H+kq6tLHBgYIG/7+8nwkEd688FLXrz+6F61bXiep5yBGMGNM54tWFJSYi8sLCTYxwRNj+OGkgQ+ORogZOh72q4JQkAWxNnEkZQor2gbVbC0tNRVXFxMPB6PfDlgNQQT+LMPcdvsC4fD54PBYCPQRBnvzoJPKimqoBUzfI/xEhp96N8+SRBe8Smxn2V567rc/j8BVN8WBkIqUd0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of popover variants."\n        title=""\n        src="/static/b749ede2c845141ae4c96ee72f9ed929/3cbba/popover-usage-1.png"\n        srcset="/static/b749ede2c845141ae4c96ee72f9ed929/7fc1e/popover-usage-1.png 288w,\n/static/b749ede2c845141ae4c96ee72f9ed929/a5df1/popover-usage-1.png 576w,\n/static/b749ede2c845141ae4c96ee72f9ed929/3cbba/popover-usage-1.png 1152w,\n/static/b749ede2c845141ae4c96ee72f9ed929/92c65/popover-usage-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.h3,null,"Tooltip ",l.createElement(i.vwO,{type:"cyan"},"Breaking")),"\n",l.createElement(t.p,null,"The tooltip component has been refactored to use the popover component under the\nhood to improve accessibility."),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/components/tooltip/usage/"},"tooltip")," usage guidance for more\ninformation."),"\n",l.createElement(c,null,l.createElement(m,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.31944444444444%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7klEQVR42qVTy64hURSt3zDBxA+YSEwNJB1v0ldMDQhDCT6hJ/6g/+D6AcFA0p8gwsDzotXTLVShXuvWPp1oOrcTnd7Jyqk6Z5+11167ilssFlitVthut/+NzWYDjsiGwyH6/T46nQ5Dr9f7Z3S7XQwGA3CyLKPVaiEQCCAUCiEYDMLn88Hr9bL1Gfj9fng8HoTDYXC73Q7tdhvlchmNRgP1eh3VahWVSgWlUukp0N1isYhmswluOp1iv9/jeDxivV4zH0RRBCm3bRuO4zwFCsMwwM1mM/A8D1I6Ho9BBSaTCZbLJQ6HA1RVfQDtUXHCn+eKovwmvFwuOJ/PuF6vD7AsiyklUM7pdLqR0jOpojxaNU37RUgtUgVqeT6f3xSORiN2pus6SzZN85ZHIgRBwH08tEwKqGKtVkM6nUY+n2drLpdDMplEIpFgRUixrMhQBBGK6z11RXc/JTQMk004Ho8jlUohm80ik8kgFoshEokwfykUd2DKegNN1/6ukCZF1emz+RJL4evLCwqFArIuYTQaZcT0V1FYbnHdVUY2kK+fEpI/jmNDlFV8e1XwtpUguf795N1VktgE79ujIELJVau6Q6J94mCEZC69kELLsnHQLdKBN9nG9x9ME0z3jKZ5T2iaFpT3dwg7HhovspwPsIJkNxZYOGwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of a tooltip."\n        title=""\n        src="/static/f411df02ef2e7d0f59c1abce70eec083/3cbba/tooltip-usage-1.png"\n        srcset="/static/f411df02ef2e7d0f59c1abce70eec083/7fc1e/tooltip-usage-1.png 288w,\n/static/f411df02ef2e7d0f59c1abce70eec083/a5df1/tooltip-usage-1.png 576w,\n/static/f411df02ef2e7d0f59c1abce70eec083/3cbba/tooltip-usage-1.png 1152w,\n/static/f411df02ef2e7d0f59c1abce70eec083/92c65/tooltip-usage-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.h3,null,"Toggletip ",l.createElement(i.vwO,{type:"green"},"New")),"\n",l.createElement(t.p,null,"Definition and interactive tootips now use the toggletip component to achieve\naccessibility standards. Toggletip uses the disclosure pattern to toggle the\nvisibility of a popover. This popover may contain a variety of information, from\ndescriptive text to interactive elements. Further guidance on the toggletip\ncomponent is coming soon."),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/components/toggletip/usage/"},"toggletip")," usage guidance for more\ninformation."),"\n",l.createElement(t.h3,null,"Tabs ",l.createElement(i.vwO,{type:"cyan"},"Breaking")),"\n",l.createElement(t.p,null,"The tab component variant names are changing. Default tabs will become ",l.createElement(t.em,null,"Line\ntabs")," and Container tabs will become ",l.createElement(t.em,null,"Contained tabs"),". There are three new\nmodifiers—tabs with icons, icon-only tabs, and secondary labels. Additionally,\nthere is a new third alignment option for tab that allows for auto-widths where\neach tab size is determined by the label length."),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/components/tabs/usage/"},"tabs")," usage guidance for more\ninformation."),"\n",l.createElement(c,null,l.createElement(m,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.31944444444444%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABqUlEQVR42q1SSW7CQBDMBziBIQKFmMVjG7CNjQEFswoJDvBAljNfAYmX8IuKq2EslJyCglRMd09PuaZ63vDPvzf+3W43XK9XnM9nweVyeRlCeDqdEEURlssl4jiG67pot9svQQh3ux1yuRzq9TpKpRLy+TwKhcKfwDNERmgYhVRliHK5LA2GYQie4+faz55isShihPBwOMJ4r0C5Hsy6gtlQaKgWmpaCrRQsy0Kz2ZRVpTlh23ZWZ04hJBfC/X4PvxNgsVjCUjZsx0U3jDAajbDdbjGbzZAkCabTKebzOdbrNVarFSaTidTpfa1WE6V3hbs9PqIG4vEAgeenQ3Fgmp+iotVqyZC46phwHCerMSahaZp3wmN6ZRW6+JomiHsxer2eIAiCX+h2u7LHV6FrjFkLw/BBeDwi8H0k6RW5MR6P5UrD4RCDwSBDv9+Xvc1mk9qzkJw9tEA/ucdQDqhWq/A8T4zmFRj76UeY62Fw1VfWwyDYq89mCiuVijxMTdjpdARs1HVNyLomI5izh3GmkIbSD36ZRlM+vdH+UC2HxIP06vkJ0VeCCr8BrtACWzakTpUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of new tab style."\n        title=""\n        src="/static/929cd27aef113f4618ac2f5c21c1e3cb/3cbba/contained-tabs.png"\n        srcset="/static/929cd27aef113f4618ac2f5c21c1e3cb/7fc1e/contained-tabs.png 288w,\n/static/929cd27aef113f4618ac2f5c21c1e3cb/a5df1/contained-tabs.png 576w,\n/static/929cd27aef113f4618ac2f5c21c1e3cb/3cbba/contained-tabs.png 1152w,\n/static/929cd27aef113f4618ac2f5c21c1e3cb/92c65/contained-tabs.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.h3,null,"UI shell ",l.createElement(i.vwO,{type:"purple"},"Updated")),"\n",l.createElement(t.p,null,"The UI shell is now themeable and has been updated to use inline theming. The UI\nshell uses Carbon theme tokens instead of component specific tokens and the\ncolor will follow each themes styles."),"\n",l.createElement(c,null,l.createElement(m,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABW0lEQVR42q1UO67CQAzcioZckBaJO3CV0AAtTY6ABEWKnAEiOiBBhG8+QOZpLDla9kUC6b2VJruyx7P22orBF6uua8E3y/Azm80wHA7h+z4mkwnG47Hso9EI8/m8IfNM23Q6FU4bTwR7vR6MMQiCANvtFqvVCnEcy77b7RrBLMvEv9lsxK+weSI4GAzQ7XYRhqEY8zxHWZaCqqp+lU2b+l2eCPb7fXQ6HSwWCwk6n8+4Xq+4XC4i7gre73fxK2xek6HneVgul3i9Xn8XXK/XiKIIp9NJgh6PB57Pp4AX2IKE+mwoz3wzEiRrwKfxMtoEps1SXPDBdRVFIbzb7fYGlk1fUzIF+W6HwwFpmjZIkkSeQW9n8PF4xH6/lzFRcJRobwTtx3Zvb2sKbXYV5L1lqERNv617dlM+dtkWZOkkEDwz2M2QPOW4PGOTmTZvsqFNsTN0eXbzzH//bX4Ai9twRIJYd3sAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of UI shell themes."\n        title=""\n        src="/static/0b173b21f8be5a6a1f60aa1e297fc97d/3cbba/ui-shell-themes.png"\n        srcset="/static/0b173b21f8be5a6a1f60aa1e297fc97d/7fc1e/ui-shell-themes.png 288w,\n/static/0b173b21f8be5a6a1f60aa1e297fc97d/a5df1/ui-shell-themes.png 576w,\n/static/0b173b21f8be5a6a1f60aa1e297fc97d/3cbba/ui-shell-themes.png 1152w,\n/static/0b173b21f8be5a6a1f60aa1e297fc97d/92c65/ui-shell-themes.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.h2,null,"Sizing ",l.createElement(i.vwO,{type:"cyan"},"Breaking")),"\n",l.createElement(t.p,null,"All size properties for components have been renamed to be more consistent with\nthe pixel/rem value that it is paired with."),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Size"),l.createElement(t.th,null,"Height (px / rem)"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"Extra small (xs)"),l.createElement(t.td,null,"24 / 1.5")),l.createElement(t.tr,null,l.createElement(t.td,null,"Small (sm)"),l.createElement(t.td,null,"32 / 2")),l.createElement(t.tr,null,l.createElement(t.td,null,"Medium (md)"),l.createElement(t.td,null,"40 / 2.5")),l.createElement(t.tr,null,l.createElement(t.td,null,"Large (lg)"),l.createElement(t.td,null,"48 / 3")),l.createElement(t.tr,null,l.createElement(t.td,null,"Extra large (xl)"),l.createElement(t.td,null,"64 / 4")),l.createElement(t.tr,null,l.createElement(t.td,null,"Double extra large (2xl)"),l.createElement(t.td,null,"80 / 5")))),"\n",l.createElement(t.h2,null,"Type tokens ",l.createElement(i.vwO,{type:"cyan"},"Breaking")),"\n",l.createElement(t.p,null,"The two v10 type sets—Productive and Expressive—have been blended together to\nwork as a unified collection in v11. As a result of this convergence, type token\nnames have been renamed to better define their relationship to one another and\nreflect its styling."),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/elements/typography/style-strategies/"},"typography")," guidance for\nmore information."),"\n",l.createElement(t.h3,null,"Compact styles"),"\n",l.createElement(t.p,null,"Some tokens now have a compact designation, meaning the only difference it has\nwith the token of a similar name is a variation in line height."),"\n",l.createElement(t.h3,null,"Body styles"),"\n",l.createElement(t.p,null,"The four body styles stay the same but their names have been updated. The ",l.createElement(t.code,null,"long"),"\nstyles are now simply just ",l.createElement(t.code,null,"body"),", while the ",l.createElement(t.code,null,"short")," styles are now\n",l.createElement(t.code,null,"body-compact"),"."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"$body-long-01")," → ",l.createElement(t.code,null,"$body-01")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"$body-short-02")," → ",l.createElement(t.code,null,"$body-compact-02")),"\n"),"\n",l.createElement(t.h3,null,"Heading styles"),"\n",l.createElement(t.p,null,"Productive and expressive while still a concept used to express different\n“moments” are no longer used in the type token header names. There are two new\nclassifications—Fixed and Fluid."),"\n",l.createElement(t.h4,null,"Fixed headings"),"\n",l.createElement(t.p,null,"Fixed headings, for the most part take the place of what were the v10 productive\nheadings. The first two v10 expressive headings are also now included in the\nfixed type set. They are called “fixed” because they do not change sizes across\nbreakpoints and always remain a single fixed size. However, the term fixed is\nnot included in the token name but simply named ",l.createElement(t.code,null,"heading"),"."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"$productive-heading-03")," → ",l.createElement(t.code,null,"$heading-03")),"\n"),"\n",l.createElement(t.h4,null,"Fluid headings"),"\n",l.createElement(t.p,null,"Fluid headings take the place of the v10 expressive heading. These headings are\nresponsive and the type styles change size at different breakpoints."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"$expressive-heading-05")," → ",l.createElement(t.code,null,"$fluid-heading-05")),"\n"),"\n",l.createElement(t.h3,null,"Resources"),"\n",l.createElement(c,{className:"resource-card-group"},l.createElement(m,{colLg:4,colMd:4,noGutterSm:!0},l.createElement(g,{subTitle:"Type token migration table",href:"https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#type-tokens"},l.createElement(p,{name:"github"})))),"\n",l.createElement(t.h2,null,"Color tokens ",l.createElement(i.vwO,{type:"cyan"},"Breaking")),"\n",l.createElement(t.p,null,"Existing color tokens have been renamed to better reflect their usage. In\naddition to renaming existing tokens, new tokens have been added to fill gaps in\nthe color token system and fix complex layering logic."),"\n",l.createElement(t.h3,null,"Color token names"),"\n",l.createElement(t.p,null,"Previously, in v10 many color tokens had numeral endings, now in v11 only\nlayering tokens will have this distinction. All other tokens have been given an\nadjective descriptor in place of the number ending to help users better\nunderstand how a token should be used. The new naming convention is as follows:\n",l.createElement(t.code,null,"[element] - [role] - [order] - [state]")),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/elements/color/overview/"},"color overview")," guidance for more\ninformation."),"\n",l.createElement(c,null,l.createElement(m,{colLg:12},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA80lEQVR42n2QwU7DMAyG+/7PwJ0HQFwYFwQ3NNBAcJjY0FC1bqWFtFViJ3EcsqgKUzb1Pzn6/cX2X8jF5udqrsvWBzH7pFjDavd7/WzbIXejCrbE2jKRPycmF113IE/hc8R/H58AxyscYBqgu311PUQjb2JD/d17N3shIbPlI0w0dD0oQABDVpbfcr1PH4XhwVVSIqLW2hirysaFQ0ZY6frhTewaqSQY3a+21eW9HSCd3T4utzdzsamATPv0UV7McC9GOESCnzWjTduaSjg04ytE9tXgsqJ4V7BwXTulJwLzU4HlaWdNKe3j/JmzuvCTmp78B8r9SbGVufHrAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example showing the v10 tokens compared to the v11 tokens"\n        title=""\n        src="/static/914723b9adb79df932b857f7b1dad0da/3cbba/migrate-design-color-tokens.png"\n        srcset="/static/914723b9adb79df932b857f7b1dad0da/7fc1e/migrate-design-color-tokens.png 288w,\n/static/914723b9adb79df932b857f7b1dad0da/a5df1/migrate-design-color-tokens.png 576w,\n/static/914723b9adb79df932b857f7b1dad0da/3cbba/migrate-design-color-tokens.png 1152w,\n/static/914723b9adb79df932b857f7b1dad0da/0b124/migrate-design-color-tokens.png 1728w,\n/static/914723b9adb79df932b857f7b1dad0da/0c3f5/migrate-design-color-tokens.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(h,null,l.createElement(t.p,null,"Examples showing v10 tokens on the left and v11 tokens on the right")),"\n",l.createElement(t.h3,null,"Layer model tokens ",l.createElement(i.vwO,{type:"green"},"New")),"\n",l.createElement(t.p,null,"We have introduced two new types of color token for the layering models—Layering\ntokens and Contextual layer tokens. The two types of tokens will produce the\nsame visual effect. The difference between them is a technical one and largely a\ndeveloper concern. ",l.createElement(t.strong,null,"In Sketch, and other design tools, designer will only use\nthe layering tokens to design.")," The layering tokens replace what were the ",l.createElement(t.code,null,"ui"),"\ncolor tokens in v10 and are used in a similar way."),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/elements/color/usage"},"color usage")," guidance for more information."),"\n",l.createElement(c,null,l.createElement(m,{colLg:12},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABWklEQVR42l2STVPDIBCG+f/j7/Dq1YsXrRcPTquXREfT2E5jCAQIISF8xQ3UTPU9kA3PLuwHyJJObjKLxQwKYV4VTdcN8jGfjvQ/jUJeaVPWvh/DHKy1zrkQgvceDAcfbaaSOK4gLlHYAwcw4BdZMyu5HMmZOB6PVVVhjJumGYZh1KM31ikNtGMc6Ol0AkoIASqlRF0d3h+81TOjYl/sy7LcR+EaY0omzNVzMbvAG1oUxUrruoZr0FJK8MvNnL9dKM9zWCG9VN5K0z6sWZah2Igl7V5KSAyOpJRC2smAClOw7PtEIecmCvJHL9/V1eZ+V1W1EEqpcRxTY5x1EKe/SHvzNB2o5vKSLq3UGhWsvd5t7z4/DoSIGN8nSan0aBrBb7fD66FngjMOFPqUODijdWjWGCgM2nieU1T4na35S883L0OLLgDatgUP8auu65aaPbyAhTLGLilj7AcTbDYHWGM8SgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example showing layering and contextual tokens"\n        title=""\n        src="/static/9688f6abf04f3df8190e5779830881b6/3cbba/color-implementation-compare.png"\n        srcset="/static/9688f6abf04f3df8190e5779830881b6/7fc1e/color-implementation-compare.png 288w,\n/static/9688f6abf04f3df8190e5779830881b6/a5df1/color-implementation-compare.png 576w,\n/static/9688f6abf04f3df8190e5779830881b6/3cbba/color-implementation-compare.png 1152w,\n/static/9688f6abf04f3df8190e5779830881b6/0b124/color-implementation-compare.png 1728w,\n/static/9688f6abf04f3df8190e5779830881b6/0c3f5/color-implementation-compare.png 1856w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(h,null,l.createElement(t.p,null,"Examples showing layering tokens on the left and contextual tokens on the\nright")),"\n",l.createElement(t.h3,null,"Resources"),"\n",l.createElement(c,{className:"resource-card-group"},l.createElement(m,{colLg:4,colMd:4,noGutterSm:!0},l.createElement(g,{subTitle:"Color token migration table",href:"https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#design-tokens"},l.createElement(p,{name:"github"})))),"\n",l.createElement(t.h2,null,"Theming"),"\n",l.createElement(t.h3,null,"Inline theming"),"\n",l.createElement(t.p,null,"Inline theming is available to use in your product. Inline theming is used when\na section of a UI needs to have a different theme from the rest of the page and\nallows themes to be nested within each other without needing custom styles or\noverrides. In product, a common use-case for inline theming is applying a\ncontrasting theme to a UI shell and side panels."),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/elements/color/usage/#inline-theming"},"inline theming")," guidance\nfor more information."),"\n",l.createElement(c,null,l.createElement(m,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 37.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABRUlEQVR42q1SPUvDUBR9IUMGh6IEcXNyK7gqBIdM/pUOYgIuTs4uhYpJBYsEMztktP9CMMUhmpJiNlNIm++kx7wXI+ggHbxwOJd3D4dzL49gjVqtVli3yHj8iNFoBNM0YRjGN3Rdx3A4xHw+Z8IgCHB7cw3tqg+9fqfzVjMYDGBZVmP46s7w9PyCycSG67rwPI9xt9uFIAhwHIcJbdvGRmcXhHTAcVzNhIHnecayLDeGWZ4jzTIkSYK87quqYixJEkRRZOa0fP8dZ5cWTi7uoSqnUBSFQVVV9Ho9aJrWGCZJjOVyiSiKGFOEYYgj6RA721uYThvDsiz/vGU7I3EcY7FYMCPKUdQY7h8cQ9jcw5vrMSFNneUF8qJEURTI6q1apjMKakroQ5qmP0DX7z/4OL+b4SMsmoT1KWhKiuqr/80s4X9/m091sSkDC0wAGQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of mixing themes"\n        title=""\n        src="/static/add03fb91597a42e05e3ce95bfe071c5/3cbba/color-implementation-inline-1.png"\n        srcset="/static/add03fb91597a42e05e3ce95bfe071c5/7fc1e/color-implementation-inline-1.png 288w,\n/static/add03fb91597a42e05e3ce95bfe071c5/a5df1/color-implementation-inline-1.png 576w,\n/static/add03fb91597a42e05e3ce95bfe071c5/3cbba/color-implementation-inline-1.png 1152w,\n/static/add03fb91597a42e05e3ce95bfe071c5/92c65/color-implementation-inline-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.h3,null,"Light or dark mode"),"\n",l.createElement(t.p,null,"Light or dark mode has been newly introduced and is a theme setting that allows\nthe end user to choose a UI that is either predominately light or dark in color.\nThe UI will automatically switch from using light color backgrounds with dark\ncolor text to using dark color backgrounds with light color text."),"\n",l.createElement(t.p,null,"See Carbon’s ",l.createElement(t.a,{href:"/elements/color/usage/#light-or-dark-mode"},"light or dark mode"),"\nguidance for more information."),"\n",l.createElement(c,null,l.createElement(m,{colMd:6,colLg:6},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 896px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACn0lEQVR42rWUz08TQRTHq/B/aEE9mBg4cDIkTQg/Wg/euGBi9CzGePHKyQoeSvgDPKL8BZzEXkxIW1oWL5hwQIwgsku7O7vt7nZn5uub6bIFC0ESfck3b3bS+fT73r7ZVOp/BYBr/0IaNj093be0tLRSKBS+5vP5GslYWFhIRPvG4uLiX+nEYP/Q0JAxPDyMkZERQWuk02kMDAxgcHAQmUwGuVwOk5OTmJrKUp5CNpvFxMQExsfHz0jTisVif7lc3tza2gJlXqlUZKlU0lpfX5cbGxvS2KzJzVqVVJO1WNVqNZF6VudO+tfPGDMoY39/X2xvb2NnZwe7u7vwXBdByPHL4TgkNTyOdjtCFP0hzuEHARJgEAQa2Gg0BAm2bcNxHNAfwXU9OKwjRmvP61Wz2aTfOuhxqICWZcE0TagspdRCLHmO1L4bACZrd4HkSAMJJFS5yqEKfeCyUGBKIbUiAZKzBPh9bw++7+OqoXrZU3IYCREJeSWQ8KneMIQX+l0gNVUDjz0hjtxOT4Lo8lJVcNsBdxj2nMNeoN0UwiSgFyq3V3ApBH7Yp4DUMw20XC4OmQTzCRqc/1YTEUR5jMihoJH6xn52gdTQTskK6Egc2CTKrfDicZHx21U9FDTUZ0rmnHccMi4sV4DzjqJT4uToZJTOzGEcB8zsBQoRn7rwPcieZzqrTiJqt7sfB9oxPOrbq0JFvHxbxrPXJczmO3r+poQX82XMv/uir5gTX0s1/OracR6hSSNhe/HYzM11gOZxhL67KyJ1+wNSN5aRuklKL+P6rfd6fe/BKhiNh2WZGqjUarW0U/p+gLXiwZ7TDiPjqB5idOajGHtSxNjTIjKPP+H+zBpGH63hTm4VD2c/o16vE8hORkWV26YbIiiHgY/f6SPibxyTnpEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of light or dark mode."\n        title=""\n        src="/static/0b8574c38cfac282a217edabc822ae36/6e9cd/light-or-dark-mode-1.png"\n        srcset="/static/0b8574c38cfac282a217edabc822ae36/7fc1e/light-or-dark-mode-1.png 288w,\n/static/0b8574c38cfac282a217edabc822ae36/a5df1/light-or-dark-mode-1.png 576w,\n/static/0b8574c38cfac282a217edabc822ae36/6e9cd/light-or-dark-mode-1.png 896w"\n        sizes="(max-width: 896px) 100vw, 896px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),l.createElement(m,{colMd:6,colLg:6},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 896px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACrklEQVR42rWUy07bQBSGgwqVgA1Qx7dcSOIZ343j3KABCSICi3bNqk9AxaKvAeoCRB+im5amqKu+Q+tlH6bO3zNDEhJKqyzaSJ/OeOR8/sczx7nc//oBWPgXSNnJycmT6+vr95eXlz/Oz8+/EenFxcUEmk+vrq7mYhxw0fO8NAgCJEmShWGISqWCarUq6+7uHo6OjnB4eIh+vy+roNfr4eDgYIaJUNf17wRUVf2Zz+eHGxsbEkVRhqZpDgsFQtbCsCgoFuX4IRNhuVxOhZBSZt1uF51OB41GAzQPVdNhbnIUKjb0wibyeZXIP8pEqGmaFFKajJ4OepoYwzAMiHnDMCX66PpRNO1eSJJUSOr1etZqtdBut9FqNsEYA+ccXNTx+CE07/ox3DDBzJJFIhJlx8fHaJLMtu25cRyHcGeFImGHhPv7+xA7zRifS8ZH2NyeFZZKJbrBzbjtgFk1GvO5ZBElC8V/gqmExVKJEprwo0YWJTvwwzq9l3C0lD/DiZYXoOkHYHv12U2h80UiOtjJNtV4LqFLMPEOfQ92N74XGqYpNyWIm9lWs4tgK6G0lNJ1/4pNtOnBDc+HtTclpA5JDUOHv0VLbnQRkVRUz4/gTHbxd2wicj0JGyekXV1UpNAgYSsL4g7d7N3h+lN4j6cUco+WvDMWUkJFUVOTElrVQsZrBdiseId1B6M5bpXlQa/VahMsy5IHm1G16Do3ikhLfpaqegVqdJateWdYYadY5a+xQqzyUzyL3mCNvUKFvkBhGMD3fdH3ctnii2Qxm3DuhZqynuYNB8vbn7Ol1i1y4Q1y8QC5+gAL9U9Yfv4VT8N3UiQ+HqKTRIvGcSzPoxdERDwlVNdTxbBR7t1k/ssv8F7cotYfQO1+hLb7AcuNAZact1JI/S6XO+5zechHff0LI38kIdTcw54AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example of light or dark mode."\n        title=""\n        src="/static/2ca84620a604debfd2cf307f89aff334/6e9cd/light-or-dark-mode-2.png"\n        srcset="/static/2ca84620a604debfd2cf307f89aff334/7fc1e/light-or-dark-mode-2.png 288w,\n/static/2ca84620a604debfd2cf307f89aff334/a5df1/light-or-dark-mode-2.png 576w,\n/static/2ca84620a604debfd2cf307f89aff334/6e9cd/light-or-dark-mode-2.png 896w"\n        sizes="(max-width: 896px) 100vw, 896px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))))}function r(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}}}]);