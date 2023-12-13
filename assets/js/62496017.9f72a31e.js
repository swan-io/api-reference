"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[58004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(b,s(s({ref:t},u),{},{components:n})):a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<r;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79731:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(83117),o=n(67294),r=n(3905);const s={id:"not-reachable-consent-status-rejection",title:"NotReachableConsentStatusRejection",hide_table_of_contents:!1},c=void 0,l={unversionedId:"objects/not-reachable-consent-status-rejection",id:"objects/not-reachable-consent-status-rejection",title:"NotReachableConsentStatusRejection",description:"Rejection returned when consent status couldn't change",source:"@site/docs/objects/not-reachable-consent-status-rejection.mdx",sourceDirName:"objects",slug:"/objects/not-reachable-consent-status-rejection",permalink:"/objects/not-reachable-consent-status-rejection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/not-reachable-consent-status-rejection.mdx",tags:[],version:"current",frontMatter:{id:"not-reachable-consent-status-rejection",title:"NotReachableConsentStatusRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"NotFoundRejection",permalink:"/objects/not-found-rejection"},next:{title:"NotStartedIdentificationLevelStatusInfo",permalink:"/objects/not-started-identification-level-status-info"}},i={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>NotReachableConsentStatusRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notreachableconsentstatusrejectionbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotReachableConsentStatusRejection.<b>currentStatus</b></code><Bullet /><code>ConsentStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-notreachableconsentstatusrejectionbcurrentstatusbcodeconsentstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotReachableConsentStatusRejection.<b>unreachableStatus</b></code><Bullet /><code>ConsentStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-notreachableconsentstatusrejectionbunreachablestatusbcodeconsentstatus-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:u,Bullet:d,SpecifiedBy:p,Badge:m},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rejection returned when consent status couldn't change"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type NotReachableConsentStatusRejection implements Rejection {\n  message: String!\n  currentStatus: ConsentStatus\n  unreachableStatus: ConsentStatus\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-notreachableconsentstatusrejectionbmessagebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"NotReachableConsentStatusRejection.",(0,r.kt)("b",null,"message"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-notreachableconsentstatusrejectionbcurrentstatusbcodeconsentstatus-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"NotReachableConsentStatusRejection.",(0,r.kt)("b",null,"currentStatus"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/enums/consent-status"},(0,r.kt)("inlineCode",{parentName:"a"},"ConsentStatus"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-notreachableconsentstatusrejectionbunreachablestatusbcodeconsentstatus-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"NotReachableConsentStatusRejection.",(0,r.kt)("b",null,"unreachableStatus"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/enums/consent-status"},(0,r.kt)("inlineCode",{parentName:"a"},"ConsentStatus"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"rejection-"},(0,r.kt)("a",{parentName:"h4",href:"/interfaces/rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/unions/cancel-consent-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CancelConsentPayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/unions/grant-consent-with-server-signature-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"GrantConsentWithServerSignaturePayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);