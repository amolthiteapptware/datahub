"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[32731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"Using Docker Images During Development",slug:"/docker/development",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/docker/development.md"},i="Using Docker Images During Development",l={unversionedId:"docs/docker/development",id:"version-0.11.0/docs/docker/development",title:"Using Docker Images During Development",description:"We've created a special docker-compose.dev.yml override file that should configure docker images to be easier to use",source:"@site/versioned_docs/version-0.11.0/docs/docker/development.md",sourceDirName:"docs/docker",slug:"/docker/development",permalink:"/docs/docker/development",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/docker/development.md",tags:[],version:"0.11.0",frontMatter:{title:"Using Docker Images During Development",slug:"/docker/development",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/docker/development.md"},sidebar:"overviewSidebar",previous:{title:"Local Development",permalink:"/docs/developers"},next:{title:"Developing on Metadata Ingestion",permalink:"/docs/metadata-ingestion/developing"}},s={},d=[{value:"Reloading",id:"reloading",level:2},{value:"Start/Stop",id:"startstop",level:2},{value:"Debugging",id:"debugging",level:2},{value:"IntelliJ Remote Debug Configuration",id:"intellij-remote-debug-configuration",level:3},{value:"Tips for People New To Docker",id:"tips-for-people-new-to-docker",level:2},{value:"Accessing Logs",id:"accessing-logs",level:3},{value:"Quickstart Conflicts",id:"quickstart-conflicts",level:3},{value:"Docker Prune",id:"docker-prune",level:3},{value:"System Update",id:"system-update",level:3},{value:"Running a specific service",id:"running-a-specific-service",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-docker-images-during-development"},"Using Docker Images During Development"),(0,r.kt)("p",null,"We've created a special ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.yml")," override file that should configure docker images to be easier to use\nduring development."),(0,r.kt)("p",null,"Normally, you'd rebuild your images from scratch with a combination of gradle and docker compose commands. However,\nthis takes way too long for development and requires reasoning about several layers of docker compose configuration\nyaml files which can depend on your hardware (Apple M1)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.yml")," file bypasses the need to rebuild docker images by mounting binaries, startup scripts,\nand other data. These dev images, tagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," will use your ",(0,r.kt)("em",{parentName:"p"},"locally built code")," with gradle.\nBuilding locally and bypassing the need to rebuild the Docker images should be much faster."),(0,r.kt)("p",null,"We highly recommend you just invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"./gradlew quickstartDebug")," task. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew quickstartDebug\n")),(0,r.kt)("p",null,"This task is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/build.gradle")," and executes the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Builds all required artifacts to run DataHub. This includes both application code such as the GMS war, the frontend\ndistribution zip which contains javascript, as well as secondary support docker containers.\n")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locally builds Docker images with the expected ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," tag required by the docker compose files.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Runs the special ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.yml")," and supporting docker-compose files to mount local files directly in the\ncontainers with remote debugging ports enabled."))),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," docker images are constructed you'll see images similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"linkedin/datahub-frontend-react                 debug              e52fef698025   28 minutes ago   763MB\nlinkedin/datahub-kafka-setup                    debug              3375aaa2b12d   55 minutes ago   659MB\nlinkedin/datahub-gms                            debug              ea2b0a8ea115   56 minutes ago   408MB\nacryldata/datahub-upgrade                       debug              322377a7a21d   56 minutes ago   463MB\nacryldata/datahub-mysql-setup                   debug              17768edcc3e5   2 hours ago      58.2MB\nlinkedin/datahub-elasticsearch-setup            debug              4d935be7c62c   2 hours ago      26.1MB\n")),(0,r.kt)("p",null,"At this point it is possible to view the DataHub UI at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9002")," as you normally would with quickstart."),(0,r.kt)("h2",{id:"reloading"},"Reloading"),(0,r.kt)("p",null,"Next, perform the desired modifications and rebuild the frontend and/or GMS components."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Builds GMS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew :metadata-service:war:build\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Builds the frontend")),(0,r.kt)("p",null,"Including javascript components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew :datahub-frontend:build\n")),(0,r.kt)("p",null,"After building the artifacts only a restart of the container(s) is required to run with the updated code.\nThe restart can be performed using a docker UI, the docker cli, or the following gradle task."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew :docker:debugReload\n")),(0,r.kt)("h2",{id:"startstop"},"Start/Stop"),(0,r.kt)("p",null,"The following commands can pause the debugging environment to release resources when not needed."),(0,r.kt)("p",null,"Pause containers and free resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose -p datahub stop\n")),(0,r.kt)("p",null,"Resume containers for further debugging."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose -p datahub start\n")),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"The default debugging process uses your local code and enables debugging by default for both GMS and the frontend. Attach\nto the instance using your IDE by using its Remote Java Debugging features."),(0,r.kt)("p",null,"Environment variables control the debugging ports for GMS and the frontend."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATAHUB_MAPPED_GMS_DEBUG_PORT")," - Default: 5001"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATAHUB_MAPPED_FRONTEND_DEBUG_PORT")," - Default: 5002")),(0,r.kt)("h3",{id:"intellij-remote-debug-configuration"},"IntelliJ Remote Debug Configuration"),(0,r.kt)("p",null,"The screenshot shows an example configuration for IntelliJ using the default GMS debugging port of 5001."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/development/intellij-remote-debug.png"})),(0,r.kt)("h2",{id:"tips-for-people-new-to-docker"},"Tips for People New To Docker"),(0,r.kt)("h3",{id:"accessing-logs"},"Accessing Logs"),(0,r.kt)("p",null,"It is highly recommended you use ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop's dashboard")," to access service logs. If you double click an image it will pull up the logs for you."),(0,r.kt)("h3",{id:"quickstart-conflicts"},"Quickstart Conflicts"),(0,r.kt)("p",null,"If you run quickstart, use ",(0,r.kt)("inlineCode",{parentName:"p"},"./gradlew quickstartDebug")," to return to using the debugging containers."),(0,r.kt)("h3",{id:"docker-prune"},"Docker Prune"),(0,r.kt)("p",null,"If you run into disk space issues and prune the images & containers you will need to execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"./gradlew quickstartDebug"),"\nagain."),(0,r.kt)("h3",{id:"system-update"},"System Update"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-upgrade")," job will not block the startup of the other containers as it normally\ndoes in a quickstart or production environment. Normally this is process is required when making updates which\nrequire Elasticsearch reindexing. If reindexing is required, the UI will render but may temporarily return errors\nuntil this job finishes."),(0,r.kt)("h3",{id:"running-a-specific-service"},"Running a specific service"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")," will launch all services in the configuration, including dependencies, unless they're already\nrunning. If you, for some reason, wish to change this behavior, check out these example commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml -f docker-compose-without-neo4j.m1.yml -f docker-compose.dev.yml up datahub-gms\n")),(0,r.kt)("p",null,"Will only start ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-gms")," and its dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml -f docker-compose-without-neo4j.m1.yml -f docker-compose.dev.yml up --no-deps datahub-gms\n")),(0,r.kt)("p",null,"Will only start ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-gms"),", without dependencies."))}p.isMDXComponent=!0}}]);