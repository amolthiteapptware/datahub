"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(83117),i=(n(67294),n(3905));const a={title:"Truncate Timeseries Index Endpoint",slug:"/api/restli/truncate-time-series-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/truncate-time-series-aspect.md"},o="Truncate Timeseries Index Endpoint",s={unversionedId:"docs/api/restli/truncate-time-series-aspect",id:"docs/api/restli/truncate-time-series-aspect",title:"Truncate Timeseries Index Endpoint",description:"You can do a HTTP POST request to /gms/operations?action=truncateTimeseriesAspect endpoint to manage the size of a time series index by removing entries older than a certain timestamp, thereby truncating the table to only the entries needed, to save space. The getIndexSizes endpoint can be used to identify the largest indices. The output includes the index parameters needed for this function.",source:"@site/genDocs/docs/api/restli/truncate-time-series-aspect.md",sourceDirName:"docs/api/restli",slug:"/api/restli/truncate-time-series-aspect",permalink:"/docs/next/api/restli/truncate-time-series-aspect",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/truncate-time-series-aspect.md",tags:[],version:"current",frontMatter:{title:"Truncate Timeseries Index Endpoint",slug:"/api/restli/truncate-time-series-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/truncate-time-series-aspect.md"},sidebar:"overviewSidebar",previous:{title:"Get Index Sizes Endpoint",permalink:"/docs/next/api/restli/get-index-sizes"},next:{title:"Get ElasticSearch Task Status Endpoint",permalink:"/docs/next/api/restli/get-elastic-task-status"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"truncate-timeseries-index-endpoint"},"Truncate Timeseries Index Endpoint"),(0,i.kt)("p",null,"You can do a HTTP POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/gms/operations?action=truncateTimeseriesAspect")," endpoint to manage the size of a time series index by removing entries older than a certain timestamp, thereby truncating the table to only the entries needed, to save space. The ",(0,i.kt)("inlineCode",{parentName:"p"},"getIndexSizes")," endpoint can be used to identify the largest indices. The output includes the index parameters needed for this function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'https://demo.datahubproject.io/api/gms/operations?action=truncateTimeseriesAspect\' \\\n--header \'Authorization: Bearer TOKEN\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityType": "YOUR_ENTITY_TYPE",\n    "aspect": "YOUR_ASPECT_NAME",\n    "endTimeMillis": 1000000000000\n}\'\n\ncurl --location --request POST \'https://demo.datahubproject.io/api/gms/operations?action=truncateTimeseriesAspect\' \\\n--header \'Authorization: Bearer TOKEN\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityType": "YOUR_ENTITY_TYPE",\n    "aspect": "YOUR_ASPECT_NAME",\n    "endTimeMillis": 1000000000000,\n    "dryRun": false,\n    "batchSize": 100,\n    "timeoutSeconds": 3600\n}\'\n')),(0,i.kt)("p",null,"The supported parameters are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entityType")," - Required type of the entity to truncate the index of, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"dataset"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aspect")," - Required name of the aspect to truncate the index of, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"datasetusagestatistics"),". A call to ",(0,i.kt)("inlineCode",{parentName:"li"},"getIndexSizes")," shows the ",(0,i.kt)("inlineCode",{parentName:"li"},"entityType")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"aspect")," parameters for each index along with its size. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endTimeMillis")," - Required timestamp to truncate the index to. Entities with timestamps older than this time will be deleted. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dryRun")," - Optional boolean to enable/disable dry run functionality. Default: true. In a dry run, the following information will be printed:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"value":"Delete 0 out of 201 rows (0.00%). Reindexing the aspect without the deleted records. This was a dry run. Run with dryRun = false to execute."}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batchSize")," - Optional integer to control the batch size for the deletion. Default: 10000"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeoutSeconds")," - Optional integer to set a timeout for the delete operation. Default: No timeout set")),(0,i.kt)("p",null,"The output to the call will be information about how many rows would be deleted and how to proceed for a dry run: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"value":"Delete 0 out of 201 rows (0.00%). Reindexing the aspect without the deleted records. This was a dry run. Run with dryRun = false to execute."}\n')),(0,i.kt)("p",null,"For a non-dry-run, the output will be the Task ID of the asynchronous delete operation. This task ID can be used to monitor the status of the operation."))}u.isMDXComponent=!0}}]);