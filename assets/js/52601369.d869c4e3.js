"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||f[p]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<r;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63994:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(83117),o=n(67294),r=n(3905);const s={id:"rejected-transaction-status-info",title:"RejectedTransactionStatusInfo",hide_table_of_contents:!1},c=void 0,l={unversionedId:"objects/rejected-transaction-status-info",id:"objects/rejected-transaction-status-info",title:"RejectedTransactionStatusInfo",description:"Rejected transaction status information",source:"@site/docs/objects/rejected-transaction-status-info.mdx",sourceDirName:"objects",slug:"/objects/rejected-transaction-status-info",permalink:"/objects/rejected-transaction-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/rejected-transaction-status-info.mdx",tags:[],version:"current",frontMatter:{id:"rejected-transaction-status-info",title:"RejectedTransactionStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RejectedMerchantProfileStatusInfo",permalink:"/objects/rejected-merchant-profile-status-info"},next:{title:"RejectedVerificationStatusInfo",permalink:"/objects/rejected-verification-status-info"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedTransactionStatusInfo.<b>status</b></code><Bullet /><code>TransactionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-rejectedtransactionstatusinfobstatusbcodetransactionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedTransactionStatusInfo.<b>reason</b></code><Bullet /><code>RejectedReasonCode!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-rejectedtransactionstatusinfobreasonbcoderejectedreasoncode--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RejectedTransactionStatusInfo.<b>hasFallback</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-rejectedtransactionstatusinfobhasfallbackbcodeboolean--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TransactionStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"transactionstatusinfo-",level:4}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:f,Badge:p},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rejected transaction status information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type RejectedTransactionStatusInfo implements TransactionStatusInfo {\n  status: TransactionStatus!\n  reason: RejectedReasonCode!\n  hasFallback: Boolean!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-rejectedtransactionstatusinfobstatusbcodetransactionstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RejectedTransactionStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/enums/transaction-status"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatus!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"status of the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-rejectedtransactionstatusinfobreasonbcoderejectedreasoncode--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RejectedTransactionStatusInfo.",(0,r.kt)("b",null,"reason"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/enums/rejected-reason-code"},(0,r.kt)("inlineCode",{parentName:"a"},"RejectedReasonCode!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"reason code")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-rejectedtransactionstatusinfobhasfallbackbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RejectedTransactionStatusInfo.",(0,r.kt)("b",null,"hasFallback"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the transaction had a fallback")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"transactionstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/interfaces/transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo"))," ",(0,r.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transaction Status information")))}k.isMDXComponent=!0}}]);