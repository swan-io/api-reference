"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[28583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,y=c["".concat(i,".").concat(s)]||c[s]||u[s]||d;return n?a.createElement(y,l(l({ref:t},m),{},{components:n})):a.createElement(y,l({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,l=new Array(d);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<d;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},30048:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>c,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(83117),r=n(67294),d=n(3905);const l={id:"payment-mandate-order-by-field-input",title:"PaymentMandateOrderByFieldInput",hide_table_of_contents:!1},o=void 0,i={unversionedId:"enums/payment-mandate-order-by-field-input",id:"enums/payment-mandate-order-by-field-input",title:"PaymentMandateOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing payment mandate results",source:"@site/docs/enums/payment-mandate-order-by-field-input.mdx",sourceDirName:"enums",slug:"/enums/payment-mandate-order-by-field-input",permalink:"/enums/payment-mandate-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/payment-mandate-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-order-by-field-input",title:"PaymentMandateOrderByFieldInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentMandateCanceledReason",permalink:"/enums/payment-mandate-canceled-reason"},next:{title:"PaymentMandateScheme",permalink:"/enums/payment-mandate-scheme"}},p={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-paymentmandateorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-paymentmandateorderbyfieldinputbupdatedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:c,SpecifiedBy:u,Badge:s},f="wrapper";function b(e){let{components:t,...n}=e;return(0,d.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Field we can use when ordering that can be applied when listing payment mandate results"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentMandateOrderByFieldInput {\n  createdAt\n  updatedAt\n}\n")),(0,d.kt)("h3",{id:"values"},"Values"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateorderbyfieldinputbcreatedatbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateOrderByFieldInput.",(0,d.kt)("b",null,"createdAt")))),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentmandateorderbyfieldinputbupdatedatbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateOrderByFieldInput.",(0,d.kt)("b",null,"updatedAt")))),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/inputs/payment-mandate-order-by-input"},(0,d.kt)("inlineCode",{parentName:"a"},"PaymentMandateOrderByInput")),"  ",(0,d.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);