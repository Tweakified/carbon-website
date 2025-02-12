"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[828661],{963627:function(e,n,t){t.r(n);var a=t(28453),i=t(296540),l=t(815929);t(931363);function s(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",span:"span",ul:"ul",li:"li"},(0,a.R)(),e.components),{PageDescription:t,AnchorLinks:s,AnchorLink:o,Row:r,Column:d,Caption:b}=n;return o||c("AnchorLink",!0),s||c("AnchorLinks",!0),b||c("Caption",!0),d||c("Column",!0),t||c("PageDescription",!0),r||c("Row",!0),i.createElement(i.Fragment,null,i.createElement(t,null,i.createElement(n.p,null,"No accessibility annotations are needed for UI shell left panels, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),"\n",i.createElement(s,null,i.createElement(o,null,"What Carbon provides"),i.createElement(o,null,"Development considerations")),"\n",i.createElement(n.h2,null,"What Carbon provides"),"\n",i.createElement(n.p,null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),"\n",i.createElement(n.h3,null,"Keyboard interaction"),"\n",i.createElement(n.p,null,"The left panel is comprised of both expandable sections (often called\n“sub-menus”) and links to content. All items can be reached by ",i.createElement(n.code,null,"Tab"),". Toggling a\ncollapsed section with ",i.createElement(n.code,null,"Space")," or ",i.createElement(n.code,null,"Enter")," expands it, which reveals additional\nlinks. Activating any of the links (with ",i.createElement(n.code,null,"Enter"),") updates the main content area\nand puts focus back at the top of the page. The link becomes bold to show it is\nthe current page. (It remains in the tab order, but can no longer be activated.)"),"\n",i.createElement(r,null,i.createElement(d,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8UlEQVR42o2ST2jUQBTGZ9tVi5eqd/sH91CqUqUHoXTZiyzVhoLF4LEHvQheehZZERWFFivqIV7Ek+BBKFIvHrYXQbSHtqAe3N2kq91Mskk3yUxms9bOcxI3paVG+uDHg8l733yZ9xDaETJ63YlQoQPtMwp/a1NhBgSpxEIASAuOxTiOs4v2eTqpP1KWhpXD8sknM6fRrazv++fq9TrDGLumabqU0hiHEuo2A9ZYnP8i544+uC4PPTpzeeDxNalvNrdLcCr3ouvKqac3+tD0UOWrkbcsG0qlEqyv14AxFiEu4r7PQAj+fv9mZer88dsP84PTY5Nn7925kLkv/etXo/db/VgeD5oMGhs2F5n7lMRshfxqNcUF3mhYqyjKgdjUnlCUpfAjWlgoS9j2QftpgSEytmmEbhGObQJ4g8G7t6VL2YN3x+XhuZ5CAXVkMmOHEh2+fKVJao3Ct4rB1ZoHVcOPWMOU/xBZM5ubz58tX53on1HyJ26OiJau3u7eI3ucxoLLHzRJxyZ8L6tc1arQcDxwPQqOS3gIoQw8j422ezr/ty7bgpZVh2p1jRsGBkI8MRAKVLxjiBiKEPSyYW2xWEy3naUSBT8tVibE2oCu69F0xbpEECLcCVqtVni+f4ern9WLtm2D2MNtsZ2CQRAkCv4BkhKgh639MvYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="example of UI shell left panel keyboard interaction"\n        title=""\n        src="/static/798cc1478373c746bacf1bb2d3130248/3cbba/left-nav-accessibility-1.png"\n        srcset="/static/798cc1478373c746bacf1bb2d3130248/7fc1e/left-nav-accessibility-1.png 288w,\n/static/798cc1478373c746bacf1bb2d3130248/a5df1/left-nav-accessibility-1.png 576w,\n/static/798cc1478373c746bacf1bb2d3130248/3cbba/left-nav-accessibility-1.png 1152w,\n/static/798cc1478373c746bacf1bb2d3130248/92c65/left-nav-accessibility-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(b,null,i.createElement(n.p,null,"Sub-menus and links are reached by Tab. Space and Enter keys expand/collapse\nsub-menus, and the Enter key is used to activate links.")))),"\n",i.createElement(n.h3,null,"Non-persistent left panel"),"\n",i.createElement(n.p,null,"On smaller screens, or if content is zoomed up to approximately 175%\nmagnification, Carbon responsively hides the left panel behind a ‘hamburger’\nbutton, which appears at the start of the UI shell header. Activating the button\n(with ",i.createElement(n.code,null,"Space")," or ",i.createElement(n.code,null,"Enter"),") causes the left panel to appear. It overlays the main\ncontent area, which often becomes dimmed. The hamburger button’s icon becomes an\nX, and must be activated to close the left panel."),"\n",i.createElement(r,null,i.createElement(d,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAB50lEQVR42mNgoAXwU+/kjZefz+Gq180dyrCKMzAwUN/DwyNEUVHRV1ZW1k9KSspPTEyMKMxgb1/PEqY/ca2PUmtNiF5PfbDKrBm2NrYzrW2s/2tra//W19f/r6en919CQgKOgRr/i4uLo4jBMNiFxmo+IopiOuLGSi78DAz/GYODg/U8PT2D5eTkfICuA7nSF2iAr4iIiI+8vHyAs7NzvIWFRRSIDxJHxgz///9nBhkKpBlhQYDMJhncunWLHWgAKxCzQWlWmCVkA32GegE9hm5uLYZ6HlEgDg0N1fLy8vIGRoqrqKiom5CQkJukpCRRGBwp4fqTVvsqt1YF6XXVh6nPmWagZzBTR0f7v6qq6m81NbX/6urq//n5+YnCYBeamXnwSUlpCIeGpvGD+Pv3759x8uTJ/xs2bPi1cePGf5s3b/4HZIPx+vXr/23atOnfjh07sGIUrwPDjgVE//jxYyaQ/f/Dhw+/v3///h8Z/Pv3D4xxAawGvn79eubnz5//379///eLFy/+f/z4EY7fv3///9OnT////v37/8+fPxgYq4Fv3ryZ+eXLl/8PHjz4/fLly/8gNgyDDPv69StpLnz37h3YhUD6N7JhIAwS//btG+kGglwCMhDkGooNBIYVOFKAmkl2IQCF+Bg2oP1eUgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="hamburger button keyboard interaction"\n        title=""\n        src="/static/a419bb0b883583595716cac0dee9f651/3cbba/left-nav-accessibility-2.png"\n        srcset="/static/a419bb0b883583595716cac0dee9f651/7fc1e/left-nav-accessibility-2.png 288w,\n/static/a419bb0b883583595716cac0dee9f651/a5df1/left-nav-accessibility-2.png 576w,\n/static/a419bb0b883583595716cac0dee9f651/3cbba/left-nav-accessibility-2.png 1152w,\n/static/a419bb0b883583595716cac0dee9f651/92c65/left-nav-accessibility-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(b,null,"The hamburger button expands and collapses the left panel."))),"\n",i.createElement(n.p,null,"The left panel can also be implemented as a “Side rail” variant, which slides\ninto view from the left side when reached by keyboard or hovered by mouse.\nKeyboard interaction within the revealed left panel does not change. When users\ntab out of the left panel, the side rail slides out of view."),"\n",i.createElement(r,null,i.createElement(d,{colLg:8},i.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABjUlEQVR42p2SMU/CUBDHHyAoMegAMZI4qpsx0cXEwcTN70Ac2R1cJKZxl8S46e5i4uLg4srAIC6iJmiCpZBSC4G20DaEx3mHFKGQYHjJ9Xrv9X73v3tlwMAjMMHLXCufz88BgIdNuwqFQlDTtDBCfG4g+nCj0YiiX3YMY8eiqqqG+qDY1vX+JjuNix/ymWHoZr1eX6V9WZbnyedynVkslGm1WlCtVnmtVgP8BhAEhmG0EU7vyV5hHzvcvTzY8B4df76Vzi3LBE2z1weBQvw+opTVLJ2JosjRQFEUaDabg8CLPhAfMxToun5imibYtr3mBpZl9dWyLJCkIpckaQSIuX/AbDYboADbSFDSOGBXoU1AiZdKJahUKkMtDwEdhQSkqiPA2N2SggptBIpfIsd5AnXimuF4oLvlbXblF+I3kW9FfcF9KBaL3UuhwhOBKDvRbrfB1n6B6Yf0ws5KMojnAQRkOp0OJXICOfY/YE/h4+3T4h4T6F/0Y+Iz55xmNT0wlXoP9RT6SSEBETAR+APefyJrEfvWFAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="the side rail is shown expanding as the user tabs to the left panel location"\n        title=""\n        src="/static/eb7af424af993887bde81dfed7fd913d/3cbba/left-nav-accessibility-3.png"\n        srcset="/static/eb7af424af993887bde81dfed7fd913d/7fc1e/left-nav-accessibility-3.png 288w,\n/static/eb7af424af993887bde81dfed7fd913d/a5df1/left-nav-accessibility-3.png 576w,\n/static/eb7af424af993887bde81dfed7fd913d/3cbba/left-nav-accessibility-3.png 1152w,\n/static/eb7af424af993887bde81dfed7fd913d/92c65/left-nav-accessibility-3.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(b,null,i.createElement(n.p,null,"The side rail expands on hover or focus, and collapses when not hovered or\nfocused.")))),"\n",i.createElement(n.h2,null,"Development considerations"),"\n",i.createElement(n.p,null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),"\n",i.createElement(n.ul,null,"\n",i.createElement(n.li,null,"The left panel is in a ",i.createElement(n.code,null,"<nav>")," section with ",i.createElement(n.code,null,'aria-label="Side navigation"'),"."),"\n",i.createElement(n.li,null,"All items in the left panel are in a nested ",i.createElement(n.code,null,"<ul>")," structure, which provides\nadditional information to assistive technologies."),"\n",i.createElement(n.li,null,"Each ‘sub-menu’ is implemented as a ",i.createElement(n.code,null,"<button>")," with ",i.createElement(n.code,null,"aria-expanded"),"."),"\n",i.createElement(n.li,null,"Activated links receive an ",i.createElement(n.code,null,'aria-current="page"')," attribute."),"\n"),"\n",i.createElement(l.A,{layout:"table",components:"UI shell"}))}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,a.R)(),e.components);return n?i.createElement(n,e,i.createElement(s,e)):s(e)}}}]);