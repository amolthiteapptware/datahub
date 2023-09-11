"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:36,title:"DataHubSecret",slug:"/generated/metamodel/entities/datahubsecret",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md"},i="DataHubSecret",c={unversionedId:"docs/generated/metamodel/entities/dataHubSecret",id:"version-0.10.5/docs/generated/metamodel/entities/dataHubSecret",title:"DataHubSecret",description:"Aspects",source:"@site/versioned_docs/version-0.10.5/docs/generated/metamodel/entities/dataHubSecret.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubsecret",permalink:"/docs/0.10.5/generated/metamodel/entities/datahubsecret",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md",tags:[],version:"0.10.5",sidebarPosition:36,frontMatter:{sidebar_position:36,title:"DataHubSecret",slug:"/generated/metamodel/entities/datahubsecret",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md"},sidebar:"overviewSidebar",previous:{title:"DataHubIngestionSource",permalink:"/docs/0.10.5/generated/metamodel/entities/datahubingestionsource"},next:{title:"DataHubExecutionRequest",permalink:"/docs/0.10.5/generated/metamodel/entities/datahubexecutionrequest"}},s={},l=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubSecretValue",id:"datahubsecretvalue",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahubsecret"},"DataHubSecret"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"datahubsecretvalue"},"dataHubSecretValue"),(0,r.kt)("p",null,"The value of a DataHub Secret"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubSecretValue"\n  },\n  "name": "DataHubSecretValue",\n  "namespace": "com.linkedin.secret",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "The display name for the secret"\n    },\n    {\n      "type": "string",\n      "name": "value",\n      "doc": "The AES-encrypted value of the DataHub secret."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the secret"\n    },\n    {\n      "Searchable": {\n        "/time": {\n          "fieldName": "createdTime",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "AuditStamp",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": "long",\n              "name": "time",\n              "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "actor",\n              "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "impersonator",\n              "default": null,\n              "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "message",\n              "default": null,\n              "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n            }\n          ],\n          "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n        }\n      ],\n      "name": "created",\n      "default": null,\n      "doc": "Created Audit stamp"\n    }\n  ],\n  "doc": "The value of a DataHub Secret"\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);