"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[56693],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),m=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=m(a),c=o,f=p["".concat(l,".").concat(c)]||p[c]||d[c]||r;return a?n.createElement(f,s(s({ref:e},u),{},{components:a})):n.createElement(f,s({ref:e},u))}));function c(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var m=2;m<r;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94004:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(83117),o=(a(67294),a(3905));const r={title:"Adding a custom Dataset Data Platform",slug:"/how/add-custom-data-platform",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-data-platform.md"},s="Adding a custom Dataset Data Platform",i={unversionedId:"docs/how/add-custom-data-platform",id:"docs/how/add-custom-data-platform",title:"Adding a custom Dataset Data Platform",description:"A Data Platform represents a 3rd party system from which Metadata Entities are ingested from. Each Dataset that is ingested is associated with a single platform, for example MySQL, Snowflake, Redshift, or BigQuery.",source:"@site/genDocs/docs/how/add-custom-data-platform.md",sourceDirName:"docs/how",slug:"/how/add-custom-data-platform",permalink:"/docs/next/how/add-custom-data-platform",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-data-platform.md",tags:[],version:"current",frontMatter:{title:"Adding a custom Dataset Data Platform",slug:"/how/add-custom-data-platform",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-data-platform.md"},sidebar:"overviewSidebar",previous:{title:"Using a Custom Ingestion Source",permalink:"/docs/next/how/add-custom-ingestion-source"},next:{title:"Browse Paths Upgrade (August 2022)",permalink:"/docs/next/advanced/browse-paths-upgrade"}},l={},m=[{value:"Changing Default Data Platforms",id:"changing-default-data-platforms",level:2},{value:"Ingesting Data Platform at runtime",id:"ingesting-data-platform-at-runtime",level:2},{value:"Using the cli",id:"using-the-cli",level:3},{value:"Using File-Based Ingestion Recipe",id:"using-file-based-ingestion-recipe",level:3},{value:"Using Rest.li API",id:"using-restli-api",level:3}],u={toc:m};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-a-custom-dataset-data-platform"},"Adding a custom Dataset Data Platform"),(0,o.kt)("p",null,"A Data Platform represents a 3rd party system from which ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model/"},"Metadata Entities")," are ingested from. Each Dataset that is ingested is associated with a single platform, for example MySQL, Snowflake, Redshift, or BigQuery."),(0,o.kt)("p",null,"There are some cases in which you may want to add a custom Data Platform identifier for a Dataset. For example,\nyou have an internal data system that is not widely available, or you're using a Data Platform that is not natively supported by DataHub."),(0,o.kt)("p",null,"To do so, you can either change the default Data Platforms that are ingested into DataHub ",(0,o.kt)("em",{parentName:"p"},"prior to deployment time"),", or ingest\na new Data Platform at runtime. You can use the first option if you're able to periodically merge new Data Platforms from the OSS\nrepository into your own. It will cause the custom Data Platform to be re-ingested each time you deploy DataHub, meaning that\nyour custom Data Platform will persist even between full cleans (nukes) of DataHub. "),(0,o.kt)("h2",{id:"changing-default-data-platforms"},"Changing Default Data Platforms"),(0,o.kt)("p",null,"Simply make a change to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/war/src/main/resources/boot/data_platforms.json"},"data_platforms.json"),"\nfile to add a custom Data Platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[ \n  .....\n  {\n    "urn": "urn:li:dataPlatform:MyCustomDataPlatform",\n    "aspect": {\n      "name": "My Custom Data Platform",\n      "type": "OTHERS",\n      "logoUrl": "https://<your-logo-url>"\n    }\n  }\n]\n')),(0,o.kt)("h2",{id:"ingesting-data-platform-at-runtime"},"Ingesting Data Platform at runtime"),(0,o.kt)("p",null,"You can also ingest a Data Platform at runtime using either a file-based ingestion source, or using a normal curl to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-service#restli-api"},"GMS Rest.li APIs"),". "),(0,o.kt)("h3",{id:"using-the-cli"},"Using the cli"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'datahub put platform --name MyCustomDataPlatform --display_name "My Custom Data Platform" --logo "https://<your-logo-url>"\n')),(0,o.kt)("h3",{id:"using-file-based-ingestion-recipe"},"Using File-Based Ingestion Recipe"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," Define a JSON file containing your custom Data Platform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// my-custom-data-platform.json \n[\n  {\n    "auditHeader": null,\n    "proposedSnapshot": {\n      "com.linkedin.pegasus2avro.metadata.snapshot.DataPlatformSnapshot": {\n        "urn": "urn:li:dataPlatform:MyCustomDataPlatform",\n        "aspects": [\n          {\n            "com.linkedin.pegasus2avro.dataplatform.DataPlatformInfo": {\n              "datasetNameDelimiter": "/",\n              "name": "My Custom Data Platform",\n              "type": "OTHERS",\n              "logoUrl": "https://<your-logo-url>"\n            }\n          }\n        ]\n      }\n    },\n    "proposedDelta": null\n  }\n]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": Define an ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/#recipes"},"ingestion recipe")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'---\n# see https://datahubproject.io/docs/generated/ingestion/sources/file for complete documentation\nsource:\n  type: "file"\n  config:\n    filename: "./my-custom-data-platform.json"\n\n# see https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for complete documentation\nsink:\n  ... \n')),(0,o.kt)("h3",{id:"using-restli-api"},"Using Rest.li API"),(0,o.kt)("p",null,"You can also issue a normal curl request to the Rest.li ",(0,o.kt)("inlineCode",{parentName:"p"},"/entities")," API to add a custom Data Platform."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/entities?action=ingest\' -X POST --data \'{\n   "entity":{\n      "value":{\n         "com.linkedin.metadata.snapshot.DataPlatformSnapshot":{\n            "aspects":[\n               {\n                  "com.linkedin.dataplatform.DataPlatformInfo":{\n                      "datasetNameDelimiter": "/",\n                      "name": "My Custom Data Platform",\n                      "type": "OTHERS",\n                      "logoUrl": "https://<your-logo-url>"\n                  }\n               }\n            ],\n            "urn":"urn:li:dataPlatform:MyCustomDataPlatform"\n         }\n      }\n   }\n}\'\n')))}d.isMDXComponent=!0}}]);