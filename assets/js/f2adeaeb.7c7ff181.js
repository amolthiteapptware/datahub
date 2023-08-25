"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[43589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=o,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(k,n(n({ref:t},c),{},{components:a})):r.createElement(k,n({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,n=new Array(l);n[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var u=2;u<l;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},34025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(83117),o=(a(67294),a(3905));const l={title:"DataHub Concepts",sidebar_label:"Concepts",slug:"/what-is-datahub/datahub-concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what-is-datahub/datahub-concepts.md"},n="DataHub Concepts",s={unversionedId:"docs/what-is-datahub/datahub-concepts",id:"docs/what-is-datahub/datahub-concepts",title:"DataHub Concepts",description:"Explore key concepts of DataHub to take full advantage of its capabilities in managing your data.",source:"@site/genDocs/docs/what-is-datahub/datahub-concepts.md",sourceDirName:"docs/what-is-datahub",slug:"/what-is-datahub/datahub-concepts",permalink:"/docs/next/what-is-datahub/datahub-concepts",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what-is-datahub/datahub-concepts.md",tags:[],version:"current",frontMatter:{title:"DataHub Concepts",sidebar_label:"Concepts",slug:"/what-is-datahub/datahub-concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what-is-datahub/datahub-concepts.md"},sidebar:"overviewSidebar",previous:{title:"Quickstart Guide",permalink:"/docs/next/quickstart"},next:{title:"Managed DataHub",permalink:"/docs/next/saas"}},i={},u=[{value:"General Concepts",id:"general-concepts",level:2},{value:"URN (Uniform Resource Name)",id:"urn-uniform-resource-name",level:3},{value:"Policy",id:"policy",level:3},{value:"Role",id:"role",level:3},{value:"Access Token (Personal Access Token)",id:"access-token-personal-access-token",level:3},{value:"View",id:"view",level:3},{value:"Deprecation",id:"deprecation",level:3},{value:"Ingestion Source",id:"ingestion-source",level:3},{value:"Container",id:"container",level:3},{value:"Data Platform",id:"data-platform",level:3},{value:"Dataset",id:"dataset",level:3},{value:"Chart",id:"chart",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Data Job",id:"data-job",level:3},{value:"Data Flow",id:"data-flow",level:3},{value:"Glossary Term",id:"glossary-term",level:3},{value:"Glossary Term Group",id:"glossary-term-group",level:3},{value:"Tag",id:"tag",level:3},{value:"Domain",id:"domain",level:3},{value:"Owner",id:"owner",level:3},{value:"Users (CorpUser)",id:"users-corpuser",level:3},{value:"Groups (CorpGroup)",id:"groups-corpgroup",level:3},{value:"Metadata Model",id:"metadata-model",level:2},{value:"Entity",id:"entity",level:3},{value:"Aspect",id:"aspect",level:3},{value:"Relationships",id:"relationships",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahub-concepts"},"DataHub Concepts"),(0,o.kt)("p",null,"Explore key concepts of DataHub to take full advantage of its capabilities in managing your data."),(0,o.kt)("h2",{id:"general-concepts"},"General Concepts"),(0,o.kt)("h3",{id:"urn-uniform-resource-name"},"URN (Uniform Resource Name)"),(0,o.kt)("p",null,"URN (Uniform Resource Name) is the chosen scheme of URI to uniquely define any resource in DataHub. It has the following form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"urn:<Namespace>:<Entity Type>:<ID>\n")),(0,o.kt)("p",null,"Examples include ",(0,o.kt)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"urn:li:corpuser:jdoe"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/what/urn"},"What is URN?")))),(0,o.kt)("h3",{id:"policy"},"Policy"),(0,o.kt)("p",null,"Access policies in DataHub define who can do what to which resources."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/authorization/policies"},"Authorization: Policies Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/datahubpolicy"},"Developer Guides: DataHubPolicy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/authorization/access-policies-guide"},"Feature Guides: About DataHub Access Policies")))),(0,o.kt)("h3",{id:"role"},"Role"),(0,o.kt)("p",null,"DataHub provides the ability to use Roles to manage permissions."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/authorization/roles"},"Authorization: About DataHub Roles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/datahubrole"},"Developer Guides: DataHubRole")))),(0,o.kt)("h3",{id:"access-token-personal-access-token"},"Access Token (Personal Access Token)"),(0,o.kt)("p",null,"Personal Access Tokens, or PATs for short, allow users to represent themselves in code and programmatically use DataHub's APIs in deployments where security is a concern.\nUsed along-side with ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/authentication/introducing-metadata-service-authentication"},"authentication-enabled metadata service"),", PATs add a layer of protection to DataHub where only authorized users are able to perform actions in an automated way."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/authentication/personal-access-tokens"},"Authentication: About DataHub Personal Access Tokens")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/datahubaccesstoken"},"Developer Guides: DataHubAccessToken")))),(0,o.kt)("h3",{id:"view"},"View"),(0,o.kt)("p",null,"Views allow you to save and share sets of filters for reuse when browsing DataHub. A view can either be public or personal."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/datahubview"},"DataHubView")))),(0,o.kt)("h3",{id:"deprecation"},"Deprecation"),(0,o.kt)("p",null,"Deprecation is an aspect that indicates the deprecation status of an entity. Typically it is expressed as a Boolean value."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/dataset#deprecation"},"Deprecation of a dataset")))),(0,o.kt)("h3",{id:"ingestion-source"},"Ingestion Source"),(0,o.kt)("p",null,"Ingestion sources refer to the data systems that we are extracting metadata from. For example, we have sources for BigQuery, Looker, Tableau and many others."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/metadata-ingestion#sources"},"Sources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/integrations"},"DataHub Integrations")))),(0,o.kt)("h3",{id:"container"},"Container"),(0,o.kt)("p",null,"A container of related data assets."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/container"},"Developer Guides: Container")))),(0,o.kt)("h3",{id:"data-platform"},"Data Platform"),(0,o.kt)("p",null,"Data Platforms are systems or tools that contain Datasets, Dashboards, Charts, and all other kinds of data assets modeled in the metadata graph."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"List of Data Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure Data Lake (Gen 1)"),(0,o.kt)("li",{parentName:"ul"},"Azure Data Lake (Gen 2)"),(0,o.kt)("li",{parentName:"ul"},"Airflow"),(0,o.kt)("li",{parentName:"ul"},"Ambry"),(0,o.kt)("li",{parentName:"ul"},"ClickHouse"),(0,o.kt)("li",{parentName:"ul"},"Couchbase"),(0,o.kt)("li",{parentName:"ul"},"External Source"),(0,o.kt)("li",{parentName:"ul"},"HDFS"),(0,o.kt)("li",{parentName:"ul"},"SAP HANA"),(0,o.kt)("li",{parentName:"ul"},"Hive"),(0,o.kt)("li",{parentName:"ul"},"Iceberg"),(0,o.kt)("li",{parentName:"ul"},"AWS S3"),(0,o.kt)("li",{parentName:"ul"},"Kafka"),(0,o.kt)("li",{parentName:"ul"},"Kafka Connect"),(0,o.kt)("li",{parentName:"ul"},"Kusto"),(0,o.kt)("li",{parentName:"ul"},"Mode"),(0,o.kt)("li",{parentName:"ul"},"MongoDB"),(0,o.kt)("li",{parentName:"ul"},"MySQL"),(0,o.kt)("li",{parentName:"ul"},"MariaDB"),(0,o.kt)("li",{parentName:"ul"},"OpenAPI"),(0,o.kt)("li",{parentName:"ul"},"Oracle"),(0,o.kt)("li",{parentName:"ul"},"Pinot"),(0,o.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,o.kt)("li",{parentName:"ul"},"Presto"),(0,o.kt)("li",{parentName:"ul"},"Tableau"),(0,o.kt)("li",{parentName:"ul"},"Vertica")),(0,o.kt)("p",null,"Reference : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-fork/blob/acryl-main/metadata-service/war/src/main/resources/boot/data_platforms.json"},"data_platforms.json"))),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/dataplatform"},"Developer Guides: Data Platform")))),(0,o.kt)("h3",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"Datasets represent collections of data that are typically represented as Tables or Views in a database (e.g. BigQuery, Snowflake, Redshift etc.), Streams in a stream-processing environment (Kafka, Pulsar etc.), bundles of data found as Files or Folders in data lake systems (S3, ADLS, etc.)."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/dataset"},"Developer Guides: Dataset")))),(0,o.kt)("h3",{id:"chart"},"Chart"),(0,o.kt)("p",null,"A single data vizualization derived from a Dataset. A single Chart can be a part of multiple Dashboards. Charts can have tags, owners, links, glossary terms, and descriptions attached to them. Examples include a Superset or Looker Chart."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/chart"},"Developer Guides: Chart")))),(0,o.kt)("h3",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"A collection of Charts for visualization. Dashboards can have tags, owners, links, glossary terms, and descriptions attached to them. Examples include a Superset or Mode Dashboard."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/dashboard"},"Developer Guides: Dashboard")))),(0,o.kt)("h3",{id:"data-job"},"Data Job"),(0,o.kt)("p",null,'An executable job that processes data assets, where "processing" implies consuming data, producing data, or both.\nIn orchestration systems, this is sometimes referred to as an individual "Task" within a "DAG". Examples include an Airflow Task.'),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/datajob"},"Developer Guides: Data Job")))),(0,o.kt)("h3",{id:"data-flow"},"Data Flow"),(0,o.kt)("p",null,'An executable collection of Data Jobs with dependencies among them, or a DAG.\nSometimes referred to as a "Pipeline". Examples include an Airflow DAG.'),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/dataflow"},"Developer Guides: Data Flow")))),(0,o.kt)("h3",{id:"glossary-term"},"Glossary Term"),(0,o.kt)("p",null,"Shared vocabulary within the data ecosystem."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/glossary/business-glossary"},"Feature Guides: Glossary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/glossaryterm"},"Developer Guides: GlossaryTerm")))),(0,o.kt)("h3",{id:"glossary-term-group"},"Glossary Term Group"),(0,o.kt)("p",null,"Glossary Term Group is similar to a folder, containing Terms and even other Term Groups to allow for a nested structure."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/glossary/business-glossary#terms--term-groups"},"Feature Guides: Term & Term Group")))),(0,o.kt)("h3",{id:"tag"},"Tag"),(0,o.kt)("p",null,"Tags are informal, loosely controlled labels that help in search & discovery. They can be added to datasets, dataset schemas, or containers, for an easy way to label or categorize entities \u2013 without having to associate them to a broader business glossary or vocabulary."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/tags"},"Feature Guides: About DataHub Tags")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/tag"},"Developer Guides: Tags")))),(0,o.kt)("h3",{id:"domain"},"Domain"),(0,o.kt)("p",null,"Domains are curated, top-level folders or categories where related assets can be explicitly grouped."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/domains"},"Feature Guides: About DataHub Domains")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/domain"},"Developer Guides: Domain")))),(0,o.kt)("h3",{id:"owner"},"Owner"),(0,o.kt)("p",null,"Owner refers to the users or groups that has ownership rights over entities. For example, owner can be acceessed to dataset or a column or a dataset."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/tutorials/owners#add-owners"},"Getting Started : Adding Owners On Datasets/Columns")))),(0,o.kt)("h3",{id:"users-corpuser"},"Users (CorpUser)"),(0,o.kt)("p",null,"CorpUser represents an identity of a person (or an account) in the enterprise."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/corpuser"},"Developer Guides: CorpUser")))),(0,o.kt)("h3",{id:"groups-corpgroup"},"Groups (CorpGroup)"),(0,o.kt)("p",null,"CorpGroup represents an identity of a group of users in the enterprise."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/generated/metamodel/entities/corpgroup"},"Developer Guides: CorpGroup")))),(0,o.kt)("h2",{id:"metadata-model"},"Metadata Model"),(0,o.kt)("h3",{id:"entity"},"Entity"),(0,o.kt)("p",null,"An entity is the primary node in the metadata graph. For example, an instance of a Dataset or a CorpUser is an Entity."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/metadata-modeling/metadata-model"},"How does DataHub model metadata?")))),(0,o.kt)("h3",{id:"aspect"},"Aspect"),(0,o.kt)("p",null,'An aspect is a collection of attributes that describes a particular facet of an entity.\nAspects can be shared across entities, for example "Ownership" is an aspect that is re-used across all the Entities that have owners.'),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/what/aspect"},"What is a metadata aspect?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/metadata-modeling/metadata-model"},"How does DataHub model metadata?")))),(0,o.kt)("h3",{id:"relationships"},"Relationships"),(0,o.kt)("p",null,"A relationship represents a named edge between 2 entities. They are declared via foreign key attributes within Aspects along with a custom annotation (@Relationship)."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/what/relationship"},"What is a relationship?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/metadata-modeling/metadata-model"},"How does DataHub model metadata?")))))}d.isMDXComponent=!0}}]);