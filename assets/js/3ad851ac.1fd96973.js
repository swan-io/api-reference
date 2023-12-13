"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||s[d]||l;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31023:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>m,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(83117),r=n(67294),l=n(3905);const o={id:"payment-level",title:"PaymentLevel",hide_table_of_contents:!1},i=void 0,c={unversionedId:"enums/payment-level",id:"enums/payment-level",title:"PaymentLevel",description:"Payment Level of the account",source:"@site/docs/enums/payment-level.mdx",sourceDirName:"enums",slug:"/enums/payment-level",permalink:"/enums/payment-level",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/payment-level.mdx",tags:[],version:"current",frontMatter:{id:"payment-level",title:"PaymentLevel",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentAccountType",permalink:"/enums/payment-account-type"},next:{title:"PaymentMandateCanceledReason",permalink:"/enums/payment-mandate-canceled-reason"}},m={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentLevel.<b>Limited</b></code>",id:"code-style-fontweight-normal-paymentlevelblimitedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentLevel.<b>Unlimited</b></code>",id:"code-style-fontweight-normal-paymentlevelbunlimitedbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:p,SpecifiedBy:s,Badge:d},f="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Payment Level of the account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentLevel {\n  Limited\n  Unlimited\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-paymentlevelblimitedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PaymentLevel.",(0,l.kt)("b",null,"Limited")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the account is limited to 150\u20ac within 30 days and with no IBAN")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-paymentlevelbunlimitedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PaymentLevel.",(0,l.kt)("b",null,"Unlimited")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the account holder is fully verified and then the account is unlimited with an IBAN")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/objects/account"},(0,l.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/inputs/account-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountFilterInput")),"  ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);