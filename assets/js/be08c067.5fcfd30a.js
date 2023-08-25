"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[59312],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=t(83117),r=(t(67294),t(3905));const i={sidebar_position:21,title:"MlFeatureTable",slug:"/generated/metamodel/entities/mlfeaturetable",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlFeatureTable.md"},o="MlFeatureTable",s={unversionedId:"docs/generated/metamodel/entities/mlFeatureTable",id:"version-0.10.5/docs/generated/metamodel/entities/mlFeatureTable",title:"MlFeatureTable",description:"Aspects",source:"@site/versioned_docs/version-0.10.5/docs/generated/metamodel/entities/mlFeatureTable.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/mlfeaturetable",permalink:"/docs/generated/metamodel/entities/mlfeaturetable",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlFeatureTable.md",tags:[],version:"0.10.5",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"MlFeatureTable",slug:"/generated/metamodel/entities/mlfeaturetable",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlFeatureTable.md"},sidebar:"overviewSidebar",previous:{title:"MlModelDeployment",permalink:"/docs/generated/metamodel/entities/mlmodeldeployment"},next:{title:"MlFeature",permalink:"/docs/generated/metamodel/entities/mlfeature"}},l={},m=[{value:"Aspects",id:"aspects",level:2},{value:"mlFeatureTableKey",id:"mlfeaturetablekey",level:3},{value:"mlFeatureTableProperties",id:"mlfeaturetableproperties",level:3},{value:"ownership",id:"ownership",level:3},{value:"institutionalMemory",id:"institutionalmemory",level:3},{value:"status",id:"status",level:3},{value:"deprecation",id:"deprecation",level:3},{value:"browsePaths",id:"browsepaths",level:3},{value:"globalTags",id:"globaltags",level:3},{value:"dataPlatformInstance",id:"dataplatforminstance",level:3},{value:"browsePathsV2",id:"browsepathsv2",level:3},{value:"glossaryTerms",id:"glossaryterms",level:3},{value:"editableMlFeatureTableProperties",id:"editablemlfeaturetableproperties",level:3},{value:"domains",id:"domains",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],c={toc:m};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mlfeaturetable"},"MlFeatureTable"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"mlfeaturetablekey"},"mlFeatureTableKey"),(0,r.kt)("p",null,"Key for an MLFeatureTable"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "mlFeatureTableKey"\n  },\n  "name": "MLFeatureTableKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Relationship": {\n        "entityTypes": [\n          "dataPlatform"\n        ],\n        "name": "SourcePlatform"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Data platform urn associated with the feature table"\n    },\n    {\n      "Searchable": {\n        "boostScore": 8.0,\n        "enableAutocomplete": true,\n        "fieldNameAliases": [\n          "_entityName"\n        ],\n        "fieldType": "WORD_GRAM"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Name of the feature table"\n    }\n  ],\n  "doc": "Key for an MLFeatureTable"\n}\n'))),(0,r.kt)("h3",{id:"mlfeaturetableproperties"},"mlFeatureTableProperties"),(0,r.kt)("p",null,"Properties associated with a MLFeatureTable"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "mlFeatureTableProperties"\n  },\n  "name": "MLFeatureTableProperties",\n  "namespace": "com.linkedin.ml.metadata",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "map",\n        "values": "string"\n      },\n      "name": "customProperties",\n      "default": {},\n      "doc": "Custom property bag."\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT",\n        "hasValuesFieldName": "hasDescription"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Documentation of the MLFeatureTable"\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "mlFeature"\n          ],\n          "name": "Contains"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "fieldName": "features",\n          "fieldType": "URN"\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "array",\n          "items": "string"\n        }\n      ],\n      "name": "mlFeatures",\n      "default": null,\n      "doc": "List of features contained in the feature table"\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "mlPrimaryKey"\n          ],\n          "name": "KeyedBy"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "fieldName": "primaryKeys",\n          "fieldType": "URN"\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "array",\n          "items": "string"\n        }\n      ],\n      "name": "mlPrimaryKeys",\n      "default": null,\n      "doc": "List of primary keys in the feature table (if multiple, assumed to act as a composite key)"\n    }\n  ],\n  "doc": "Properties associated with a MLFeatureTable"\n}\n'))),(0,r.kt)("h3",{id:"ownership"},"ownership"),(0,r.kt)("p",null,"Ownership information of an entity."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpuser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "deprecated": true,\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BUSINESS_OWNER": "A person or group who is responsible for logical, or business related, aspects of the asset.",\n                  "CONSUMER": "A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.",\n                  "CUSTOM": "Set when ownership type is unknown or a when new one is specified as an ownership type entity for which we have no\\nenum value for. This is used for backwards compatibility",\n                  "DATAOWNER": "A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DATA_STEWARD": "A steward, expert, or delegate responsible for the asset.",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "NONE": "No specific type associated to the owner.",\n                  "PRODUCER": "A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "STAKEHOLDER": "A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.",\n                  "TECHNICAL_OWNER": "person or group who is responsible for technical aspects of the asset."\n                },\n                "deprecatedSymbols": {\n                  "CONSUMER": true,\n                  "DATAOWNER": true,\n                  "DELEGATE": true,\n                  "DEVELOPER": true,\n                  "PRODUCER": true,\n                  "STAKEHOLDER": true\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "CUSTOM",\n                  "TECHNICAL_OWNER",\n                  "BUSINESS_OWNER",\n                  "DATA_STEWARD",\n                  "NONE",\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Asset owner types"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "ownershipType"\n                ],\n                "name": "ownershipType"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "typeUrn",\n              "default": null,\n              "doc": "The type of the ownership\\nUrn of type O"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0,\n        "message": null\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,r.kt)("h3",{id:"institutionalmemory"},"institutionalMemory"),(0,r.kt)("p",null,"Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "institutionalMemory"\n  },\n  "name": "InstitutionalMemory",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "InstitutionalMemoryMetadata",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.url.Url",\n                "coercerClass": "com.linkedin.common.url.UrlCoercer"\n              },\n              "type": "string",\n              "name": "url",\n              "doc": "Link to an engineering design document or a wiki page."\n            },\n            {\n              "type": "string",\n              "name": "description",\n              "doc": "Description of the link."\n            },\n            {\n              "type": {\n                "type": "record",\n                "name": "AuditStamp",\n                "namespace": "com.linkedin.common",\n                "fields": [\n                  {\n                    "type": "long",\n                    "name": "time",\n                    "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": "string",\n                    "name": "actor",\n                    "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": [\n                      "null",\n                      "string"\n                    ],\n                    "name": "impersonator",\n                    "default": null,\n                    "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                  },\n                  {\n                    "type": [\n                      "null",\n                      "string"\n                    ],\n                    "name": "message",\n                    "default": null,\n                    "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                  }\n                ],\n                "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n              },\n              "name": "createStamp",\n              "doc": "Audit stamp associated with creation of this record"\n            }\n          ],\n          "doc": "Metadata corresponding to a record of institutional memory."\n        }\n      },\n      "name": "elements",\n      "doc": "List of records that represent institutional memory of an entity. Each record consists of a link, description, creator and timestamps associated with that record."\n    }\n  ],\n  "doc": "Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."\n}\n'))),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,r.kt)("h3",{id:"deprecation"},"deprecation"),(0,r.kt)("p",null,"Deprecation status of an entity"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "deprecation"\n  },\n  "name": "Deprecation",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN",\n        "weightsPerFieldValue": {\n          "true": 0.5\n        }\n      },\n      "type": "boolean",\n      "name": "deprecated",\n      "doc": "Whether the entity is deprecated."\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "decommissionTime",\n      "default": null,\n      "doc": "The time user plan to decommission this entity."\n    },\n    {\n      "type": "string",\n      "name": "note",\n      "doc": "Additional information about the entity deprecation plan, such as the wiki, doc, RB."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "actor",\n      "doc": "The user URN which will be credited for modifying this deprecation content."\n    }\n  ],\n  "doc": "Deprecation status of an entity"\n}\n'))),(0,r.kt)("h3",{id:"browsepaths"},"browsePaths"),(0,r.kt)("p",null,"Shared aspect containing Browse Paths to be indexed for an entity."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "browsePaths"\n  },\n  "name": "BrowsePaths",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "fieldName": "browsePaths",\n          "fieldType": "BROWSE_PATH"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "paths",\n      "doc": "A list of valid browse paths for the entity.\\n\\nBrowse paths are expected to be forward slash-separated strings. For example: \'prod/snowflake/datasetName\'"\n    }\n  ],\n  "doc": "Shared aspect containing Browse Paths to be indexed for an entity."\n}\n'))),(0,r.kt)("h3",{id:"globaltags"},"globalTags"),(0,r.kt)("p",null,"Tag aspect used for applying tags to an entity"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Relationship": {\n        "/*/tag": {\n          "entityTypes": [\n            "tag"\n          ],\n          "name": "TaggedWith"\n        }\n      },\n      "Searchable": {\n        "/*/tag": {\n          "addToFilters": true,\n          "boostScore": 0.5,\n          "fieldName": "tags",\n          "fieldType": "URN",\n          "filterNameOverride": "Tag",\n          "hasValuesFieldName": "hasTags",\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "context",\n              "default": null,\n              "doc": "Additional context about the association"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,r.kt)("h3",{id:"dataplatforminstance"},"dataPlatformInstance"),(0,r.kt)("p",null,"The specific instance of the data platform that this entity belongs to"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformInstance"\n  },\n  "name": "DataPlatformInstance",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "URN",\n        "filterNameOverride": "Platform"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Data Platform"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldName": "platformInstance",\n        "fieldType": "URN",\n        "filterNameOverride": "Platform Instance"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "instance",\n      "default": null,\n      "doc": "Instance of the data platform (e.g. db instance)"\n    }\n  ],\n  "doc": "The specific instance of the data platform that this entity belongs to"\n}\n'))),(0,r.kt)("h3",{id:"browsepathsv2"},"browsePathsV2"),(0,r.kt)("p",null,"Shared aspect containing a Browse Path to be indexed for an entity."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "browsePathsV2"\n  },\n  "name": "BrowsePathsV2",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "/*/id": {\n          "fieldName": "browsePathV2",\n          "fieldType": "BROWSE_PATH_V2"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "BrowsePathEntry",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": "string",\n              "name": "id",\n              "doc": "The ID of the browse path entry. This is what gets stored in the index.\\nIf there\'s an urn associated with this entry, id and urn will be the same"\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "urn",\n              "default": null,\n              "doc": "Optional urn pointing to some entity in DataHub"\n            }\n          ],\n          "doc": "Represents a single level in an entity\'s browsePathV2"\n        }\n      },\n      "name": "path",\n      "doc": "A valid browse path for the entity. This field is provided by DataHub by default.\\nThis aspect is a newer version of browsePaths where we can encode more information in the path.\\nThis path is also based on containers for a given entity if it has containers.\\n\\nThis is stored in elasticsearch as unit-separator delimited strings and only includes platform specific folders or containers.\\nThese paths should not include high level info captured elsewhere ie. Platform and Environment."\n    }\n  ],\n  "doc": "Shared aspect containing a Browse Path to be indexed for an entity."\n}\n'))),(0,r.kt)("h3",{id:"glossaryterms"},"glossaryTerms"),(0,r.kt)("p",null,"Related business terms information"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "glossaryTerms"\n  },\n  "name": "GlossaryTerms",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "GlossaryTermAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "glossaryTerm"\n                ],\n                "name": "TermedWith"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "glossaryTerms",\n                "fieldType": "URN",\n                "filterNameOverride": "Glossary Term",\n                "hasValuesFieldName": "hasGlossaryTerms"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.GlossaryTermUrn"\n              },\n              "type": "string",\n              "name": "urn",\n              "doc": "Urn of the applied glossary term"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "context",\n              "default": null,\n              "doc": "Additional context about the association"\n            }\n          ],\n          "doc": "Properties of an applied glossary term."\n        }\n      },\n      "name": "terms",\n      "doc": "The related business terms"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "auditStamp",\n      "doc": "Audit stamp containing who reported the related business term"\n    }\n  ],\n  "doc": "Related business terms information"\n}\n'))),(0,r.kt)("h3",{id:"editablemlfeaturetableproperties"},"editableMlFeatureTableProperties"),(0,r.kt)("p",null,"Properties associated with a MLFeatureTable editable from the ui"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "editableMlFeatureTableProperties"\n  },\n  "name": "EditableMLFeatureTableProperties",\n  "namespace": "com.linkedin.ml.metadata",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldName": "editedDescription",\n        "fieldType": "TEXT"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Documentation of the MLFeatureTable"\n    }\n  ],\n  "doc": "Properties associated with a MLFeatureTable editable from the ui"\n}\n'))),(0,r.kt)("h3",{id:"domains"},"domains"),(0,r.kt)("p",null,"Links from an Asset to its Domains"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "domains"\n  },\n  "name": "Domains",\n  "namespace": "com.linkedin.domain",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "domain"\n          ],\n          "name": "AssociatedWith"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "addToFilters": true,\n          "fieldName": "domains",\n          "fieldType": "URN",\n          "filterNameOverride": "Domain",\n          "hasValuesFieldName": "hasDomain"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "domains",\n      "doc": "The Domains attached to an Asset"\n    }\n  ],\n  "doc": "Links from an Asset to its Domains"\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"outgoing"},"Outgoing"),(0,r.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SourcePlatform"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DataPlatform via ",(0,r.kt)("inlineCode",{parentName:"li"},"mlFeatureTableKey.platform")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contains"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MlFeature via ",(0,r.kt)("inlineCode",{parentName:"li"},"mlFeatureTableProperties.mlFeatures")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"KeyedBy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MlPrimaryKey via ",(0,r.kt)("inlineCode",{parentName:"li"},"mlFeatureTableProperties.mlPrimaryKeys")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OwnedBy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ownershipType"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OwnershipType via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TaggedWith"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tag via ",(0,r.kt)("inlineCode",{parentName:"li"},"globalTags.tags")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TermedWith"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GlossaryTerm via ",(0,r.kt)("inlineCode",{parentName:"li"},"glossaryTerms.terms.urn")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AssociatedWith"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Domain via ",(0,r.kt)("inlineCode",{parentName:"li"},"domains.domains"))))),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}d.isMDXComponent=!0}}]);