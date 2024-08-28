"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92884],{38551:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>m,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>x});var d=t(74848),n=t(28453),s=t(96540);const c={id:"sepapayment-direct-debit-mandate",title:"SEPAPaymentDirectDebitMandate"},r=void 0,i={id:"objects/sepapayment-direct-debit-mandate",title:"SEPAPaymentDirectDebitMandate",description:"Payment direct debit mandate for SEPA",source:"@site/docs/objects/sepapayment-direct-debit-mandate.mdx",sourceDirName:"objects",slug:"/objects/sepapayment-direct-debit-mandate",permalink:"/objects/sepapayment-direct-debit-mandate",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/sepapayment-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"sepapayment-direct-debit-mandate",title:"SEPAPaymentDirectDebitMandate"},sidebar:"schemaSidebar",previous:{title:"SEPADirectDebitTransaction",permalink:"/objects/sepadirect-debit-transaction"},next:{title:"SEPAPaymentMandateCreditor",permalink:"/objects/sepapayment-mandate-creditor"}},l={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,n.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:t,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,n.R)()},[i,l]=(0,s.useState)(c);return(0,d.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>SEPAPaymentDirectDebitMandate.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandateidid--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>transactions</b></code><Bullet></Bullet><code>TransactionConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatetransactionstransactionconnection-",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.transactions.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatetransactionsfirstint--",level:5},{value:'<code>SEPAPaymentDirectDebitMandate.transactions.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatetransactionsafterstring-",level:5},{value:'<code>SEPAPaymentDirectDebitMandate.transactions.<b>orderBy</b></code><Bullet></Bullet><code>TransactionsOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatetransactionsorderbytransactionsorderbyinput-",level:5},{value:'<code>SEPAPaymentDirectDebitMandate.transactions.<b>filters</b></code><Bullet></Bullet><code>TransactionsFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatetransactionsfilterstransactionsfiltersinput-",level:5},{value:'<code>SEPAPaymentDirectDebitMandate.<b>reference</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatereferencestring--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>scheme</b></code><Bullet></Bullet><code>SEPAPaymentMandateScheme!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandateschemesepapaymentmandatescheme--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>statusInfo</b></code><Bullet></Bullet><code>PaymentMandateStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatestatusinfopaymentmandatestatusinfo--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>sequence</b></code><Bullet></Bullet><code>PaymentMandateSequence!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatesequencepaymentmandatesequence--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>mandateDocumentUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatemandatedocumenturlstring--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>debtor</b></code><Bullet></Bullet><code>SEPAPaymentMandateDebtor!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatedebtorsepapaymentmandatedebtor--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>ultimateCreditorName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandateultimatecreditornamestring-",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>creditor</b></code><Bullet></Bullet><code>SEPAPaymentMandateCreditor!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatecreditorsepapaymentmandatecreditor--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>signatureDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatesignaturedatedate-",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatecreatedatdatetime--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandateupdatedatdatetime--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>executedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandateexecutedatdatetime-",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>expiredAt</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandateexpiredatdate-",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>accountHolder</b></code><Bullet></Bullet><code>AccountHolder!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandateaccountholderaccountholder--",level:4},{value:'<code>SEPAPaymentDirectDebitMandate.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepapaymentdirectdebitmandatenamestring-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SEPADirectDebitMandate</code> <Badge class="badge badge--secondary"></Badge>',id:"sepadirectdebitmandate-",level:4},{value:'<code>PaymentDirectDebitMandate</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentdirectdebitmandate-",level:4},{value:'<code>PaymentMandate</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentmandate-",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Payment direct debit mandate for SEPA"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type SEPAPaymentDirectDebitMandate implements SEPADirectDebitMandate, PaymentDirectDebitMandate, PaymentMandate {\n  id: ID!\n  transactions(\n    first: Int! = 50\n    after: String\n    orderBy: TransactionsOrderByInput\n    filters: TransactionsFiltersInput\n  ): TransactionConnection\n  reference: String!\n  scheme: SEPAPaymentMandateScheme!\n  statusInfo: PaymentMandateStatusInfo!\n  sequence: PaymentMandateSequence!\n  mandateDocumentUrl: String!\n  debtor: SEPAPaymentMandateDebtor!\n  ultimateCreditorName: String\n  creditor: SEPAPaymentMandateCreditor!\n  signatureDate: Date\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  executedAt: DateTime\n  expiredAt: Date\n  accountHolder: AccountHolder!\n  name: String\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandateidid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Unique identifier of the SEPA Direct Debit Payment Mandate"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatetransactionstransactionconnection-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"transactions"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/objects/transaction-connection",children:(0,d.jsx)(a.code,{children:"TransactionConnection"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.p,{children:"List of transactions associated with the SEPA Payment Direct Debit Mandate."}),"\n",(0,d.jsxs)(a.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,d.jsx)(a.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,d.jsxs)(a.h5,{id:"sepapaymentdirectdebitmandatetransactionsfirstint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.transactions.",(0,d.jsx)("b",{children:"first"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/int",children:(0,d.jsx)(a.code,{children:"Int!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"the number of elements to load (default value 50, maximum: 100)"}),"\n",(0,d.jsxs)(a.h5,{id:"sepapaymentdirectdebitmandatetransactionsafterstring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.transactions.",(0,d.jsx)("b",{children:"after"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,d.jsxs)(a.h5,{id:"sepapaymentdirectdebitmandatetransactionsorderbytransactionsorderbyinput-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.transactions.",(0,d.jsx)("b",{children:"orderBy"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/inputs/transactions-order-by-input",children:(0,d.jsx)(a.code,{children:"TransactionsOrderByInput"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,d.jsx)(a.p,{children:"an order you can apply to your list of connections (default value UpdatedAt desc)"}),"\n",(0,d.jsxs)(a.h5,{id:"sepapaymentdirectdebitmandatetransactionsfilterstransactionsfiltersinput-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.transactions.",(0,d.jsx)("b",{children:"filters"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/inputs/transactions-filters-input",children:(0,d.jsx)(a.code,{children:"TransactionsFiltersInput"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,d.jsx)(a.p,{children:"a filtering table you can apply to your list of connections"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatereferencestring--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"reference"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Unique reference of the SEPA Direct Debit Payment Mandate"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandateschemesepapaymentmandatescheme--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"scheme"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/enums/sepapayment-mandate-scheme",children:(0,d.jsx)(a.code,{children:"SEPAPaymentMandateScheme!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(a.p,{children:"SEPA Direct Debit Payment Mandate scheme"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatestatusinfopaymentmandatestatusinfo--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"statusInfo"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/interfaces/payment-mandate-status-info",children:(0,d.jsx)(a.code,{children:"PaymentMandateStatusInfo!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.p,{children:"SEPA Direct Debit Payment Mandate status information"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatesequencepaymentmandatesequence--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"sequence"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/enums/payment-mandate-sequence",children:(0,d.jsx)(a.code,{children:"PaymentMandateSequence!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(a.p,{children:"SEPA Direct Debit Payment Mandate sequence"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatemandatedocumenturlstring--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"mandateDocumentUrl"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"SEPA Direct Debit Payment Mandate PDF document URL"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatedebtorsepapaymentmandatedebtor--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"debtor"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/objects/sepapayment-mandate-debtor",children:(0,d.jsx)(a.code,{children:"SEPAPaymentMandateDebtor!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.p,{children:"SEPA Direct Debit Payment Mandate debtor information"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandateultimatecreditornamestring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"ultimateCreditorName"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"SEPA direct debit ultimate creditor name"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatecreditorsepapaymentmandatecreditor--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"creditor"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/objects/sepapayment-mandate-creditor",children:(0,d.jsx)(a.code,{children:"SEPAPaymentMandateCreditor!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.p,{children:"SEPA Direct Debit Payment Mandate creditor information"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatesignaturedatedate-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"signatureDate"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/date",children:(0,d.jsx)(a.code,{children:"Date"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Signature date of the SEPA Direct Debit Payment Mandate"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatecreatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Creation date of the SEPA Direct Debit Payment Mandate"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandateupdatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Last Update date of the SEPA Direct Debit Payment Mandate"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandateexecutedatdatetime-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"executedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Date of the the last transaction executed for the concerned SEPA Direct Debit Payment Mandate"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandateexpiredatdate-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"expiredAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/date",children:(0,d.jsx)(a.code,{children:"Date"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Expiry date of the SEPA Direct Debit Payment Mandate"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandateaccountholderaccountholder--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"accountHolder"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/objects/account-holder",children:(0,d.jsx)(a.code,{children:"AccountHolder!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.p,{children:"Account Holder information"}),"\n",(0,d.jsxs)(a.h4,{id:"sepapaymentdirectdebitmandatenamestring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPAPaymentDirectDebitMandate.",(0,d.jsx)("b",{children:"name"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.p,{children:"Custom name of the mandate"}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"sepadirectdebitmandate-",children:[(0,d.jsx)(a.a,{href:"/interfaces/sepadirect-debit-mandate",children:(0,d.jsx)(a.code,{children:"SEPADirectDebitMandate"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsxs)(a.h4,{id:"paymentdirectdebitmandate-",children:[(0,d.jsx)(a.a,{href:"/interfaces/payment-direct-debit-mandate",children:(0,d.jsx)(a.code,{children:"PaymentDirectDebitMandate"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsxs)(a.h4,{id:"paymentmandate-",children:[(0,d.jsx)(a.a,{href:"/interfaces/payment-mandate",children:(0,d.jsx)(a.code,{children:"PaymentMandate"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/objects/add-sepa-direct-debit-payment-mandate-success-payload",children:(0,d.jsx)(a.code,{children:"AddSepaDirectDebitPaymentMandateSuccessPayload"})}),"  ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>r});var d=t(96540);const n={},s=d.createContext(n);function c(e){const a=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),d.createElement(s.Provider,{value:a},e.children)}}}]);