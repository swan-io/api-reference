"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51529],{42015:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>f});var s=t(74848),a=t(28453),r=t(96540);const i={id:"transactions",title:"transactions"},c=void 0,o={id:"queries/transactions",title:"transactions",description:"List of transactions of a project.",source:"@site/docs/queries/transactions.mdx",sourceDirName:"queries",slug:"/queries/transactions",permalink:"/queries/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/transactions.mdx",tags:[],version:"current",frontMatter:{id:"transactions",title:"transactions"},sidebar:"schemaSidebar",previous:{title:"transaction",permalink:"/queries/transaction"},next:{title:"trustedBeneficiary",permalink:"/queries/trusted-beneficiary"}},d={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[o,d]=(0,r.useState)(i);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},f=[{value:"Arguments",id:"arguments",level:3},{value:'<code>transactions.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"transactionsfirstint--",level:4},{value:'<code>transactions.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"transactionsafterstring-",level:4},{value:'<code>transactions.<b>orderBy</b></code><Bullet></Bullet><code>TransactionsOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"transactionsorderbytransactionsorderbyinput-",level:4},{value:'<code>transactions.<b>filters</b></code><Bullet></Bullet><code>TransactionsFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"transactionsfilterstransactionsfiltersinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>TransactionConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"transactionconnection-",level:4}];function x(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"List of transactions of a project."}),"\n",(0,s.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,s.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")\n",(0,s.jsx)(n.em,{children:"For a Project access token, this is all the transactions of the project (only available with project access token)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"transactions(\n  first: Int! = 50\n  after: String\n  orderBy: TransactionsOrderByInput\n  filters: TransactionsFiltersInput\n): TransactionConnection!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.h4,{id:"transactionsfirstint--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["transactions.",(0,s.jsx)("b",{children:"first"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/int",children:(0,s.jsx)(n.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"the number of elements to load (default value 50, maximum: 100)"}),"\n",(0,s.jsxs)(n.h4,{id:"transactionsafterstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["transactions.",(0,s.jsx)("b",{children:"after"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,s.jsxs)(n.h4,{id:"transactionsorderbytransactionsorderbyinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["transactions.",(0,s.jsx)("b",{children:"orderBy"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/inputs/transactions-order-by-input",children:(0,s.jsx)(n.code,{children:"TransactionsOrderByInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(n.p,{children:"an order you can apply to your list of connections (default value UpdatedAt desc)"}),"\n",(0,s.jsxs)(n.h4,{id:"transactionsfilterstransactionsfiltersinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["transactions.",(0,s.jsx)("b",{children:"filters"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/inputs/transactions-filters-input",children:(0,s.jsx)(n.code,{children:"TransactionsFiltersInput"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(n.p,{children:"a filtering table you can apply to your list of connections"}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(n.h4,{id:"transactionconnection-",children:[(0,s.jsx)(n.a,{href:"/objects/transaction-connection",children:(0,s.jsx)(n.code,{children:"TransactionConnection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(n.p,{children:"Please see the Connection interface"})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);