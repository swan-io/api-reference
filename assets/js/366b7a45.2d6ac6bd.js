"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6651],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,s(s({ref:t},i),{},{components:a})):n.createElement(f,s({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15186:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=a(83117),r=a(67294),o=a(3905);const s={id:"card-status",title:"CardStatus",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/card-status",id:"enums/card-status",title:"CardStatus",description:"Card Status",source:"@site/docs/enums/card-status.mdx",sourceDirName:"enums",slug:"/enums/card-status",permalink:"/enums/card-status",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/card-status.mdx",tags:[],version:"current",frontMatter:{id:"card-status",title:"CardStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CardSettingsBackgroundType",permalink:"/enums/card-settings-background-type"},next:{title:"CardTransactionCategory",permalink:"/enums/card-transaction-category"}},d={},i=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CardStatus.<b>ConsentPending</b></code>",id:"code-style-fontweight-normal-cardstatusbconsentpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CardStatus.<b>Processing</b></code>",id:"code-style-fontweight-normal-cardstatusbprocessingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CardStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-cardstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CardStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-cardstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CardStatus.<b>Canceling</b></code>",id:"code-style-fontweight-normal-cardstatusbcancelingbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:u,SpecifiedBy:p,Badge:m},b="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Card Status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CardStatus {\n  ConsentPending\n  Processing\n  Enabled\n  Canceled\n  Canceling\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardstatusbconsentpendingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardStatus.",(0,o.kt)("b",null,"ConsentPending")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when the consent to add this card is pending")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardstatusbprocessingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardStatus.",(0,o.kt)("b",null,"Processing")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when the card is in the process of being ready to use")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardstatusbenabledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardStatus.",(0,o.kt)("b",null,"Enabled")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when the card is enabled")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardstatusbcanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardStatus.",(0,o.kt)("b",null,"Canceled")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when the card is canceled")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardstatusbcancelingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardStatus.",(0,o.kt)("b",null,"Canceling")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when the card is about to be canceled")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/card-canceled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardCanceledStatusInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/card-canceling-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardCancelingStatusInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/card-consent-pending-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardConsentPendingStatusInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/card-enabled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardEnabledStatusInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/inputs/card-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CardFiltersInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/card-processing-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardProcessingStatusInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/interfaces/card-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardStatusInfo")),"  ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/card-wrong-status-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"CardWrongStatusRejection")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);