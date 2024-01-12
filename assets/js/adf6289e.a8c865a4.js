"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[83245],{93984:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=r(85893),c=r(11151),s=r(67294);const o={id:"fee-out-creditor",title:"FeeOutCreditor"},a=void 0,d={id:"objects/fee-out-creditor",title:"FeeOutCreditor",description:"Fee creditor for Outgoing transaction",source:"@site/docs/objects/fee-out-creditor.mdx",sourceDirName:"objects",slug:"/objects/fee-out-creditor",permalink:"/objects/fee-out-creditor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/fee-out-creditor.mdx",tags:[],version:"current",frontMatter:{id:"fee-out-creditor",title:"FeeOutCreditor"},sidebar:"schemaSidebar",previous:{title:"FeeInDebtor",permalink:"/objects/fee-in-debtor"},next:{title:"FeeOutDebtor",permalink:"/objects/fee-out-debtor"}},i={},l=()=>{const e={span:"span",...(0,c.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,c.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const t={span:"span",...(0,c.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>FeeOutCreditor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"feeoutcreditornamestring--",level:4},{value:'<code>FeeOutCreditor.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"feeoutcreditoraccountnumberaccountnumber--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FeeCreditor</code> <Badge class="badge badge--secondary"></Badge>',id:"feecreditor-",level:4}],f=({dataOpen:e,dataClose:t,children:r,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,c.a)()},[d,i]=(0,s.useState)(o);return(0,n.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&r]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Fee creditor for Outgoing transaction"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type FeeOutCreditor implements FeeCreditor {\n  name: String!\n  accountNumber: AccountNumber!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"feeoutcreditornamestring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FeeOutCreditor.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"full name of the creditor"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"feeoutcreditoraccountnumberaccountnumber--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FeeOutCreditor.",(0,n.jsx)("b",{children:"accountNumber"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/account-number",children:(0,n.jsx)(t.code,{children:"AccountNumber!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"account number"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.h4,{id:"feecreditor-",children:[(0,n.jsx)(t.a,{href:"/interfaces/fee-creditor",children:(0,n.jsx)(t.code,{children:"FeeCreditor"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Fee creditor"}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var n=r(67294);const c={},s=n.createContext(c);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);