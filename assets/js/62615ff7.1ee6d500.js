"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10042],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));const r={sidebar_position:6,title:"DataProcessInstance",slug:"/generated/metamodel/entities/dataprocessinstance",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataProcessInstance.md"},i="DataProcessInstance",o={unversionedId:"docs/generated/metamodel/entities/dataProcessInstance",id:"version-0.10.5/docs/generated/metamodel/entities/dataProcessInstance",title:"DataProcessInstance",description:"DataProcessInstance represents an instance of a datajob/jobflow run",source:"@site/versioned_docs/version-0.10.5/docs/generated/metamodel/entities/dataProcessInstance.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/dataprocessinstance",permalink:"/docs/0.10.5/generated/metamodel/entities/dataprocessinstance",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataProcessInstance.md",tags:[],version:"0.10.5",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"DataProcessInstance",slug:"/generated/metamodel/entities/dataprocessinstance",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataProcessInstance.md"},sidebar:"overviewSidebar",previous:{title:"DataProcess",permalink:"/docs/0.10.5/generated/metamodel/entities/dataprocess"},next:{title:"Chart",permalink:"/docs/0.10.5/generated/metamodel/entities/chart"}},l={},c=[{value:"Aspects",id:"aspects",level:2},{value:"dataProcessInstanceInput",id:"dataprocessinstanceinput",level:3},{value:"dataProcessInstanceOutput",id:"dataprocessinstanceoutput",level:3},{value:"dataProcessInstanceProperties",id:"dataprocessinstanceproperties",level:3},{value:"dataProcessInstanceRelationships",id:"dataprocessinstancerelationships",level:3},{value:"dataProcessInstanceRunEvent (Timeseries)",id:"dataprocessinstancerunevent-timeseries",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Self",id:"self",level:3},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dataprocessinstance"},"DataProcessInstance"),(0,s.kt)("p",null,"DataProcessInstance represents an instance of a datajob/jobflow run"),(0,s.kt)("h2",{id:"aspects"},"Aspects"),(0,s.kt)("h3",{id:"dataprocessinstanceinput"},"dataProcessInstanceInput"),(0,s.kt)("p",null,"Information about the inputs datasets of a Data process"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataProcessInstanceInput"\n  },\n  "name": "DataProcessInstanceInput",\n  "namespace": "com.linkedin.dataprocess",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "dataset"\n          ],\n          "name": "Consumes"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "addToFilters": true,\n          "fieldName": "inputs",\n          "fieldType": "URN",\n          "numValuesFieldName": "numInputs",\n          "queryByDefault": false\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "inputs",\n      "doc": "Input datasets to be consumed"\n    }\n  ],\n  "doc": "Information about the inputs datasets of a Data process"\n}\n'))),(0,s.kt)("h3",{id:"dataprocessinstanceoutput"},"dataProcessInstanceOutput"),(0,s.kt)("p",null,"Information about the outputs of a Data process"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataProcessInstanceOutput"\n  },\n  "name": "DataProcessInstanceOutput",\n  "namespace": "com.linkedin.dataprocess",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "dataset"\n          ],\n          "name": "Produces"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "addToFilters": true,\n          "fieldName": "outputs",\n          "fieldType": "URN",\n          "numValuesFieldName": "numOutputs",\n          "queryByDefault": false\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "outputs",\n      "doc": "Output datasets to be produced"\n    }\n  ],\n  "doc": "Information about the outputs of a Data process"\n}\n'))),(0,s.kt)("h3",{id:"dataprocessinstanceproperties"},"dataProcessInstanceProperties"),(0,s.kt)("p",null,"The inputs and outputs of this data process"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataProcessInstanceProperties"\n  },\n  "name": "DataProcessInstanceProperties",\n  "namespace": "com.linkedin.dataprocess",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "map",\n        "values": "string"\n      },\n      "name": "customProperties",\n      "default": {},\n      "doc": "Custom property bag."\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "externalUrl",\n      "default": null,\n      "doc": "URL where the reference exist"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "WORD_GRAM"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Process name"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldName": "processType",\n        "fieldType": "KEYWORD",\n        "filterNameOverride": "Process Type"\n      },\n      "type": [\n        "null",\n        {\n          "type": "enum",\n          "name": "DataProcessType",\n          "namespace": "com.linkedin.dataprocess",\n          "symbols": [\n            "BATCH_SCHEDULED",\n            "BATCH_AD_HOC",\n            "STREAMING"\n          ]\n        }\n      ],\n      "name": "type",\n      "default": null,\n      "doc": "Process type"\n    },\n    {\n      "Searchable": {\n        "/time": {\n          "fieldName": "created",\n          "fieldType": "COUNT",\n          "queryByDefault": false\n        }\n      },\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "created",\n      "doc": "Audit stamp containing who reported the lineage and when"\n    }\n  ],\n  "doc": "The inputs and outputs of this data process"\n}\n'))),(0,s.kt)("h3",{id:"dataprocessinstancerelationships"},"dataProcessInstanceRelationships"),(0,s.kt)("p",null,"Information about Data process relationships"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataProcessInstanceRelationships"\n  },\n  "name": "DataProcessInstanceRelationships",\n  "namespace": "com.linkedin.dataprocess",\n  "fields": [\n    {\n      "Relationship": {\n        "entityTypes": [\n          "dataJob",\n          "dataFlow"\n        ],\n        "name": "InstanceOf"\n      },\n      "Searchable": {\n        "/*": {\n          "fieldName": "parentTemplate",\n          "fieldType": "URN",\n          "queryByDefault": false\n        }\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "parentTemplate",\n      "default": null,\n      "doc": "The parent entity whose run instance it is"\n    },\n    {\n      "Relationship": {\n        "entityTypes": [\n          "dataProcessInstance"\n        ],\n        "name": "ChildOf"\n      },\n      "Searchable": {\n        "/*": {\n          "fieldName": "parentInstance",\n          "fieldType": "URN",\n          "queryByDefault": false\n        }\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "parentInstance",\n      "default": null,\n      "doc": "The parent DataProcessInstance where it belongs to.\\nIf it is a Airflow Task then it should belong to an Airflow Dag run as well\\nwhich will be another DataProcessInstance"\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "dataProcessInstance"\n          ],\n          "name": "UpstreamOf"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "fieldName": "upstream",\n          "fieldType": "URN",\n          "numValuesFieldName": "numUpstreams",\n          "queryByDefault": false\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "upstreamInstances",\n      "doc": "Input DataProcessInstance which triggered this dataprocess instance"\n    }\n  ],\n  "doc": "Information about Data process relationships"\n}\n'))),(0,s.kt)("h3",{id:"dataprocessinstancerunevent-timeseries"},"dataProcessInstanceRunEvent (Timeseries)"),(0,s.kt)("p",null,"An event representing the current status of data process run.\nDataProcessRunEvent should be used for reporting the status of a dataProcess' run."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataProcessInstanceRunEvent",\n    "type": "timeseries"\n  },\n  "name": "DataProcessInstanceRunEvent",\n  "namespace": "com.linkedin.dataprocess",\n  "fields": [\n    {\n      "type": "long",\n      "name": "timestampMillis",\n      "doc": "The event timestamp field as epoch at UTC in milli seconds."\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "TimeWindowSize",\n          "namespace": "com.linkedin.timeseries",\n          "fields": [\n            {\n              "type": {\n                "type": "enum",\n                "name": "CalendarInterval",\n                "namespace": "com.linkedin.timeseries",\n                "symbols": [\n                  "SECOND",\n                  "MINUTE",\n                  "HOUR",\n                  "DAY",\n                  "WEEK",\n                  "MONTH",\n                  "QUARTER",\n                  "YEAR"\n                ]\n              },\n              "name": "unit",\n              "doc": "Interval unit such as minute/hour/day etc."\n            },\n            {\n              "type": "int",\n              "name": "multiple",\n              "default": 1,\n              "doc": "How many units. Defaults to 1."\n            }\n          ],\n          "doc": "Defines the size of a time window."\n        }\n      ],\n      "name": "eventGranularity",\n      "default": null,\n      "doc": "Granularity of the event if applicable"\n    },\n    {\n      "type": [\n        {\n          "type": "record",\n          "name": "PartitionSpec",\n          "namespace": "com.linkedin.timeseries",\n          "fields": [\n            {\n              "type": {\n                "type": "enum",\n                "name": "PartitionType",\n                "namespace": "com.linkedin.timeseries",\n                "symbols": [\n                  "FULL_TABLE",\n                  "QUERY",\n                  "PARTITION"\n                ]\n              },\n              "name": "type",\n              "default": "PARTITION"\n            },\n            {\n              "TimeseriesField": {},\n              "type": "string",\n              "name": "partition",\n              "doc": "String representation of the partition"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "TimeWindow",\n                  "namespace": "com.linkedin.timeseries",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "startTimeMillis",\n                      "doc": "Start time as epoch at UTC."\n                    },\n                    {\n                      "type": "com.linkedin.timeseries.TimeWindowSize",\n                      "name": "length",\n                      "doc": "The length of the window."\n                    }\n                  ]\n                }\n              ],\n              "name": "timePartition",\n              "default": null,\n              "doc": "Time window of the partition if applicable"\n            }\n          ],\n          "doc": "Defines how the data is partitioned"\n        },\n        "null"\n      ],\n      "name": "partitionSpec",\n      "default": {\n        "partition": "FULL_TABLE_SNAPSHOT",\n        "type": "FULL_TABLE",\n        "timePartition": null\n      },\n      "doc": "The optional partition specification."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "messageId",\n      "default": null,\n      "doc": "The optional messageId, if provided serves as a custom user-defined unique identifier for an aspect value."\n    },\n    {\n      "Searchable": {\n        "fieldType": "KEYWORD"\n      },\n      "java": {\n        "class": "com.linkedin.common.url.Url",\n        "coercerClass": "com.linkedin.common.url.UrlCoercer"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "externalUrl",\n      "default": null,\n      "doc": "URL where the reference exist"\n    },\n    {\n      "TimeseriesField": {},\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "STARTED": "The status where the Data processing run is in."\n        },\n        "name": "DataProcessRunStatus",\n        "namespace": "com.linkedin.dataprocess",\n        "symbols": [\n          "STARTED",\n          "COMPLETE"\n        ]\n      },\n      "name": "status"\n    },\n    {\n      "type": [\n        "null",\n        "int"\n      ],\n      "name": "attempt",\n      "default": null,\n      "doc": "Return the try number that this Instance Run is in"\n    },\n    {\n      "TimeseriesField": {},\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "DataProcessInstanceRunResult",\n          "namespace": "com.linkedin.dataprocess",\n          "fields": [\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "FAILURE": " The Run Failed",\n                  "SKIPPED": " The Run Skipped",\n                  "SUCCESS": " The Run Succeeded",\n                  "UP_FOR_RETRY": " The Run Failed and will Retry"\n                },\n                "name": "RunResultType",\n                "namespace": "com.linkedin.dataprocess",\n                "symbols": [\n                  "SUCCESS",\n                  "FAILURE",\n                  "SKIPPED",\n                  "UP_FOR_RETRY"\n                ]\n              },\n              "name": "type",\n              "doc": " The final result, e.g. SUCCESS, FAILURE, SKIPPED, or UP_FOR_RETRY."\n            },\n            {\n              "type": "string",\n              "name": "nativeResultType",\n              "doc": "It identifies the system where the native result comes from like Airflow, Azkaban, etc.."\n            }\n          ]\n        }\n      ],\n      "name": "result",\n      "default": null,\n      "doc": "The final result of the Data Processing run."\n    }\n  ],\n  "doc": "An event representing the current status of data process run.\\nDataProcessRunEvent should be used for reporting the status of a dataProcess\' run."\n}\n'))),(0,s.kt)("h2",{id:"relationships"},"Relationships"),(0,s.kt)("h3",{id:"self"},"Self"),(0,s.kt)("p",null,"These are the relationships to itself, stored in this entity's aspects"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"ChildOf (via ",(0,s.kt)("inlineCode",{parentName:"li"},"dataProcessInstanceRelationships.parentInstance"),")"),(0,s.kt)("li",{parentName:"ul"},"UpstreamOf (via ",(0,s.kt)("inlineCode",{parentName:"li"},"dataProcessInstanceRelationships.upstreamInstances"),")")),(0,s.kt)("h3",{id:"outgoing"},"Outgoing"),(0,s.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Consumes"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Dataset via ",(0,s.kt)("inlineCode",{parentName:"li"},"dataProcessInstanceInput.inputs")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Produces"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Dataset via ",(0,s.kt)("inlineCode",{parentName:"li"},"dataProcessInstanceOutput.outputs")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"InstanceOf"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"DataJob via ",(0,s.kt)("inlineCode",{parentName:"li"},"dataProcessInstanceRelationships.parentTemplate")),(0,s.kt)("li",{parentName:"ul"},"DataFlow via ",(0,s.kt)("inlineCode",{parentName:"li"},"dataProcessInstanceRelationships.parentTemplate"))))),(0,s.kt)("h2",{id:"global-metadata-model"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);