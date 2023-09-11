"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97282],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),b=r,h=c["".concat(s,".").concat(b)]||c[b]||p[b]||i;return t?n.createElement(h,l(l({ref:a},d),{},{components:t})):n.createElement(h,l({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},70725:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const i={title:"v0.2.10",slug:"/managed-datahub/release-notes/v_0_2_10",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_10.md"},l="v0.2.10",o={unversionedId:"docs/managed-datahub/release-notes/v_0_2_10",id:"version-0.10.5/docs/managed-datahub/release-notes/v_0_2_10",title:"v0.2.10",description:"---",source:"@site/versioned_docs/version-0.10.5/docs/managed-datahub/release-notes/v_0_2_10.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_10",permalink:"/docs/0.10.5/managed-datahub/release-notes/v_0_2_10",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_10.md",tags:[],version:"0.10.5",frontMatter:{title:"v0.2.10",slug:"/managed-datahub/release-notes/v_0_2_10",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_10.md"},sidebar:"overviewSidebar",previous:{title:"Acryl DataHub Chrome Extension",permalink:"/docs/0.10.5/managed-datahub/chrome-extension"},next:{title:"v0.2.9",permalink:"/docs/0.10.5/managed-datahub/release-notes/v_0_2_9"}},s={},u=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Recommended CLI/SDK",id:"recommended-clisdk",level:2},{value:"Release Changelog",id:"release-changelog",level:2},{value:"Some notable features in this SaaS release",id:"some-notable-features-in-this-saas-release",level:2}],d={toc:u},c="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"v0210"},"v0.2.10"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,r.kt)("p",null,"09-Aug-2023"),(0,r.kt)("h2",{id:"recommended-clisdk"},"Recommended CLI/SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"v0.10.5.5")," with release notes at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/acryldata/datahub/releases/tag/v0.10.5.5"},"https://github.com/acryldata/datahub/releases/tag/v0.10.5.5"))),(0,r.kt)("p",null,"If you are using an older CLI/SDK version then please upgrade it. This applies for all CLI/SDK usages, if you are using it through your terminal, github actions, airflow, in python SDK somewhere, Java SKD etc. This is a strong recommendation to upgrade as we keep on pushing fixes in the CLI and it helps us support you better."),(0,r.kt)("p",null,"Special Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have a new search and browse experience. We cannot enable it unless all of your CLI/SDK usages are upgraded. If you are using a custom source then you need to upgrade your source to produce ",(0,r.kt)("inlineCode",{parentName:"li"},"browsePathv2")," aspects. Details are in ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.10.5/browsev2/browse-paths-v2"},"this doc"),"."),(0,r.kt)("li",{parentName:"ul"},"[Breaking change]"," For all sql-based sources that support profiling, you can no longer specify ",(0,r.kt)("inlineCode",{parentName:"li"},"profile_table_level_only")," together with ",(0,r.kt)("inlineCode",{parentName:"li"},"include_field_xyz")," config options to ingest certain column-level metrics. Instead, set ",(0,r.kt)("inlineCode",{parentName:"li"},"profile_table_level_only")," to false and individually enable / disable desired field metrics."),(0,r.kt)("li",{parentName:"ul"},"[Breaking change]"," The ",(0,r.kt)("inlineCode",{parentName:"li"},"bigquery-beta")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake-beta")," source aliases have been dropped. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"bigquery")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," as the source type instead."),(0,r.kt)("li",{parentName:"ul"},"[Behaviour change]"," Ingestion runs created with Pipeline.create will show up in the DataHub ingestion tab as CLI-based runs. To revert to the previous behavior of not showing these runs in DataHub, pass ",(0,r.kt)("inlineCode",{parentName:"li"},"no_default_report=True"),"."),(0,r.kt)("li",{parentName:"ul"},"[Behaviour change]"," snowflake connector will use user's email attribute as is, as the urn. To revert to previous behavior disable ",(0,r.kt)("inlineCode",{parentName:"li"},"email_as_user_identifier")," in recipe.")),(0,r.kt)("h2",{id:"release-changelog"},"Release Changelog"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.2.9")," these changes from OSS DataHub ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/1f0723fad109658a69bb1d4279100de8514f35d7...2b0952195b7895df0a2bf92b28e71aac18217781"},"https://github.com/datahub-project/datahub/compare/1f0723fad109658a69bb1d4279100de8514f35d7...2b0952195b7895df0a2bf92b28e71aac18217781")," have been pulled in.")),(0,r.kt)("h2",{id:"some-notable-features-in-this-saas-release"},"Some notable features in this SaaS release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New search and Browse v2 experience. This can only be enabled if you upgrade all your CLI/SDK usage as per our recommendation provided above."),(0,r.kt)("li",{parentName:"ul"},"We will be enabling these features selectively. If you are interested in trying it and providing feedback, please reach out to your Acryl Customer Success representative.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Acryl Observe Freshness Assertions available in private beta as shared ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.10.5/managed-datahub/observe/freshness-assertions"},"here"),". "),(0,r.kt)("li",{parentName:"ul"},"New notifications and Subscriptions feature available.")))))}p.isMDXComponent=!0}}]);