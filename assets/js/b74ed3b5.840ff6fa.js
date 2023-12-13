"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,y=u["".concat(d,".").concat(p)]||u[p]||f[p]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85310:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(83117),o=n(67294),a=n(3905);const i={id:"transactions-order-by-field",title:"TransactionsOrderByField",hide_table_of_contents:!1},l=void 0,d={unversionedId:"enums/transactions-order-by-field",id:"enums/transactions-order-by-field",title:"TransactionsOrderByField",description:"No description",source:"@site/docs/enums/transactions-order-by-field.mdx",sourceDirName:"enums",slug:"/enums/transactions-order-by-field",permalink:"/enums/transactions-order-by-field",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/transactions-order-by-field.mdx",tags:[],version:"current",frontMatter:{id:"transactions-order-by-field",title:"TransactionsOrderByField",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TransactionTypeEnum",permalink:"/enums/transaction-type-enum"},next:{title:"TypeOfRepresentation",permalink:"/enums/type-of-representation"}},c={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>TransactionsOrderByField.<b>id</b></code>",id:"code-style-fontweight-normal-transactionsorderbyfieldbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionsOrderByField.<b>createdAt</b></code>",id:"code-style-fontweight-normal-transactionsorderbyfieldbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionsOrderByField.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-transactionsorderbyfieldbupdatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionsOrderByField.<b>executionDate</b></code>",id:"code-style-fontweight-normal-transactionsorderbyfieldbexecutiondatebcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:f,Badge:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TransactionsOrderByField {\n  id\n  createdAt\n  updatedAt\n  executionDate\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transactionsorderbyfieldbidbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransactionsOrderByField.",(0,a.kt)("b",null,"id")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transactionsorderbyfieldbcreatedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransactionsOrderByField.",(0,a.kt)("b",null,"createdAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transactionsorderbyfieldbupdatedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransactionsOrderByField.",(0,a.kt)("b",null,"updatedAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transactionsorderbyfieldbexecutiondatebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransactionsOrderByField.",(0,a.kt)("b",null,"executionDate")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/inputs/transactions-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"TransactionsOrderByInput")),"  ",(0,a.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);