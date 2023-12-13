"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[68483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,y=p["".concat(o,".").concat(u)]||p[u]||s[u]||d;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,i=new Array(d);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<d;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28010:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(83117),r=n(67294),d=n(3905);const i={id:"add-internal-direct-debit-payment-mandate",title:"addInternalDirectDebitPaymentMandate",hide_table_of_contents:!1},l=void 0,o={unversionedId:"mutations/add-internal-direct-debit-payment-mandate",id:"mutations/add-internal-direct-debit-payment-mandate",title:"addInternalDirectDebitPaymentMandate",description:"Allows to add an internal direct debit payment mandate.",source:"@site/docs/mutations/add-internal-direct-debit-payment-mandate.mdx",sourceDirName:"mutations",slug:"/mutations/add-internal-direct-debit-payment-mandate",permalink:"/mutations/add-internal-direct-debit-payment-mandate",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/add-internal-direct-debit-payment-mandate.mdx",tags:[],version:"current",frontMatter:{id:"add-internal-direct-debit-payment-mandate",title:"addInternalDirectDebitPaymentMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"addFundingLimitSettingsChangeRequest",permalink:"/mutations/add-funding-limit-settings-change-request"},next:{title:"addMerchantProfile",permalink:"/mutations/add-merchant-profile"}},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addInternalDirectDebitPaymentMandate.<b>input</b></code><Bullet /><code>AddInternalDirectDebitPaymentMandateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatebinputbcodeaddinternaldirectdebitpaymentmandateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddInternalDirectDebitPaymentMandatePayload</code> <Badge class="secondary" text="union"/>',id:"addinternaldirectdebitpaymentmandatepayload-",level:4}],p=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:p,SpecifiedBy:s,Badge:u},b="wrapper";function f(e){let{components:t,...n}=e;return(0,d.kt)(b,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Allows to add an internal direct debit payment mandate."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"addInternalDirectDebitPaymentMandate(\n  input: AddInternalDirectDebitPaymentMandateInput!\n): AddInternalDirectDebitPaymentMandatePayload!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatebinputbcodeaddinternaldirectdebitpaymentmandateinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"addInternalDirectDebitPaymentMandate.",(0,d.kt)("b",null,"input"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/inputs/add-internal-direct-debit-payment-mandate-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandateInput!"))," ",(0,d.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"addinternaldirectdebitpaymentmandatepayload-"},(0,d.kt)("a",{parentName:"h4",href:"/unions/add-internal-direct-debit-payment-mandate-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandatePayload"))," ",(0,d.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Union type return by the addInternalDirectDebitPaymentMandate mutation")))}f.isMDXComponent=!0}}]);