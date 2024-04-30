"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[4945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"create a new component and start managing",title:"Create a new Linux Component and start managing"},l=void 0,i={unversionedId:"documents/Tutorials/create a new component and start managing",id:"documents/Tutorials/create a new component and start managing",title:"Create a new Linux Component and start managing",description:"#### Requirements:",source:"@site/docs/documents/06-Tutorials/01-Create a new Component and start monitoring.md",sourceDirName:"documents/06-Tutorials",slug:"/documents/Tutorials/create a new component and start managing",permalink:"/docs/documents/Tutorials/create a new component and start managing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"create a new component and start managing",title:"Create a new Linux Component and start managing"},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL Database",permalink:"/docs/documents/Managed technologies/Databases/PostgreSQL"}},s={},c=[],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"requirements"},"Requirements:"),(0,o.kt)("p",{parentName:"blockquote"},"Monitoring of linux systems is done through ssh (22 default port unless changed). SSHD daemon >must be up and running on the target system, and 22 port connection allowed between the >collector and the linux host.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configuration -> Component -> Click on the  ",(0,o.kt)("span",{class:"material-symbols-outlined"},"\nadd_box")," icon."),(0,o.kt)("li",{parentName:"ol"},'Select "Linux" on the component type dialog.'),(0,o.kt)("li",{parentName:"ol"},'Select "TEST" for the new component\'s environment.'),(0,o.kt)("li",{parentName:"ol"},"Fill up the ",(0,o.kt)("em",{parentName:"li"},"Hostname"),", ",(0,o.kt)("em",{parentName:"li"},"IP"),", ",(0,o.kt)("em",{parentName:"li"},"User"),", ",(0,o.kt)("em",{parentName:"li"},"Timezone")," and ",(0,o.kt)("em",{parentName:"li"},"Password")," fields for the Linux component you want to monitor. In the ",(0,o.kt)("em",{parentName:"li"},"Authentication type"),' field just leave the word "PASSWORD".'),(0,o.kt)("li",{parentName:"ol"},"Click the  ",(0,o.kt)("span",{class:"material-symbols-outlined"},"\nadd_box"),' icon and fill the company data. On the *Management profile* field, select "Linux basic", and select "QA-INTERNAL" as the collector that will monitor the component.'),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("span",{class:"material-symbols-outlined"},"\nsave"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"component",src:n(325).Z,width:"1916",height:"676"}),"\n7. Done!"),(0,o.kt)("p",null,"The list of created components will be displayed with the component you've just created. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Press on the ",(0,o.kt)("em",{parentName:"li"},"Run all monitors")," ",(0,o.kt)("span",{class:"material-symbols-outlined"},"\nplaylist_add_check")," icon to check if all monitors of the management profile are able to run and collect data. A new dialog will display the results. Check if there was any error.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"runall",src:n(9032).Z,width:"286",height:"241"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'If everything went fine, change the state of the component to "OPERATIONS" pressing the last icon.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"runalloutput",src:n(5437).Z,width:"1052",height:"468"})),(0,o.kt)("p",null,"Now you will be able to see your component health on the dashboards."))}u.isMDXComponent=!0},325:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/component-fe63366eea9d7e2d18fa809d7b51c299.png"},9032:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runall-e4cc077932be0a14964e503e2f2a542b.png"},5437:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runalloutput-fa1f72f8d4e02c4752dd38a0fc96fdea.png"}}]);