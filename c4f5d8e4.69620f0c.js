(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{404:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(487),i=t.n(o),c=t(494),l=t(491),s=t(490),m=t(500),u=t(405),d=t.n(u),h=[{title:r.a.createElement(r.a.Fragment,null,"Easy to Use"),description:r.a.createElement(r.a.Fragment,null,"Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.")},{title:r.a.createElement(r.a.Fragment,null,"Components built for iOS and Android"),description:r.a.createElement(r.a.Fragment,null,"Platform-specific look-and-feel with smooth animations and gestures.")},{title:r.a.createElement(r.a.Fragment,null,"Completely customizable"),description:r.a.createElement(r.a.Fragment,null,"If you know how to write apps using JavaScript you can customize any part of React Navigation.")},{title:r.a.createElement(r.a.Fragment,null,"Extensible platform"),description:r.a.createElement(r.a.Fragment,null,"React Navigation is extensible at every layer\u2014 you can write your own navigators or even replace the user-facing API.")}];a.default=function(){var e,a=Object(s.a)().siteConfig,t=void 0===a?{}:a;return r.a.createElement(c.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("div",{className:d.a.blm},"Black Lives Matter."," ",r.a.createElement("a",((e={target:"_blank",rel:"noopener"}).rel="noreferrer",e.href="https://support.eji.org/give/153413/#!/donation/checkout",e),"Support the Equal Justice Initiative"),"."),r.a.createElement("header",{className:"hero text--center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",null,r.a.createElement(l.a,{className:i()("button button--secondary button--outline button--lg margin-right--sm",d.a.heroButton),to:Object(m.a)("/docs/getting-started")},"Read docs"),r.a.createElement(l.a,{className:i()("button button--secondary button--outline button--lg",d.a.heroButton),to:"https://github.com/react-navigation/react-navigation/tree/master/example"},"Try the demo app")))),r.a.createElement("section",{className:"margin-vert--xl text--center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--12"},r.a.createElement("h4",null,"Coming from v4? Check out our"," ",r.a.createElement(l.a,{to:Object(m.a)("/docs/upgrading-from-4.x")},"v4 to v5 migration guide"),"."))))),h&&h.length&&r.a.createElement("section",{className:"margin-vert--xl"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},h.map((function(e,a){var t=e.title,n=e.description;return r.a.createElement("div",{key:a,className:"col col--3"},r.a.createElement("h3",null,t),r.a.createElement("p",{className:"margin--none"},n))}))))),r.a.createElement("section",{className:d.a.sponsoredBanner},"React Navigation is built and funded by"," ",r.a.createElement("a",{href:"https://expo.io",style:{fontWeight:"bold"}},"Expo")," ","&"," ",r.a.createElement("a",{href:"https://swmansion.com/",style:{fontWeight:"bold"}},"Software Mansion"),", with contributions from the"," ",r.a.createElement("a",{style:{fontWeight:"bold"},href:"https://github.com/react-navigation/react-navigation/graphs/contributors"},"community"),"."))}},495:function(e,a,t){"use strict";t(48),t(23),t(17),t(18),t(68),t(492),t(493),t(496);var n=t(0),r=t.n(n),o=t(487),i=t.n(o),c=t(490),l=(t(121),["1.x","2.x","3.x","4.x"]);a.a=function(e){var a=Object(n.useState)(!1),o=a[0],s=a[1],m=Object(n.useRef)(null),u=Object(c.a)().siteConfig,d=(void 0===u?{}:u).themeConfig.algolia;function h(e){var a,t,n=(a=window.location.href,(t=l.findIndex((function(e){return a.includes(e)})))>=0?l[t]:"5.x");d.algoliaOptions.facetFilters=["version:"+n],window.docsearch({appId:d.appId,apiKey:d.apiKey,indexName:d.indexName,inputSelector:"#search_input_react",algoliaOptions:d.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;window.open(r,"_self")}}),e&&m.current.focus()}var p=function(e){void 0===e&&(e=!0),o||Promise.all([t.e(358).then(t.t.bind(null,497,7)),t.e(251).then(t.t.bind(null,499,7))]).then((function(a){var t=a[0].default;s(!0),window.docsearch=t,h(e)}))},g=Object(n.useCallback)((function(){p(),o&&m.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;p(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:v,onFocus:v,onBlur:b,ref:m}))}}}]);