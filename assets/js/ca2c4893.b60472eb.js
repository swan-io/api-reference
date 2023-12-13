"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77811:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(83117),o=n(67294),r=n(3905);const i={id:"not-found-rejection",title:"NotFoundRejection",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/not-found-rejection",id:"objects/not-found-rejection",title:"NotFoundRejection",description:"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists",source:"@site/docs/objects/not-found-rejection.mdx",sourceDirName:"objects",slug:"/objects/not-found-rejection",permalink:"/objects/not-found-rejection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"not-found-rejection",title:"NotFoundRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MissingMandatoryFieldRejection",permalink:"/objects/missing-mandatory-field-rejection"},next:{title:"NotReachableConsentStatusRejection",permalink:"/objects/not-reachable-consent-status-rejection"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>NotFoundRejection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notfoundrejectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotFoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notfoundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:p,Badge:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type NotFoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-notfoundrejectionbidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"NotFoundRejection.",(0,r.kt)("b",null,"id"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-notfoundrejectionbmessagebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"NotFoundRejection.",(0,r.kt)("b",null,"message"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"rejection-"},(0,r.kt)("a",{parentName:"h4",href:"/interfaces/rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/unions/add-direct-debit-funding-source-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddDirectDebitFundingSourcePayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/unions/add-internal-direct-debit-payment-mandate-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandatePayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/unions/add-sepa-direct-debit-payment-mandate-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddSepaDirectDebitPaymentMandatePayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/unions/cancel-funding-source-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CancelFundingSourcePayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/unions/initiate-merchant-payment-collection-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"InitiateMerchantPaymentCollectionPayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/unions/request-merchant-payment-methods-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentMethodsPayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);