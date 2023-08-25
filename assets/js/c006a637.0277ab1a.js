"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_position:43,title:"GlobalSettings",slug:"/generated/metamodel/entities/globalsettings",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/globalSettings.md"},l="GlobalSettings",i={unversionedId:"docs/generated/metamodel/entities/globalSettings",id:"docs/generated/metamodel/entities/globalSettings",title:"GlobalSettings",description:"Global settings for an the platform",source:"@site/genDocs/docs/generated/metamodel/entities/globalSettings.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/globalsettings",permalink:"/docs/next/generated/metamodel/entities/globalsettings",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/globalSettings.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,title:"GlobalSettings",slug:"/generated/metamodel/entities/globalsettings",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/globalSettings.md"},sidebar:"overviewSidebar",previous:{title:"DataHubUpgrade",permalink:"/docs/next/generated/metamodel/entities/datahubupgrade"},next:{title:"Overview",permalink:"/docs/next/architecture/architecture"}},s={},d=[{value:"Aspects",id:"aspects",level:2},{value:"globalSettingsInfo",id:"globalsettingsinfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"globalsettings"},"GlobalSettings"),(0,r.kt)("p",null,"Global settings for an the platform"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"globalsettingsinfo"},"globalSettingsInfo"),(0,r.kt)("p",null,"DataHub Global platform settings. Careful - these should not be modified by the outside world!"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalSettingsInfo"\n  },\n  "name": "GlobalSettingsInfo",\n  "namespace": "com.linkedin.settings.global",\n  "fields": [\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "GlobalViewsSettings",\n          "namespace": "com.linkedin.settings.global",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "defaultView",\n              "default": null,\n              "doc": "The default View for the instance, or organization."\n            }\n          ],\n          "doc": "Settings for DataHub Views feature."\n        }\n      ],\n      "name": "views",\n      "default": null,\n      "doc": "Settings related to the Views Feature"\n    }\n  ],\n  "doc": "DataHub Global platform settings. Careful - these should not be modified by the outside world!"\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);