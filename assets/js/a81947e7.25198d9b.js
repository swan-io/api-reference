"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50959],{11422:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>b,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>f});var t=a(85893),s=a(11151),r=a(67294);const d={id:"trusted-internal-beneficiary",title:"TrustedInternalBeneficiary"},i=void 0,c={id:"objects/trusted-internal-beneficiary",title:"TrustedInternalBeneficiary",description:"Trusted Internal Beneficiary",source:"@site/docs/objects/trusted-internal-beneficiary.mdx",sourceDirName:"objects",slug:"/objects/trusted-internal-beneficiary",permalink:"/objects/trusted-internal-beneficiary",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/trusted-internal-beneficiary.mdx",tags:[],version:"current",frontMatter:{id:"trusted-internal-beneficiary",title:"TrustedInternalBeneficiary"},sidebar:"schemaSidebar",previous:{title:"TrustedBeneficiaryEnabledStatusInfo",permalink:"/objects/trusted-beneficiary-enabled-status-info"},next:{title:"TrustedInternationalBeneficiary",permalink:"/objects/trusted-international-beneficiary"}},l={},o=()=>{const e={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>TrustedInternalBeneficiary.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiaryidid--",level:4},{value:'<code>TrustedInternalBeneficiary.<b>transactions</b></code><Bullet></Bullet><code>TransactionConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarytransactionstransactionconnection-",level:4},{value:'<code>TrustedInternalBeneficiary.transactions.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarytransactionsfirstint--",level:5},{value:'<code>TrustedInternalBeneficiary.transactions.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarytransactionsafterstring-",level:5},{value:'<code>TrustedInternalBeneficiary.transactions.<b>filters</b></code><Bullet></Bullet><code>TransactionsFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarytransactionsfilterstransactionsfiltersinput-",level:5},{value:'<code>TrustedInternalBeneficiary.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarycreatedatdatetime--",level:4},{value:'<code>TrustedInternalBeneficiary.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiaryupdatedatdatetime--",level:4},{value:'<code>TrustedInternalBeneficiary.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarynamestring--",level:4},{value:'<code>TrustedInternalBeneficiary.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarylabelstring--",level:4},{value:'<code>TrustedInternalBeneficiary.<b>statusInfo</b></code><Bullet></Bullet><code>TrustedBeneficiaryStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarystatusinfotrustedbeneficiarystatusinfo--",level:4},{value:'<code>TrustedInternalBeneficiary.<b>type</b></code><Bullet></Bullet><code>BeneficiaryType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiarytypebeneficiarytype--",level:4},{value:'<code>TrustedInternalBeneficiary.<b>accountId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedinternalbeneficiaryaccountidid--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TrustedBeneficiary</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiary-",level:4}],h=({dataOpen:e,dataClose:n,children:a,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,s.a)()},[c,l]=(0,r.useState)(d);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Trusted Internal Beneficiary"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type TrustedInternalBeneficiary implements TrustedBeneficiary {\n  id: ID!\n  transactions(\n    first: Int! = 50\n    after: String\n    filters: TransactionsFiltersInput\n  ): TransactionConnection\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  name: String!\n  label: String!\n  statusInfo: TrustedBeneficiaryStatusInfo!\n  type: BeneficiaryType!\n  accountId: ID!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiaryidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"unique identifier of a trusted beneficiary"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiarytransactionstransactionconnection-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"transactions"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/objects/transaction-connection",children:(0,t.jsx)(n.code,{children:"TransactionConnection"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"List of transactions associated with the Trusted Beneficiary."}),"\n",(0,t.jsxs)(n.h5,{id:"trustedinternalbeneficiarytransactionsfirstint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.transactions.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"number of elements in the list (default value 50)"}),"\n"]}),"\n",(0,t.jsxs)(n.h5,{id:"trustedinternalbeneficiarytransactionsafterstring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.transactions.",(0,t.jsx)("b",{children:"after"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"When the list of elements needs to start after a element"}),"\n"]}),"\n",(0,t.jsxs)(n.h5,{id:"trustedinternalbeneficiarytransactionsfilterstransactionsfiltersinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.transactions.",(0,t.jsx)("b",{children:"filters"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/inputs/transactions-filters-input",children:(0,t.jsx)(n.code,{children:"TransactionsFiltersInput"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"When the list of elements needs to be filtered"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiarycreatedatdatetime--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/date-time",children:(0,t.jsx)(n.code,{children:"DateTime!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"created date"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiaryupdatedatdatetime--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/date-time",children:(0,t.jsx)(n.code,{children:"DateTime!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"updated date"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiarynamestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"full name of the beneficiary"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiarylabelstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"label"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"label of the beneficiary"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiarystatusinfotrustedbeneficiarystatusinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"statusInfo"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/interfaces/trusted-beneficiary-status-info",children:(0,t.jsx)(n.code,{children:"TrustedBeneficiaryStatusInfo!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"status information"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiarytypebeneficiarytype--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"type"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/enums/beneficiary-type",children:(0,t.jsx)(n.code,{children:"BeneficiaryType!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"type of the beneficiary"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trustedinternalbeneficiaryaccountidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedInternalBeneficiary.",(0,t.jsx)("b",{children:"accountId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"beneficiary account Id"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"trustedbeneficiary-",children:[(0,t.jsx)(n.a,{href:"/interfaces/trusted-beneficiary",children:(0,t.jsx)(n.code,{children:"TrustedBeneficiary"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"TrustedBeneficiary"}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>d});var t=a(67294);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);