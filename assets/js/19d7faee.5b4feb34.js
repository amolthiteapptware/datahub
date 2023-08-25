"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[77209],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(n),u=l,g=k["".concat(o,".").concat(u)]||k[u]||N[u]||r;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},73024:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(83117),l=(n(67294),n(3905));const r={title:"Deployment Environment Variables",sidebar_label:"Deployment Environment Variables",slug:"/deploy/environment-vars",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/environment-vars.md"},i="Environment Variables",d={unversionedId:"docs/deploy/environment-vars",id:"version-0.10.5/docs/deploy/environment-vars",title:"Deployment Environment Variables",description:"The following is a summary of a few important environment variables which expose various levers which control how",source:"@site/versioned_docs/version-0.10.5/docs/deploy/environment-vars.md",sourceDirName:"docs/deploy",slug:"/deploy/environment-vars",permalink:"/docs/deploy/environment-vars",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/environment-vars.md",tags:[],version:"0.10.5",frontMatter:{title:"Deployment Environment Variables",sidebar_label:"Deployment Environment Variables",slug:"/deploy/environment-vars",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/environment-vars.md"},sidebar:"overviewSidebar",previous:{title:"Deploying with Kubernetes",permalink:"/docs/deploy/kubernetes"},next:{title:"Overview",permalink:"/docs/authentication"}},o={},p=[{value:"Feature Flags",id:"feature-flags",level:2},{value:"Ingestion",id:"ingestion",level:2},{value:"Caching",id:"caching",level:2},{value:"Search",id:"search",level:2},{value:"Kafka",id:"kafka",level:2},{value:"Frontend",id:"frontend",level:2}],m={toc:p};function N(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("p",null,"The following is a summary of a few important environment variables which expose various levers which control how\nDataHub works."),(0,l.kt)("h2",{id:"feature-flags"},"Feature Flags"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit/Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Components"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UI_INGESTION_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable UI based ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DATAHUB_ANALYTICS_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"Frontend"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Collect DataHub usage to populate the analytics dashboard.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"BOOTSTRAP_SYSTEM_UPDATE_WAIT_FOR_SYSTEM_UPDATE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Do not wait for the ",(0,l.kt)("inlineCode",{parentName:"td"},"system-update")," to complete before starting. This should typically only be disabled during development.")))),(0,l.kt)("h2",{id:"ingestion"},"Ingestion"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit/Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Components"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ASYNC_INGESTION_DEFAULT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Asynchronously process ingestProposals by writing the ingestion MCP to Kafka. Typically enabled with standalone consumers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MCP_CONSUMER_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"When running in standalone mode, disabled on ",(0,l.kt)("inlineCode",{parentName:"td"},"GMS")," and enabled on separate ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MCL_CONSUMER_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"When running in standalone mode, disabled on ",(0,l.kt)("inlineCode",{parentName:"td"},"GMS")," and enabled on separate ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PE_CONSUMER_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"When running in standalone mode, disabled on ",(0,l.kt)("inlineCode",{parentName:"td"},"GMS")," and enabled on separate ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ES_BULK_REQUESTS_LIMIT")),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"docs"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of bulk documents to index. ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer")," if standalone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ES_BULK_FLUSH_PERIOD")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"How frequently indexed documents are made available for query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ALWAYS_EMIT_CHANGE_LOG")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Enables always emitting a MCL even when no changes are detected. Used for Time Based Lineage when no changes occur.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GRAPH_SERVICE_DIFF_MODE_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Enables diff mode for graph writes, uses a different code path that produces a diff from previous to next to write relationships instead of wholesale deleting edges and reading.")))),(0,l.kt)("h2",{id:"caching"},"Caching"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit/Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Components"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SEARCH_SERVICE_ENABLE_CACHE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable caching of search results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SEARCH_SERVICE_CACHE_IMPLEMENTATION")),(0,l.kt)("td",{parentName:"tr",align:null},"caffeine"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"hazelcast")," if the number of GMS replicas > 1 for enabling distributed cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CACHE_TTL_SECONDS")),(0,l.kt)("td",{parentName:"tr",align:null},"600"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Default cache time to live.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CACHE_MAX_SIZE")),(0,l.kt)("td",{parentName:"tr",align:null},"10000"),(0,l.kt)("td",{parentName:"tr",align:null},"objects"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of items to cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LINEAGE_SEARCH_CACHE_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Enables in-memory cache for searchAcrossLineage query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CACHE_ENTITY_COUNTS_TTL_SECONDS")),(0,l.kt)("td",{parentName:"tr",align:null},"600"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Homepage entity count time to live.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CACHE_SEARCH_LINEAGE_TTL_SECONDS")),(0,l.kt)("td",{parentName:"tr",align:null},"86400"),(0,l.kt)("td",{parentName:"tr",align:null},"seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Search lineage cache time to live.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CACHE_SEARCH_LINEAGE_LIGHTNING_THRESHOLD")),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"objects"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Lineage graphs exceeding this limit will use a local cache.")))),(0,l.kt)("h2",{id:"search"},"Search"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit/Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Components"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"INDEX_PREFIX")),(0,l.kt)("td",{parentName:"tr",align:null},"``"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Elasticsearch Setup"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"System Update"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix Elasticsearch indices with the given string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_NUM_SHARDS_PER_INDEX")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"System Update"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Default number of shards per Elasticsearch index.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_NUM_REPLICAS_PER_INDEX")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"System Update"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Default number of replica per Elasticsearch index.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_BUILD_INDICES_RETENTION_VALUE")),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"System Update"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of units for the retention of Elasticsearch clone/backup indices.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_BUILD_INDICES_RETENTION_UNIT")),(0,l.kt)("td",{parentName:"tr",align:null},"DAYS"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"System Update"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit for the retention of Elasticsearch clone/backup indices.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_EXACT_MATCH_EXCLUSIVE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Only return exact matches when using quotes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_EXACT_MATCH_WITH_PREFIX")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Include prefix match in exact match results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_EXACT_MATCH_FACTOR")),(0,l.kt)("td",{parentName:"tr",align:null},"10.0"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiply by this number on true exact match.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_EXACT_MATCH_PREFIX_FACTOR")),(0,l.kt)("td",{parentName:"tr",align:null},"1.6"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiply by this number when prefix match.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_EXACT_MATCH_CASE_FACTOR")),(0,l.kt)("td",{parentName:"tr",align:null},"0.7"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiply by this number when case insensitive match.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_EXACT_MATCH_ENABLE_STRUCTURED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"When using structured query, also include exact matches.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_PARTIAL_URN_FACTOR")),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiply by this number when partial token match on URN)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_PARTIAL_FACTOR")),(0,l.kt)("td",{parentName:"tr",align:null},"0.4"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiply by this number when partial token match on non-URN field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_CUSTOM_CONFIG_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable search query and ranking customization configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ELASTICSEARCH_QUERY_CUSTOM_CONFIG_FILE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"search_config.yml")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"The location of the search customization configuration.")))),(0,l.kt)("h2",{id:"kafka"},"Kafka"),(0,l.kt)("p",null,"In general, there are ",(0,l.kt)("strong",{parentName:"p"},"lots")," of Kafka configuration environment variables for both the producer and consumers defined in the official Spring Kafka documentation ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.7.10/reference/html/application-properties.html#appendix.application-properties.integration"},"here"),".\nThese environment variables follow the standard Spring representation of properties as environment variables.\nSimply replace the dot, ",(0,l.kt)("inlineCode",{parentName:"p"},"."),", with an underscore, ",(0,l.kt)("inlineCode",{parentName:"p"},"_"),", and convert to uppercase."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit/Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Components"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KAFKA_LISTENER_CONCURRENCY")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Kafka consumer threads. Optimize throughput by matching to topic partitions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SPRING_KAFKA_PRODUCER_PROPERTIES_MAX_REQUEST_SIZE")),(0,l.kt)("td",{parentName:"tr",align:null},"1048576"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Max produced message size. Note that the topic configuration is not controlled by this variable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SCHEMA_REGISTRY_TYPE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"INTERNAL")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema registry implementation. One of ",(0,l.kt)("inlineCode",{parentName:"td"},"INTERNAL")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"KAFKA")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"AWS_GLUE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KAFKA_SCHEMAREGISTRY_URL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://localhost:8080/schema-registry/api/")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema registry url. Used for ",(0,l.kt)("inlineCode",{parentName:"td"},"INTERNAL")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"KAFKA"),". The default value is for the ",(0,l.kt)("inlineCode",{parentName:"td"},"GMS")," component. The ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer")," should be the ",(0,l.kt)("inlineCode",{parentName:"td"},"GMS")," hostname and port.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AWS_GLUE_SCHEMA_REGISTRY_REGION")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"us-east-1")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"If using ",(0,l.kt)("inlineCode",{parentName:"td"},"AWS_GLUE")," in the ",(0,l.kt)("inlineCode",{parentName:"td"},"SCHEMA_REGISTRY_TYPE")," variable for the schema registry implementation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AWS_GLUE_SCHEMA_REGISTRY_NAME")),(0,l.kt)("td",{parentName:"tr",align:null},"``"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"GMS"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MCE Consumer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"MAE Consumer"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"If using ",(0,l.kt)("inlineCode",{parentName:"td"},"AWS_GLUE")," in the ",(0,l.kt)("inlineCode",{parentName:"td"},"SCHEMA_REGISTRY_TYPE")," variable for the schema registry.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"USE_CONFLUENT_SCHEMA_REGISTRY")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"kafka-setup"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Confluent schema registry configuration.")))),(0,l.kt)("h2",{id:"frontend"},"Frontend"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit/Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Components"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AUTH_VERBOSE_LOGGING")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"Frontend"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable verbose authentication logging. Enabling this will leak sensisitve information in the logs. Disable when finished debugging.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AUTH_OIDC_GROUPS_CLAIM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groups")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"Frontend"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Claim to use as the user's group.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AUTH_OIDC_EXTRACT_GROUPS_ENABLED")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"Frontend"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Auto-provision the group from the user's group claim.")))))}N.isMDXComponent=!0}}]);