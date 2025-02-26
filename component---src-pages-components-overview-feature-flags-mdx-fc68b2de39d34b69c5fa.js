"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[992754],{274622:function(e,t,n){n.r(t);var a=n(28453),l=n(296540),r=n(97136),c=n(769759);function o(e){const t=Object.assign({p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",a:"a",strong:"strong",span:"span"},(0,a.R)(),e.components),{PageDescription:n,AnchorLinks:o,AnchorLink:s,Title:m,Row:g,Column:u}=t;return s||i("AnchorLink",!0),o||i("AnchorLinks",!0),u||i("Column",!0),n||i("PageDescription",!0),g||i("Row",!0),m||i("Title",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Feature flags enable new behaviors and styling, allowing users to opt-in to new\nbreaking changes while staying on the current major version.")),"\n",l.createElement(o,null,l.createElement(s,null,"Overview"),l.createElement(s,null,"Components with feature flags"),l.createElement(s,null,"How to implement")),"\n",l.createElement(t.h2,null,"Overview"),"\n",l.createElement(t.p,null,"When a new feature flag is introduced, it is set to false or “off” by default to\nensure backward compatibility. We are not deprecating the current components but\nencourage all teams to use the new feature flag-enabled components in their\nproducts moving forward."),"\n",l.createElement(t.h2,null,"Components with feature flags"),"\n",l.createElement(t.p,null,"The following components have feature flags, with changes related to either\ndesign or development."),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Component"),l.createElement(t.th,null,"Design change"),l.createElement(t.th,null,"Code change"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"Menu buttons (Overflow menu)"),l.createElement(t.td,null,"No design change"),l.createElement(t.td,null,l.createElement(c.N_E,{href:"https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu-feature-flag--flag-details",renderIcon:()=>l.createElement(r.MQ,{"aria-label":"Launch"})},"React"))),l.createElement(t.tr,null,l.createElement(t.td,null,"Modal"),l.createElement(t.td,null,"No design change"),l.createElement(t.td,null,l.createElement(c.N_E,{href:"https://react.carbondesignsystem.com/?path=/docs/components-modal-feature-flag--flag-details",renderIcon:()=>l.createElement(r.MQ,{"aria-label":"Launch"})},"React"))),l.createElement(t.tr,null,l.createElement(t.td,null,"Notification"),l.createElement(t.td,null,"No design change"),l.createElement(t.td,null,l.createElement(c.N_E,{href:"https://react.carbondesignsystem.com/?path=/docs/components-notifications-actionable-feature-flag--flag-details",renderIcon:()=>l.createElement(r.MQ,{"aria-label":"Launch"})},"React"))),l.createElement(t.tr,null,l.createElement(t.td,null,"Structured list"),l.createElement(t.td,null,l.createElement(c.N_E,{href:"/components/structured-list/usage/#feature-flags"},"Usage tab")),l.createElement(t.td,null,l.createElement(c.N_E,{href:"https://react.carbondesignsystem.com/?path=/docs/components-structuredlist-feature-flag--flag-details",renderIcon:()=>l.createElement(r.MQ,{"aria-label":"Launch"})},"React"))),l.createElement(t.tr,null,l.createElement(t.td,null,"Tile"),l.createElement(t.td,null,l.createElement(c.N_E,{href:"/components/tile/usage/#feature-flags"},"Usage tab")),l.createElement(t.td,null,l.createElement(c.N_E,{href:"https://react.carbondesignsystem.com/?path=/docs/components-tile-feature-flag--flag-details",renderIcon:()=>l.createElement(r.MQ,{"aria-label":"Launch"})},"React"))),l.createElement(t.tr,null,l.createElement(t.td,null,"Tree view"),l.createElement(t.td,null,"No design change"),l.createElement(t.td,null,l.createElement(c.N_E,{href:"https://react.carbondesignsystem.com/?path=/docs/components-treeview-feature-flag--flag-details",renderIcon:()=>l.createElement(r.MQ,{"aria-label":"Launch"})},"React"))))),"\n",l.createElement(t.h2,null,"How to implement"),"\n",l.createElement(t.h3,null,"Code"),"\n",l.createElement(t.p,null,"Each framework handles feature flags differently. At the moment, only React has\navailable feature flags. This may change in the future, check back later for\nupdates related to all available feature flags."),"\n",l.createElement(m,null,"React"),"\n",l.createElement(t.p,null,"The development specifics for feature flags in React can be found in the\n",l.createElement(t.a,{href:"https://react.carbondesignsystem.com/?path=/docs/getting-started-feature-flags--overview"},"@carbon/react"),"\nframework."),"\n",l.createElement(t.h3,null,"Design"),"\n",l.createElement(t.p,null,"Inside a design file, click on the component with a feature flag (A). In the\nproperties panel, locate the ",l.createElement(t.strong,null,"Feature flag")," boolean property (B). By default,\nthis feature is turned off, but can be toggled on to enable the feature flag."),"\n",l.createElement(g,null,l.createElement(u,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACTklEQVR42q1SyYpTQRQNBEEaks6gvfQT3Pkt7oUG04SQRQaCO7fugkQzgEsXrrMRFwqii8ZhI0GbNw/pmOTFdIY35L13vFUvSadDLxqx4HKrDrdOnXNvxfCfV6zZbKLVaqHdbvPMgmGbYDiPTgftF8/RqT8j/OW2tkN4o9FAr9eLCDOZDNLpNBKJBJLJJN8z7OjoCNlsluMJwhMHt3Fw7z5uPXiI9J27SB0e8vpUKoV4PI56vR4RFotFFAoF5HI55PN5sHO5XEatVkO1WuV47uQEueNHOH7awOPXP1CuPUG1UkalUuV1pVIJ3W43ItR1HYZhwDRNnlkwTNM0nhnOo9+HoYiYDg3M5zP4vo8gCLa9sywLnuchJssybhqiJOHP9AJL28ZqteJEjITFeDzeIaRCliVZgkR7nndiSyiKmEwmcFwPrutiuVxiNovUXiokAsXQIOsqFFElqzpURYOm6ttQJDV6kGo3F9maTqdc2VXLRCZ+/Abhw1cMzy3YSwchufFdIFiFsBcezo3fRCZyQq7QcTjJwnbhra1fWmaE779AeHeK0cCilybcBhAiDCh8YGAOIZFdSYgsM7sIQ8gXgOtjj5BZNnUwYkWgiZsGep9HOH2zgPJzANPoQxapJQpZNtS1Qpf4QgznPikM1oTW3lB2hiEKMoRfcqRKEiCrVNM7w9mrt7CMASl0+GXXsSm7ewqv+yKkRlGvnmWyK3z6jgkpsenbsMkuaMqOexPCax9RIOrqtofsMiOO+v2PH5u1gF1kajaTZov1czQaccK/85IOa3JFX/4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Feature flag implementation in Figma"\n        title=""\n        src="/static/91900e4478790f51ca1d27bb59ed28f9/3cbba/feature-flag-implementation-1.png"\n        srcset="/static/91900e4478790f51ca1d27bb59ed28f9/7fc1e/feature-flag-implementation-1.png 288w,\n/static/91900e4478790f51ca1d27bb59ed28f9/a5df1/feature-flag-implementation-1.png 576w,\n/static/91900e4478790f51ca1d27bb59ed28f9/3cbba/feature-flag-implementation-1.png 1152w,\n/static/91900e4478790f51ca1d27bb59ed28f9/92c65/feature-flag-implementation-1.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))),"\n",l.createElement(t.p,null,"Additionally, when clicking on the ",l.createElement(t.strong,null,"components details")," (C) in the properties\npanel, a description of the feature flag, and a link to the component’s usage\nguidance is provided for more information in the ",l.createElement(t.strong,null,"Component documentation"),"\nwindow (D)."),"\n",l.createElement(g,null,l.createElement(u,{colLg:8},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1152px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACXElEQVR42q1Su47aQBSlQYqSSCwsBX3+INJ+R7oUKwUSgRCPpaZNTZNqJQKYdKnoU6VIlyqpiLRZgccGm8cagzEPYx4nc8dgQdh0GenojK5nzpx7rgP4zytQrVZRq9UgSZJgAtUqlYpfF6jXIX28Rf32g39Okmqo83q5XEaz2fQEo9EowuEwQqGQ4EgkAqrFYjGxp3ro4gKh50/x7MUVnrx8hcvLiH+HzgSDQZRKJU8wm80imUwiHo8jlUohk8kgn8+jWCwinU4jkUgg8fYdEtevcf1ewptPP5HL5cSZ/M0NCoUCSKPRaHiCqqqi0+mg2+0KJlBNURS/LqDrHAoso4/5fI71eo3NZuNnZ5omXNdFgC4egzF2spfbbbSZjPavO9x9/orJcIT5YuGLkQhhNBphtVohQJd8yDJ6mo7+YIB+vw+duzIMA2NrgvHQwMOPe4wNT5AuLzjbti3EyeGZoNxqwxw8YGJZmE6nsDhTa8eL6o7jiL1lTTEej09bPnHIBYe9IUx+aMZfpqwOwsRL7oiY6rSWi7kvftYyuWM8L13VwHh+qqL6eRJrmiaECQcRNuUZbv8aCmvLYL0uWo1vaH35zlswxUfKjpheJqbWqH177xzYQbO3cDfbRxwq3OF9C+w3OexAVvaT5r8P/UKMKZBlhuXSEWKOs8Rut8NquRCuHs9QpUsyRv0hZrPZPsMZFkdYr13YM5vn6A2LpnwY2rmg4uVoGSbWOy8bl7Oz2e85qE6PeUKucEuZ/nPKMs9T72jQBiOougG1Z4DtmaANvFwnk4nfKrVOoMxJ8A+4HxV5A6i/wwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Feature flag implementation in Figma"\n        title=""\n        src="/static/fa75e0546c9f5634ea2e3dfc2bbf8716/3cbba/feature-flag-implementation-2.png"\n        srcset="/static/fa75e0546c9f5634ea2e3dfc2bbf8716/7fc1e/feature-flag-implementation-2.png 288w,\n/static/fa75e0546c9f5634ea2e3dfc2bbf8716/a5df1/feature-flag-implementation-2.png 576w,\n/static/fa75e0546c9f5634ea2e3dfc2bbf8716/3cbba/feature-flag-implementation-2.png 1152w,\n/static/fa75e0546c9f5634ea2e3dfc2bbf8716/92c65/feature-flag-implementation-2.png 1216w"\n        sizes="(max-width: 1152px) 100vw, 1152px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}))))}function i(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e={}){const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}}}]);