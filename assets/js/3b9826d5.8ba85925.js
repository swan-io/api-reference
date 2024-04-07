"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97206],{29517:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>b,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>f});var a=n(85893),t=n(11151),r=n(67294);const d={id:"trusted-beneficiary",title:"TrustedBeneficiary"},i=void 0,c={id:"interfaces/trusted-beneficiary",title:"TrustedBeneficiary",description:"TrustedBeneficiary",source:"@site/docs/interfaces/trusted-beneficiary.mdx",sourceDirName:"interfaces",slug:"/interfaces/trusted-beneficiary",permalink:"/interfaces/trusted-beneficiary",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/trusted-beneficiary.mdx",tags:[],version:"current",frontMatter:{id:"trusted-beneficiary",title:"TrustedBeneficiary"},sidebar:"schemaSidebar",previous:{title:"TrustedBeneficiaryStatusInfo",permalink:"/interfaces/trusted-beneficiary-status-info"},next:{title:"UltimateBeneficialOwnerInfo",permalink:"/interfaces/ultimate-beneficial-owner-info"}},l={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,t.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const s={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>TrustedBeneficiary.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryidid--",level:4},{value:'<code>TrustedBeneficiary.<b>transactions</b></code><Bullet></Bullet><code>TransactionConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarytransactionstransactionconnection-",level:4},{value:'<code>TrustedBeneficiary.transactions.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarytransactionsfirstint--",level:5},{value:'<code>TrustedBeneficiary.transactions.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarytransactionsafterstring-",level:5},{value:'<code>TrustedBeneficiary.transactions.<b>filters</b></code><Bullet></Bullet><code>TransactionsFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarytransactionsfilterstransactionsfiltersinput-",level:5},{value:'<code>TrustedBeneficiary.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarycreatedatdatetime--",level:4},{value:'<code>TrustedBeneficiary.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryupdatedatdatetime--",level:4},{value:'<code>TrustedBeneficiary.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarynamestring--",level:4},{value:'<code>TrustedBeneficiary.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarylabelstring--",level:4},{value:'<code>TrustedBeneficiary.<b>statusInfo</b></code><Bullet></Bullet><code>TrustedBeneficiaryStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarystatusinfotrustedbeneficiarystatusinfo--",level:4},{value:'<code>TrustedBeneficiary.<b>type</b></code><Bullet></Bullet><code>BeneficiaryType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarytypebeneficiarytype--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],h=({dataOpen:e,dataClose:s,children:n,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,t.a)()},[c,l]=(0,r.useState)(d);return(0,a.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&n]})};function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"TrustedBeneficiary"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"interface TrustedBeneficiary {\n  id: ID!\n  transactions(\n    first: Int! = 50\n    after: String\n    filters: TransactionsFiltersInput\n  ): TransactionConnection\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  name: String!\n  label: String!\n  statusInfo: TrustedBeneficiaryStatusInfo!\n  type: BeneficiaryType!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"trustedbeneficiaryidid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/id",children:(0,a.jsx)(s.code,{children:"ID!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"unique identifier of a trusted beneficiary"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"trustedbeneficiarytransactionstransactionconnection-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.",(0,a.jsx)("b",{children:"transactions"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/objects/transaction-connection",children:(0,a.jsx)(s.code,{children:"TransactionConnection"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"List of transactions associated with the Trusted Beneficiary."}),"\n",(0,a.jsxs)(s.h5,{id:"trustedbeneficiarytransactionsfirstint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.transactions.",(0,a.jsx)("b",{children:"first"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.p,{children:"number of elements in the list (default value 50)"}),"\n"]}),"\n",(0,a.jsxs)(s.h5,{id:"trustedbeneficiarytransactionsafterstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.transactions.",(0,a.jsx)("b",{children:"after"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"When the list of elements needs to start after a element"}),"\n"]}),"\n",(0,a.jsxs)(s.h5,{id:"trustedbeneficiarytransactionsfilterstransactionsfiltersinput-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.transactions.",(0,a.jsx)("b",{children:"filters"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/inputs/transactions-filters-input",children:(0,a.jsx)(s.code,{children:"TransactionsFiltersInput"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"When the list of elements needs to be filtered"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"trustedbeneficiarycreatedatdatetime--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/date-time",children:(0,a.jsx)(s.code,{children:"DateTime!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"created date"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"trustedbeneficiaryupdatedatdatetime--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/date-time",children:(0,a.jsx)(s.code,{children:"DateTime!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"updated date"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"trustedbeneficiarynamestring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"full name of the beneficiary"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"trustedbeneficiarylabelstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.",(0,a.jsx)("b",{children:"label"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"label of the beneficiary"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"trustedbeneficiarystatusinfotrustedbeneficiarystatusinfo--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.",(0,a.jsx)("b",{children:"statusInfo"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/interfaces/trusted-beneficiary-status-info",children:(0,a.jsx)(s.code,{children:"TrustedBeneficiaryStatusInfo!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"status information"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"trustedbeneficiarytypebeneficiarytype--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiary.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/enums/beneficiary-type",children:(0,a.jsx)(s.code,{children:"BeneficiaryType!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"type of the beneficiary"}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/queries/trusted-beneficiary",children:(0,a.jsx)(s.code,{children:"trustedBeneficiary"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/objects/trusted-beneficiary-edge",children:(0,a.jsx)(s.code,{children:"TrustedBeneficiaryEdge"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/objects/trusted-internal-beneficiary",children:(0,a.jsx)(s.code,{children:"TrustedInternalBeneficiary"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/objects/trusted-international-beneficiary",children:(0,a.jsx)(s.code,{children:"TrustedInternationalBeneficiary"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/objects/trusted-sepa-beneficiary",children:(0,a.jsx)(s.code,{children:"TrustedSepaBeneficiary"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>d});var a=n(67294);const t={},r=a.createContext(t);function d(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);