"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[3101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Sybase Database"},s=void 0,i={unversionedId:"documents/Managed technologies/Databases/Sybase",id:"documents/Managed technologies/Databases/Sybase",title:"Sybase Database",description:"In order to create Database metrics you must follow these standards for JDBC URL connection strings. In any case, follow the database vendor documentations.",source:"@site/docs/documents/05-Managed technologies/Databases/Sybase.md",sourceDirName:"documents/05-Managed technologies/Databases",slug:"/documents/Managed technologies/Databases/Sybase",permalink:"/docs/documents/Managed technologies/Databases/Sybase",draft:!1,tags:[],version:"current",frontMatter:{title:"Sybase Database"},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL Database",permalink:"/docs/documents/Managed technologies/Databases/PostgreSQL"},next:{title:"Create a new Linux Component and start managing",permalink:"/docs/documents/Tutorials/create a new component and start managing"}},l={},c=[{value:"JDBC URL Format for Sybase",id:"jdbc-url-format-for-sybase",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to create Database metrics you must follow these standards for JDBC URL connection strings. In any case, follow the database vendor documentations."),(0,r.kt)("h3",{id:"jdbc-url-format-for-sybase"},"JDBC URL Format for Sybase"),(0,r.kt)("p",null,"URL: jdbc:sybase:Tds:{hostname}:{port}/{database}?{properties}"),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{hostname}"),": Database server hostname or IP address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{port}"),": Database server port number (default 5000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{database}"),": Database name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{properties}"),": Additional connection properties (optional).")),(0,r.kt)("p",null,"Encryption Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl={true|false}"),": Enables or disables SSL encryption."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl.trustStore={path_to_truststore}"),": Specifies the path to the truststore file for SSL encryption."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl.trustStorePassword={truststore_password}"),": Specifies the password for the truststore file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl.verifyServerCertificate={true|false}"),": Specifies whether to verify the server certificate for SSL encryption.")),(0,r.kt)("p",null,"Note:"),(0,r.kt)("p",null,"This document provides a general overview of common options. Refer to the official documentation of Sybase for the most accurate and up-to-date connection details and encryption options.\nAdditional vendor-specific properties and encryption configurations might be available."))}d.isMDXComponent=!0}}]);