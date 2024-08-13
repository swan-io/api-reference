"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51188],{10082:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>h,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>t,toc:()=>b});var s=d(74848),r=d(28453),c=d(96540);const n={id:"card",title:"Card"},l=void 0,t={id:"objects/card",title:"Card",description:"Card",source:"@site/docs/objects/card.mdx",sourceDirName:"objects",slug:"/objects/card",permalink:"/objects/card",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card.mdx",tags:[],version:"current",frontMatter:{id:"card",title:"Card"},sidebar:"schemaSidebar",previous:{title:"CardWrongStatusRejection",permalink:"/objects/card-wrong-status-rejection"},next:{title:"CheckMerchantPaymentMethod",permalink:"/objects/check-merchant-payment-method"}},i={},o=()=>{const e={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,r.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:d,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[t,i]=(0,c.useState)(n);return(0,s.jsxs)(l.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:t?e:a}),t&&d]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Card.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardidid--",level:4},{value:'<code>Card.<b>digitalCards</b></code><Bullet></Bullet><code>DigitalCardConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"carddigitalcardsdigitalcardconnection--",level:4},{value:'<code>Card.digitalCards.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"carddigitalcardsfirstint--",level:5},{value:'<code>Card.digitalCards.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"carddigitalcardsafterstring-",level:5},{value:'<code>Card.digitalCards.<b>orderBy</b></code><Bullet></Bullet><code>DigitalCardOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"carddigitalcardsorderbydigitalcardorderbyinput-",level:5},{value:'<code>Card.digitalCards.<b>filters</b></code><Bullet></Bullet><code>DigitalCardFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"carddigitalcardsfiltersdigitalcardfiltersinput-",level:5},{value:'<code>Card.<b>transactions</b></code><Bullet></Bullet><code>TransactionConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"cardtransactionstransactionconnection-",level:4},{value:'<code>Card.transactions.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardtransactionsfirstint--",level:5},{value:'<code>Card.transactions.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardtransactionsafterstring-",level:5},{value:'<code>Card.transactions.<b>orderBy</b></code><Bullet></Bullet><code>TransactionsOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"cardtransactionsorderbytransactionsorderbyinput-",level:5},{value:'<code>Card.transactions.<b>filters</b></code><Bullet></Bullet><code>TransactionsFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"cardtransactionsfilterstransactionsfiltersinput-",level:5},{value:'<code>Card.<b>type</b></code><Bullet></Bullet><code>CardType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardtypecardtype--",level:4},{value:'<code>Card.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardcreatedatdatetime--",level:4},{value:'<code>Card.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardupdatedatdatetime--",level:4},{value:'<code>Card.<b>accountMembership</b></code><Bullet></Bullet><code>AccountMembership!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardaccountmembershipaccountmembership--",level:4},{value:'<code>Card.<b>mainCurrency</b></code><Bullet></Bullet><code>Currency!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardmaincurrencycurrency--",level:4},{value:'<code>Card.<b>cardContractExpiryDate</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"cardcardcontractexpirydatedatetime-",level:4},{value:'<code>Card.<b>cardDesignUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardcarddesignurlstring--",level:4},{value:'<code>Card.<b>cardUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardcardurlstring--",level:4},{value:'<code>Card.<b>statusInfo</b></code><Bullet></Bullet><code>CardStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardstatusinfocardstatusinfo--",level:4},{value:'<code>Card.<b>withdrawal</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardwithdrawalboolean--",level:4},{value:'<code>Card.<b>international</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardinternationalboolean--",level:4},{value:'<code>Card.<b>nonMainCurrencyTransactions</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardnonmaincurrencytransactionsboolean--",level:4},{value:'<code>Card.<b>eCommerce</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardecommerceboolean--",level:4},{value:'<code>Card.<b>spendingLimits</b></code><Bullet></Bullet><code>[SpendingLimit!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardspendinglimitsspendinglimit--",level:4},{value:'<code>Card.<b>physicalCard</b></code><Bullet></Bullet><code>PhysicalCard</code> <Badge class="badge badge--secondary"></Badge>',id:"cardphysicalcardphysicalcard-",level:4},{value:'<code>Card.<b>cardMaskedNumber</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardcardmaskednumberstring--",level:4},{value:'<code>Card.<b>expiryDate</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardexpirydatestring-",level:4},{value:'<code>Card.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardnamestring-",level:4},{value:'<code>Card.<b>cardProduct</b></code><Bullet></Bullet><code>CardProduct!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardcardproductcardproduct--",level:4},{value:'<code>Card.<b>issuingCountry</b></code><Bullet></Bullet><code>CCA3!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardissuingcountrycca3--",level:4},{value:'<code>Card.<b>spending</b></code><Bullet></Bullet><code>Spending</code> <Badge class="badge badge--secondary"></Badge>',id:"cardspendingspending-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Card"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type Card {\n  id: ID!\n  digitalCards(\n    first: Int! = 50\n    after: String\n    orderBy: DigitalCardOrderByInput\n    filters: DigitalCardFiltersInput\n  ): DigitalCardConnection!\n  transactions(\n    first: Int! = 50\n    after: String\n    orderBy: TransactionsOrderByInput\n    filters: TransactionsFiltersInput\n  ): TransactionConnection\n  type: CardType!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  accountMembership: AccountMembership!\n  mainCurrency: Currency!\n  cardContractExpiryDate: DateTime\n  cardDesignUrl: String!\n  cardUrl: String!\n  statusInfo: CardStatusInfo!\n  withdrawal: Boolean!\n  international: Boolean!\n  nonMainCurrencyTransactions: Boolean!\n  eCommerce: Boolean!\n  spendingLimits: [SpendingLimit!]\n  physicalCard: PhysicalCard\n  cardMaskedNumber: String!\n  expiryDate: String\n  name: String\n  cardProduct: CardProduct!\n  issuingCountry: CCA3!\n  spending: Spending\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"cardidid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Unique identifier of a card"}),"\n",(0,s.jsxs)(a.h4,{id:"carddigitalcardsdigitalcardconnection--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"digitalCards"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/digital-card-connection",children:(0,s.jsx)(a.code,{children:"DigitalCardConnection!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.p,{children:"Digital Cards linked to this card"}),"\n",(0,s.jsxs)(a.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,s.jsx)(a.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,s.jsxs)(a.h5,{id:"carddigitalcardsfirstint--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.digitalCards.",(0,s.jsx)("b",{children:"first"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/int",children:(0,s.jsx)(a.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"the number of elements to load (maximum: 100)"}),"\n",(0,s.jsxs)(a.h5,{id:"carddigitalcardsafterstring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.digitalCards.",(0,s.jsx)("b",{children:"after"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,s.jsxs)(a.h5,{id:"carddigitalcardsorderbydigitalcardorderbyinput-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.digitalCards.",(0,s.jsx)("b",{children:"orderBy"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/inputs/digital-card-order-by-input",children:(0,s.jsx)(a.code,{children:"DigitalCardOrderByInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(a.p,{children:"an order you can apply to your list of connections"}),"\n",(0,s.jsxs)(a.h5,{id:"carddigitalcardsfiltersdigitalcardfiltersinput-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.digitalCards.",(0,s.jsx)("b",{children:"filters"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/inputs/digital-card-filters-input",children:(0,s.jsx)(a.code,{children:"DigitalCardFiltersInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(a.p,{children:"a filtering table you can apply to your list of connections"}),"\n",(0,s.jsxs)(a.h4,{id:"cardtransactionstransactionconnection-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"transactions"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/transaction-connection",children:(0,s.jsx)(a.code,{children:"TransactionConnection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.p,{children:"List of transactions of a card."}),"\n",(0,s.jsxs)(a.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,s.jsx)(a.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,s.jsxs)(a.h5,{id:"cardtransactionsfirstint--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.transactions.",(0,s.jsx)("b",{children:"first"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/int",children:(0,s.jsx)(a.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"the number of elements to load (default value 50, maximum: 100)"}),"\n",(0,s.jsxs)(a.h5,{id:"cardtransactionsafterstring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.transactions.",(0,s.jsx)("b",{children:"after"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,s.jsxs)(a.h5,{id:"cardtransactionsorderbytransactionsorderbyinput-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.transactions.",(0,s.jsx)("b",{children:"orderBy"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/inputs/transactions-order-by-input",children:(0,s.jsx)(a.code,{children:"TransactionsOrderByInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(a.p,{children:"an order you can apply to your list of connections (default value UpdatedAt desc)"}),"\n",(0,s.jsxs)(a.h5,{id:"cardtransactionsfilterstransactionsfiltersinput-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.transactions.",(0,s.jsx)("b",{children:"filters"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/inputs/transactions-filters-input",children:(0,s.jsx)(a.code,{children:"TransactionsFiltersInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(a.p,{children:"a filtering table you can apply to your list of connections"}),"\n",(0,s.jsxs)(a.h4,{id:"cardtypecardtype--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/enums/card-type",children:(0,s.jsx)(a.code,{children:"CardType!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(a.p,{children:"Type of a card"}),"\n",(0,s.jsxs)(a.h4,{id:"cardcreatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Created date"}),"\n",(0,s.jsxs)(a.h4,{id:"cardupdatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Updated date"}),"\n",(0,s.jsxs)(a.h4,{id:"cardaccountmembershipaccountmembership--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"accountMembership"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/account-membership",children:(0,s.jsx)(a.code,{children:"AccountMembership!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.p,{children:"Account membership to define the card holder and the account linked to the card."}),"\n",(0,s.jsxs)(a.h4,{id:"cardmaincurrencycurrency--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"mainCurrency"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/currency",children:(0,s.jsx)(a.code,{children:"Currency!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Main Currency"}),"\n",(0,s.jsxs)(a.h4,{id:"cardcardcontractexpirydatedatetime-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"cardContractExpiryDate"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.p,{children:["Card expiration date  if ",(0,s.jsx)(a.code,{children:"null"})," it does not have an expiration date"]}),"\n",(0,s.jsxs)(a.h4,{id:"cardcarddesignurlstring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"cardDesignUrl"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"URL of the card design"}),"\n",(0,s.jsxs)(a.h4,{id:"cardcardurlstring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"cardUrl"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"URL of the card with masked card information (like its number) and with full card information if connected user consented beforehand"}),"\n",(0,s.jsxs)(a.h4,{id:"cardstatusinfocardstatusinfo--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"statusInfo"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/interfaces/card-status-info",children:(0,s.jsx)(a.code,{children:"CardStatusInfo!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(a.p,{children:"Card status information"}),"\n",(0,s.jsxs)(a.h4,{id:"cardwithdrawalboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"withdrawal"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"true"})," if this card allows cash withdrawals"]}),"\n",(0,s.jsxs)(a.h4,{id:"cardinternationalboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"international"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"true"})," if this card allows payments outside of the country"]}),"\n",(0,s.jsxs)(a.h4,{id:"cardnonmaincurrencytransactionsboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"nonMainCurrencyTransactions"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"true"})," if this card allows transactions outside of the card's main currency"]}),"\n",(0,s.jsxs)(a.h4,{id:"cardecommerceboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"eCommerce"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"true"})," if this card allows transactions at eCommerce sites"]}),"\n",(0,s.jsxs)(a.h4,{id:"cardspendinglimitsspendinglimit--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"spendingLimits"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/spending-limit",children:(0,s.jsx)(a.code,{children:"[SpendingLimit!]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.p,{children:"Periodic Spending limit list"}),"\n",(0,s.jsxs)(a.h4,{id:"cardphysicalcardphysicalcard-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"physicalCard"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/physical-card",children:(0,s.jsx)(a.code,{children:"PhysicalCard"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.p,{children:"Physical card if the card holder has ordered one"}),"\n",(0,s.jsxs)(a.h4,{id:"cardcardmaskednumberstring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"cardMaskedNumber"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Masked Card Number"}),"\n",(0,s.jsxs)(a.h4,{id:"cardexpirydatestring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"expiryDate"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Card expiry date with MM/YY format"}),"\n",(0,s.jsxs)(a.h4,{id:"cardnamestring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"name"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Card name"}),"\n",(0,s.jsxs)(a.h4,{id:"cardcardproductcardproduct--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"cardProduct"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/card-product",children:(0,s.jsx)(a.code,{children:"CardProduct!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.p,{children:"Card product"}),"\n",(0,s.jsxs)(a.h4,{id:"cardissuingcountrycca3--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"issuingCountry"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/cca3",children:(0,s.jsx)(a.code,{children:"CCA3!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"Issuing Country"}),"\n",(0,s.jsxs)(a.h4,{id:"cardspendingspending-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Card.",(0,s.jsx)("b",{children:"spending"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/spending",children:(0,s.jsx)(a.code,{children:"Spending"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.p,{children:"Periodic Spending"}),"\n",(0,s.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/queries/card",children:(0,s.jsx)(a.code,{children:"card"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/objects/account-and-card",children:(0,s.jsx)(a.code,{children:"AccountAndCard"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/add-cards-success-payload",children:(0,s.jsx)(a.code,{children:"AddCardsSuccessPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/add-card-success-payload",children:(0,s.jsx)(a.code,{children:"AddCardSuccessPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/add-cards-with-group-delivery-success-payload",children:(0,s.jsx)(a.code,{children:"AddCardsWithGroupDeliverySuccessPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/add-single-use-virtual-cards-success-payload",children:(0,s.jsx)(a.code,{children:"AddSingleUseVirtualCardsSuccessPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/add-single-use-virtual-card-success-for-project-owner-payload",children:(0,s.jsx)(a.code,{children:"AddSingleUseVirtualCardSuccessForProjectOwnerPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/add-single-use-virtual-card-success-for-user-payload",children:(0,s.jsx)(a.code,{children:"AddSingleUseVirtualCardSuccessForUserPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/cancel-card-success-payload",children:(0,s.jsx)(a.code,{children:"CancelCardSuccessPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/card-edge",children:(0,s.jsx)(a.code,{children:"CardEdge"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/card-out-details",children:(0,s.jsx)(a.code,{children:"CardOutDetails"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/card-transaction",children:(0,s.jsx)(a.code,{children:"CardTransaction"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,a,d)=>{d.d(a,{R:()=>n,x:()=>l});var s=d(96540);const r={},c=s.createContext(r);function n(e){const a=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);