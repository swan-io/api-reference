"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75172],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,r=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=i(a),y=d,u=p["".concat(s,".").concat(y)]||p[y]||m[y]||r;return a?n.createElement(u,c(c({ref:t},l),{},{components:a})):n.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=a.length,c=new Array(r);c[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:d,c[1]=o;for(var i=2;i<r;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},13572:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=a(83117),d=a(67294),r=a(3905);const c={id:"add-sepa-direct-debit-payment-mandate-success-payload",title:"AddSepaDirectDebitPaymentMandateSuccessPayload",hide_table_of_contents:!1},o=void 0,s={unversionedId:"objects/add-sepa-direct-debit-payment-mandate-success-payload",id:"objects/add-sepa-direct-debit-payment-mandate-success-payload",title:"AddSepaDirectDebitPaymentMandateSuccessPayload",description:"Return type in case of a successful response of the addSepaDirectDebitPaymentMandate mutation",source:"@site/docs/objects/add-sepa-direct-debit-payment-mandate-success-payload.mdx",sourceDirName:"objects",slug:"/objects/add-sepa-direct-debit-payment-mandate-success-payload",permalink:"/objects/add-sepa-direct-debit-payment-mandate-success-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/add-sepa-direct-debit-payment-mandate-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-sepa-direct-debit-payment-mandate-success-payload",title:"AddSepaDirectDebitPaymentMandateSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddReceivedSepaDirectDebitB2bMandateSuccessPayload",permalink:"/objects/add-received-sepa-direct-debit-b2-b-mandate-success-payload"},next:{title:"AddSingleUseVirtualCardSuccessForProjectOwnerPayload",permalink:"/objects/add-single-use-virtual-card-success-for-project-owner-payload"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddSepaDirectDebitPaymentMandateSuccessPayload.<b>paymentMandate</b></code><Bullet /><code>SEPAPaymentDirectDebitMandate!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addsepadirectdebitpaymentmandatesuccesspayloadbpaymentmandatebcodesepapaymentdirectdebitmandate--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:l,Bullet:p,SpecifiedBy:m,Badge:y},b="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Return type in case of a successful response of the addSepaDirectDebitPaymentMandate mutation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddSepaDirectDebitPaymentMandateSuccessPayload {\n  paymentMandate: SEPAPaymentDirectDebitMandate!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addsepadirectdebitpaymentmandatesuccesspayloadbpaymentmandatebcodesepapaymentdirectdebitmandate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddSepaDirectDebitPaymentMandateSuccessPayload.",(0,r.kt)("b",null,"paymentMandate"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/sepapayment-direct-debit-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPAPaymentDirectDebitMandate!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/unions/add-sepa-direct-debit-payment-mandate-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddSepaDirectDebitPaymentMandatePayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);