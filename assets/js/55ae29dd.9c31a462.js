"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Managed Windows Server Tasks"},s=void 0,i={unversionedId:"documents/Managed technologies/Microsoft Windows Server/Managed Windows Server Tasks",id:"documents/Managed technologies/Microsoft Windows Server/Managed Windows Server Tasks",title:"Managed Windows Server Tasks",description:"Remote management of Microsoft Windows (and its entire related ecosystem) can be implemented using either of these two transport protocols:",source:"@site/docs/documents/05-Managed technologies/Microsoft Windows Server/01-Managed Windows Server Tasks.md",sourceDirName:"documents/05-Managed technologies/Microsoft Windows Server",slug:"/documents/Managed technologies/Microsoft Windows Server/Managed Windows Server Tasks",permalink:"/docs/documents/Managed technologies/Microsoft Windows Server/Managed Windows Server Tasks",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Managed Windows Server Tasks"},sidebar:"tutorialSidebar",previous:{title:"Sybase Database",permalink:"/docs/documents/Managed technologies/Databases/Sybase"},next:{title:"Create a new Linux Component and start managing",permalink:"/docs/documents/Tutorials/create a new component and start managing"}},l={},c=[{value:"OPTIONAL but recommended:",id:"optional-but-recommended",level:3},{value:"More info",id:"more-info",level:3},{value:"Command to set the default shell to be powershell.exe:",id:"command-to-set-the-default-shell-to-be-powershellexe",level:3},{value:"More info",id:"more-info-1",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Remote management of Microsoft Windows (and its entire related ecosystem) can be implemented using either of these two transport protocols:\nWSMan (WINRM). This option is supported for communication between Windows systems.\nOpenSSH. This option is implemented in ITOSS, allowing interoperability between different operating systems and being more efficient.\nMicrosoft Windows Management in ITOSS\nThe operational management of Microsoft Windows in ITOSS is implemented using the OpenSSH protocol. To enable these features in Windows management objects, follow these steps (from PowerShell terminal as an administrator user):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable remote access for the administrators group")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"New-itemproperty -name LocalAccountTokenFilterPolicy -path HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System -propertyType DWord -value 1\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install OpenSSh server")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Start the sshd service")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Start-Service sshd\n")),(0,o.kt)("h3",{id:"optional-but-recommended"},"OPTIONAL but recommended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-Service -Name sshd -StartupType 'Automatic'\n")),(0,o.kt)("h3",{id:"more-info"},"More info"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell"},"https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell")),(0,o.kt)("h3",{id:"command-to-set-the-default-shell-to-be-powershellexe"},"Command to set the default shell to be powershell.exe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'New-ItemProperty -Path "HKLM:\\SOFTWARE\\OpenSSH" -Name DefaultShell -Value "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -PropertyType String\n')),(0,o.kt)("h3",{id:"more-info-1"},"More info"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_server_configuration"},"https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_server_configuration")))}m.isMDXComponent=!0}}]);