"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[32356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(83117),i=(n(67294),n(3905));const o={title:"Configuring Azure Authentication for React App (OIDC)",slug:"/authentication/guides/sso/configure-oidc-react-azure",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react-azure.md"},r="Configuring Azure Authentication for React App (OIDC)",c={unversionedId:"docs/authentication/guides/sso/configure-oidc-react-azure",id:"version-0.10.5/docs/authentication/guides/sso/configure-oidc-react-azure",title:"Configuring Azure Authentication for React App (OIDC)",description:"Authored on 21/12/2021",source:"@site/versioned_docs/version-0.10.5/docs/authentication/guides/sso/configure-oidc-react-azure.md",sourceDirName:"docs/authentication/guides/sso",slug:"/authentication/guides/sso/configure-oidc-react-azure",permalink:"/docs/authentication/guides/sso/configure-oidc-react-azure",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react-azure.md",tags:[],version:"0.10.5",frontMatter:{title:"Configuring Azure Authentication for React App (OIDC)",slug:"/authentication/guides/sso/configure-oidc-react-azure",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react-azure.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Okta Authentication for React App (OIDC)",permalink:"/docs/authentication/guides/sso/configure-oidc-react-okta"},next:{title:"Metadata Service Authentication",permalink:"/docs/authentication/introducing-metadata-service-authentication"}},s={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Create an application registration in Microsoft Azure portal",id:"1-create-an-application-registration-in-microsoft-azure-portal",level:3},{value:"2. Configure Authentication (optional)",id:"2-configure-authentication-optional",level:3},{value:"3. Configure Certificates &amp; secrets",id:"3-configure-certificates--secrets",level:3},{value:"4. Configure API permissions",id:"4-configure-api-permissions",level:3},{value:"5. Obtain Application (Client) ID",id:"5-obtain-application-client-id",level:3},{value:"6. Obtain Discovery URI",id:"6-obtain-discovery-uri",level:3},{value:"7. Configure <code>datahub-frontend</code> to enable OIDC authentication",id:"7-configure-datahub-frontend-to-enable-oidc-authentication",level:3},{value:"9. Restart <code>datahub-frontend-react</code> docker container",id:"9-restart-datahub-frontend-react-docker-container",level:3},{value:"Resources",id:"resources",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-azure-authentication-for-react-app-oidc"},"Configuring Azure Authentication for React App (OIDC)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Authored on 21/12/2021")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," server can be configured to authenticate users over OpenID Connect (OIDC). As such, it can be configured to\ndelegate authentication responsibility to identity providers like Microsoft Azure."),(0,i.kt)("p",null,"This guide will provide steps for configuring DataHub authentication using Microsoft Azure."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Even when OIDC is configured, the root user can still login without OIDC by going\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"/login")," URL endpoint. It is recommended that you don't use the default\ncredentials by mounting a different file in the front end container. To do this\nplease see ",(0,i.kt)("a",{parentName:"p",href:"/docs/authentication/guides/jaas"},"this guide")," to mount a custom user.props file for a JAAS authenticated deployment.")),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"1-create-an-application-registration-in-microsoft-azure-portal"},"1. Create an application registration in Microsoft Azure portal"),(0,i.kt)("p",null,"a. Using an account linked to your organization, navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Microsoft Azure Portal"),"."),(0,i.kt)("p",null,"b. Select ",(0,i.kt)("strong",{parentName:"p"},"App registrations"),", then ",(0,i.kt)("strong",{parentName:"p"},"New registration")," to register a new app."),(0,i.kt)("p",null,"c. Name your app registration and choose who can access your application."),(0,i.kt)("p",null,"d. Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Web")," as the ",(0,i.kt)("strong",{parentName:"p"},"Redirect URI")," type and enter the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://your-datahub-domain.com/callback/oidc\n")),(0,i.kt)("p",null,"If you are just testing locally, the following can be used: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/callback/oidc"),".\nAzure supports more than one redirect URI, so both can be configured at the same time from the ",(0,i.kt)("strong",{parentName:"p"},"Authentication")," tab once the registration is complete."),(0,i.kt)("p",null,"At this point, your app registration should look like the following:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/azure-setup-app-registration.png"})),(0,i.kt)("p",null,"e. Click ",(0,i.kt)("strong",{parentName:"p"},"Register"),"."),(0,i.kt)("h3",{id:"2-configure-authentication-optional"},"2. Configure Authentication (optional)"),(0,i.kt)("p",null,"Once registration is done, you will land on the app registration ",(0,i.kt)("strong",{parentName:"p"},"Overview")," tab.  On the left-side navigation bar, click on ",(0,i.kt)("strong",{parentName:"p"},"Authentication")," under ",(0,i.kt)("strong",{parentName:"p"},"Manage")," and add extra redirect URIs if need be (if you want to support both local testing and Azure deployments)."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/azure-setup-authentication.png"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."),(0,i.kt)("h3",{id:"3-configure-certificates--secrets"},"3. Configure Certificates & secrets"),(0,i.kt)("p",null,"On the left-side navigation bar, click on ",(0,i.kt)("strong",{parentName:"p"},"Certificates & secrets")," under ",(0,i.kt)("strong",{parentName:"p"},"Manage"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Select ",(0,i.kt)("strong",{parentName:"p"},"Client secrets"),", then ",(0,i.kt)("strong",{parentName:"p"},"New client secret"),".  Type in a meaningful description for your secret and select an expiry.  Click the ",(0,i.kt)("strong",{parentName:"p"},"Add")," button when you are done."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," of your newly create secret since Azure will never display its value afterwards."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/azure-setup-certificates-secrets.png"})),(0,i.kt)("h3",{id:"4-configure-api-permissions"},"4. Configure API permissions"),(0,i.kt)("p",null,"On the left-side navigation bar, click on ",(0,i.kt)("strong",{parentName:"p"},"API permissions")," under ",(0,i.kt)("strong",{parentName:"p"},"Manage"),".  DataHub requires the following four Microsoft Graph APIs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User.Read")," ",(0,i.kt)("em",{parentName:"li"},"(should be already configured)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"profile")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"email")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"openid"))),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Add a permission"),", then from the ",(0,i.kt)("strong",{parentName:"p"},"Microsoft APIs")," tab select ",(0,i.kt)("strong",{parentName:"p"},"Microsoft Graph"),", then ",(0,i.kt)("strong",{parentName:"p"},"Delegated permissions"),".  From the ",(0,i.kt)("strong",{parentName:"p"},"OpenId permissions")," category, select ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"openid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," and click ",(0,i.kt)("strong",{parentName:"p"},"Add permissions"),"."),(0,i.kt)("p",null,"At this point, you should be looking at a screen like the following:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/azure-setup-api-permissions.png"})),(0,i.kt)("h3",{id:"5-obtain-application-client-id"},"5. Obtain Application (Client) ID"),(0,i.kt)("p",null,"On the left-side navigation bar, go back to the ",(0,i.kt)("strong",{parentName:"p"},"Overview")," tab.  You should see the ",(0,i.kt)("inlineCode",{parentName:"p"},"Application (client) ID"),". Save its value for the next step."),(0,i.kt)("h3",{id:"6-obtain-discovery-uri"},"6. Obtain Discovery URI"),(0,i.kt)("p",null,"On the same page, you should see a ",(0,i.kt)("inlineCode",{parentName:"p"},"Directory (tenant) ID"),". Your OIDC discovery URI will be formatted as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://login.microsoftonline.com/{tenant ID}/v2.0/.well-known/openid-configuration\n")),(0,i.kt)("h3",{id:"7-configure-datahub-frontend-to-enable-oidc-authentication"},"7. Configure ",(0,i.kt)("inlineCode",{parentName:"h3"},"datahub-frontend")," to enable OIDC authentication"),(0,i.kt)("p",null,"a. Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/datahub-frontend/env/docker.env")),(0,i.kt)("p",null,"b. Add the following configuration values to the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'AUTH_OIDC_ENABLED=true\nAUTH_OIDC_CLIENT_ID=your-client-id\nAUTH_OIDC_CLIENT_SECRET=your-client-secret\nAUTH_OIDC_DISCOVERY_URI=https://login.microsoftonline.com/{tenant ID}/v2.0/.well-known/openid-configuration\nAUTH_OIDC_BASE_URL=your-datahub-url\nAUTH_OIDC_SCOPE="openid profile email"\n')),(0,i.kt)("p",null,"Replacing the placeholders above with the client id (step 5), client secret (step 3) and tenant ID (step 6) received from Microsoft Azure."),(0,i.kt)("h3",{id:"9-restart-datahub-frontend-react-docker-container"},"9. Restart ",(0,i.kt)("inlineCode",{parentName:"h3"},"datahub-frontend-react")," docker container"),(0,i.kt)("p",null,"Now, simply restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container to enable the integration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml  up datahub-frontend-react\n")),(0,i.kt)("p",null,"Navigate to your DataHub domain to see SSO in action."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc/"},"Microsoft identity platform and OpenID Connect protocol"))))}u.isMDXComponent=!0}}]);