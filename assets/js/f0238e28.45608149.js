"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[76862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82823:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(83117),r=n(67294),o=n(3905);const i={id:"request-merchant-payment-methods-input",title:"RequestMerchantPaymentMethodsInput",hide_table_of_contents:!1},d=void 0,c={unversionedId:"inputs/request-merchant-payment-methods-input",id:"inputs/request-merchant-payment-methods-input",title:"RequestMerchantPaymentMethodsInput",description:"No description",source:"@site/docs/inputs/request-merchant-payment-methods-input.mdx",sourceDirName:"inputs",slug:"/inputs/request-merchant-payment-methods-input",permalink:"/inputs/request-merchant-payment-methods-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/request-merchant-payment-methods-input.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-payment-methods-input",title:"RequestMerchantPaymentMethodsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RefundTransaction",permalink:"/inputs/refund-transaction"},next:{title:"RequestMerchantProfileUpdateInput",permalink:"/inputs/request-merchant-profile-update-input"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>merchantProfileId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbmerchantprofileidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>internalDirectDebitStandard</b></code><Bullet /><code>InternalDirectDebitStandardPaymentMethodInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbinternaldirectdebitstandardbcodeinternaldirectdebitstandardpaymentmethodinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>internalDirectDebitB2B</b></code><Bullet /><code>InternalDirectDebitB2BPaymentMethodInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbinternaldirectdebitb2bbcodeinternaldirectdebitb2bpaymentmethodinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>sepaDirectDebitCore</b></code><Bullet /><code>SepaDirectDebitCorePaymentMethodInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbsepadirectdebitcorebcodesepadirectdebitcorepaymentmethodinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>sepaDirectDebitB2B</b></code><Bullet /><code>SepaDirectDebitB2BPaymentMethodInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbsepadirectdebitb2bbcodesepadirectdebitb2bpaymentmethodinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsInput.<b>check</b></code><Bullet /><code>CheckPaymentMethodInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbcheckbcodecheckpaymentmethodinput-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:p,Bullet:s,SpecifiedBy:m,Badge:u},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input RequestMerchantPaymentMethodsInput {\n  merchantProfileId: ID!\n  internalDirectDebitStandard: InternalDirectDebitStandardPaymentMethodInput\n  internalDirectDebitB2B: InternalDirectDebitB2BPaymentMethodInput\n  sepaDirectDebitCore: SepaDirectDebitCorePaymentMethodInput\n  sepaDirectDebitB2B: SepaDirectDebitB2BPaymentMethodInput\n  check: CheckPaymentMethodInput\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbmerchantprofileidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"merchantProfileId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the Merchant Profile")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbinternaldirectdebitstandardbcodeinternaldirectdebitstandardpaymentmethodinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"internalDirectDebitStandard"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/internal-direct-debit-standard-payment-method-input"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitStandardPaymentMethodInput"))," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Input for the Internal Direct Debit Standard payment method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbinternaldirectdebitb2bbcodeinternaldirectdebitb2bpaymentmethodinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"internalDirectDebitB2B"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/internal-direct-debit-b2-bpayment-method-input"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitB2BPaymentMethodInput"))," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Input for the Internal Direct Debit B2B payment method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbsepadirectdebitcorebcodesepadirectdebitcorepaymentmethodinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"sepaDirectDebitCore"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/sepa-direct-debit-core-payment-method-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SepaDirectDebitCorePaymentMethodInput"))," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Input for the Sepa Direct Debit Core payment method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbsepadirectdebitb2bbcodesepadirectdebitb2bpaymentmethodinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"sepaDirectDebitB2B"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/sepa-direct-debit-b2-bpayment-method-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SepaDirectDebitB2BPaymentMethodInput"))," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Input for the Sepa Direct Debit B2B payment method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsinputbcheckbcodecheckpaymentmethodinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsInput.",(0,o.kt)("b",null,"check"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/check-payment-method-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckPaymentMethodInput"))," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Input for Check payment method")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mutations/request-merchant-payment-methods"},(0,o.kt)("inlineCode",{parentName:"a"},"requestMerchantPaymentMethods")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);