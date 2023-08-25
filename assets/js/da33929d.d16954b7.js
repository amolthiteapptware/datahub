"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[78622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),c=o,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},63829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(83117),o=(a(67294),a(3905));const r={title:"Browse Paths Upgrade (August 2022)",slug:"/advanced/browse-paths-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/browse-paths-upgrade.md"},i="Browse Paths Upgrade (August 2022)",s={unversionedId:"docs/advanced/browse-paths-upgrade",id:"docs/advanced/browse-paths-upgrade",title:"Browse Paths Upgrade (August 2022)",description:"Background",source:"@site/genDocs/docs/advanced/browse-paths-upgrade.md",sourceDirName:"docs/advanced",slug:"/advanced/browse-paths-upgrade",permalink:"/docs/next/advanced/browse-paths-upgrade",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/browse-paths-upgrade.md",tags:[],version:"current",frontMatter:{title:"Browse Paths Upgrade (August 2022)",slug:"/advanced/browse-paths-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/browse-paths-upgrade.md"},sidebar:"overviewSidebar",previous:{title:"Adding a custom Dataset Data Platform",permalink:"/docs/next/how/add-custom-data-platform"},next:{title:"Generating Browse Paths (V2)",permalink:"/docs/next/browsev2/browse-paths-v2"}},l={},p=[{value:"Background",id:"background",level:2},{value:"What this means for you",id:"what-this-means-for-you",level:2},{value:"1. Migrating default browse paths to the new format",id:"1-migrating-default-browse-paths-to-the-new-format",level:3},{value:"2. Upgrading the <code>datahub</code> CLI to push new browse paths",id:"2-upgrading-the-datahub-cli-to-push-new-browse-paths",level:3},{value:"If you are producing custom Browse Paths",id:"if-you-are-producing-custom-browse-paths",level:3},{value:"Support",id:"support",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browse-paths-upgrade-august-2022"},"Browse Paths Upgrade (August 2022)"),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,'Up to this point, there\'s been a historical constraint on all entity browse paths. Namely, each browse path has been\nrequired to end with a path component that represents "simple name" for an entity. For example, a Browse Path for a\nSnowflake Table called "test_table" may look something like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/prod/snowflake/warehouse1/db1/test_table\n")),(0,o.kt)("p",null,"In the UI, we artificially truncate the final path component when you are browsing the Entity hierarchy, so your browse experience\nwould be: "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"prod")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"warehouse1"),"> ",(0,o.kt)("inlineCode",{parentName:"p"},"db1")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Click Entity")),(0,o.kt)("p",null,"As you can see, the final path component ",(0,o.kt)("inlineCode",{parentName:"p"},"test_table")," is effectively ignored. It could have any value, and we would still ignore\nit in the UI. This behavior serves as a workaround to the historical requirement that all browse paths end with a simple name. "),(0,o.kt)("p",null,'This data constraint stands in opposition the original intention of Browse Paths: to provide a simple mechanism for organizing\nassets into a hierarchical folder structure. For this reason, we\'ve changed the semantics of Browse Paths to better align with the original intention.\nGoing forward, you will not be required to provide a final component detailing the "name". Instead, you will be able to provide a simpler path that\nomits this final component:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/prod/snowflake/warehouse1/db1\n")),(0,o.kt)("p",null,"and the browse experience from the UI will continue to work as you would expect: "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"prod")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"warehouse1"),"> ",(0,o.kt)("inlineCode",{parentName:"p"},"db1")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Click Entity"),". "),(0,o.kt)("p",null,"With this change comes a fix to a longstanding bug where multiple browse paths could not be attached to a single URN. Going forward,\nwe will support producing multiple browse paths for the same entity, and allow you to traverse via multiple paths. For example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'browse_path = BrowsePathsClass(\n    paths=["/powerbi/my/custom/path", "/my/other/custom/path"]\n)\nreturn MetadataChangeProposalWrapper(\n    entityType="dataset",\n    changeType="UPSERT",\n    entityUrn="urn:li:dataset:(urn:li:dataPlatform:custom,MyFileName,PROD),\n    aspectName="browsePaths",\n    aspect=browse_path,\n)\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Using the Python Emitter SDK to produce multiple Browse Paths for the same entity")),(0,o.kt)("p",null,"We've received multiple bug reports, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/issues/5525"},"this issue"),", and requests to address these issues with Browse, and thus are deciding\nto do it now before more workarounds are created.  "),(0,o.kt)("h2",{id:"what-this-means-for-you"},"What this means for you"),(0,o.kt)("p",null,"Once you upgrade to DataHub ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.8.45")," you will immediately notice that traversing your Browse Path hierarchy will require\none extra click to find the entity. This is because we are correctly displaying the FULL browse path, including the simple name mentioned above."),(0,o.kt)("p",null,"There will be 2 ways to upgrade to the new browse path format. Depending on your ingestion sources, you may want to use one or both:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Migrate default browse paths to the new format by restarting DataHub"),(0,o.kt)("li",{parentName:"ol"},"Upgrade your version of the ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub")," CLI to push new browse path format (version ",(0,o.kt)("inlineCode",{parentName:"li"},"v0.8.45"),")")),(0,o.kt)("p",null,"Each step will be discussed in detail below. "),(0,o.kt)("h3",{id:"1-migrating-default-browse-paths-to-the-new-format"},"1. Migrating default browse paths to the new format"),(0,o.kt)("p",null,"To migrate those Browse Paths that are generated by DataHub by default (when no path is provided), simply restart the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-gms")," container / pod with a single\nadditional environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"UPGRADE_DEFAULT_BROWSE_PATHS_ENABLED=true\n")),(0,o.kt)("p",null,"And restart the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-gms")," instance. This will cause GMS to perform a boot-time migration of all your existing Browse Paths\nto the new format, removing the unnecessarily name component at the very end."),(0,o.kt)("p",null,"If the migration is successful, you'll see the following in your GMS logs: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"18:58:17.414 [main] INFO c.l.m.b.s.UpgradeDefaultBrowsePathsStep:60 - Successfully upgraded all browse paths!\n")),(0,o.kt)("p",null,"After this one-time migration is complete, you should be able to navigate the Browse hierarchy exactly as you did previously. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that certain ingestion sources actively produce their own Browse Paths, which overrides the default path\ncomputed by DataHub. "),(0,o.kt)("p",{parentName:"blockquote"},"In these cases, getting the updated Browse Path will require re-running your ingestion process with the updated\nversion of the connector. This is discussed in more detail in the next section. ")),(0,o.kt)("h3",{id:"2-upgrading-the-datahub-cli-to-push-new-browse-paths"},"2. Upgrading the ",(0,o.kt)("inlineCode",{parentName:"h3"},"datahub")," CLI to push new browse paths"),(0,o.kt)("p",null,"If you are actively ingesting metadata from one or more of following sources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sagemaker"),(0,o.kt)("li",{parentName:"ol"},"Looker / LookML"),(0,o.kt)("li",{parentName:"ol"},"Feast"),(0,o.kt)("li",{parentName:"ol"},"Kafka"),(0,o.kt)("li",{parentName:"ol"},"Mode"),(0,o.kt)("li",{parentName:"ol"},"PowerBi"),(0,o.kt)("li",{parentName:"ol"},"Pulsar"),(0,o.kt)("li",{parentName:"ol"},"Tableau"),(0,o.kt)("li",{parentName:"ol"},"Business Glossary")),(0,o.kt)("p",null,"You will need to upgrade the DataHub CLI to >= ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.8.45")," and re-run metadata ingestion. This will generate the new browse path format\nand overwrite the existing paths for entities that were extracted from these sources. "),(0,o.kt)("h3",{id:"if-you-are-producing-custom-browse-paths"},"If you are producing custom Browse Paths"),(0,o.kt)("p",null,"If you've decided to produce your own custom Browse Paths to organize your assets (e.g. via the Python Emitter SDK), you'll want to change the code to produce those paths\nto truncate the final path component. For example, if you were previously emitting a browse path like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"my/custom/browse/path/suffix"\n')),(0,o.kt)("p",null,'You can simply remove the final "suffix" piece:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"my/custom/browse/path"\n')),(0,o.kt)("p",null,"Your users will be able to find the entity by traversing through these folders in the UI:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"my")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"custom")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"browse"),"> ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Click Entity"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that if you are using the Browse Path Transformer you ",(0,o.kt)("em",{parentName:"p"},"will")," be impacted in the same way. It is recommended that you revisit the\npaths that you are producing, and update them to the new format. ")),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"The Acryl team will be on standby to assist you in your migration. Please\njoin ",(0,o.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/archives/C0244FHMHJQ"},"#release-0_8_0")," channel and reach out to us if you find\ntrouble with the upgrade or have feedback on the process. We will work closely to make sure you can continue to operate\nDataHub smoothly."))}d.isMDXComponent=!0}}]);