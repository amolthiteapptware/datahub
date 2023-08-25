"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37451],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),r=a(67294),i=a(86010),s=a(51048),l=a(33609),o=a(1943),p=a(72957);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:s,values:d,groupId:u,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,l.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,o.U)(),[v,S]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=u){const e=N[u];null!=e&&e!==v&&g.some((t=>t.value===e))&&S(e)}const j=e=>{const t=e.currentTarget,a=w.indexOf(t),n=g[a].value;n!==v&&(_(t),S(n),null!=u&&y(u,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},g.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:O,onClick:j},s,{className:(0,i.Z)("tabs__item",m,s?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},5634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(83117),r=(a(67294),a(3905)),i=a(34259),s=a(18679);const l={sidebar_position:21,title:"JSON Schemas",slug:"/generated/ingestion/sources/json-schema",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md"},o="JSON Schemas",p={unversionedId:"docs/generated/ingestion/sources/json-schema",id:"docs/generated/ingestion/sources/json-schema",title:"JSON Schemas",description:"Incubating",source:"@site/genDocs/docs/generated/ingestion/sources/json-schema.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/json-schema",permalink:"/docs/next/generated/ingestion/sources/json-schema",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"JSON Schemas",slug:"/generated/ingestion/sources/json-schema",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md"},sidebar:"overviewSidebar",previous:{title:"Iceberg",permalink:"/docs/next/generated/ingestion/sources/iceberg"},next:{title:"Kafka",permalink:"/docs/next/generated/ingestion/sources/kafka"}},c={},m=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Configuration Notes",id:"configuration-notes",level:4},{value:"Code Coordinates",id:"code-coordinates",level:3}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-schemas"},"JSON Schemas"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Descriptions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Extracts descriptions at top level and field level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"With stateful ingestion enabled, will remove entities from DataHub if they are no longer present in the source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not currently support extracting ownership")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not currently support extracting tags")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Supports platform instance via config")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Extracts schemas, following references")))),(0,r.kt)("p",null,"This source extracts metadata from a single JSON Schema or multiple JSON Schemas rooted at a particular path.\nIt performs reference resolution based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," keyword."),(0,r.kt)("p",null,"Metadata mapping:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schemas are mapped to Datasets with sub-type Schema"),(0,r.kt)("li",{parentName:"ul"},"The name of the Schema (Dataset) is inferred from the ",(0,r.kt)("inlineCode",{parentName:"li"},"$id")," property and if that is missing, the file name."),(0,r.kt)("li",{parentName:"ul"},"Browse paths are minted based on the path")),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[json-schema]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline_name: json_schema_ingestion\nsource:\n  type: json-schema\n  config:\n    path: <path_to_json_file_or_directory or url> # e.g. https://json.schemastore.org/petstore-v1.0.json\n    platform: <choose a platform that you want schemas to live under> # e.g. schemaregistry\n    # platform_instance: <add a platform_instance if there are multiple schema repositories>\n    stateful_ingestion:\n      enabled: true # recommended to have this turned on\n\n# sink configs if needed\n")),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("div",{className:"config-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"path"),"\xa0",(0,r.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"One of string(file-path), string(directory-path), string(uri)"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set this to a single file-path or a directory-path (for recursive traversal) or a remote url. e.g. ",(0,r.kt)("a",{parentName:"td",href:"https://json.schemastore.org/petstore-v1.0.json"},"https://json.schemastore.org/petstore-v1.0.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"platform"),"\xa0",(0,r.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set this to a platform that you want all schemas to live under. e.g. schemaregistry / schemarepo etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"platform_instance"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"use_id_as_base_uri"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"boolean"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"When enabled, uses the ",(0,r.kt)("inlineCode",{parentName:"td"},"$id")," field in the json schema as the base uri for following references. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"False")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"env"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"PROD")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"uri_replace_pattern"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"URIReplacePattern"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use this if URI-s need to be modified during reference resolution. Simple string match - replace capabilities are supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"uri_replace_pattern."),(0,r.kt)("span",{className:"path-main"},"match"),"\xa0",(0,r.kt)("abbr",{title:"Required if uri_replace_pattern is set"},"\u2753"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pattern to match on uri-s as part of reference resolution. See replace field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"uri_replace_pattern."),(0,r.kt)("span",{className:"path-main"},"replace"),"\xa0",(0,r.kt)("abbr",{title:"Required if uri_replace_pattern is set"},"\u2753"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pattern to replace with as part of reference resolution. See match field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,r.kt)("span",{className:"path-main"},"enabled"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"boolean"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of the ingestion state provider registered with datahub. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"False")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,r.kt)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"boolean"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"True")))))))),(0,r.kt)(s.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "JsonSchemaSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "path": {\n      "title": "Path",\n      "description": "Set this to a single file-path or a directory-path (for recursive traversal) or a remote url. e.g. https://json.schemastore.org/petstore-v1.0.json",\n      "anyOf": [\n        {\n          "type": "string",\n          "format": "file-path"\n        },\n        {\n          "type": "string",\n          "format": "directory-path"\n        },\n        {\n          "type": "string",\n          "minLength": 1,\n          "maxLength": 65536,\n          "format": "uri"\n        }\n      ]\n    },\n    "platform": {\n      "title": "Platform",\n      "description": "Set this to a platform that you want all schemas to live under. e.g. schemaregistry / schemarepo etc.",\n      "type": "string"\n    },\n    "use_id_as_base_uri": {\n      "title": "Use Id As Base Uri",\n      "description": "When enabled, uses the `$id` field in the json schema as the base uri for following references.",\n      "default": false,\n      "type": "boolean"\n    },\n    "uri_replace_pattern": {\n      "title": "Uri Replace Pattern",\n      "description": "Use this if URI-s need to be modified during reference resolution. Simple string match - replace capabilities are supported.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/URIReplacePattern"\n        }\n      ]\n    }\n  },\n  "required": [\n    "path",\n    "platform"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19)."\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "URIReplacePattern": {\n      "title": "URIReplacePattern",\n      "type": "object",\n      "properties": {\n        "match": {\n          "title": "Match",\n          "description": "Pattern to match on uri-s as part of reference resolution. See replace field",\n          "type": "string"\n        },\n        "replace": {\n          "title": "Replace",\n          "description": "Pattern to replace with as part of reference resolution. See match field",\n          "type": "string"\n        }\n      },\n      "required": [\n        "match",\n        "replace"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("h4",{id:"configuration-notes"},"Configuration Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"platform")," field. Most organizations have custom project names for their schema repositories, so you can pick whatever name makes sense. For example, you might want to call your schema platform ",(0,r.kt)("strong",{parentName:"li"},"schemaregistry"),". After picking a custom platform, you can use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/cli#put-platform"},"put platform")," command to register your custom platform into DataHub.")),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.schema.json_schema.JsonSchemaSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/schema/json_schema.py"},"GitHub"))),(0,r.kt)("h2",null,"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for JSON Schemas, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}u.isMDXComponent=!0}}]);