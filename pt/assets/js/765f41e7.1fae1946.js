"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[4604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,d=c["".concat(i,".").concat(g)]||c[g]||m[g]||s;return n?l.createElement(d,r(r({ref:t},u),{},{components:n})):l.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const s={id:"ubuntu-installation",title:"ITOSS installation (ubuntu 22.04 LTS)"},r='Basic ITOSS Installation on Ubuntu Server 22.04 LTS"',o={unversionedId:"documents/Install/Ubuntu/ubuntu-installation",id:"documents/Install/Ubuntu/ubuntu-installation",title:"ITOSS installation (ubuntu 22.04 LTS)",description:"This basic installation guide covers all essential functions installed on one server, intended for demonstrations, testing, or small environments with up to 100 managed components (orientative number for standard operation).",source:"@site/docs/documents/02-Install/01-Ubuntu/install-ubuntu.md",sourceDirName:"documents/02-Install/01-Ubuntu",slug:"/documents/Install/Ubuntu/ubuntu-installation",permalink:"/pt/docs/documents/Install/Ubuntu/ubuntu-installation",draft:!1,tags:[],version:"current",frontMatter:{id:"ubuntu-installation",title:"ITOSS installation (ubuntu 22.04 LTS)"},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/pt/docs/documents/concepts"},next:{title:"Access to the user interface",permalink:"/pt/docs/documents/Install/access"}},i={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Operating System",id:"operating-system",level:2},{value:"Previous Steps",id:"previous-steps",level:3},{value:"Installation of Postgres + TimeScaleDB",id:"installation-of-postgres--timescaledb",level:3},{value:"As root or postgres user:",id:"as-root-or-postgres-user",level:4},{value:"Installation WEB Server (NGINX)",id:"installation-web-server-nginx",level:3},{value:"ITOSS Installation and Configuration",id:"itoss-installation-and-configuration",level:2},{value:"Installing ITOSS",id:"installing-itoss",level:3},{value:"Installing PowerShell (optional)",id:"installing-powershell-optional",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-itoss-installation-on-ubuntu-server-2204-lts"},'Basic ITOSS Installation on Ubuntu Server 22.04 LTS"'),(0,a.kt)("p",null,"This basic installation guide covers all essential functions installed on one server, intended for demonstrations, testing, or small environments with up to 100 managed components (orientative number for standard operation)."),(0,a.kt)("p",null,"This guide includes the installation of the following functions and/or software packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Database - Postgresql 14 + Timescale"),(0,a.kt)("li",{parentName:"ul"},"Web Server - Nginx"),(0,a.kt)("li",{parentName:"ul"},"ITOSS Manager"),(0,a.kt)("li",{parentName:"ul"},"ITOSS Collector")),(0,a.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.kt)("p",null,"The minimum hardware requirements to run all central functions of ITOSS on a virtual server are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"8 CPUs"),(0,a.kt)("li",{parentName:"ul"},"16 GB RAM"),(0,a.kt)("li",{parentName:"ul"},"50 GB of disk space.")),(0,a.kt)("h2",{id:"operating-system"},"Operating System"),(0,a.kt)("p",null,"This guide is oriented and tested on Ubuntu Server 22.04 LTS, a dedicated server for ITOSS on a clean installation is recommended."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"previous-steps"},"Previous Steps"),(0,a.kt)("h3",{id:"installation-of-postgres--timescaledb"},"Installation of Postgres + TimeScaleDB"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Follow the vendor instructions for an updated installation, the following instructions may not be updated: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.timescale.com/self-hosted/latest/install/installation-linux/"},"https://docs.timescale.com/self-hosted/latest/install/installation-linux/"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"At the command prompt, as root, add the PostgreSQL third party repository to get the latest PostgreSQL packages:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt install gnupg postgresql-common apt-transport-https lsb-release wget\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run the PostgreSQL repository setup script:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/share/postgresql-common/pgdg/apt.postgresql.org.sh\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add the TimescaleDB third party repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packagecloud.io/timescale/timescaledb/ubuntu/ $(lsb_release -c -s) main" | sudo tee /etc/apt/sources.list.d/timescaledb.list\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Install TimescaleDB GPG key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget --quiet -O - https://packagecloud.io/timescale/timescaledb/gpgkey | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/timescaledb.gpg\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Update your local repository list:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt update\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Install TimescaleDB:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install timescaledb-2-postgresql-14=2.14.2~ubuntu22.04\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Install TimescaleDB client:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\napt-get install postgresql-client\n")),(0,a.kt)("h4",{id:"as-root-or-postgres-user"},"As root or postgres user:"),(0,a.kt)("p",null,"Add this line to the file /etc/postgresql/14/main/postgresql.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"shared_preload_libraries = 'timescaledb'\n")),(0,a.kt)("p",null,"In the file /etc/postgresql/14/main/pg_hba.conf edit the line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"local all all peer\n")),(0,a.kt)("p",null,'Replace "peer" with "trust"'),(0,a.kt)("p",null,"Restart the postgresql service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart postgresql\n")),(0,a.kt)("h3",{id:"installation-web-server-nginx"},"Installation WEB Server (NGINX)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For more information: ",(0,a.kt)("a",{parentName:"em",href:"https://nginx.org/en/linux_packages.html#Ubuntu"},"https://nginx.org/en/linux_packages.html#Ubuntu"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install required packages")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Import nginx official key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Verify key (optional)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Configure stable version repository.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Configure nginx package priority")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'echo -e "Package: *\\nPin: origin nginx.org\\nPin: release o=nginx\\nPin-Priority: 900\\n" | sudo tee /etc/apt/preferences.d/99nginx\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Install nginx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update\nsudo apt install nginx\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"itoss-installation-and-configuration"},"ITOSS Installation and Configuration"),(0,a.kt)("h3",{id:"installing-itoss"},"Installing ITOSS"),(0,a.kt)("p",null,"Follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Download the software to the "/" directory')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/resources"},"Go to Resources"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Unzip the itoss-v5.2.tar.gz archive")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /\ntar xvf itoss-v7.0.0.tar.gz\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Configure nginx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cp -rf /app/setup/default.conf /etc/nginx/conf.d/default.conf 2>/dev/null\nsudo systemctl enable nginx\nsudo systemctl start nginx\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Create the database and load the initial data.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su - postgres\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"psql\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE USER itoss WITH PASSWORD 'admin';\nCREATE DATABASE itossdb;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\\c itossdb;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ALTER DATABASE itossdb OWNER TO itoss;\nALTER SCHEMA public OWNER TO itoss;\nCREATE EXTENSION IF NOT EXISTS timescaledb;\nSELECT timescaledb_pre_restore();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\\q\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"psql -d itossdb -f /app/setup/itossdb-initial.sql\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"psql\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\\c itossdb\nSELECT timescaledb_post_restore();\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Create ITOSS services and start the application")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cp /app/setup/*.service /etc/systemd/system/\nsudo systemctl enable itoss-manager.service\nsudo systemctl enable itoss-collector.service\nsudo systemctl enable itoss-reporting.service\nsudo systemctl start itoss-manager\nsudo systemctl start itoss-collector.service\nsudo systemctl start itoss-reporting.service\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"installing-powershell-optional"},"Installing PowerShell (optional)"),(0,a.kt)("p",null,"In cases where you need to manage components through PowerShell (for example Microsoft ecosystem)."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For more information:\n[",(0,a.kt)("a",{parentName:"em",href:"https://docs.microsoft.com/en-us/powershell/%5Bhttps://docs.microsoft.com/en-us/powershell/scripting/install/install-ubuntu?view=powershell-7.2%5D(https://docs.microsoft.com/en-us/powershell/scripting/install/install-ubuntu?view=powershell-7.2)"},"https://docs.microsoft.com/en-us/powershell/[https://docs.microsoft.com/en-us/powershell/scripting/install/install-ubuntu?view=powershell-7.2](https://docs.microsoft.com/en-us/powershell/scripting/install/install-ubuntu?view=powershell-7.2)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install -y wget apt-transport-https software-properties-common\nwget -q [<https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb](https://packages.microsoft.com/config/ubuntu/$(lsb_release%20-rs)/packages-microsoft-prod.deb)\nsudo dpkg -i packages-microsoft-prod.deb\nsudo apt-get update\nsudo apt-get install -y powershell\nsudo apt-get install -y gss-ntlmssp\n")))}m.isMDXComponent=!0}}]);