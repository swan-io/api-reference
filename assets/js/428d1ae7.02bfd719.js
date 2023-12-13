"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,y=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(y,l(l({ref:t},m),{},{components:n})):a.createElement(y,l({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53953:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(83117),r=n(67294),o=n(3905);const l={id:"payment-status",title:"PaymentStatus",hide_table_of_contents:!1},i=void 0,s={unversionedId:"enums/payment-status",id:"enums/payment-status",title:"PaymentStatus",description:"Payment status",source:"@site/docs/enums/payment-status.mdx",sourceDirName:"enums",slug:"/enums/payment-status",permalink:"/enums/payment-status",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/payment-status.mdx",tags:[],version:"current",frontMatter:{id:"payment-status",title:"PaymentStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentProduct",permalink:"/enums/payment-product"},next:{title:"PendingDigitalCardStatus",permalink:"/enums/pending-digital-card-status"}},c={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentStatus.<b>ConsentPending</b></code>",id:"code-style-fontweight-normal-paymentstatusbconsentpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentStatus.<b>Initiated</b></code>",id:"code-style-fontweight-normal-paymentstatusbinitiatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-paymentstatusbrejectedbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:p,SpecifiedBy:d,Badge:u},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Payment status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentStatus {\n  ConsentPending\n  Initiated\n  Rejected\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentstatusbconsentpendingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentStatus.",(0,o.kt)("b",null,"ConsentPending")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when a consent is pending before initiating the payment")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentstatusbinitiatedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentStatus.",(0,o.kt)("b",null,"Initiated")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when the payment has been initiated")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentstatusbrejectedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentStatus.",(0,o.kt)("b",null,"Rejected")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when the payment has been rejected")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/payment-consent-pending"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentConsentPending")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/inputs/payment-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentFiltersInput")),"  ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/payment-initiated"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentInitiated")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/payment-rejected"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentRejected")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/interfaces/payment-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentStatusInfo")),"  ",(0,o.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);