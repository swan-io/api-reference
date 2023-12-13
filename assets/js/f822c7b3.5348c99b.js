"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(a),p=r,b=m["".concat(l,".").concat(p)]||m[p]||h[p]||o;return a?n.createElement(b,d(d({ref:t},s),{},{components:a})):n.createElement(b,d({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,d[1]=c;for(var i=2;i<o;i++)d[i]=a[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},96425:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>s});var n=a(83117),r=a(67294),o=a(3905);const d={id:"sepa-direct-debit-b2-bmerchant-payment-method",title:"SepaDirectDebitB2BMerchantPaymentMethod",hide_table_of_contents:!1},c=void 0,l={unversionedId:"objects/sepa-direct-debit-b2-bmerchant-payment-method",id:"objects/sepa-direct-debit-b2-bmerchant-payment-method",title:"SepaDirectDebitB2BMerchantPaymentMethod",description:"SepaDirectDebitB2BMerchantPaymentMethod",source:"@site/docs/objects/sepa-direct-debit-b2-bmerchant-payment-method.mdx",sourceDirName:"objects",slug:"/objects/sepa-direct-debit-b2-bmerchant-payment-method",permalink:"/objects/sepa-direct-debit-b2-bmerchant-payment-method",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/sepa-direct-debit-b2-bmerchant-payment-method.mdx",tags:[],version:"current",frontMatter:{id:"sepa-direct-debit-b2-bmerchant-payment-method",title:"SepaDirectDebitB2BMerchantPaymentMethod",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SelectField",permalink:"/objects/select-field"},next:{title:"SepaDirectDebitCoreMerchantPaymentMethod",permalink:"/objects/sepa-direct-debit-core-merchant-payment-method"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>type</b></code><Bullet /><code>MerchantPaymentMethodType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbtypebcodemerchantpaymentmethodtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>methodId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbmethodidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>statusInfo</b></code><Bullet /><code>MerchantPaymentMethodStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbstatusinfobcodemerchantpaymentmethodstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>version</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbversionbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>rollingReserve</b></code><Bullet /><code>RollingReserve</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbrollingreservebcoderollingreserve-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>useSwanSepaCreditorIdentifier</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbuseswansepacreditoridentifierbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BMerchantPaymentMethod.<b>sepaCreditorIdentifier</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbsepacreditoridentifierbcodestring-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentMethod</code> <Badge class="secondary" text="interface"/>',id:"merchantpaymentmethod-",level:4}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:m,SpecifiedBy:h,Badge:p},y="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SepaDirectDebitB2BMerchantPaymentMethod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SepaDirectDebitB2BMerchantPaymentMethod implements MerchantPaymentMethod {\n  id: ID!\n  type: MerchantPaymentMethodType!\n  methodId: ID!\n  statusInfo: MerchantPaymentMethodStatusInfo!\n  version: Int!\n  updatedAt: Date!\n  rollingReserve: RollingReserve\n  useSwanSepaCreditorIdentifier: Boolean!\n  sepaCreditorIdentifier: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier tied to every version of a given Merchant Payment Method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbtypebcodemerchantpaymentmethodtype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"type"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/merchant-payment-method-type"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodType!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Merchant Payment Method Type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbmethodidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"methodId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier for a given merchant Payment Method, identical for every version of a given Merchant Payment Method Type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbstatusinfobcodemerchantpaymentmethodstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/interfaces/merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatusInfo!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the Merchant Payment Method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbversionbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"version"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Version of the Merchant Payment Method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbupdatedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Date at which the Merchant Payment Method was last updated")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbrollingreservebcoderollingreserve-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"rollingReserve"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/rolling-reserve"},(0,o.kt)("inlineCode",{parentName:"a"},"RollingReserve"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rolling Reserve applied to the Merchant Payment Method")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbuseswansepacreditoridentifierbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"useSwanSepaCreditorIdentifier"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Whether this payment method uses the Swan Sepa Creditor Identifier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bmerchantpaymentmethodbsepacreditoridentifierbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BMerchantPaymentMethod.",(0,o.kt)("b",null,"sepaCreditorIdentifier"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the above is false, the value of the Sepa Creditor Identifier used")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"merchantpaymentmethod-"},(0,o.kt)("a",{parentName:"h4",href:"/interfaces/merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethod"))," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Base object for the different Payment Methods available")))}u.isMDXComponent=!0}}]);