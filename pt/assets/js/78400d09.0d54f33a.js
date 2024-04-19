"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[15],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>g});var n=r(7294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,s=function(t,e){if(null==t)return{};var r,n,s={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=p(r),m=s,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:e},c),{},{components:r})):n.createElement(g,i({ref:e},c))}));function g(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[u]="string"==typeof t?t:s,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2831:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const o={id:"itoss-reporting-services",title:"ITOSS Reporting Basic Administration"},i=void 0,a={unversionedId:"documents/Administrator tasks/itoss-reporting-services",id:"documents/Administrator tasks/itoss-reporting-services",title:"ITOSS Reporting Basic Administration",description:"This component of the platform provides support for advanced reporting functions in ITOSS.",source:"@site/docs/documents/04-Administrator tasks/03-itoss-reporting.md",sourceDirName:"documents/04-Administrator tasks",slug:"/documents/Administrator tasks/itoss-reporting-services",permalink:"/pt/docs/documents/Administrator tasks/itoss-reporting-services",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"itoss-reporting-services",title:"ITOSS Reporting Basic Administration"},sidebar:"tutorialSidebar",previous:{title:"ITOSS Collector Basic Administration",permalink:"/pt/docs/documents/Administrator tasks/itoss-collector-services"},next:{title:"ITOSS Backup and restore",permalink:"/pt/docs/documents/Administrator tasks/backup-restore"}},l={},p=[{value:"Directories and Logs",id:"directories-and-logs",level:3},{value:"Status, Start, and Stop",id:"status-start-and-stop",level:3}],c={toc:p},u="wrapper";function d(t){let{components:e,...r}=t;return(0,s.kt)(u,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This component of the platform provides support for advanced reporting functions in ITOSS."),(0,s.kt)("h3",{id:"directories-and-logs"},"Directories and Logs"),(0,s.kt)("p",null,"Base directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/app/itoss/itoss-reporting\n")),(0,s.kt)("p",null,"Binary directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/app/itoss/bin\n")),(0,s.kt)("p",null,"Log file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/app/itoss/itoss-reporting/logs/itoss-reporting.log\n")),(0,s.kt)("p",null,"Configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/app/itoss/itoss-reporting/config/application.properties\n")),(0,s.kt)("p",null,"Statistics:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://<reporting_endpoint>/stats |python -m json.tool\n")),(0,s.kt)("h3",{id:"status-start-and-stop"},"Status, Start, and Stop"),(0,s.kt)("p",null,"ITOSS Reporting status:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status itoss-reporting\n")),(0,s.kt)("p",null,"Start ITOSS Reporting:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start itoss-reporting\n")),(0,s.kt)("p",null,"Stop ITOSS Reporting:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop itoss-reporting\n")))}d.isMDXComponent=!0}}]);