"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[2914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),m=s,b=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const a={id:"backup-restore",title:"ITOSS Backup and restore"},o="ITOSS Database Backup and Restore",i={unversionedId:"documents/Administrator tasks/backup-restore",id:"documents/Administrator tasks/backup-restore",title:"ITOSS Backup and restore",description:"Backup",source:"@site/docs/documents/04-Administrator tasks/04-backup-restore.md",sourceDirName:"documents/04-Administrator tasks",slug:"/documents/Administrator tasks/backup-restore",permalink:"/pt/docs/documents/Administrator tasks/backup-restore",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"backup-restore",title:"ITOSS Backup and restore"},sidebar:"tutorialSidebar",previous:{title:"ITOSS Reporting Basic Administration",permalink:"/pt/docs/documents/Administrator tasks/itoss-reporting-services"},next:{title:"Microsoft SQL Server Database",permalink:"/pt/docs/documents/Managed technologies/Databases/Microsoft SQL Server"}},c={},p=[{value:"Backup",id:"backup",level:2},{value:"Restore",id:"restore",level:2}],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"itoss-database-backup-and-restore"},"ITOSS Database Backup and Restore"),(0,s.kt)("h2",{id:"backup"},"Backup"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pg_dump -Fc -f itossdb.sql itossdb\n")),(0,s.kt)("h2",{id:"restore"},"Restore"),(0,s.kt)("p",null,'Session started as user "postgres" and running the "psql" client.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE itossdb;\n\\c itossdb\nCREATE EXTENSION IF NOT EXISTS timescaledb;\nSELECT timescaledb_pre_restore();\n\n\\! pg_restore -Fc -d itossdb itossdb.sql\nSELECT timescaledb_post_restore();\n")))}d.isMDXComponent=!0}}]);