"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84588],{80001:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>m,Bullet:()=>h,Details:()=>x,SpecifiedBy:()=>o,assets:()=>i,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var t=n(74848),d=n(28453),c=n(96540);const s={id:"merchant-payment",title:"MerchantPayment"},r=void 0,l={id:"objects/merchant-payment",title:"MerchantPayment",description:"No description",source:"@site/docs/objects/merchant-payment.mdx",sourceDirName:"objects",slug:"/objects/merchant-payment",permalink:"/objects/merchant-payment",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/merchant-payment.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment",title:"MerchantPayment"},sidebar:"schemaSidebar",previous:{title:"MerchantPaymentRejected",permalink:"/objects/merchant-payment-rejected"},next:{title:"MerchantProfileConnection",permalink:"/objects/merchant-profile-connection"}},i={},h=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const a={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:n,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,d.R)()},[l,i]=(0,c.useState)(s);return(0,t.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>MerchantPayment.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentidid--",level:4},{value:'<code>MerchantPayment.<b>statusInfo</b></code><Bullet></Bullet><code>MerchantPaymentStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentstatusinfomerchantpaymentstatusinfo--",level:4},{value:'<code>MerchantPayment.<b>amount</b></code><Bullet></Bullet><code>Amount!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentamountamount--",level:4},{value:'<code>MerchantPayment.<b>paymentMandateId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentpaymentmandateidid--",level:4},{value:'<code>MerchantPayment.<b>paymentLinkId</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentpaymentlinkidid-",level:4},{value:'<code>MerchantPayment.<b>merchantProfileId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentmerchantprofileidid--",level:4},{value:'<code>MerchantPayment.<b>paymentMethodId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentpaymentmethodidid--",level:4},{value:'<code>MerchantPayment.<b>balance</b></code><Bullet></Bullet><code>MerchantBalance!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentbalancemerchantbalance--",level:4},{value:'<code>MerchantPayment.<b>label</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentlabelstring-",level:4},{value:'<code>MerchantPayment.<b>reference</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentreferencestring-",level:4},{value:'<code>MerchantPayment.<b>externalReference</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentexternalreferencestring-",level:4},{value:'<code>MerchantPayment.<b>billingAddress</b></code><Bullet></Bullet><code>Address</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentbillingaddressaddress-",level:4},{value:'<code>MerchantPayment.<b>threeDS</b></code><Bullet></Bullet><code>ThreeDS</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentthreedsthreeds-",level:4},{value:'<code>MerchantPayment.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentcreatedatdatetime--",level:4},{value:'<code>MerchantPayment.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentupdatedatdatetime--",level:4},{value:'<code>MerchantPayment.<b>authorizedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentauthorizedatdatetime-",level:4},{value:'<code>MerchantPayment.<b>canceledAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentcanceledatdatetime-",level:4},{value:'<code>MerchantPayment.<b>capturedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentcapturedatdatetime-",level:4},{value:'<code>MerchantPayment.<b>rejectedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentrejectedatdatetime-",level:4},{value:'<code>MerchantPayment.<b>refundedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentrefundedatdatetime-",level:4},{value:'<code>MerchantPayment.<b>disputedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentdisputedatdatetime-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type MerchantPayment {\n  id: ID!\n  statusInfo: MerchantPaymentStatusInfo!\n  amount: Amount!\n  paymentMandateId: ID!\n  paymentLinkId: ID\n  merchantProfileId: ID!\n  paymentMethodId: ID!\n  balance: MerchantBalance!\n  label: String\n  reference: String\n  externalReference: String\n  billingAddress: Address\n  threeDS: ThreeDS\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  authorizedAt: DateTime\n  canceledAt: DateTime\n  capturedAt: DateTime\n  rejectedAt: DateTime\n  refundedAt: DateTime\n  disputedAt: DateTime\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentidid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"unique identifier of a merchant payment"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentstatusinfomerchantpaymentstatusinfo--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"statusInfo"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/interfaces/merchant-payment-status-info",children:(0,t.jsx)(a.code,{children:"MerchantPaymentStatusInfo!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(a.p,{children:"status information"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentamountamount--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"amount"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/objects/amount",children:(0,t.jsx)(a.code,{children:"Amount!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"amount"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentpaymentmandateidid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"paymentMandateId"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"unique identifier of the payment mandate associated to the payment"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentpaymentlinkidid-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"paymentLinkId"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/id",children:(0,t.jsx)(a.code,{children:"ID"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"unique identifier of the payment link associated to the payment"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentmerchantprofileidid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"merchantProfileId"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"unique identifier of the merchant profile associated to the payment"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentpaymentmethodidid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"paymentMethodId"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"unique identifier of the payment method associated to the payment"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentbalancemerchantbalance--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"balance"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/objects/merchant-balance",children:(0,t.jsx)(a.code,{children:"MerchantBalance!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentlabelstring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"label"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Label"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentreferencestring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"reference"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentexternalreferencestring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"externalReference"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"an arbitrary identifier that was defined by you when you created this payment"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentbillingaddressaddress-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"billingAddress"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/objects/address",children:(0,t.jsx)(a.code,{children:"Address"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"The billing address associated to the payment"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentthreedsthreeds-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"threeDS"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/objects/three-ds",children:(0,t.jsx)(a.code,{children:"ThreeDS"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentcreatedatdatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Created date"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentupdatedatdatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Updated date"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentauthorizedatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"authorizedAt"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Authorized date"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentcanceledatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"canceledAt"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Canceled date"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentcapturedatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"capturedAt"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Captured date"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentrejectedatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"rejectedAt"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejected date"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentrefundedatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"refundedAt"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Refunded date"}),"\n",(0,t.jsxs)(a.h4,{id:"merchantpaymentdisputedatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPayment.",(0,t.jsx)("b",{children:"disputedAt"})]})}),(0,t.jsx)(h,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Disputed date"}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/objects/merchant-payment-edge",children:(0,t.jsx)(a.code,{children:"MerchantPaymentEdge"})}),"  ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>r});var t=n(96540);const d={},c=t.createContext(d);function s(e){const a=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(c.Provider,{value:a},e.children)}}}]);