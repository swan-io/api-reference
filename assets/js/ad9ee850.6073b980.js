"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[26022],{76919:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>f,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=s(74848),d=s(28453),t=s(96540);const r={id:"trusted-sepa-beneficiary",title:"TrustedSepaBeneficiary"},i=void 0,c={id:"objects/trusted-sepa-beneficiary",title:"TrustedSepaBeneficiary",description:"Trusted SEPA Beneficiary type SEPA",source:"@site/docs/objects/trusted-sepa-beneficiary.mdx",sourceDirName:"objects",slug:"/objects/trusted-sepa-beneficiary",permalink:"/objects/trusted-sepa-beneficiary",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/trusted-sepa-beneficiary.mdx",tags:[],version:"current",frontMatter:{id:"trusted-sepa-beneficiary",title:"TrustedSepaBeneficiary"},sidebar:"schemaSidebar",previous:{title:"TrustedInternationalBeneficiary",permalink:"/objects/trusted-international-beneficiary"},next:{title:"UltimateBeneficialDirectOwnerCompanyInfo",permalink:"/objects/ultimate-beneficial-direct-owner-company-info"}},l={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,d.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const a={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:a,children:s,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,d.R)()},[c,l]=(0,t.useState)(r);return(0,n.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>TrustedSepaBeneficiary.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiaryidid--",level:4},{value:'<code>TrustedSepaBeneficiary.<b>transactions</b></code><Bullet></Bullet><code>TransactionConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarytransactionstransactionconnection-",level:4},{value:'<code>TrustedSepaBeneficiary.transactions.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarytransactionsafterstring-",level:5},{value:'<code>TrustedSepaBeneficiary.transactions.<b>filters</b></code><Bullet></Bullet><code>TransactionsFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarytransactionsfilterstransactionsfiltersinput-",level:5},{value:'<code>TrustedSepaBeneficiary.transactions.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarytransactionsfirstint--",level:5},{value:'<code>TrustedSepaBeneficiary.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarycreatedatdatetime--",level:4},{value:'<code>TrustedSepaBeneficiary.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiaryupdatedatdatetime--",level:4},{value:'<code>TrustedSepaBeneficiary.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarynamestring--",level:4},{value:'<code>TrustedSepaBeneficiary.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarylabelstring--",level:4},{value:'<code>TrustedSepaBeneficiary.<b>statusInfo</b></code><Bullet></Bullet><code>TrustedBeneficiaryStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarystatusinfotrustedbeneficiarystatusinfo--",level:4},{value:'<code>TrustedSepaBeneficiary.<b>type</b></code><Bullet></Bullet><code>BeneficiaryType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiarytypebeneficiarytype--",level:4},{value:'<code>TrustedSepaBeneficiary.<b>iban</b></code><Bullet></Bullet><code>IBAN!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiaryibaniban--",level:4},{value:'<code>TrustedSepaBeneficiary.<b>address</b></code><Bullet></Bullet><code>Address</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedsepabeneficiaryaddressaddress-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TrustedBeneficiary</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiary-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function y(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Trusted SEPA Beneficiary type SEPA"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type TrustedSepaBeneficiary implements TrustedBeneficiary {\n  id: ID!\n  transactions(\n    after: String\n    filters: TransactionsFiltersInput\n    first: Int! = 50\n  ): TransactionConnection\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  name: String!\n  label: String!\n  statusInfo: TrustedBeneficiaryStatusInfo!\n  type: BeneficiaryType!\n  iban: IBAN!\n  address: Address\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiaryidid--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/id",children:(0,n.jsx)(a.code,{children:"ID!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"unique identifier of a trusted beneficiary"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiarytransactionstransactionconnection-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"transactions"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/objects/transaction-connection",children:(0,n.jsx)(a.code,{children:"TransactionConnection"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"List of transactions associated with the Trusted Beneficiary."}),"\n",(0,n.jsxs)(a.h5,{id:"trustedsepabeneficiarytransactionsafterstring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.transactions.",(0,n.jsx)("b",{children:"after"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"When the list of elements needs to start after a element"}),"\n",(0,n.jsxs)(a.h5,{id:"trustedsepabeneficiarytransactionsfilterstransactionsfiltersinput-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.transactions.",(0,n.jsx)("b",{children:"filters"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/inputs/transactions-filters-input",children:(0,n.jsx)(a.code,{children:"TransactionsFiltersInput"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(a.p,{children:"When the list of elements needs to be filtered"}),"\n",(0,n.jsxs)(a.h5,{id:"trustedsepabeneficiarytransactionsfirstint--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.transactions.",(0,n.jsx)("b",{children:"first"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/int",children:(0,n.jsx)(a.code,{children:"Int!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"number of elements in the list (default value 50)"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiarycreatedatdatetime--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/date-time",children:(0,n.jsx)(a.code,{children:"DateTime!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"created date"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiaryupdatedatdatetime--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/date-time",children:(0,n.jsx)(a.code,{children:"DateTime!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"updated date"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiarynamestring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"full name of the beneficiary"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiarylabelstring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"label"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"label of the beneficiary"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiarystatusinfotrustedbeneficiarystatusinfo--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"statusInfo"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/interfaces/trusted-beneficiary-status-info",children:(0,n.jsx)(a.code,{children:"TrustedBeneficiaryStatusInfo!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(a.p,{children:"status information"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiarytypebeneficiarytype--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/enums/beneficiary-type",children:(0,n.jsx)(a.code,{children:"BeneficiaryType!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(a.p,{children:"type of the beneficiary"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiaryibaniban--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"iban"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/iban",children:(0,n.jsx)(a.code,{children:"IBAN!"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"IBAN if the beneficiary is a an account in an other financial institution"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedsepabeneficiaryaddressaddress-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"address"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/objects/address",children:(0,n.jsx)(a.code,{children:"Address"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.p,{children:"beneficiary address"}),"\n",(0,n.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(a.h4,{id:"trustedbeneficiary-",children:[(0,n.jsx)(a.a,{href:"/interfaces/trusted-beneficiary",children:(0,n.jsx)(a.code,{children:"TrustedBeneficiary"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(a.p,{children:"TrustedBeneficiary"}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/objects/add-trusted-sepa-beneficiary-success-payload",children:(0,n.jsx)(a.code,{children:"AddTrustedSepaBeneficiarySuccessPayload"})}),"  ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/unions/beneficiary",children:(0,n.jsx)(a.code,{children:"Beneficiary"})}),"  ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>i});var n=s(96540);const d={},t=n.createContext(d);function r(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);