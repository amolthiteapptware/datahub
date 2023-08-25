"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[80510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(83117),o=(n(67294),n(3905));const l={title:"Quickstart",slug:"/actions/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/quickstart.md"},r="DataHub Actions Quickstart",i={unversionedId:"docs/actions/quickstart",id:"version-0.10.5/docs/actions/quickstart",title:"Quickstart",description:"Prerequisites",source:"@site/versioned_docs/version-0.10.5/docs/actions/quickstart.md",sourceDirName:"docs/actions",slug:"/actions/quickstart",permalink:"/docs/actions/quickstart",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/quickstart.md",tags:[],version:"0.10.5",frontMatter:{title:"Quickstart",slug:"/actions/quickstart",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/quickstart.md"},sidebar:"overviewSidebar",previous:{title:"Introduction",permalink:"/docs/actions"},next:{title:"Concepts",permalink:"/docs/actions/concepts"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Hello World",id:"hello-world",level:3},{value:"Filtering events",id:"filtering-events",level:4},{value:"Advanced Filtering",id:"advanced-filtering",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahub-actions-quickstart"},"DataHub Actions Quickstart"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The DataHub Actions CLI commands are an extension of the base ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," CLI commands. We recommend\nfirst installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub --version\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the Actions Framework requires a version of ",(0,o.kt)("inlineCode",{parentName:"p"},"acryl-datahub")," >= v0.8.34")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install DataHub Actions, you need to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"acryl-datahub-actions")," package from PyPi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub-actions\n\n# Verify the installation by checking the version.\ndatahub actions version\n")),(0,o.kt)("h3",{id:"hello-world"},"Hello World"),(0,o.kt)("p",null,'DataHub ships with a "Hello World" Action which logs all events it receives to the console.\nTo run this action, simply create a new Action configuration file:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# hello_world.yaml\nname: "hello_world"\nsource:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\naction:\n  type: "hello_world"\n')),(0,o.kt)("p",null,"and then run it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub actions")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"datahub actions -c hello_world.yaml\n")),(0,o.kt)("p",null,"You should the see the following output if the Action has been started successfully:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Action Pipeline with name 'hello_world' is now running.\n")),(0,o.kt)("p",null,"Now, navigate to the instance of DataHub that you've connected to and perform an Action such as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding / removing a Tag"),(0,o.kt)("li",{parentName:"ul"},"Adding / removing a Glossary Term"),(0,o.kt)("li",{parentName:"ul"},"Adding / removing a Domain")),(0,o.kt)("p",null,"If all is well, you should see some events being logged to the console"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Hello world! Received event:\n{\n    "event_type": "EntityChangeEvent_v1",\n    "event": {\n        "entityType": "dataset",\n        "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)",\n        "category": "TAG",\n        "operation": "ADD",\n        "modifier": "urn:li:tag:pii",\n        "parameters": {},\n        "auditStamp": {\n            "time": 1651082697703,\n            "actor": "urn:li:corpuser:datahub",\n            "impersonator": null\n        },\n        "version": 0,\n        "source": null\n    },\n    "meta": {\n        "kafka": {\n            "topic": "PlatformEvent_v1",\n            "offset": 1262,\n            "partition": 0\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"An example of an event emitted when a 'pii' tag has been added to a Dataset.")," "),(0,o.kt)("p",null,"Woohoo! You've successfully started using the Actions framework. Now, let's see how we can get fancy."),(0,o.kt)("h4",{id:"filtering-events"},"Filtering events"),(0,o.kt)("p",null,"If we know which Event types we'd like to consume, we can optionally add a ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," configuration, which\nwill prevent events that do not match the filter from being forwarded to the action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# hello_world.yaml\nname: "hello_world"\nsource:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\nfilter:\n  event_type: "EntityChangeEvent_v1"\naction:\n  type: "hello_world"\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Filtering for events of type EntityChangeEvent_v1 only")),(0,o.kt)("h4",{id:"advanced-filtering"},"Advanced Filtering"),(0,o.kt)("p",null,"Beyond simply filtering by event type, we can also filter events by matching against the values of their fields. To do so,\nuse the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," block. Each field provided will be compared against the real event's value. An event that matches\n",(0,o.kt)("strong",{parentName:"p"},"all")," of the fields will be forwarded to the action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# hello_world.yaml\nname: "hello_world"\nsource:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\nfilter:\n  event_type: "EntityChangeEvent_v1"\n  event: \n    category: "TAG"\n    operation: "ADD"\n    modifier: "urn:li:tag:pii"\naction:\n  type: "hello_world"\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'This filter only matches events representing "PII" tag additions to an entity.')),(0,o.kt)("p",null,'And more, we can achieve "OR" semantics on a particular field by providing an array of values.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# hello_world.yaml\nname: "hello_world"\nsource:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\nfilter:\n  event_type: "EntityChangeEvent_v1"\n  event: \n    category: "TAG"\n    operation: [ "ADD", "REMOVE" ]\n    modifier: "urn:li:tag:pii"\naction:\n  type: "hello_world"\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'This filter only matches events representing "PII" tag additions to OR removals from an entity. How fancy!')))}u.isMDXComponent=!0}}]);