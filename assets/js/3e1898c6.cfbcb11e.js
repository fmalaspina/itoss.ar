"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[6584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,b=c["".concat(i,".").concat(u)]||c[u]||p[u]||o;return a?r.createElement(b,l(l({ref:t},d),{},{components:a})):r.createElement(b,l({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const o={title:"JDBC URL Formats common database vendors"},l=void 0,s={unversionedId:"documents/User tasks/Management/Metrics/JDBC URL Formats for Well-Known Database Vendors",id:"documents/User tasks/Management/Metrics/JDBC URL Formats for Well-Known Database Vendors",title:"JDBC URL Formats common database vendors",description:"In order to create Database metrics you must follow theese standards for jdbc url connection strings. In any case, follow the database vendor documentations.",source:"@site/docs/documents/03-User tasks/Management/Metrics/JDBC URL Formats for Well-Known Database Vendors.md",sourceDirName:"documents/03-User tasks/Management/Metrics",slug:"/documents/User tasks/Management/Metrics/JDBC URL Formats for Well-Known Database Vendors",permalink:"/docs/documents/User tasks/Management/Metrics/JDBC URL Formats for Well-Known Database Vendors",draft:!1,tags:[],version:"current",frontMatter:{title:"JDBC URL Formats common database vendors"},sidebar:"tutorialSidebar",previous:{title:"Add a new Workgroup",permalink:"/docs/documents/User tasks/Configuration/add workgroup"},next:{title:"Condition and action fields and methods",permalink:"/docs/documents/User tasks/Management/Monitors/fields-and methods"}},i={},m=[{value:"1. SAP HANA",id:"1-sap-hana",level:2},{value:"2. PostgreSQL",id:"2-postgresql",level:2},{value:"3. SQL Server",id:"3-sql-server",level:2},{value:"4. MySQL",id:"4-mysql",level:2},{value:"5. Oracle",id:"5-oracle",level:2},{value:"6. Sybase",id:"6-sybase",level:2}],d={toc:m},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In order to create Database metrics you must follow theese standards for jdbc url connection strings. In any case, follow the database vendor documentations."),(0,n.kt)("p",null,"Below are common JDBC URL formats for connecting to databases:"),(0,n.kt)("h2",{id:"1-sap-hana"},"1. SAP HANA"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"URL Format:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:sap://<host>:<port>/<database>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:sap://localhost:30015/mydatabase"))),(0,n.kt)("h2",{id:"2-postgresql"},"2. PostgreSQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"URL Format:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:postgresql://<host>:<port>/<database>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:postgresql://localhost:5432/mydatabase"))),(0,n.kt)("h2",{id:"3-sql-server"},"3. SQL Server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"URL Format:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:sqlserver://<host>:<port>;databaseName=<database>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:sqlserver://localhost:1433;databaseName=mydatabase"))),(0,n.kt)("h2",{id:"4-mysql"},"4. MySQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"URL Format:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:mysql://<host>:<port>/<database>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:mysql://localhost:3306/mydatabase"))),(0,n.kt)("h2",{id:"5-oracle"},"5. Oracle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"URL Format:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:oracle:thin:@<host>:<port>:<SID>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:oracle:thin:@localhost:1521:mydatabase"))),(0,n.kt)("h2",{id:"6-sybase"},"6. Sybase"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"URL Format:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:sybase:Tds:<host>:<port>/<database>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"jdbc:sybase:Tds:localhost:5000/mydatabase"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Remember to replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<host>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<port>"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"<database>")," with the appropriate values for your database setup. Additionally, ensure that you have the appropriate JDBC driver for each database in your project's classpath.")))}p.isMDXComponent=!0}}]);