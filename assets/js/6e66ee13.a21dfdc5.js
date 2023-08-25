"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[16735],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(i),g=n,v=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return i?r.createElement(v,a(a({ref:t},c),{},{components:i})):r.createElement(v,a({ref:t},c))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<o;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},34826:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=i(83117),n=(i(67294),i(3905));const o={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/powerbi/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/overview.md"},a="PowerBI Ingestion Guide: Overview",u={unversionedId:"docs/quick-ingestion-guides/powerbi/overview",id:"version-0.10.5/docs/quick-ingestion-guides/powerbi/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/versioned_docs/version-0.10.5/docs/quick-ingestion-guides/powerbi/overview.md",sourceDirName:"docs/quick-ingestion-guides/powerbi",slug:"/quick-ingestion-guides/powerbi/overview",permalink:"/docs/quick-ingestion-guides/powerbi/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/overview.md",tags:[],version:"0.10.5",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/powerbi/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/tableau/configuration"},next:{title:"Setup",permalink:"/docs/quick-ingestion-guides/powerbi/setup"}},s={},l=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Advanced Guides and Reference",id:"advanced-guides-and-reference",level:2}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"powerbi-ingestion-guide-overview"},"PowerBI Ingestion Guide: Overview"),(0,n.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,n.kt)("p",null,"This guide will help you set up the PowerBI connector to begin ingesting metadata into DataHub."),(0,n.kt)("p",null,"Upon completing this guide, you will have a recurring ingestion pipeline that will extract metadata from PowerBI and load it into DataHub. This will include to following PowerBI asset types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dashboards"),(0,n.kt)("li",{parentName:"ul"},"Tiles "),(0,n.kt)("li",{parentName:"ul"},"Reports"),(0,n.kt)("li",{parentName:"ul"},"Pages"),(0,n.kt)("li",{parentName:"ul"},"Datasets"),(0,n.kt)("li",{parentName:"ul"},"Lineage ")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"To learn more about setting these advanced values, check out the ",(0,n.kt)("a",{parentName:"em",href:"/docs/generated/ingestion/sources/powerbi"},"PowerBI Ingestion Source"),".")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"Continue to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/powerbi/setup"},"setup guide"),", where we'll describe the prerequisites."),(0,n.kt)("h2",{id:"advanced-guides-and-reference"},"Advanced Guides and Reference"),(0,n.kt)("p",null,"If you want to ingest metadata from PowerBI using the DataHub CLI, check out the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/powerbi"},"PowerBI Ingestion Source"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}d.isMDXComponent=!0}}]);