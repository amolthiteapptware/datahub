"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[47094],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),h=u(a),d=r,g=h["".concat(l,".").concat(d)]||h[d]||s[d]||i;return a?n.createElement(g,o(o({ref:e},c),{},{components:a})):n.createElement(g,o({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94511:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const i={description:"Getting started with the DataHub GraphQL API.",title:"Getting Started",slug:"/managed-datahub/datahub-api/graphql-api/getting-started",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/datahub-api/graphql-api/getting-started.md"},o="Getting Started",p={unversionedId:"docs/managed-datahub/datahub-api/graphql-api/getting-started",id:"docs/managed-datahub/datahub-api/graphql-api/getting-started",title:"Getting Started",description:"Getting started with the DataHub GraphQL API.",source:"@site/genDocs/docs/managed-datahub/datahub-api/graphql-api/getting-started.md",sourceDirName:"docs/managed-datahub/datahub-api/graphql-api",slug:"/managed-datahub/datahub-api/graphql-api/getting-started",permalink:"/docs/next/managed-datahub/datahub-api/graphql-api/getting-started",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/datahub-api/graphql-api/getting-started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the DataHub GraphQL API.",title:"Getting Started",slug:"/managed-datahub/datahub-api/graphql-api/getting-started",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/datahub-api/graphql-api/getting-started.md"},sidebar:"overviewSidebar",previous:{title:"Entity Events API",permalink:"/docs/next/managed-datahub/datahub-api/entity-events-api"},next:{title:"Incidents API (Beta)",permalink:"/docs/next/managed-datahub/datahub-api/graphql-api/incidents-api-beta"}},l={},u=[{value:"Connecting to the API",id:"connecting-to-the-api",level:3},{value:"Exploring the API",id:"exploring-the-api",level:3},{value:"Querying the API",id:"querying-the-api",level:3}],c={toc:u};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The Acryl DataHub GraphQL API is an extension of the open source ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/graphql/overview"},"DataHub GraphQL API.")),(0,r.kt)("p",null,"For a full reference to the Queries & Mutations available for consumption, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/graphql/queries"},"Queries")," & ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/graphql/mutations"},"Mutations"),"."),(0,r.kt)("h3",{id:"connecting-to-the-api"},"Connecting to the API"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/image-(3).png"})),(0,r.kt)("p",null,"When you generate the token you will see an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command which you can use to connect to the GraphQL API."),(0,r.kt)("p",null,"Note that there is a single URL mentioned there but it can be any of these"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"https://",(0,r.kt)("inlineCode",{parentName:"li"},"your-account"),".acryl.io/api/graphql"),(0,r.kt)("li",{parentName:"ul"},"https://",(0,r.kt)("inlineCode",{parentName:"li"},"your-account"),".acryl.io/api/gms/graphql")),(0,r.kt)("p",null,"If there is any example that requires you to connect to GMS then you can use the second URL and change the endpoints."),(0,r.kt)("p",null,"e.g. to get configuration of your GMS server you can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -X GET 'https://your-account.acryl.io/api/gms/config' --header <YOUR_TOKEN>\n")),(0,r.kt)("p",null,"e.g. to connect to ingestion endpoint for doing ingestion programmatically you can use the below URL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://your-account.acryl.io/api/gms/aspects?action=ingestProposal"},"https://your-account.acryl.io/api/gms/aspects?action=ingestProposal"))),(0,r.kt)("h3",{id:"exploring-the-api"},"Exploring the API"),(0,r.kt)("p",null,"The entire GraphQL API can be explored & ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"introspected")," using GraphiQL, an interactive query tool which allows you to navigate the entire Acryl GraphQL schema as well as craft & issue using an intuitive UI."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/"},"GraphiQL")," is available for each Acryl DataHub deployment, locating at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://your-account.acryl.io/api/graphiql"),"."),(0,r.kt)("h3",{id:"querying-the-api"},"Querying the API"),(0,r.kt)("p",null,"Currently, we do not offer language-specific SDKs for accessing the DataHub GraphQL API. For querying the API, you can make use of a variety of per-language client libraries. For a full list, see ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/code/"},"GraphQL Code Libraries, Tools, & Services"),"."))}s.isMDXComponent=!0}}]);