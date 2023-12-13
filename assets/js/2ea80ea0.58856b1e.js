"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7287:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(83117),r=n(67294),i=n(3905);const l={id:"internal-direct-debit-payment-collection-input",title:"InternalDirectDebitPaymentCollectionInput",hide_table_of_contents:!1},o=void 0,c={unversionedId:"inputs/internal-direct-debit-payment-collection-input",id:"inputs/internal-direct-debit-payment-collection-input",title:"InternalDirectDebitPaymentCollectionInput",description:"No description",source:"@site/docs/inputs/internal-direct-debit-payment-collection-input.mdx",sourceDirName:"inputs",slug:"/inputs/internal-direct-debit-payment-collection-input",permalink:"/inputs/internal-direct-debit-payment-collection-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/internal-direct-debit-payment-collection-input.mdx",tags:[],version:"current",frontMatter:{id:"internal-direct-debit-payment-collection-input",title:"InternalDirectDebitPaymentCollectionInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalDirectDebitB2BPaymentMethodInput",permalink:"/inputs/internal-direct-debit-b2-bpayment-method-input"},next:{title:"InternalDirectDebitStandardPaymentMethodInput",permalink:"/inputs/internal-direct-debit-standard-payment-method-input"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitPaymentCollectionInput.<b>mandateId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitpaymentcollectioninputbmandateidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitPaymentCollectionInput.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitpaymentcollectioninputbrequestedexecutionatbcodedatetime-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:u,SpecifiedBy:s,Badge:m},b="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input InternalDirectDebitPaymentCollectionInput {\n  mandateId: ID!\n  requestedExecutionAt: DateTime\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitpaymentcollectioninputbmandateidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitPaymentCollectionInput.",(0,i.kt)("b",null,"mandateId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"ID of the concerned payment mandate")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitpaymentcollectioninputbrequestedexecutionatbcodedatetime-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitPaymentCollectionInput.",(0,i.kt)("b",null,"requestedExecutionAt"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Date at which the Swan merchant wishes the payment to be executed")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/inputs/initiate-merchant-payment-collection-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InitiateMerchantPaymentCollectionInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);