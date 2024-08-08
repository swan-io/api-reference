"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6274],{28103:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(74848),s=n(28453),c=n(96540);const r={id:"account-statement",title:"accountStatement"},d=void 0,o={id:"queries/account-statement",title:"accountStatement",description:"Returns an account statement by id",source:"@site/docs/queries/account-statement.mdx",sourceDirName:"queries",slug:"/queries/account-statement",permalink:"/queries/account-statement",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/account-statement.mdx",tags:[],version:"current",frontMatter:{id:"account-statement",title:"accountStatement"},sidebar:"schemaSidebar",previous:{title:"accountMemberships",permalink:"/queries/account-memberships"},next:{title:"account",permalink:"/queries/account"}},i={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[o,i]=(0,c.useState)(r);return(0,a.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>accountStatement.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountstatementidid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Statement</code> <Badge class="badge badge--secondary"></Badge>',id:"statement-",level:4}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Returns an account statement by id"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"accountStatement(\n  id: ID!\n): Statement!\n"})}),"\n",(0,a.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.h4,{id:"accountstatementidid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["accountStatement.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(t.h4,{id:"statement-",children:[(0,a.jsx)(t.a,{href:"/objects/statement",children:(0,a.jsx)(t.code,{children:"Statement"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.p,{children:"A statement represent metadata around a banking document that list all of the BOOKED banking transactions that have happened between startDate and endDate"})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var a=n(96540);const s={},c=a.createContext(s);function r(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);