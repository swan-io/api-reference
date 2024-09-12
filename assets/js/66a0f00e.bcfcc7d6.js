"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6339],{55196:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>m,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var t=n(74848),d=n(28453),s=n(96540);const r={id:"card-payment-mandate",title:"CardPaymentMandate"},c=void 0,l={id:"objects/card-payment-mandate",title:"CardPaymentMandate",description:"No description",source:"@site/docs/objects/card-payment-mandate.mdx",sourceDirName:"objects",slug:"/objects/card-payment-mandate",permalink:"/objects/card-payment-mandate",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-payment-mandate.mdx",tags:[],version:"current",frontMatter:{id:"card-payment-mandate",title:"CardPaymentMandate"},sidebar:"schemaSidebar",previous:{title:"CardOutMerchant",permalink:"/objects/card-out-merchant"},next:{title:"CardProcessingStatusInfo",permalink:"/objects/card-processing-status-info"}},o={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:n,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[l,o]=(0,s.useState)(r);return(0,t.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>CardPaymentMandate.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandateidid--",level:4},{value:'<code>CardPaymentMandate.<b>transactions</b></code><Bullet></Bullet><code>TransactionConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatetransactionstransactionconnection-",level:4},{value:'<code>CardPaymentMandate.transactions.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatetransactionsfirstint--",level:5},{value:'<code>CardPaymentMandate.transactions.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatetransactionsafterstring-",level:5},{value:'<code>CardPaymentMandate.transactions.<b>orderBy</b></code><Bullet></Bullet><code>TransactionsOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatetransactionsorderbytransactionsorderbyinput-",level:5},{value:'<code>CardPaymentMandate.transactions.<b>filters</b></code><Bullet></Bullet><code>TransactionsFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatetransactionsfilterstransactionsfiltersinput-",level:5},{value:'<code>CardPaymentMandate.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatenamestring-",level:4},{value:'<code>CardPaymentMandate.<b>accountHolder</b></code><Bullet></Bullet><code>AccountHolder!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandateaccountholderaccountholder--",level:4},{value:'<code>CardPaymentMandate.<b>card</b></code><Bullet></Bullet><code>ExternalCard!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatecardexternalcard--",level:4},{value:'<code>CardPaymentMandate.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatecreatedatdatetime--",level:4},{value:'<code>CardPaymentMandate.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandateupdatedatdatetime--",level:4},{value:'<code>CardPaymentMandate.<b>executedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandateexecutedatdatetime-",level:4},{value:'<code>CardPaymentMandate.<b>expiredAt</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandateexpiredatdate-",level:4},{value:'<code>CardPaymentMandate.<b>statusInfo</b></code><Bullet></Bullet><code>PaymentMandateStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardpaymentmandatestatusinfopaymentmandatestatusinfo--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentMandate</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentmandate-",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type CardPaymentMandate implements PaymentMandate {\n  id: ID!\n  transactions(\n    first: Int! = 50\n    after: String\n    orderBy: TransactionsOrderByInput\n    filters: TransactionsFiltersInput\n  ): TransactionConnection\n  name: String\n  accountHolder: AccountHolder!\n  card: ExternalCard!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  executedAt: DateTime\n  expiredAt: Date\n  statusInfo: PaymentMandateStatusInfo!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandateidid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Unique identifier of the Payment Mandate"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandatetransactionstransactionconnection-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"transactions"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/objects/transaction-connection",children:(0,t.jsx)(a.code,{children:"TransactionConnection"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"List of transactions associated with the Card Mandate."}),"\n",(0,t.jsxs)(a.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,t.jsx)(a.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,t.jsxs)(a.h5,{id:"cardpaymentmandatetransactionsfirstint--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.transactions.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/scalars/int",children:(0,t.jsx)(a.code,{children:"Int!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"the number of elements to load (default value 50, maximum: 100)"}),"\n",(0,t.jsxs)(a.h5,{id:"cardpaymentmandatetransactionsafterstring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.transactions.",(0,t.jsx)("b",{children:"after"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,t.jsxs)(a.h5,{id:"cardpaymentmandatetransactionsorderbytransactionsorderbyinput-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.transactions.",(0,t.jsx)("b",{children:"orderBy"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/inputs/transactions-order-by-input",children:(0,t.jsx)(a.code,{children:"TransactionsOrderByInput"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(a.p,{children:"an order you can apply to your list of connections (default value UpdatedAt desc)"}),"\n",(0,t.jsxs)(a.h5,{id:"cardpaymentmandatetransactionsfilterstransactionsfiltersinput-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.transactions.",(0,t.jsx)("b",{children:"filters"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/inputs/transactions-filters-input",children:(0,t.jsx)(a.code,{children:"TransactionsFiltersInput"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(a.p,{children:"a filtering table you can apply to your list of connections"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandatenamestring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Custom name of the mandate"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandateaccountholderaccountholder--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"accountHolder"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/objects/account-holder",children:(0,t.jsx)(a.code,{children:"AccountHolder!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Account Holder information"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandatecardexternalcard--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"card"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/objects/external-card",children:(0,t.jsx)(a.code,{children:"ExternalCard!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"The card associated to this mandate"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandatecreatedatdatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Creation date of the Payment Mandate"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandateupdatedatdatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Last Update date of the Payment Mandate"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandateexecutedatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"executedAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Date of the the last transaction executed for the concerned Payment Mandate"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandateexpiredatdate-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"expiredAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/scalars/date",children:(0,t.jsx)(a.code,{children:"Date"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.p,{children:"Expiry date of the Payment Mandate"}),"\n",(0,t.jsxs)(a.h4,{id:"cardpaymentmandatestatusinfopaymentmandatestatusinfo--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardPaymentMandate.",(0,t.jsx)("b",{children:"statusInfo"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/interfaces/payment-mandate-status-info",children:(0,t.jsx)(a.code,{children:"PaymentMandateStatusInfo!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(a.p,{children:"Payment Mandate status information"}),"\n",(0,t.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(a.h4,{id:"paymentmandate-",children:[(0,t.jsx)(a.a,{href:"/interfaces/payment-mandate",children:(0,t.jsx)(a.code,{children:"PaymentMandate"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/objects/card-in-details",children:(0,t.jsx)(a.code,{children:"CardInDetails"})}),"  ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>c});var t=n(96540);const d={},s=t.createContext(d);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);