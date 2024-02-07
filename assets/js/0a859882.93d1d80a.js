"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[67794],{34514:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>x,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>g});var r=n(85893),s=n(11151),t=n(67294);const d={id:"sepacredit-transfer-transaction",title:"SEPACreditTransferTransaction"},c=void 0,i={id:"objects/sepacredit-transfer-transaction",title:"SEPACreditTransferTransaction",description:"Sepa Credit Transfer transaction",source:"@site/docs/objects/sepacredit-transfer-transaction.mdx",sourceDirName:"objects",slug:"/objects/sepacredit-transfer-transaction",permalink:"/objects/sepacredit-transfer-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/sepacredit-transfer-transaction.mdx",tags:[],version:"current",frontMatter:{id:"sepacredit-transfer-transaction",title:"SEPACreditTransferTransaction"},sidebar:"schemaSidebar",previous:{title:"SEPACreditTransferOutDebtor",permalink:"/objects/sepacredit-transfer-out-debtor"},next:{title:"SEPADirectDebitInCreditor",permalink:"/objects/sepadirect-debit-in-creditor"}},o={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,s.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,s.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>SEPACreditTransferTransaction.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionidid--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>reference</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionreferencestring--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>paymentMethodIdentifier</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionpaymentmethodidentifierstring--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>side</b></code><Bullet></Bullet><code>TransactionSide!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionsidetransactionside--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>type</b></code><Bullet></Bullet><code>TransactionTypeEnum!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactiontypetransactiontypeenum--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>amount</b></code><Bullet></Bullet><code>Amount!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionamountamount--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionlabelstring--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>statusInfo</b></code><Bullet></Bullet><code>TransactionStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionstatusinfotransactionstatusinfo--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>paymentId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionpaymentidstring-",level:4},{value:'<code>SEPACreditTransferTransaction.<b>payment</b></code><Bullet></Bullet><code>Payment</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionpaymentpayment-",level:4},{value:'<code>SEPACreditTransferTransaction.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactioncreatedatdatetime--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionupdatedatdatetime--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>counterparty</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactioncounterpartystring--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>bookedBalanceAfter</b></code><Bullet></Bullet><code>Amount</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionbookedbalanceafteramount-",level:4},{value:'<code>SEPACreditTransferTransaction.<b>paymentProduct</b></code><Bullet></Bullet><code>PaymentProduct!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionpaymentproductpaymentproduct--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>creditor</b></code><Bullet></Bullet><code>SEPACreditTransferCreditor!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactioncreditorsepacredittransfercreditor--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>debtor</b></code><Bullet></Bullet><code>SEPACreditTransferDebtor!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactiondebtorsepacredittransferdebtor--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>account</b></code><Bullet></Bullet><code>Account</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionaccountaccount-",level:4},{value:'<code>SEPACreditTransferTransaction.<b>externalReference</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionexternalreferencestring-",level:4},{value:'<code>SEPACreditTransferTransaction.<b>executionDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionexecutiondatedatetime--",level:4},{value:'<code>SEPACreditTransferTransaction.<b>requestedExecutionAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionrequestedexecutionatdatetime-",level:4},{value:'<code>SEPACreditTransferTransaction.<b>originTransactionId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionorigintransactionidstring-",level:4},{value:'<code>SEPACreditTransferTransaction.<b>originTransaction</b></code><Bullet></Bullet><code>Transaction</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionorigintransactiontransaction-",level:4},{value:'<code>SEPACreditTransferTransaction.<b>returnReason</b></code><Bullet></Bullet><code>TransactionReasonCode</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfertransactionreturnreasontransactionreasoncode-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Transaction</code> <Badge class="badge badge--secondary"></Badge>',id:"transaction-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:a,children:n,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,s.a)()},[i,o]=(0,t.useState)(d);return(0,r.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&n]})};function f(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Sepa Credit Transfer transaction"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-graphql",children:"type SEPACreditTransferTransaction implements Transaction {\n  id: ID!\n  reference: String!\n  paymentMethodIdentifier: String!\n  side: TransactionSide!\n  type: TransactionTypeEnum!\n  amount: Amount!\n  label: String!\n  statusInfo: TransactionStatusInfo!\n  paymentId: String\n  payment: Payment\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  counterparty: String!\n  bookedBalanceAfter: Amount\n  paymentProduct: PaymentProduct!\n  creditor: SEPACreditTransferCreditor!\n  debtor: SEPACreditTransferDebtor!\n  account: Account\n  externalReference: String\n  executionDate: DateTime!\n  requestedExecutionAt: DateTime\n  originTransactionId: String\n  originTransaction: Transaction\n  returnReason: TransactionReasonCode\n}\n"})}),"\n",(0,r.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionidid--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"id"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/id",children:(0,r.jsx)(a.code,{children:"ID!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"unique identifier of the transaction"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionreferencestring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"reference"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionpaymentmethodidentifierstring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"paymentMethodIdentifier"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionsidetransactionside--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"side"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/enums/transaction-side",children:(0,r.jsx)(a.code,{children:"TransactionSide!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"side (Credit or Debit)"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactiontypetransactiontypeenum--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"type"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/enums/transaction-type-enum",children:(0,r.jsx)(a.code,{children:"TransactionTypeEnum!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"type"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionamountamount--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"amount"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/objects/amount",children:(0,r.jsx)(a.code,{children:"Amount!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"amount"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionlabelstring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"label"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"label"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionstatusinfotransactionstatusinfo--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"statusInfo"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/interfaces/transaction-status-info",children:(0,r.jsx)(a.code,{children:"TransactionStatusInfo!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"status information"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionpaymentidstring-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"paymentId"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"ID of the payment associated to this transaction"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionpaymentpayment-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"payment"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/objects/payment",children:(0,r.jsx)(a.code,{children:"Payment"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"payment associated to this transaction"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactioncreatedatdatetime--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"createdAt"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/date-time",children:(0,r.jsx)(a.code,{children:"DateTime!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"created date"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionupdatedatdatetime--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"updatedAt"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/date-time",children:(0,r.jsx)(a.code,{children:"DateTime!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"updated date"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactioncounterpartystring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"counterparty"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ..."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionbookedbalanceafteramount-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"bookedBalanceAfter"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/objects/amount",children:(0,r.jsx)(a.code,{children:"Amount"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"booked balance after this transaction"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionpaymentproductpaymentproduct--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"paymentProduct"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/enums/payment-product",children:(0,r.jsx)(a.code,{children:"PaymentProduct!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"payment product used for this transaction"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactioncreditorsepacredittransfercreditor--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"creditor"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/interfaces/sepacredit-transfer-creditor",children:(0,r.jsx)(a.code,{children:"SEPACreditTransferCreditor!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"creditor information"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactiondebtorsepacredittransferdebtor--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"debtor"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/interfaces/sepacredit-transfer-debtor",children:(0,r.jsx)(a.code,{children:"SEPACreditTransferDebtor!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"debtor information"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionaccountaccount-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"account"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/objects/account",children:(0,r.jsx)(a.code,{children:"Account"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"matching account for the transaction"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionexternalreferencestring-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"externalReference"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"an arbitrary identifier that was defined by you when you created this transaction."}),"\n",(0,r.jsx)(a.p,{children:"For example, you can define it in the CreditTransferInput mutation."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionexecutiondatedatetime--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"executionDate"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/date-time",children:(0,r.jsx)(a.code,{children:"DateTime!"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionrequestedexecutionatdatetime-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"requestedExecutionAt"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/date-time",children:(0,r.jsx)(a.code,{children:"DateTime"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"a date that reflects the time at which the user asked the transaction to be executed"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionorigintransactionidstring-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"originTransactionId"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"ID of the origin transaction associated to this transaction"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionorigintransactiontransaction-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"originTransaction"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/interfaces/transaction",children:(0,r.jsx)(a.code,{children:"Transaction"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"origin transaction associated to this transaction"}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"sepacredittransfertransactionreturnreasontransactionreasoncode-",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferTransaction.",(0,r.jsx)("b",{children:"returnReason"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/enums/transaction-reason-code",children:(0,r.jsx)(a.code,{children:"TransactionReasonCode"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"r-transaction reason"}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(a.h4,{id:"transaction-",children:[(0,r.jsx)(a.a,{href:"/interfaces/transaction",children:(0,r.jsx)(a.code,{children:"Transaction"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"Transaction"}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/objects/balance",children:(0,r.jsx)(a.code,{children:"Balance"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>d});var r=n(67294);const s={},t=r.createContext(s);function d(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);