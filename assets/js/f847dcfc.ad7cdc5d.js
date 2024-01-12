"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[88185],{86914:(e,n,c)=>{c.r(n),c.d(n,{Badge:()=>h,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>x});var t=c(85893),r=c(11151),o=c(67294);const s={id:"account-holders",title:"accountHolders"},d=void 0,a={id:"queries/account-holders",title:"accountHolders",description:"Returns the list of account holders.",source:"@site/docs/queries/account-holders.mdx",sourceDirName:"queries",slug:"/queries/account-holders",permalink:"/queries/account-holders",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/account-holders.mdx",tags:[],version:"current",frontMatter:{id:"account-holders",title:"accountHolders"},sidebar:"schemaSidebar",previous:{title:"accountHolder",permalink:"/queries/account-holder"},next:{title:"accountInvoice",permalink:"/queries/account-invoice"}},l={},i=()=>{const e={span:"span",...(0,r.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,r.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>accountHolders.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersfirstint--",level:4},{value:'<code>accountHolders.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersbeforestring-",level:4},{value:'<code>accountHolders.<b>filters</b></code><Bullet></Bullet><code>AccountHolderFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersfiltersaccountholderfilterinput-",level:4},{value:'<code>accountHolders.<b>orderBy</b></code><Bullet></Bullet><code>AccountHolderOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersorderbyaccountholderorderbyinput-",level:4},{value:'<code>accountHolders.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdersafterstring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>AccountHolderConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderconnection-",level:4}],g=({dataOpen:e,dataClose:n,children:c,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,r.a)()},[a,l]=(0,o.useState)(s);return(0,t.jsxs)(d.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&c]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Returns the list of account holders."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"For a Project access token, this is all the account holders of the project and for an User access token, these are the holders of the accounts of which the user has an account membership."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"accountHolders(\n  first: Int! = 50\n  before: String\n  filters: AccountHolderFilterInput\n  orderBy: AccountHolderOrderByInput\n  after: String\n): AccountHolderConnection!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"accountholdersfirstint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["accountHolders.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"accountholdersbeforestring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["accountHolders.",(0,t.jsx)("b",{children:"before"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"accountholdersfiltersaccountholderfilterinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["accountHolders.",(0,t.jsx)("b",{children:"filters"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/inputs/account-holder-filter-input",children:(0,t.jsx)(n.code,{children:"AccountHolderFilterInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"accountholdersorderbyaccountholderorderbyinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["accountHolders.",(0,t.jsx)("b",{children:"orderBy"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/inputs/account-holder-order-by-input",children:(0,t.jsx)(n.code,{children:"AccountHolderOrderByInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"accountholdersafterstring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["accountHolders.",(0,t.jsx)("b",{children:"after"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"accountholderconnection-",children:[(0,t.jsx)(n.a,{href:"/objects/account-holder-connection",children:(0,t.jsx)(n.code,{children:"AccountHolderConnection"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,t.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")."]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>d,a:()=>s});var t=c(67294);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);