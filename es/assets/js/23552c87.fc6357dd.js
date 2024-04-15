"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"LDAP Configuration"},o=void 0,s={unversionedId:"documents/User tasks/Security/ldap-integration",id:"documents/User tasks/Security/ldap-integration",title:"LDAP Configuration",description:"Authentication of each user in the tool can be done in one of two ways: Internal or LDAP. In the case where the user is configured with internal authentication, the validation of the user's credentials is done by ITOSS. However, if authentication is done through LDAP, the password will be the one configured in LDAP. It is not possible to have both configurations for the same user at the same time.",source:"@site/docs/documents/03-User tasks/Security/01-ldap-integration.md",sourceDirName:"documents/03-User tasks/Security",slug:"/documents/User tasks/Security/ldap-integration",permalink:"/es/docs/documents/User tasks/Security/ldap-integration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"LDAP Configuration"},sidebar:"tutorialSidebar",previous:{title:"Condition and action fields and methods",permalink:"/es/docs/documents/User tasks/Management/Monitors/fields-and methods"},next:{title:"Password encryption",permalink:"/es/docs/documents/User tasks/Security/password-encryption"}},c={},l=[{value:"LDAP Integration Parameters",id:"ldap-integration-parameters",level:3},{value:"Enabling Users for LDAP Authentication",id:"enabling-users-for-ldap-authentication",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Authentication of each user in the tool can be done in one of two ways: Internal or LDAP. In the case where the user is configured with internal authentication, the validation of the user's credentials is done by ITOSS. However, if authentication is done through LDAP, the password will be the one configured in LDAP. It is not possible to have both configurations for the same user at the same time."),(0,a.kt)("h3",{id:"ldap-integration-parameters"},"LDAP Integration Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"For integration with the LDAP service, first, it is necessary to configure a the LDAP servers. In the ITOSS Manager, go to Security -> LDAP Servers, and click the ",(0,a.kt)("span",{class:"material-symbols-outlined"},"\nadd_box")," icon.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ldap-1",src:n(9686).Z,width:"457",height:"250"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Fill up the LDAP fields:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ldap-2",src:n(9837).Z,width:"779",height:"613"})),(0,a.kt)("h3",{id:"enabling-users-for-ldap-authentication"},"Enabling Users for LDAP Authentication"),(0,a.kt)("p",null,"To authenticate a user with the LDAP server, it is necessary to access the user manager and select Authenticator: LDAP. This way the authentication of the user will be delegated to the LDAP authenticator.\nHowever, if INTERNAL is selected, the tool ITOSS will authenticate and validate the password."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Go to Security / Users, edit the user and select "LDAP" in the Authenticator field:')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ldap-3",src:n(3454).Z,width:"907",height:"604"})))}p.isMDXComponent=!0},9686:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ldap-1-110e90814083349c6b2beafe26f236fd.png"},9837:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ldap-2-65d41f82855ea296934e63d84ddca37c.png"},3454:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ldap-3-69c7ac3965306198e4381ca160e5d367.png"}}]);