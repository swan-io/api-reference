"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[85695],{59098:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>m,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=s(74848),c=s(28453),r=s(96540);const a={id:"account-membership",title:"accountMembership"},i=void 0,o={id:"queries/account-membership",title:"accountMembership",description:"Returns an account membership from its id.",source:"@site/docs/queries/account-membership.mdx",sourceDirName:"queries",slug:"/queries/account-membership",permalink:"/queries/account-membership",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/account-membership.mdx",tags:[],version:"current",frontMatter:{id:"account-membership",title:"accountMembership"},sidebar:"schemaSidebar",previous:{title:"accountInvoice",permalink:"/queries/account-invoice"},next:{title:"accountMemberships",permalink:"/queries/account-memberships"}},d={},l=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:s,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,c.R)()},[o,d]=(0,r.useState)(a);return(0,t.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&s]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>accountMembership.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipidid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AccountMembership</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembership-",level:4}];function b(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Returns an account membership from its id."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"accountMembership(\n  id: ID!\n): AccountMembership\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"accountmembershipidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["accountMembership.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"accountmembership-",children:[(0,t.jsx)(n.a,{href:"/objects/account-membership",children:(0,t.jsx)(n.code,{children:"AccountMembership"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"An account membership represents the rights of a user for a given account."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Each account is administered by an account membership having the capacity of legal representative. He has the possibility of delegating rights on this account to other users."})})]})}function g(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const c={},r=t.createContext(c);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);