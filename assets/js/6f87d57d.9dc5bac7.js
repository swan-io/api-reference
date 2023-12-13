"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,p=u["".concat(o,".").concat(g)]||u[g]||f[g]||r;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:i,l[1]=d;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50950:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(83117),i=n(67294),r=n(3905);const l={id:"digital-card-declined-status-info",title:"DigitalCardDeclinedStatusInfo",hide_table_of_contents:!1},d=void 0,o={unversionedId:"objects/digital-card-declined-status-info",id:"objects/digital-card-declined-status-info",title:"DigitalCardDeclinedStatusInfo",description:"Digital Card Declined Status Information",source:"@site/docs/objects/digital-card-declined-status-info.mdx",sourceDirName:"objects",slug:"/objects/digital-card-declined-status-info",permalink:"/objects/digital-card-declined-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/digital-card-declined-status-info.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-declined-status-info",title:"DigitalCardDeclinedStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DigitalCardConsentPendingStatusInfo",permalink:"/objects/digital-card-consent-pending-status-info"},next:{title:"DigitalCardEdge",permalink:"/objects/digital-card-edge"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardDeclinedStatusInfo.<b>status</b></code><Bullet /><code>PendingDigitalCardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-digitalcarddeclinedstatusinfobstatusbcodependingdigitalcardstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PendingDigitalCardStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"pendingdigitalcardstatusinfo-",level:4}],u=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:c,Bullet:u,SpecifiedBy:f,Badge:g},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Digital Card Declined Status Information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type DigitalCardDeclinedStatusInfo implements PendingDigitalCardStatusInfo {\n  status: PendingDigitalCardStatus!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-digitalcarddeclinedstatusinfobstatusbcodependingdigitalcardstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardDeclinedStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/enums/pending-digital-card-status"},(0,r.kt)("inlineCode",{parentName:"a"},"PendingDigitalCardStatus!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Digital Card status (always Declined for type DigitalCardDeclinedStatusInfo).")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"pendingdigitalcardstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/interfaces/pending-digital-card-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PendingDigitalCardStatusInfo"))," ",(0,r.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pending Digital Card Status Information")))}y.isMDXComponent=!0}}]);