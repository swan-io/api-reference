"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[71065],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),y=r,u=m["".concat(i,".").concat(y)]||m[y]||p[y]||o;return a?n.createElement(u,d(d({ref:t},s),{},{components:a})):n.createElement(u,d({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var c=2;c<o;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7963:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var n=a(83117),r=a(67294),o=a(3905);const d={id:"payment-mandate-creditor",title:"PaymentMandateCreditor",hide_table_of_contents:!1},l=void 0,i={unversionedId:"interfaces/payment-mandate-creditor",id:"interfaces/payment-mandate-creditor",title:"PaymentMandateCreditor",description:"No description",source:"@site/docs/interfaces/payment-mandate-creditor.mdx",sourceDirName:"interfaces",slug:"/interfaces/payment-mandate-creditor",permalink:"/interfaces/payment-mandate-creditor",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/payment-mandate-creditor.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-creditor",title:"PaymentMandateCreditor",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentDirectDebitMandate",permalink:"/interfaces/payment-direct-debit-mandate"},next:{title:"PaymentMandateDebtor",permalink:"/interfaces/payment-mandate-debtor"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateCreditor.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentmandatecreditorbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentmandatecreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateCreditor.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-paymentmandatecreditorbaddressbcodeaddress--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:p,Badge:y},f="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface PaymentMandateCreditor {\n  id: ID!\n  name: String!\n  address: Address!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatecreditorbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateCreditor.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Creditor UUID")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatecreditorbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateCreditor.",(0,o.kt)("b",null,"name"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Creditor name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatecreditorbaddressbcodeaddress--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateCreditor.",(0,o.kt)("b",null,"address"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Creditor address")),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/internal-payment-mandate-creditor"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalPaymentMandateCreditor")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/objects/sepapayment-mandate-creditor"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateCreditor")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);