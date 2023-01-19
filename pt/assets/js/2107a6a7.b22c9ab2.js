"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[692],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2660:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={id:"backup y restore",title:"Backup y restore ITOSS"},i="Backup y restore de la base de datos de ITOSS",u={unversionedId:"documentos/Gu\xedas/Administraci\xf3n/backup y restore",id:"documentos/Gu\xedas/Administraci\xf3n/backup y restore",title:"Backup y restore ITOSS",description:"Backup",source:"@site/docs\\documentos\\03-Gu\xedas\\01-Administraci\xf3n\\backup-restore.md",sourceDirName:"documentos/03-Gu\xedas/01-Administraci\xf3n",slug:"/documentos/Gu\xedas/Administraci\xf3n/backup y restore",permalink:"/pt/docs/documentos/Gu\xedas/Administraci\xf3n/backup y restore",draft:!1,tags:[],version:"current",frontMatter:{id:"backup y restore",title:"Backup y restore ITOSS"},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda de instalaci\xf3n ITOSS (ubuntu 22.04 LTS)",permalink:"/pt/docs/documentos/Iniciando con ITOSS/Instalaci\xf3n/Ubuntu/instalacion ubuntu"},next:{title:"Gu\xeda de usuario",permalink:"/pt/docs/documentos/Gu\xedas/Soporte/guia-usuario"}},p={},l=[{value:"Backup",id:"backup",level:2},{value:"Restore",id:"restore",level:2}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup-y-restore-de-la-base-de-datos-de-itoss"},"Backup y restore de la base de datos de ITOSS"),(0,a.kt)("h2",{id:"backup"},"Backup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pg_dump -Fc -f itossdb.sql itossdb\n")),(0,a.kt)("h2",{id:"restore"},"Restore"),(0,a.kt)("p",null,"Iniciada la sesi\xf3n como usuario postgres y correriendo el cliente psql."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE itossdb;\n\\c itossdb\nCREATE EXTENSION IF NOT EXISTS timescaledb;\nSELECT timescaledb_pre_restore();\n\n\\! pg_restore -Fc -d itossdb itossdb.sql\nSELECT timescaledb_post_restore();\n")))}m.isMDXComponent=!0}}]);