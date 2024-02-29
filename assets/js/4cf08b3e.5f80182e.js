"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[61682],{65251:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>x});var c=a(85893),s=a(11151),t=a(67294);const d={id:"check-transaction",title:"CheckTransaction"},r=void 0,o={id:"objects/check-transaction",title:"CheckTransaction",description:"Check transaction",source:"@site/docs/objects/check-transaction.mdx",sourceDirName:"objects",slug:"/objects/check-transaction",permalink:"/objects/check-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/check-transaction.mdx",tags:[],version:"current",frontMatter:{id:"check-transaction",title:"CheckTransaction"},sidebar:"schemaSidebar",previous:{title:"CheckRejection",permalink:"/objects/check-rejection"},next:{title:"CloseAccountReason",permalink:"/objects/close-account-reason"}},i={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>CheckTransaction.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionidid--",level:4},{value:'<code>CheckTransaction.<b>reference</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionreferencestring--",level:4},{value:'<code>CheckTransaction.<b>paymentMethodIdentifier</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionpaymentmethodidentifierstring--",level:4},{value:'<code>CheckTransaction.<b>cmc7</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactioncmc7string--",level:4},{value:'<code>CheckTransaction.<b>rlmcKey</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionrlmckeystring--",level:4},{value:'<code>CheckTransaction.<b>side</b></code><Bullet></Bullet><code>TransactionSide!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionsidetransactionside--",level:4},{value:'<code>CheckTransaction.<b>type</b></code><Bullet></Bullet><code>TransactionTypeEnum!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactiontypetransactiontypeenum--",level:4},{value:'<code>CheckTransaction.<b>amount</b></code><Bullet></Bullet><code>Amount!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionamountamount--",level:4},{value:'<code>CheckTransaction.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionlabelstring--",level:4},{value:'<code>CheckTransaction.<b>statusInfo</b></code><Bullet></Bullet><code>TransactionStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionstatusinfotransactionstatusinfo--",level:4},{value:'<code>CheckTransaction.<b>paymentId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionpaymentidstring-",level:4},{value:'<code>CheckTransaction.<b>payment</b></code><Bullet></Bullet><code>Payment</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionpaymentpayment-",level:4},{value:'<code>CheckTransaction.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactioncreatedatdatetime--",level:4},{value:'<code>CheckTransaction.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionupdatedatdatetime--",level:4},{value:'<code>CheckTransaction.<b>counterparty</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactioncounterpartystring--",level:4},{value:'<code>CheckTransaction.<b>bookedBalanceAfter</b></code><Bullet></Bullet><code>Amount</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionbookedbalanceafteramount-",level:4},{value:'<code>CheckTransaction.<b>paymentProduct</b></code><Bullet></Bullet><code>PaymentProduct!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionpaymentproductpaymentproduct--",level:4},{value:'<code>CheckTransaction.<b>account</b></code><Bullet></Bullet><code>Account</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionaccountaccount-",level:4},{value:'<code>CheckTransaction.<b>externalReference</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionexternalreferencestring-",level:4},{value:'<code>CheckTransaction.<b>executionDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionexecutiondatedatetime--",level:4},{value:'<code>CheckTransaction.<b>requestedExecutionAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionrequestedexecutionatdatetime-",level:4},{value:'<code>CheckTransaction.<b>originTransactionId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionorigintransactionidstring-",level:4},{value:'<code>CheckTransaction.<b>originTransaction</b></code><Bullet></Bullet><code>Transaction</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionorigintransactiontransaction-",level:4},{value:'<code>CheckTransaction.<b>reservedAmount</b></code><Bullet></Bullet><code>Amount</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionreservedamountamount-",level:4},{value:'<code>CheckTransaction.<b>reservedAmountReleasedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionreservedamountreleasedatdatetime-",level:4},{value:'<code>CheckTransaction.<b>returnReason</b></code><Bullet></Bullet><code>TransactionReasonCode</code> <Badge class="badge badge--secondary"></Badge>',id:"checktransactionreturnreasontransactionreasoncode-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Transaction</code> <Badge class="badge badge--secondary"></Badge>',id:"transaction-",level:4}],b=({dataOpen:e,dataClose:n,children:a,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,s.a)()},[o,i]=(0,t.useState)(d);return(0,c.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&a]})};function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Check transaction"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type CheckTransaction implements Transaction {\n  id: ID!\n  reference: String!\n  paymentMethodIdentifier: String!\n  cmc7: String!\n  rlmcKey: String!\n  side: TransactionSide!\n  type: TransactionTypeEnum!\n  amount: Amount!\n  label: String!\n  statusInfo: TransactionStatusInfo!\n  paymentId: String\n  payment: Payment\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  counterparty: String!\n  bookedBalanceAfter: Amount\n  paymentProduct: PaymentProduct!\n  account: Account\n  externalReference: String\n  executionDate: DateTime!\n  requestedExecutionAt: DateTime\n  originTransactionId: String\n  originTransaction: Transaction\n  reservedAmount: Amount\n  reservedAmountReleasedAt: DateTime\n  returnReason: TransactionReasonCode\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionidid--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/id",children:(0,c.jsx)(n.code,{children:"ID!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"unique identifier of the transaction"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionreferencestring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"reference"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionpaymentmethodidentifierstring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"paymentMethodIdentifier"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"payment method identifier used for this transaction: check number"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactioncmc7string--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"cmc7"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"31-caracter unique identifier located at the bottom of the check.\nCMC7 is composed of 3 sections (check number (7 char.), check issuing bank code (12 char.), check holder account number (12 char.)).\nCombined with RLMC key, it  allows the check traceability."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionrlmckeystring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"rlmcKey"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"2-digit key used to check the integrity of the CMC7 line, located at the bottom right of the check.\nCombined with CMC7 line, it allows the check traceability."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionsidetransactionside--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"side"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/enums/transaction-side",children:(0,c.jsx)(n.code,{children:"TransactionSide!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"side (Credit or Debit)"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactiontypetransactiontypeenum--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"type"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/enums/transaction-type-enum",children:(0,c.jsx)(n.code,{children:"TransactionTypeEnum!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"type"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionamountamount--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"amount"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/objects/amount",children:(0,c.jsx)(n.code,{children:"Amount!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"amount"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionlabelstring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"label"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"label"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionstatusinfotransactionstatusinfo--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"statusInfo"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/interfaces/transaction-status-info",children:(0,c.jsx)(n.code,{children:"TransactionStatusInfo!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"status information"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionpaymentidstring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"paymentId"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"ID of the payment associated to this transaction"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionpaymentpayment-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"payment"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/objects/payment",children:(0,c.jsx)(n.code,{children:"Payment"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"payment associated to this transaction"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactioncreatedatdatetime--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"createdAt"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/date-time",children:(0,c.jsx)(n.code,{children:"DateTime!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"created date"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionupdatedatdatetime--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"updatedAt"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/date-time",children:(0,c.jsx)(n.code,{children:"DateTime!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"updated date"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactioncounterpartystring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"counterparty"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ..."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionbookedbalanceafteramount-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"bookedBalanceAfter"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/objects/amount",children:(0,c.jsx)(n.code,{children:"Amount"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"booked balance after this transaction"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionpaymentproductpaymentproduct--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"paymentProduct"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/enums/payment-product",children:(0,c.jsx)(n.code,{children:"PaymentProduct!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"payment product used for this transaction"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionaccountaccount-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"account"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/objects/account",children:(0,c.jsx)(n.code,{children:"Account"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"matching account for the transaction"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionexternalreferencestring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"externalReference"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"an arbitrary identifier that was defined by you when you created this transaction."}),"\n",(0,c.jsx)(n.p,{children:"For example, you can define it in the CreditTransferInput mutation."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionexecutiondatedatetime--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"executionDate"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/date-time",children:(0,c.jsx)(n.code,{children:"DateTime!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionrequestedexecutionatdatetime-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"requestedExecutionAt"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/date-time",children:(0,c.jsx)(n.code,{children:"DateTime"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"a date that reflects the time at which the user asked the transaction to be executed"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionorigintransactionidstring-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"originTransactionId"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"ID of the origin transaction associated to this transaction"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionorigintransactiontransaction-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"originTransaction"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/interfaces/transaction",children:(0,c.jsx)(n.code,{children:"Transaction"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"origin transaction associated to this transaction"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionreservedamountamount-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"reservedAmount"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/objects/amount",children:(0,c.jsx)(n.code,{children:"Amount"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"reserved amount of the transaction computed with the rolling reserve."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionreservedamountreleasedatdatetime-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"reservedAmountReleasedAt"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/scalars/date-time",children:(0,c.jsx)(n.code,{children:"DateTime"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"date on which reserved funds become available"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checktransactionreturnreasontransactionreasoncode-",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckTransaction.",(0,c.jsx)("b",{children:"returnReason"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(n.a,{href:"/enums/transaction-reason-code",children:(0,c.jsx)(n.code,{children:"TransactionReasonCode"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"return reason"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,c.jsxs)(n.h4,{id:"transaction-",children:[(0,c.jsx)(n.a,{href:"/interfaces/transaction",children:(0,c.jsx)(n.code,{children:"Transaction"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Transaction"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>d});var c=a(67294);const s={},t=c.createContext(s);function d(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);