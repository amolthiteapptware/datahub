"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[28384],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},59181:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(83117),o=(a(67294),a(3905));const i={title:"Adding a Metadata Ingestion Source",slug:"/metadata-ingestion/adding-source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/adding-source.md"},r="Adding a Metadata Ingestion Source",s={unversionedId:"metadata-ingestion/adding-source",id:"version-0.10.5/metadata-ingestion/adding-source",title:"Adding a Metadata Ingestion Source",description:"There are two ways of adding a metadata ingestion source.",source:"@site/versioned_docs/version-0.10.5/metadata-ingestion/adding-source.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/adding-source",permalink:"/docs/metadata-ingestion/adding-source",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/adding-source.md",tags:[],version:"0.10.5",frontMatter:{title:"Adding a Metadata Ingestion Source",slug:"/metadata-ingestion/adding-source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/adding-source.md"},sidebar:"overviewSidebar",previous:{title:"SchemaFieldPath Specification (Version 2)",permalink:"/docs/advanced/field-path-spec-v2"},next:{title:"Using a Custom Ingestion Source",permalink:"/docs/how/add-custom-ingestion-source"}},l={},d=[{value:"1. Set up the configuration model",id:"1-set-up-the-configuration-model",level:3},{value:"Documentation for Configuration Classes",id:"documentation-for-configuration-classes",level:4},{value:"2. Set up the reporter",id:"2-set-up-the-reporter",level:3},{value:"3. Implement the source itself",id:"3-implement-the-source-itself",level:3},{value:"4. Set up the dependencies",id:"4-set-up-the-dependencies",level:3},{value:"5. Enable discoverability",id:"5-enable-discoverability",level:3},{value:"6. Write tests",id:"6-write-tests",level:3},{value:"7. Write docs",id:"7-write-docs",level:3},{value:"7.1 Set up the source class for automatic documentation",id:"71-set-up-the-source-class-for-automatic-documentation",level:4},{value:"7.2 Write custom documentation",id:"72-write-custom-documentation",level:4},{value:"7.3 Viewing the Documentation",id:"73-viewing-the-documentation",level:4},{value:"Step 1: Build the Ingestion docs",id:"step-1-build-the-ingestion-docs",level:5},{value:"Step 2: Build the Entire Documentation",id:"step-2-build-the-entire-documentation",level:4},{value:"8. Add SQL Alchemy mapping (if applicable)",id:"8-add-sql-alchemy-mapping-if-applicable",level:3},{value:"9. Add logo for the platform",id:"9-add-logo-for-the-platform",level:3},{value:"10. Update Frontend for UI-based ingestion",id:"10-update-frontend-for-ui-based-ingestion",level:3},{value:"10.1 Add to sources.json",id:"101-add-to-sourcesjson",level:4},{value:"10.2 Add logo to the React app",id:"102-add-logo-to-the-react-app",level:4},{value:"10.3 Update constants.ts",id:"103-update-constantsts",level:4}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-a-metadata-ingestion-source"},"Adding a Metadata Ingestion Source"),(0,o.kt)("p",null,"There are two ways of adding a metadata ingestion source."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You are going to contribute the custom source directly to the Datahub project."),(0,o.kt)("li",{parentName:"ol"},"You are writing the custom source for yourself and are not going to contribute back (yet).")),(0,o.kt)("p",null,"If you are going for case (1) just follow the steps 1 to 9 below. In case you are building it for yourself you can skip\nsteps 4-9 (but maybe write tests and docs for yourself as well) and follow the documentation\non ",(0,o.kt)("a",{parentName:"p",href:"/docs/how/add-custom-ingestion-source"},"how to use custom ingestion sources"),"\nwithout forking Datahub."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This guide assumes that you've already followed the metadata ingestion ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developing guide")," to set up\nyour local environment.")),(0,o.kt)("h3",{id:"1-set-up-the-configuration-model"},"1. Set up the configuration model"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://pydantic-docs.helpmanual.io/"},"pydantic")," for configuration, and all models must inherit\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigModel"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/file.py"},"file source")," is a good example."),(0,o.kt)("h4",{id:"documentation-for-configuration-classes"},"Documentation for Configuration Classes"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://pydantic-docs.helpmanual.io"},"pydantic")," conventions for documenting configuration flags. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," attribute to write rich documentation for your configuration field."),(0,o.kt)("p",null,"For example, the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import Field\nfrom datahub.api.configuration.common import ConfigModel\n\nclass LookerAPIConfig(ConfigModel):\n    client_id: str = Field(description="Looker API client id.")\n    client_secret: str = Field(description="Looker API client secret.")\n    base_url: str = Field(\n        description="Url to your Looker instance: `https://company.looker.com:19999` or `https://looker.company.com`, or similar. Used for making API calls to Looker and constructing clickable dashboard and chart urls."\n    )\n    transport_options: Optional[TransportOptionsConfig] = Field(\n        default=None,\n        description="Populates the [TransportOptions](https://github.com/looker-open-source/sdk-codegen/blob/94d6047a0d52912ac082eb91616c1e7c379ab262/python/looker_sdk/rtl/transport.py#L70) struct for looker client",\n    )\n')),(0,o.kt)("p",null,"generates the following documentation:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/metadata-ingestion/generated_config_docs.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Inline markdown or code snippets are not yet supported for field level documentation.")),(0,o.kt)("h3",{id:"2-set-up-the-reporter"},"2. Set up the reporter"),(0,o.kt)("p",null,"The reporter interface enables the source to report statistics, warnings, failures, and other information about the run.\nSome sources use the default ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceReport")," class, but others inherit and extend that class."),(0,o.kt)("h3",{id:"3-implement-the-source-itself"},"3. Implement the source itself"),(0,o.kt)("p",null,"The core for the source is the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_workunits")," method, which produces a stream of metadata events (typically MCP objects) wrapped up in a MetadataWorkUnit.\nThe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/file.py"},"file source")," is a good and simple example."),(0,o.kt)("p",null,"The MetadataChangeEventClass is defined in the metadata models which are generated\nunder ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata-ingestion/src/datahub/metadata/schema_classes.py"),". There are also\nsome ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/emitter/mce_builder.py"},"convenience methods")," for commonly used operations."),(0,o.kt)("h3",{id:"4-set-up-the-dependencies"},"4. Set up the dependencies"),(0,o.kt)("p",null,"Declare the source's pip dependencies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," variable of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/setup.py"},"setup script"),"."),(0,o.kt)("h3",{id:"5-enable-discoverability"},"5. Enable discoverability"),(0,o.kt)("p",null,"Declare the source under the ",(0,o.kt)("inlineCode",{parentName:"p"},"entry_points")," variable of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/setup.py"},"setup script"),". This enables the source to be\nlisted when running ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub check plugins"),", and sets up the source's shortened alias for use in recipes."),(0,o.kt)("h3",{id:"6-write-tests"},"6. Write tests"),(0,o.kt)("p",null,"Tests go in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," directory. We use the ",(0,o.kt)("a",{parentName:"p",href:"https://pytest.org/"},"pytest framework"),"."),(0,o.kt)("h3",{id:"7-write-docs"},"7. Write docs"),(0,o.kt)("h4",{id:"71-set-up-the-source-class-for-automatic-documentation"},"7.1 Set up the source class for automatic documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Indicate the platform name that this source class produces metadata for using the ",(0,o.kt)("inlineCode",{parentName:"li"},"@platform_name")," decorator. We prefer using the human-readable platform name, so e.g. BigQuery (not bigquery)."),(0,o.kt)("li",{parentName:"ul"},"Indicate the config class being used by the source by using the ",(0,o.kt)("inlineCode",{parentName:"li"},"@config_class")," decorator."),(0,o.kt)("li",{parentName:"ul"},"Indicate the support status of the connector by using the ",(0,o.kt)("inlineCode",{parentName:"li"},"@support_status")," decorator."),(0,o.kt)("li",{parentName:"ul"},"Indicate what capabilities the connector supports (and what important capabilities it does NOT support) by using the ",(0,o.kt)("inlineCode",{parentName:"li"},"@capability")," decorator."),(0,o.kt)("li",{parentName:"ul"},"Add rich documentation for the connector by utilizing docstrings on your Python class. Markdown is supported.")),(0,o.kt)("p",null,"See below a simple example of how to do this for any source."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom datahub.ingestion.api.decorators import (\n    SourceCapability,\n    SupportStatus,\n    capability,\n    config_class,\n    platform_name,\n    support_status,\n)\n\n@platform_name("File")\n@support_status(SupportStatus.CERTIFIED)\n@config_class(FileSourceConfig)\n@capability(\n    SourceCapability.PLATFORM_INSTANCE,\n    "File based ingestion does not support platform instances",\n    supported=False,\n)\n@capability(SourceCapability.DOMAINS, "Enabled by default")\n@capability(SourceCapability.DATA_PROFILING, "Optionally enabled via configuration")\n@capability(SourceCapability.DESCRIPTIONS, "Enabled by default")\n@capability(SourceCapability.LINEAGE_COARSE, "Enabled by default")\nclass FileSource(Source):\n   """\n   \n   The File Source can be used to produce all kinds of metadata from a generic metadata events file. \n   :::note\n   Events in this file can be in MCE form or MCP form.\n   :::\n   \n   """\n\n   ... source code goes here\n\n')),(0,o.kt)("h4",{id:"72-write-custom-documentation"},"7.2 Write custom documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a copy of ",(0,o.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source-docs-template"},(0,o.kt)("inlineCode",{parentName:"a"},"source-docs-template.md"))," and edit all relevant components. "),(0,o.kt)("li",{parentName:"ul"},"Name the document as ",(0,o.kt)("inlineCode",{parentName:"li"},"<plugin.md>")," and move it to ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata-ingestion/docs/sources/<platform>/<plugin>.md"),". For example for the Kafka platform, under the ",(0,o.kt)("inlineCode",{parentName:"li"},"kafka")," plugin, move the document to ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata-ingestion/docs/sources/kafka/kafka.md"),"."),(0,o.kt)("li",{parentName:"ul"},"Add a quickstart recipe corresponding to the plugin under ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata-ingestion/docs/sources/<platform>/<plugin>_recipe.yml"),". For example, for the Kafka platform, under the ",(0,o.kt)("inlineCode",{parentName:"li"},"kafka")," plugin, there is a quickstart recipe located at ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata-ingestion/docs/sources/kafka/kafka_recipe.yml"),"."),(0,o.kt)("li",{parentName:"ul"},"To write platform-specific documentation (that is cross-plugin), write the documentation under ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata-ingestion/docs/sources/<platform>/README.md"),". For example, cross-plugin documentation for the BigQuery platform is located under ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata-ingestion/docs/sources/bigquery/README.md"),".")),(0,o.kt)("h4",{id:"73-viewing-the-documentation"},"7.3 Viewing the Documentation"),(0,o.kt)("p",null,"Documentation for the source can be viewed by running the documentation generator from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs-website")," module. "),(0,o.kt)("h5",{id:"step-1-build-the-ingestion-docs"},"Step 1: Build the Ingestion docs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# From the root of DataHub repo\n./gradlew :metadata-ingestion:docGen\n")),(0,o.kt)("p",null,"If this finishes successfully, you will see output messages like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'Ingestion Documentation Generation Complete\n############################################\n{\n  "source_platforms": {\n    "discovered": 40,\n    "generated": 40\n  },\n  "plugins": {\n    "discovered": 47,\n    "generated": 47,\n    "failed": 0\n  }\n}\n############################################\n')),(0,o.kt)("p",null,"You can also find documentation files generated at ",(0,o.kt)("inlineCode",{parentName:"p"},"./docs/generated/ingestion/sources")," relative to the root of the DataHub repo. You should be able to locate your specific source's markdown file here and investigate it to make sure things look as expected."),(0,o.kt)("h4",{id:"step-2-build-the-entire-documentation"},"Step 2: Build the Entire Documentation"),(0,o.kt)("p",null,"To view how this documentation looks in the browser, there is one more step. Just build the entire docusaurus page from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs-website")," module. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# From the root of DataHub repo\n./gradlew :docs-website:build\n")),(0,o.kt)("p",null,"This will generate messages like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'...\n> Task :docs-website:yarnGenerate\nyarn run v1.22.0\n$ rm -rf genDocs/* && ts-node -O \'{ "lib": ["es2020"], "target": "es6" }\' generateDocsDir.ts && mv -v docs/* genDocs/\nIncluding untracked files in docs list:\ndocs/graphql -> genDocs/graphql\nDone in 2.47s.\n\n> Task :docs-website:yarnBuild\nyarn run v1.22.0\n$ docusaurus build\n\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\u2502                                                                              \u2502\u2502                Update available 2.0.0-beta.8 \u2192 2.0.0-beta.18                 \u2502\u2502                                                                              \u2502\u2502       To upgrade Docusaurus packages with the latest version, run the        \u2502\u2502                             following command:                               \u2502\u2502                    yarn upgrade @docusaurus/core@latest                      \u2502\u2502   @docusaurus/plugin-ideal-image@latest @docusaurus/preset-classic@latest    \u2502\u2502                                                                              \u2502\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n\n\n[en] Creating an optimized production build...\nInvalid docusaurus-plugin-ideal-image version 2.0.0-beta.7.\nAll official @docusaurus/* packages should have the exact same version as @docusaurus/core (2.0.0-beta.8).\nMaybe you want to check, or regenerate your yarn.lock or package-lock.json file?\nBrowserslist: caniuse-lite is outdated. Please run:\n  npx browserslist@latest --update-db\n  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating\n\u2139 Compiling Client\n\u2139 Compiling Server\n\u2714 Client: Compiled successfully in 1.95s\n\u2714 Server: Compiled successfully in 7.52s\nSuccess! Generated static files in "build".\n\nUse `npm run serve` command to test your build locally.\n\nDone in 11.59s.\n\nDeprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.\nUse \'--warning-mode all\' to show the individual deprecation warnings.\nSee https://docs.gradle.org/6.9.2/userguide/command_line_interface.html#sec:command_line_warnings\n\nBUILD SUCCESSFUL in 35s\n36 actionable tasks: 16 executed, 20 up-to-date\n')),(0,o.kt)("p",null,"After this you need to run the following script from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs-website")," module. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd docs-website\nnpm run serve\n")),(0,o.kt)("p",null,"Now, browse to http://localhost:3000 or whichever port npm is running on, to browse the docs.\nYour source should show up on the left sidebar under ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata Ingestion / Sources"),". "),(0,o.kt)("h3",{id:"8-add-sql-alchemy-mapping-if-applicable"},"8. Add SQL Alchemy mapping (if applicable)"),(0,o.kt)("p",null,"Add the source in ",(0,o.kt)("inlineCode",{parentName:"p"},"get_platform_from_sqlalchemy_uri")," function\nin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/sql/sql_common.py"},"sql_common.py")," if the source has an sqlalchemy source"),(0,o.kt)("h3",{id:"9-add-logo-for-the-platform"},"9. Add logo for the platform"),(0,o.kt)("p",null,"Add the logo image in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/images"},"images folder")," and add it to be ingested at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/war/src/main/resources/boot/data_platforms.json"},"startup")),(0,o.kt)("h3",{id:"10-update-frontend-for-ui-based-ingestion"},"10. Update Frontend for UI-based ingestion"),(0,o.kt)("p",null,"We are currently transitioning to a more dynamic approach to display available sources for UI-based Managed Ingestion. For the time being, adhere to these next steps to get your source to display in the UI Ingestion tab."),(0,o.kt)("h4",{id:"101-add-to-sourcesjson"},"10.1 Add to sources.json"),(0,o.kt)("p",null,"Add new source to the list in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/app/ingest/source/builder/sources.json"},"sources.json")," including a default quickstart recipe. This will render your source in the list of options when creating a new recipe in the UI."),(0,o.kt)("h4",{id:"102-add-logo-to-the-react-app"},"10.2 Add logo to the React app"),(0,o.kt)("p",null,"Add your source logo to the React ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/datahub-web-react/src/images"},"images folder")," so your image is available in memory."),(0,o.kt)("h4",{id:"103-update-constantsts"},"10.3 Update constants.ts"),(0,o.kt)("p",null,"Create new constants in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/app/ingest/source/builder/constants.ts"},"constants.ts")," for the source urn and source name. Update PLATFORM_URN_TO_LOGO to map your source urn to the newly added logo in the images folder."))}c.isMDXComponent=!0}}]);