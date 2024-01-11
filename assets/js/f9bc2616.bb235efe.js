"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[5759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=l,k=m["".concat(i,".").concat(y)]||m[y]||h[y]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:l,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35696:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>h,assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(83117),l=n(67294),r=n(3905);const o={id:"merchant-payment-link",title:"MerchantPaymentLink",hide_table_of_contents:!1},c=void 0,i={unversionedId:"objects/merchant-payment-link",id:"objects/merchant-payment-link",title:"MerchantPaymentLink",description:"No description",source:"@site/docs/objects/merchant-payment-link.mdx",sourceDirName:"objects",slug:"/objects/merchant-payment-link",permalink:"/objects/merchant-payment-link",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/merchant-payment-link.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-link",title:"MerchantPaymentLink",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"LegalRepresentativeAccountMembershipCannotBeSuspendedRejection",permalink:"/objects/legal-representative-account-membership-cannot-be-suspended-rejection"},next:{title:"MerchantPaymentMethodNotActiveRejection",permalink:"/objects/merchant-payment-method-not-active-rejection"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>projectId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbprojectidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>url</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkburlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>statusInfo</b></code><Bullet /><code>MerchantPaymentLinkStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbstatusinfobcodemerchantpaymentlinkstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>merchantProfile</b></code><Bullet /><code>MerchantProfile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbmerchantprofilebcodemerchantprofile--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>redirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>cancelRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbcancelredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>sequence</b></code><Bullet /><code>PaymentLinkSequenceType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbsequencebcodepaymentlinksequencetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>billingAddress</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbbillingaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>reference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>language</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkblanguagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentlinkblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>customer</b></code><Bullet /><code>Customer</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbcustomerbcodecustomer-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentLink.<b>paymentMethods</b></code><Bullet /><code>[MerchantPaymentMethod!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-merchantpaymentlinkbpaymentmethodsbcodemerchantpaymentmethod--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:m,SpecifiedBy:h,Badge:y},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MerchantPaymentLink {\n  id: String!\n  projectId: ID!\n  url: String!\n  statusInfo: MerchantPaymentLinkStatusInfo!\n  merchantProfile: MerchantProfile!\n  amount: Amount!\n  redirectUrl: String!\n  cancelRedirectUrl: String!\n  sequence: PaymentLinkSequenceType!\n  billingAddress: Address\n  requestedExecutionAt: DateTime\n  externalReference: String\n  reference: String\n  language: String\n  label: String\n  customer: Customer\n  paymentMethods: [MerchantPaymentMethod!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Merchant payment link's unique ID.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbprojectidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"projectId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ID of the related project")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkburlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"url"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The URL at which the customer can complete the payment.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbstatusinfobcodemerchantpaymentlinkstatusinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"statusInfo"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/interfaces/merchant-payment-link-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLinkStatusInfo!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The merchant payment link status.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbmerchantprofilebcodemerchantprofile--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"merchantProfile"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/merchant-profile"},(0,r.kt)("inlineCode",{parentName:"a"},"MerchantProfile!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Merchant Profile to link this Payment Link to")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbamountbcodeamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"amount"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Amount to be paid to sucessfully complete the payment.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbredirecturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"redirectUrl"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Merchant Website URL to redirect the user to when the payment is completed.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbcancelredirecturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"cancelRedirectUrl"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"URL to redirect the user to if they cancel their payment")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbsequencebcodepaymentlinksequencetype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"sequence"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/enums/payment-link-sequence-type"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentLinkSequenceType!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Controls if the payment mandate created from this payment link is for one-time use or can be reused\nThis is applicable for card and SEPA Direct Debit payment methods only.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbbillingaddressbcodeaddress-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"billingAddress"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The customer billing Address\nThese fields should be completed also to pre-fill a SEPA direct debit mandate.")),(0,r.kt)("p",null,"We strongly advice to complete these fields if merchants want to get paid through card payment method, in order to minimize the risk of payment rejection by Visa / Mastercard schemes"),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbrequestedexecutionatbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"requestedExecutionAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"  A date that reflects the time at which the user asked the transaction to be executed.\nFor card transactions, request execution must occur within 7 days after authorization or the authorization may expire.\nFor SEPA Direct Debit transactions, request execution must occur up to 1 year in the future.")),(0,r.kt)("p",null,"Default value means that the execution will be as soon as possible"),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbexternalreferencebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"externalReference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Any string that you want to be attached to this payment link.\nUsually something to help you reference the link in an external system.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbreferencebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Optional field intended to provide a way for you to include a reference number or code.\nThe customer will most likely see this value on their bank statement, though we can't know as every banking platform is different.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkblanguagebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"language"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The language used for the payment page.\nDefault is the browser's language, or English if not available.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkblabelbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"label"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Label of the concerned payment collection, which will be displayed on Swan bank statement\tand on the Swan merchant payment page.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbcustomerbcodecustomer-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"customer"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/customer"},(0,r.kt)("inlineCode",{parentName:"a"},"Customer"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," We will use the information specified here to prefill the payment link fields\ndepending on the payment method the end user chooses.\nKeep in mind that your end customer will be able to edit these fields.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentlinkbpaymentmethodsbcodemerchantpaymentmethod--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentLink.",(0,r.kt)("b",null,"paymentMethods"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/interfaces/merchant-payment-method"},(0,r.kt)("inlineCode",{parentName:"a"},"[MerchantPaymentMethod!]!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of payment methods IDs enabled for this payment link.\nIf the array is empty Swan will allow all the payment methods that are enabled for the merchant profile (except for Check and Internal Direct Debit)")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/objects/create-merchant-payment-link-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateMerchantPaymentLinkSuccessPayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);