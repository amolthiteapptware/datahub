"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[16998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,h=p["".concat(l,".").concat(c)]||p[c]||d[c]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(83117),r=a(67294),o=a(86010),i=a(51048),s=a(33609),l=a(1943),u=a(72957);const m="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:i,values:p,groupId:c,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,l.U)(),[D,_]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=c){const e=k[c];null!=e&&e!==D&&b.some((t=>t.value===e))&&_(e)}const N=e=>{const t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==D&&(T(t),_(n),null!=c&&v(c,String(n)))},w=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>x.push(e),onKeyDown:w,onClick:N},i,{className:(0,o.Z)("tabs__item",d,i?.className,{"tabs__item--active":D===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function c(e){const t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},54798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),o=a(34259),i=a(18679);const s={title:"Domains",slug:"/api/tutorials/domains",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/domains.md"},l="Domains",u={unversionedId:"docs/api/tutorials/domains",id:"docs/api/tutorials/domains",title:"Domains",description:"Why Would You Use Domains?",source:"@site/genDocs/docs/api/tutorials/domains.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/domains",permalink:"/docs/next/api/tutorials/domains",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/domains.md",tags:[],version:"current",frontMatter:{title:"Domains",slug:"/api/tutorials/domains",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/domains.md"},sidebar:"overviewSidebar",previous:{title:"Ownership",permalink:"/docs/next/api/tutorials/owners"},next:{title:"Deprecation",permalink:"/docs/next/api/tutorials/deprecation"}},m={},d=[{value:"Why Would You Use Domains?",id:"why-would-you-use-domains",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Domain",id:"create-domain",level:2},{value:"Expected Outcomes of Creating Domain",id:"expected-outcomes-of-creating-domain",level:3},{value:"Read Domains",id:"read-domains",level:2},{value:"Add Domains",id:"add-domains",level:2},{value:"Expected Outcomes of Adding Domain",id:"expected-outcomes-of-adding-domain",level:3},{value:"Remove Domains",id:"remove-domains",level:2},{value:"Expected Outcomes of Removing Domain",id:"expected-outcomes-of-removing-domain",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"domains"},"Domains"),(0,r.kt)("h2",{id:"why-would-you-use-domains"},"Why Would You Use Domains?"),(0,r.kt)("p",null,"Domains are curated, top-level folders or categories where related assets can be explicitly grouped. Management of Domains can be centralized, or distributed out to Domain owners Currently, an asset can belong to only one Domain at a time.\nFor more information about domains, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/domains"},"About DataHub Domains"),"."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a domain."),(0,r.kt)("li",{parentName:"ul"},"Read domains attached to a dataset."),(0,r.kt)("li",{parentName:"ul"},"Add a dataset to a domain"),(0,r.kt)("li",{parentName:"ul"},"Remove the domain from a dataset.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("h2",{id:"create-domain"},"Create Domain"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation createDomain {\n  createDomain(input: { name: "Marketing", description: "Entities related to the marketing department" })\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createDomain": "<domain_urn>"\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(i.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createDomain { createDomain(input: { name: \\"Marketing\\", description: \\"Entities related to the marketing department.\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "createDomain": "<domain_urn>" }, "extensions": {} }\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_domain.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_domain_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.metadata.schema_classes import ChangeTypeClass, DomainPropertiesClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\ndomain_urn = make_domain_urn("marketing")\ndomain_properties_aspect = DomainPropertiesClass(\n    name="Marketing", description="Entities related to the marketing department"\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityType="domain",\n    changeType=ChangeTypeClass.UPSERT,\n    entityUrn=domain_urn,\n    aspect=domain_properties_aspect,\n)\n\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\nlog.info(f"Created domain {domain_urn}")\n\n')))),(0,r.kt)("h3",{id:"expected-outcomes-of-creating-domain"},"Expected Outcomes of Creating Domain"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"Marketing")," domain has been created under ",(0,r.kt)("inlineCode",{parentName:"p"},"Govern > Domains"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/domain-created.png"})),(0,r.kt)("h2",{id:"read-domains"},"Read Domains"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)") {\n    domain {\n      associatedUrn\n      domain {\n        urn\n        properties {\n          name\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "dataset": {\n      "domain": {\n        "associatedUrn": "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        "domain": {\n          "urn": "urn:li:domain:71b3bf7b-2e3f-4686-bfe1-93172c8c4e10",\n          "properties": {\n            "name": "Marketing"\n          }\n        }\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(i.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{ dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") { domain { associatedUrn domain { urn properties { name } } } } }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "domain": {\n        "associatedUrn": "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        "domain": {\n          "urn": "urn:li:domain:71b3bf7b-2e3f-4686-bfe1-93172c8c4e10",\n          "properties": { "name": "Marketing" }\n        }\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_domain.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import DomainsClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["domains"],\n    aspect_types=[DomainsClass],\n)\n\nprint(result)\n\n')))),(0,r.kt)("h2",{id:"add-domains"},"Add Domains"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation setDomain {\n    setDomain(domainUrn: "urn:li:domain:marketing", entityUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)")\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "setDomain": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(i.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation setDomain { setDomain(entityUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)", domainUrn: "urn:li:domain:marketing")) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "setDomain": true }, "extensions": {} }\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_domain_execute_graphql.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation setDomain {\n    setDomain(domainUrn: "urn:li:domain:marketing", entityUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)")\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,r.kt)("h3",{id:"expected-outcomes-of-adding-domain"},"Expected Outcomes of Adding Domain"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"Marketing")," domain has been added to the dataset."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/domain-added.png"})),(0,r.kt)("h2",{id:"remove-domains"},"Remove Domains"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation unsetDomain {\n    unsetDomain(\n      entityUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"\n    )\n}\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "removeDomain": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(i.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"mutation unsetDomain { unsetDomain(entityUrn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") }\", \"variables\":{}}'\n"))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_remove_domain_execute_graphql.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation unsetDomain {\n    unsetDomain(\n      entityUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"\n    )\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,r.kt)("h3",{id:"expected-outcomes-of-removing-domain"},"Expected Outcomes of Removing Domain"),(0,r.kt)("p",null,"You can now see a domain ",(0,r.kt)("inlineCode",{parentName:"p"},"Marketing")," has been removed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_created")," dataset."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/domain-removed.png"})))}c.isMDXComponent=!0}}]);