"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91449],{23735:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>b,assets:()=>o,contentTitle:()=>i,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>g});var a=n(85893),s=n(11151),c=n(67294);const d={id:"sepadirect-debit-transaction",title:"SEPADirectDebitTransaction"},i=void 0,r={id:"objects/sepadirect-debit-transaction",title:"SEPADirectDebitTransaction",description:"Sepa Direct Debit transaction",source:"@site/docs/objects/sepadirect-debit-transaction.mdx",sourceDirName:"objects",slug:"/objects/sepadirect-debit-transaction",permalink:"/objects/sepadirect-debit-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/sepadirect-debit-transaction.mdx",tags:[],version:"current",frontMatter:{id:"sepadirect-debit-transaction",title:"SEPADirectDebitTransaction"},sidebar:"schemaSidebar",previous:{title:"SEPADirectDebitOutDebtor",permalink:"/objects/sepadirect-debit-out-debtor"},next:{title:"SEPAPaymentDirectDebitMandate",permalink:"/objects/sepapayment-direct-debit-mandate"}},o={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const t={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>SEPADirectDebitTransaction.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionidid--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>supportingDocumentCollections</b></code><Bullet></Bullet><code>SupportingDocumentCollectionConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionsupportingdocumentcollectionssupportingdocumentcollectionconnection--",level:4},{value:'<code>SEPADirectDebitTransaction.supportingDocumentCollections.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionsupportingdocumentcollectionsfirstint--",level:5},{value:'<code>SEPADirectDebitTransaction.supportingDocumentCollections.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionsupportingdocumentcollectionsbeforestring-",level:5},{value:'<code>SEPADirectDebitTransaction.supportingDocumentCollections.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionsupportingdocumentcollectionsafterstring-",level:5},{value:'<code>SEPADirectDebitTransaction.supportingDocumentCollections.<b>filters</b></code><Bullet></Bullet><code>SupportingDocumentCollectionFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionsupportingdocumentcollectionsfilterssupportingdocumentcollectionfilterinput-",level:5},{value:'<code>SEPADirectDebitTransaction.<b>reference</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionreferencestring--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>paymentMethodIdentifier</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionpaymentmethodidentifierstring--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>side</b></code><Bullet></Bullet><code>TransactionSide!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionsidetransactionside--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>type</b></code><Bullet></Bullet><code>TransactionTypeEnum!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactiontypetransactiontypeenum--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>amount</b></code><Bullet></Bullet><code>Amount!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionamountamount--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionlabelstring--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>statusInfo</b></code><Bullet></Bullet><code>TransactionStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionstatusinfotransactionstatusinfo--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>paymentId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionpaymentidstring-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>payment</b></code><Bullet></Bullet><code>Payment</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionpaymentpayment-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactioncreatedatdatetime--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionupdatedatdatetime--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>counterparty</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactioncounterpartystring--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>bookedBalanceAfter</b></code><Bullet></Bullet><code>Amount</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionbookedbalanceafteramount-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>paymentProduct</b></code><Bullet></Bullet><code>PaymentProduct!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionpaymentproductpaymentproduct--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>creditor</b></code><Bullet></Bullet><code>SEPADirectDebitCreditor!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactioncreditorsepadirectdebitcreditor--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>debtor</b></code><Bullet></Bullet><code>SEPADirectDebitDebtor!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactiondebtorsepadirectdebitdebtor--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>account</b></code><Bullet></Bullet><code>Account</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionaccountaccount-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>mandate</b></code><Bullet></Bullet><code>SEPADirectDebitMandate</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionmandatesepadirectdebitmandate-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>externalReference</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionexternalreferencestring-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>executionDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionexecutiondatedatetime--",level:4},{value:'<code>SEPADirectDebitTransaction.<b>requestedExecutionAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionrequestedexecutionatdatetime-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>originTransactionId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionorigintransactionidstring-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>originTransaction</b></code><Bullet></Bullet><code>Transaction</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionorigintransactiontransaction-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>reservedAmount</b></code><Bullet></Bullet><code>Amount</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionreservedamountamount-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>reservedAmountReleasedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionreservedamountreleasedatdatetime-",level:4},{value:'<code>SEPADirectDebitTransaction.<b>returnReason</b></code><Bullet></Bullet><code>TransactionReasonCode</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebittransactionreturnreasontransactionreasoncode-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Transaction</code> <Badge class="badge badge--secondary"></Badge>',id:"transaction-",level:4}],x=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,s.a)()},[r,o]=(0,c.useState)(d);return(0,a.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})};function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Sepa Direct Debit transaction"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type SEPADirectDebitTransaction implements Transaction {\n  id: ID!\n  supportingDocumentCollections(\n    first: Int! = 50\n    before: String\n    after: String\n    filters: SupportingDocumentCollectionFilterInput\n  ): SupportingDocumentCollectionConnection!\n  reference: String!\n  paymentMethodIdentifier: String!\n  side: TransactionSide!\n  type: TransactionTypeEnum!\n  amount: Amount!\n  label: String!\n  statusInfo: TransactionStatusInfo!\n  paymentId: String\n  payment: Payment\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  counterparty: String!\n  bookedBalanceAfter: Amount\n  paymentProduct: PaymentProduct!\n  creditor: SEPADirectDebitCreditor!\n  debtor: SEPADirectDebitDebtor!\n  account: Account\n  mandate: SEPADirectDebitMandate\n  externalReference: String\n  executionDate: DateTime!\n  requestedExecutionAt: DateTime\n  originTransactionId: String\n  originTransaction: Transaction\n  reservedAmount: Amount\n  reservedAmountReleasedAt: DateTime\n  returnReason: TransactionReasonCode\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionidid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"unique identifier of the transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionsupportingdocumentcollectionssupportingdocumentcollectionconnection--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"supportingDocumentCollections"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/objects/supporting-document-collection-connection",children:(0,a.jsx)(t.code,{children:"SupportingDocumentCollectionConnection!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h5,{id:"sepadirectdebittransactionsupportingdocumentcollectionsfirstint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.supportingDocumentCollections.",(0,a.jsx)("b",{children:"first"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"the number of elements to load (maximum: 100)"}),"\n"]}),"\n",(0,a.jsxs)(t.h5,{id:"sepadirectdebittransactionsupportingdocumentcollectionsbeforestring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.supportingDocumentCollections.",(0,a.jsx)("b",{children:"before"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"the index (a unique reference in string form) from which you will load the preceding elements"}),"\n"]}),"\n",(0,a.jsxs)(t.h5,{id:"sepadirectdebittransactionsupportingdocumentcollectionsafterstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.supportingDocumentCollections.",(0,a.jsx)("b",{children:"after"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n"]}),"\n",(0,a.jsxs)(t.h5,{id:"sepadirectdebittransactionsupportingdocumentcollectionsfilterssupportingdocumentcollectionfilterinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.supportingDocumentCollections.",(0,a.jsx)("b",{children:"filters"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/inputs/supporting-document-collection-filter-input",children:(0,a.jsx)(t.code,{children:"SupportingDocumentCollectionFilterInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"a filtering table you can apply to your list of connections"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionreferencestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"reference"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionpaymentmethodidentifierstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"paymentMethodIdentifier"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionsidetransactionside--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"side"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/enums/transaction-side",children:(0,a.jsx)(t.code,{children:"TransactionSide!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"side (Credit or Debit)"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactiontypetransactiontypeenum--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/enums/transaction-type-enum",children:(0,a.jsx)(t.code,{children:"TransactionTypeEnum!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"type"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionamountamount--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"amount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/objects/amount",children:(0,a.jsx)(t.code,{children:"Amount!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"amount"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionlabelstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"label"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"label"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionstatusinfotransactionstatusinfo--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"statusInfo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/interfaces/transaction-status-info",children:(0,a.jsx)(t.code,{children:"TransactionStatusInfo!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"status information"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionpaymentidstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"paymentId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"ID of the payment associated to this transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionpaymentpayment-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"payment"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/objects/payment",children:(0,a.jsx)(t.code,{children:"Payment"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"payment associated to this transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactioncreatedatdatetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"created date"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionupdatedatdatetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"updated date"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactioncounterpartystring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"counterparty"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ..."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionbookedbalanceafteramount-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"bookedBalanceAfter"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/objects/amount",children:(0,a.jsx)(t.code,{children:"Amount"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"booked balance after this transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionpaymentproductpaymentproduct--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"paymentProduct"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/enums/payment-product",children:(0,a.jsx)(t.code,{children:"PaymentProduct!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"payment product used for this transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactioncreditorsepadirectdebitcreditor--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"creditor"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/interfaces/sepadirect-debit-creditor",children:(0,a.jsx)(t.code,{children:"SEPADirectDebitCreditor!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"creditor information"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactiondebtorsepadirectdebitdebtor--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"debtor"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/interfaces/sepadirect-debit-debtor",children:(0,a.jsx)(t.code,{children:"SEPADirectDebitDebtor!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"debtor information"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionaccountaccount-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"account"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/objects/account",children:(0,a.jsx)(t.code,{children:"Account"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"matching account for the transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionmandatesepadirectdebitmandate-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"mandate"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/interfaces/sepadirect-debit-mandate",children:(0,a.jsx)(t.code,{children:"SEPADirectDebitMandate"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"matching SEPA mandate for the transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionexternalreferencestring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"externalReference"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"an arbitrary identifier that was defined by you when you created this transaction."}),"\n",(0,a.jsx)(t.p,{children:"For example, you can define it in the CreditTransferInput mutation."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionexecutiondatedatetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"executionDate"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionrequestedexecutionatdatetime-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"requestedExecutionAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"a date that reflects the time at which the user asked the transaction to be executed"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionorigintransactionidstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"originTransactionId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"ID of the origin transaction associated to this transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionorigintransactiontransaction-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"originTransaction"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/interfaces/transaction",children:(0,a.jsx)(t.code,{children:"Transaction"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"origin transaction associated to this transaction"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionreservedamountamount-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"reservedAmount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/objects/amount",children:(0,a.jsx)(t.code,{children:"Amount"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"reserved amount of the transaction computed with the rolling reserve."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionreservedamountreleasedatdatetime-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"reservedAmountReleasedAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"date on which reserved funds become available."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"sepadirectdebittransactionreturnreasontransactionreasoncode-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPADirectDebitTransaction.",(0,a.jsx)("b",{children:"returnReason"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/enums/transaction-reason-code",children:(0,a.jsx)(t.code,{children:"TransactionReasonCode"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"r-transaction reason"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"transaction-",children:[(0,a.jsx)(t.a,{href:"/interfaces/transaction",children:(0,a.jsx)(t.code,{children:"Transaction"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Transaction"}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>d});var a=n(67294);const s={},c=a.createContext(s);function d(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);