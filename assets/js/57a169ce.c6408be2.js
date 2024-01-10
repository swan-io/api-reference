"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[90713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,k=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49932:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const i={id:"international-credit-transfer-transaction",title:"InternationalCreditTransferTransaction",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/international-credit-transfer-transaction",id:"objects/international-credit-transfer-transaction",title:"InternationalCreditTransferTransaction",description:"No description",source:"@site/docs/objects/international-credit-transfer-transaction.mdx",sourceDirName:"objects",slug:"/objects/international-credit-transfer-transaction",permalink:"/objects/international-credit-transfer-transaction",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/international-credit-transfer-transaction.mdx",tags:[],version:"current",frontMatter:{id:"international-credit-transfer-transaction",title:"InternationalCreditTransferTransaction",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternationalCreditTransferQuote",permalink:"/objects/international-credit-transfer-quote"},next:{title:"InvalidArgumentRejectionField",permalink:"/objects/invalid-argument-rejection-field"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>account</b></code><Bullet /><code>Account</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbaccountbcodeaccount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>bookedBalanceAfter</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbbookedbalanceafterbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>counterparty</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbcounterpartybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>creditor</b></code><Bullet /><code>InternationalCreditTransferCreditor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbcreditorbcodeinternationalcredittransfercreditor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>debtor</b></code><Bullet /><code>InternationalCreditTransferDebtor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbdebtorbcodeinternationalcredittransferdebtor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>executionDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbexecutiondatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>fees</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbfeesbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>instructedAmount</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbinstructedamountbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>intermediaryBankFees</b></code><Bullet /><code>[Amount!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbintermediarybankfeesbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>label</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionblabelbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>originTransaction</b></code><Bullet /><code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionborigintransactionbcodetransaction-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>originTransactionId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionborigintransactionidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>payment</b></code><Bullet /><code>Payment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbpaymentbcodepayment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>paymentId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbpaymentidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>paymentMethodIdentifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbpaymentmethodidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>paymentProduct</b></code><Bullet /><code>PaymentProduct!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbpaymentproductbcodepaymentproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>currencyExchange</b></code><Bullet /><code>InternationalCreditTransferCurrencyExchange!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbcurrencyexchangebcodeinternationalcredittransfercurrencyexchange--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>side</b></code><Bullet /><code>TransactionSide!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbsidebcodetransactionside--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>statusInfo</b></code><Bullet /><code>TransactionStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbstatusinfobcodetransactionstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>type</b></code><Bullet /><code>TransactionTypeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbtypebcodetransactiontypeenum--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternationalCreditTransferTransaction.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransfertransactionbupdatedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"transaction-",level:4}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:m,SpecifiedBy:u,Badge:f},y="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternationalCreditTransferTransaction implements Transaction {\n  account: Account\n  amount: Amount!\n  bookedBalanceAfter: Amount\n  counterparty: String!\n  createdAt: DateTime!\n  creditor: InternationalCreditTransferCreditor!\n  debtor: InternationalCreditTransferDebtor!\n  executionDate: DateTime!\n  externalReference: String\n  fees: Amount\n  id: ID!\n  instructedAmount: Amount\n  intermediaryBankFees: [Amount!]\n  label: String!\n  originTransaction: Transaction\n  originTransactionId: String\n  payment: Payment\n  paymentId: String\n  paymentMethodIdentifier: String!\n  paymentProduct: PaymentProduct!\n  currencyExchange: InternationalCreditTransferCurrencyExchange!\n  reference: String!\n  requestedExecutionAt: DateTime\n  side: TransactionSide!\n  statusInfo: TransactionStatusInfo!\n  type: TransactionTypeEnum!\n  updatedAt: DateTime!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbaccountbcodeaccount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"account"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/account"},(0,o.kt)("inlineCode",{parentName:"a"},"Account"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"matching account for this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbamountbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"amount")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbbookedbalanceafterbcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"bookedBalanceAfter"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"booked balance after this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbcounterpartybcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"counterparty"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ...")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"created date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbcreditorbcodeinternationalcredittransfercreditor--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"creditor"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/unions/international-credit-transfer-creditor"},(0,o.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferCreditor!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"creditor information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbdebtorbcodeinternationalcredittransferdebtor--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"debtor"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/unions/international-credit-transfer-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferDebtor!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"debtor information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbexecutiondatebcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"executionDate"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbexternalreferencebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"externalReference"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"an arbitrary identifier that was defined by you when you created this transaction.")),(0,o.kt)("p",null,"For example, you can define it in the CreditTransferInput mutation."),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbfeesbcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"fees"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'@deprecated(reason: "use ',(0,o.kt)("inlineCode",{parentName:"p"},"quote.feesAmount"),' instead")')),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"unique identifier of the transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbinstructedamountbcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"instructedAmount"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"instructed amount")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbintermediarybankfeesbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"intermediaryBankFees"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"[Amount!]"))," ",(0,o.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"instructed amount")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionblabelbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"label"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"label")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionborigintransactionbcodetransaction-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"originTransaction"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/interfaces/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"origin transaction associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionborigintransactionidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"originTransactionId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the origin transaction associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbpaymentbcodepayment-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"payment"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/payment"},(0,o.kt)("inlineCode",{parentName:"a"},"Payment"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbpaymentidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"paymentId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the payment associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbpaymentmethodidentifierbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"paymentMethodIdentifier"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbpaymentproductbcodepaymentproduct--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"paymentProduct"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/payment-product"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentProduct!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment product used for this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbcurrencyexchangebcodeinternationalcredittransfercurrencyexchange--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"currencyExchange"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/objects/international-credit-transfer-currency-exchange"},(0,o.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferCurrencyExchange!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"quote given by our international provider")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbreferencebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"reference"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"external identifier of the transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbrequestedexecutionatbcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"requestedExecutionAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"a date that reflects the time at which the user asked the transaction to be executed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbsidebcodetransactionside--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"side"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/transaction-side"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionSide!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"side (Credit or Debit)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbstatusinfobcodetransactionstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/interfaces/transaction-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"status information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbtypebcodetransactiontypeenum--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"type"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/transaction-type-enum"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionTypeEnum!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransfertransactionbupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternationalCreditTransferTransaction.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"updated date")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"transaction-"},(0,o.kt)("a",{parentName:"h4",href:"/interfaces/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Transaction")))}p.isMDXComponent=!0}}]);