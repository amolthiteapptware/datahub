"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[14369],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,l),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),s=a(67294),i=a(86010),l=a(51048),r=a(33609),o=a(1943),c=a(72957);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:u,className:f}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,r.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,o.U)(),[v,_]=(0,s.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=u){const e=b[u];null!=e&&e!==v&&k.some((t=>t.value===e))&&_(e)}const S=e=>{const t=e.currentTarget,a=w.indexOf(t),n=k[a].value;n!==v&&(C(t),_(n),null!=u&&y(u,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},f)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:S},l,{className:(0,i.Z)("tabs__item",m,l?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,s.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,l.Z)();return s.createElement(d,(0,n.Z)({key:String(t)},e))}},7996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=a(83117),s=(a(67294),a(3905)),i=a(34259),l=a(18679);const r={sidebar_position:8,title:"DataHub",slug:"/generated/ingestion/sources/datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahub.md"},o="DataHub",c={unversionedId:"docs/generated/ingestion/sources/datahub",id:"docs/generated/ingestion/sources/datahub",title:"DataHub",description:"Testing",source:"@site/genDocs/docs/generated/ingestion/sources/datahub.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/datahub",permalink:"/docs/next/generated/ingestion/sources/datahub",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahub.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"DataHub",slug:"/generated/ingestion/sources/datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahub.md"},sidebar:"overviewSidebar",previous:{title:"Databricks",permalink:"/docs/next/generated/ingestion/sources/databricks"},next:{title:"dbt",permalink:"/docs/next/generated/ingestion/sources/dbt"}},p={},m=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"datahub"},"DataHub"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,s.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,s.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[datahub]'\n")),(0,s.kt)("h3",{id:"config-details"},"Config Details"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("div",{className:"config-table"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"commit_state_interval"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Number of records to process before committing state ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"1000")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"commit_with_parse_errors"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to update createdon timestamp and kafka offset despite parse errors. Enable if you want to ignore the errors. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"include_all_versions"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"If enabled, include all versions of each aspect. Otherwise, only include the latest version of each aspect. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"kafka_topic_name"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of kafka topic containing timeseries MCLs ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"MetadataChangeLog","_","Timeseries","_","v1")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"mysql_batch_size"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Number of records to fetch from MySQL at a time ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"10000")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"mysql_table_name"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of MySQL table containing all versioned aspects ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"metadata","_","aspect","_","v2")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"kafka_connection"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"KafkaConsumerConnectionConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Kafka connection config ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","bootstrap","'",": ","'","localhost:9092","'",", ","'","schema","_","registry","_","u...")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"bootstrap"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"default-line "},"Default: ",(0,s.kt)("span",{className:"default-value"},"localhost:9092")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"client_timeout_seconds"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The request timeout used when interacting with the Kafka APIs. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"60")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"consumer_config"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Extra consumer config serialized as JSON. These options will be passed into Kafka's DeserializingConsumer. See ",(0,s.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer")," and ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md")," .")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"schema_registry_config"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Extra schema registry config serialized as JSON. These options will be passed into Kafka's SchemaRegistryClient. ",(0,s.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"schema_registry_url"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"default-line "},"Default: ",(0,s.kt)("span",{className:"default-value"},"http://localhost:8080/schema-registry/api/")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"mysql_connection"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"MySQLConnectionConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"MySQL connection config ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","username","'",": None, ","'","host","_","port","'",": ","'","localhost:3306","'",", ...")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"database"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"database (catalog)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"database_alias"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"[Deprecated]"," Alias to apply to database when ingesting.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"host_port"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"MySQL host URL. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"localhost:3306")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"options"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Any options specified here will be passed to ",(0,s.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"SQLAlchemy.create_engine")," as kwargs.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"password"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string(password)"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"password")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"scheme"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"default-line "},"Default: ",(0,s.kt)("span",{className:"default-value"},"mysql+pymysql")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"sqlalchemy_uri"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"URI of database to connect to. See ",(0,s.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"},"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"),". Takes precedence over other connection parameters.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"username"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"username")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"StatefulIngestionConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Stateful Ingestion Config ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","enabled","'",": True, ","'","max","_","checkpoint","_","state","_","size","'",": 167...")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,s.kt)("span",{className:"path-main"},"enabled"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The type of the ingestion state provider registered with datahub. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))))))),(0,s.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "DataHubSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "stateful_ingestion": {\n      "title": "Stateful Ingestion",\n      "description": "Stateful Ingestion Config",\n      "default": {\n        "enabled": true,\n        "max_checkpoint_state_size": 16777216,\n        "state_provider": {\n          "type": "datahub",\n          "config": null\n        },\n        "ignore_old_state": false,\n        "ignore_new_state": false\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/StatefulIngestionConfig"\n        }\n      ]\n    },\n    "mysql_connection": {\n      "title": "Mysql Connection",\n      "description": "MySQL connection config",\n      "default": {\n        "username": null,\n        "host_port": "localhost:3306",\n        "database": null,\n        "database_alias": null,\n        "scheme": "mysql+pymysql",\n        "sqlalchemy_uri": null,\n        "options": {}\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/MySQLConnectionConfig"\n        }\n      ]\n    },\n    "kafka_connection": {\n      "title": "Kafka Connection",\n      "description": "Kafka connection config",\n      "default": {\n        "bootstrap": "localhost:9092",\n        "schema_registry_url": "http://localhost:8080/schema-registry/api/",\n        "schema_registry_config": {},\n        "client_timeout_seconds": 60,\n        "consumer_config": {}\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/KafkaConsumerConnectionConfig"\n        }\n      ]\n    },\n    "include_all_versions": {\n      "title": "Include All Versions",\n      "description": "If enabled, include all versions of each aspect. Otherwise, only include the latest version of each aspect.",\n      "default": false,\n      "type": "boolean"\n    },\n    "mysql_batch_size": {\n      "title": "Mysql Batch Size",\n      "description": "Number of records to fetch from MySQL at a time",\n      "default": 10000,\n      "type": "integer"\n    },\n    "mysql_table_name": {\n      "title": "Mysql Table Name",\n      "description": "Name of MySQL table containing all versioned aspects",\n      "default": "metadata_aspect_v2",\n      "type": "string"\n    },\n    "kafka_topic_name": {\n      "title": "Kafka Topic Name",\n      "description": "Name of kafka topic containing timeseries MCLs",\n      "default": "MetadataChangeLog_Timeseries_v1",\n      "type": "string"\n    },\n    "commit_state_interval": {\n      "title": "Commit State Interval",\n      "description": "Number of records to process before committing state",\n      "default": 1000,\n      "type": "integer"\n    },\n    "commit_with_parse_errors": {\n      "title": "Commit With Parse Errors",\n      "description": "Whether to update createdon timestamp and kafka offset despite parse errors. Enable if you want to ignore the errors.",\n      "default": false,\n      "type": "boolean"\n    }\n  },\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19)."\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulIngestionConfig": {\n      "title": "StatefulIngestionConfig",\n      "description": "Basic Stateful Ingestion Specific Configuration for any source.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "MySQLConnectionConfig": {\n      "title": "MySQLConnectionConfig",\n      "type": "object",\n      "properties": {\n        "username": {\n          "title": "Username",\n          "description": "username",\n          "type": "string"\n        },\n        "password": {\n          "title": "Password",\n          "description": "password",\n          "type": "string",\n          "writeOnly": true,\n          "format": "password"\n        },\n        "host_port": {\n          "title": "Host Port",\n          "description": "MySQL host URL.",\n          "default": "localhost:3306",\n          "type": "string"\n        },\n        "database": {\n          "title": "Database",\n          "description": "database (catalog)",\n          "type": "string"\n        },\n        "database_alias": {\n          "title": "Database Alias",\n          "description": "[Deprecated] Alias to apply to database when ingesting.",\n          "type": "string"\n        },\n        "scheme": {\n          "title": "Scheme",\n          "default": "mysql+pymysql",\n          "type": "string"\n        },\n        "sqlalchemy_uri": {\n          "title": "Sqlalchemy Uri",\n          "description": "URI of database to connect to. See https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls. Takes precedence over other connection parameters.",\n          "type": "string"\n        },\n        "options": {\n          "title": "Options",\n          "description": "Any options specified here will be passed to [SQLAlchemy.create_engine](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine) as kwargs.",\n          "type": "object"\n        }\n      },\n      "additionalProperties": false\n    },\n    "KafkaConsumerConnectionConfig": {\n      "title": "KafkaConsumerConnectionConfig",\n      "description": "Configuration class for holding connectivity information for Kafka consumers",\n      "type": "object",\n      "properties": {\n        "bootstrap": {\n          "title": "Bootstrap",\n          "default": "localhost:9092",\n          "type": "string"\n        },\n        "schema_registry_url": {\n          "title": "Schema Registry Url",\n          "default": "http://localhost:8080/schema-registry/api/",\n          "type": "string"\n        },\n        "schema_registry_config": {\n          "title": "Schema Registry Config",\n          "description": "Extra schema registry config serialized as JSON. These options will be passed into Kafka\'s SchemaRegistryClient. https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient",\n          "type": "object"\n        },\n        "client_timeout_seconds": {\n          "title": "Client Timeout Seconds",\n          "description": "The request timeout used when interacting with the Kafka APIs.",\n          "default": 60,\n          "type": "integer"\n        },\n        "consumer_config": {\n          "title": "Consumer Config",\n          "description": "Extra consumer config serialized as JSON. These options will be passed into Kafka\'s DeserializingConsumer. See https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer and https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md .",\n          "type": "object"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,s.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Class Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.datahub.datahub_source.DataHubSource")),(0,s.kt)("li",{parentName:"ul"},"Browse on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/datahub/datahub_source.py"},"GitHub"))),(0,s.kt)("h2",null,"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring ingestion for DataHub, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}u.isMDXComponent=!0}}]);