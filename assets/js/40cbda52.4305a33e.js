"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[89005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,f=h["".concat(i,".").concat(d)]||h[d]||p[d]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(83117),o=(n(67294),n(3905));const s={title:"Load testing with Locust",slug:"/perf-test",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/perf-test/README.md"},a="Load testing with Locust",l={unversionedId:"perf-test/README",id:"perf-test/README",title:"Load testing with Locust",description:"Locust is an open-source, python-based, easy-to-use load testing tool. It provides an interface to",source:"@site/genDocs/perf-test/README.md",sourceDirName:"perf-test",slug:"/perf-test",permalink:"/docs/next/perf-test",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/perf-test/README.md",tags:[],version:"current",frontMatter:{title:"Load testing with Locust",slug:"/perf-test",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/perf-test/README.md"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Locustfiles",id:"locustfiles",level:2},{value:"Load testing",id:"load-testing",level:2},{value:"Web interface",id:"web-interface",level:3},{value:"Command Line",id:"command-line",level:3},{value:"Reference",id:"reference",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-testing-with-locust"},"Load testing with Locust"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://locust.io/"},"Locust")," is an open-source, python-based, easy-to-use load testing tool. It provides an interface to\nspawn multiple users (swarm) that behave according to pre-defined python code."),(0,o.kt)("p",null,"In this directory, we provide some example locust configs that send common requests to DataHub GMS (ingest, search,\nbrowse, and graph)."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To run the example configs, you need to first install locust by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install locust\n")),(0,o.kt)("p",null,"Note that it supports python versions 3.6 and up. Refer to\nthis ",(0,o.kt)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/installation.html"},"guide")," for more details."),(0,o.kt)("p",null,"You will also need to import requirements in order to run the Locustfile scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install -r requirements.txt\n")),(0,o.kt)("h2",{id:"locustfiles"},"Locustfiles"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/perf-test/locustfiles"},"Locustfiles")," define how the users will behave once they are spawned. Refer to\nthis ",(0,o.kt)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/writing-a-locustfile.html"},"doc")," on how to write one."),(0,o.kt)("p",null,"Here, we have defined 4 common requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ingest: ingests a dataset with a random URN with properties, browse paths, and ownership aspects filled out"),(0,o.kt)("li",{parentName:"ul"},'Search: searches datasets with query "test"'),(0,o.kt)("li",{parentName:"ul"},'Browse: browses datasets with path "/perf/test"'),(0,o.kt)("li",{parentName:"ul"},'Graph: gets datasets owned by user "common"')),(0,o.kt)("p",null,"We will continue adding more as more use cases arise, but feel free to play around with the default behavior to create a\nload test that matches your request pattern."),(0,o.kt)("h2",{id:"load-testing"},"Load testing"),(0,o.kt)("p",null,"There are two ways to run locust. One is through the web interface, and the other is on the command line."),(0,o.kt)("h3",{id:"web-interface"},"Web interface"),(0,o.kt)("p",null,"To run through the web interface, you can run the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"locust -f <<path-to-locustfile>>\n")),(0,o.kt)("p",null,"For instance, to run ingest load testing, run the following from root of repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"locust -f perf-test/locustfiles/ingest.py\n")),(0,o.kt)("p",null,"This will set up the web interface in http://localhost:8089 (unless the port is already taken). Once you click into it,\nyou should see the following"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/locust-example.png"})),(0,o.kt)("p",null,'Input the number of users you would like to spawn and the spawn rate. Point the host to the deployed DataHub GMS (\nlocally, it should be http://localhost:8080). Click on the "Start swarming" button to start the load test.'),(0,o.kt)("p",null,"The web interface should give you statistics on number of requests, latency, response rate, etc."),(0,o.kt)("h3",{id:"command-line"},"Command Line"),(0,o.kt)("p",null,"To run on the command line, run the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"locust -f <<path-to-locustfile>> --headless -H <<host>> -u <<num-users>> -r <<spawn-rate>>\n")),(0,o.kt)("p",null,"For instance, to replicate the setting in the previous section, run the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"locust -f perf-test/locustfiles/ingest.py --headless -H http://localhost:8080 -u 100 -r 100\n")),(0,o.kt)("p",null,"It should start the load test and print out statistics on the command line."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"For more details on how to run locust and various configs, refer to\nthis ",(0,o.kt)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/configuration.html"},"doc")),(0,o.kt)("p",null,"To customize the user behavior by modifying the locustfiles, refer to\nthis ",(0,o.kt)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/writing-a-locustfile.html"},"doc")))}p.isMDXComponent=!0}}]);