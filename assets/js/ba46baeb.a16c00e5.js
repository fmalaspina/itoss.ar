"use strict";(self.webpackChunkitoss_web_site=self.webpackChunkitoss_web_site||[]).push([[600],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"instalacion ubuntu",title:"Gu\xeda de instalaci\xf3n ITOSS (ubuntu 22.04 LTS)"},o="Instalaci\xf3n b\xe1sica de ITOSS en Ubuntu Server 22.04 LTS",c={unversionedId:"documentos/Iniciando con ITOSS/Instalaci\xf3n/Ubuntu/instalacion ubuntu",id:"documentos/Iniciando con ITOSS/Instalaci\xf3n/Ubuntu/instalacion ubuntu",title:"Gu\xeda de instalaci\xf3n ITOSS (ubuntu 22.04 LTS)",description:"La instalaci\xf3n b\xe1sica, todas las funciones esenciales son instaladas en un mismo servidor, tiene como objeto utilizarse para demostraciones, pruebas o ambientes peque\xf1os de hasta 100 componentes gestionados (n\xfamero orientativo para una operaci\xf3n est\xe1ndar).",source:"@site/docs\\documentos\\02-Iniciando con ITOSS\\01-Instalaci\xf3n\\02-Ubuntu\\install-ubuntu.md",sourceDirName:"documentos/02-Iniciando con ITOSS/01-Instalaci\xf3n/02-Ubuntu",slug:"/documentos/Iniciando con ITOSS/Instalaci\xf3n/Ubuntu/instalacion ubuntu",permalink:"/docs/documentos/Iniciando con ITOSS/Instalaci\xf3n/Ubuntu/instalacion ubuntu",draft:!1,tags:[],version:"current",frontMatter:{id:"instalacion ubuntu",title:"Gu\xeda de instalaci\xf3n ITOSS (ubuntu 22.04 LTS)"},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n b\xe1sica de ITOSS en Linux basados en Redhat",permalink:"/docs/documentos/Iniciando con ITOSS/Instalaci\xf3n/Redhat/install-redhat"},next:{title:"Backup y restore ITOSS",permalink:"/docs/documentos/Gu\xedas/Administraci\xf3n/backup y restore"}},u={},p=[{value:"Requisitos de hardware",id:"requisitos-de-hardware",level:2},{value:"Sistema operativo",id:"sistema-operativo",level:2},{value:"Pasos previos",id:"pasos-previos",level:2},{value:"Instalaci\xf3n de Postgres + TimeScaleDB",id:"instalaci\xf3n-de-postgres--timescaledb",level:3},{value:"Instalaci\xf3n WEB Server (NGINX)",id:"instalaci\xf3n-web-server-nginx",level:3},{value:"Instalaci\xf3n y configuraci\xf3n de ITOSS",id:"instalaci\xf3n-y-configuraci\xf3n-de-itoss",level:2},{value:"Instalar ITOSS",id:"instalar-itoss",level:3},{value:"Instalaci\xf3n de Powershell (opcional)",id:"instalaci\xf3n-de-powershell-opcional",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instalaci\xf3n-b\xe1sica-de-itoss-en-ubuntu-server-2204-lts"},"Instalaci\xf3n b\xe1sica de ITOSS en Ubuntu Server 22.04 LTS"),(0,r.kt)("p",null,"La instalaci\xf3n b\xe1sica, todas las funciones esenciales son instaladas en un mismo servidor, tiene como objeto utilizarse para demostraciones, pruebas o ambientes peque\xf1os de hasta 100 componentes gestionados (n\xfamero orientativo para una operaci\xf3n est\xe1ndar)."),(0,r.kt)("p",null,"Este gu\xeda incluye la instalaci\xf3n de las siguientes funciones y/o paquetes de software:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Base de datos -  Postgresql 14 + Timescale"),(0,r.kt)("li",{parentName:"ul"},"Web Server - ngnix"),(0,r.kt)("li",{parentName:"ul"},"ITOSS Manager"),(0,r.kt)("li",{parentName:"ul"},"ITOSS Collector")),(0,r.kt)("h2",{id:"requisitos-de-hardware"},"Requisitos de hardware"),(0,r.kt)("p",null,"Los requerimientos de hardware m\xednimos para ejecutar todas las funciones centrales de ITOSS en un servidor virtual son:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8 CPU  "),(0,r.kt)("li",{parentName:"ul"},"16 RAM"),(0,r.kt)("li",{parentName:"ul"},"50 GB de disco.")),(0,r.kt)("h2",{id:"sistema-operativo"},"Sistema operativo"),(0,r.kt)("p",null,"Esta gu\xeda esta orientada y probada sobre Ubuntu Server 22.04 LTS, recomendamos un servidor dedicado para ITOSS y sobre una instalaci\xf3n limpia.  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"pasos-previos"},"Pasos previos"),(0,r.kt)("h3",{id:"instalaci\xf3n-de-postgres--timescaledb"},"Instalaci\xf3n de Postgres + TimeScaleDB"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configurar repositorios de TI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -s https://packagecloud.io/install/repositories/timescale/timescaledb/script.deb.sh | sudo bash \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Actualizar repositorios  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update \n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Instalar postgres + timeScaleDB")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install timescaledb-2-postgresql-14 \nsudo  echo \"shared_preload_libraries = 'timescaledb'\" >> /etc/postgresql/14/main/postgresql.conf \nsudo  systemctl restart postgresql \n")),(0,r.kt)("h3",{id:"instalaci\xf3n-web-server-nginx"},"Instalaci\xf3n WEB Server (NGINX)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Para m\xe1s informaci\xf3n: _",(0,r.kt)("a",{parentName:"em",href:"https://nginx.org/en/linux_packages.html#Ubuntu"},"https://nginx.org/en/linux_packages.html#Ubuntu"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Instalar paquetes requeridos")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Importar clave oficial de nginx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null \n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Verficar clave (opcional)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg \n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Configurar repositorio de la versi\xf3n estable.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list \n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Configurar prioridad de paquete nginx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo -e "Package: *\\nPin: origin nginx.org\\nPin: release o=nginx\\nPin-Priority: 900\\n" | sudo tee /etc/apt/preferences.d/99nginx \n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Instalar nginx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update\nsudo apt install nginx\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"instalaci\xf3n-y-configuraci\xf3n-de-itoss"},"Instalaci\xf3n y configuraci\xf3n de ITOSS"),(0,r.kt)("h3",{id:"instalar-itoss"},"Instalar ITOSS"),(0,r.kt)("p",null,"Realizar los siguientes pasos:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Descargar el software en el directorio "/"'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/descargas"},"Ir a Descargas"))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Descomprimir el archive itossbasic-v4-ubuntu.tar"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /\ntar xvf itoss-v5.1.0.tar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configurar ngnix  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cp -rf /app/setup/default.conf /etc/nginx/conf.d/default.conf 2>/dev/null \nsudo systemctl enable nginx \nsudo systemctl start nginx \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Crear de base datos y carga de datos inicial. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo su \u2013 postgres \n$ psql \nCREATE USER itoss WITH PASSWORD 'admin'; \nCREATE DATABASE itossdb; \n\\c itossdb; \nALTER DATABASE itossdb OWNER TO itoss; \nALTER SCHEMA public OWNER TO itoss; \nCREATE EXTENSION IF NOT EXISTS timescaledb; \nSELECT timescaledb_pre_restore(); \n\\q\npsql -d itossdb -f /app/setup/itossdb-initial.sql\npsql\nSELECT timescaledb_post_restore(); \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Crear servicios de ITOSS e iniciar la aplicaci\xf3n "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp /app/setup/*.service /etc/systemd/system/ \nsudo systemctl enable itoss-manager.service \nsudo systemctl enable itoss-collector.service \nsudo systemctl enable itoss-reporting.service\nsudo systemctl start itoss-manager \nsudo systemctl start itoss-collector.service \nsudo systemctl start itoss-reporting.service \n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instalaci\xf3n-de-powershell-opcional"},"Instalaci\xf3n de Powershell (opcional)"),(0,r.kt)("p",null,"En los casos que requiera gestionar componentes a trav\xe9s de Powershell ( por ejemplo  del ecosistema Microsoft) ."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Para m\xe1s informaci\xf3n:\n",(0,r.kt)("a",{parentName:"em",href:"https://docs.microsoft.com/en-us/powershell/scripting/install/install-ubuntu?view=powershell-7.2"},"https://docs.microsoft.com/en-us/powershell/scripting/install/install-ubuntu?view=powershell-7.2"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install -y wget apt-transport-https software-properties-common\nwget -q[ <https://packages.microsoft.com/config/ubuntu/>$(lsb_release -rs)/packages-microsoft-prod.deb](https://packages.microsoft.com/config/ubuntu/$(lsb_release%20-rs)/packages-microsoft-prod.deb)\nsudo dpkg -i packages-microsoft-prod.deb\nsudo apt-get update\nsudo apt-get install -y powershell\nsudo apt-get install -y gss-ntlmssp\n")))}m.isMDXComponent=!0}}]);