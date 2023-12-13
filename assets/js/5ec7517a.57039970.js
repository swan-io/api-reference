"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=l,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27877:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(83117),l=a(67294),r=a(3905);const o={id:"complete-digital-card-status",title:"CompleteDigitalCardStatus",hide_table_of_contents:!1},i=void 0,d={unversionedId:"enums/complete-digital-card-status",id:"enums/complete-digital-card-status",title:"CompleteDigitalCardStatus",description:"Complete Digital Card Status",source:"@site/docs/enums/complete-digital-card-status.mdx",sourceDirName:"enums",slug:"/enums/complete-digital-card-status",permalink:"/enums/complete-digital-card-status",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/complete-digital-card-status.mdx",tags:[],version:"current",frontMatter:{id:"complete-digital-card-status",title:"CompleteDigitalCardStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CompanyType",permalink:"/enums/company-type"},next:{title:"ConsentPurpose",permalink:"/enums/consent-purpose"}},c={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CompleteDigitalCardStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-completedigitalcardstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompleteDigitalCardStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-completedigitalcardstatusbsuspendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompleteDigitalCardStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-completedigitalcardstatusbcanceledbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:u,SpecifiedBy:p,Badge:m},g="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Complete Digital Card Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CompleteDigitalCardStatus {\n  Enabled\n  Suspended\n  Canceled\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardstatusbenabledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCardStatus.",(0,r.kt)("b",null,"Enabled")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the digital card is enabled")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardstatusbsuspendedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCardStatus.",(0,r.kt)("b",null,"Suspended")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the digital card is suspended")),(0,r.kt)("p",null,"the transactions will be blocked"),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardstatusbcanceledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCardStatus.",(0,r.kt)("b",null,"Canceled")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the digital card is canceled")),(0,r.kt)("p",null,"this is a final state"),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/interfaces/complete-digital-card-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"CompleteDigitalCardStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/digital-card-canceled-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"DigitalCardCanceledStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/digital-card-enabled-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"DigitalCardEnabledStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/digital-card-suspended-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"DigitalCardSuspendedStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);