"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[47528],{20855:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=t(74848),s=t(28453),a=t(96540);const c={id:"fee-in-debtor",title:"FeeInDebtor"},o=void 0,d={id:"objects/fee-in-debtor",title:"FeeInDebtor",description:"Fee debtor for Incoming transaction",source:"@site/docs/objects/fee-in-debtor.mdx",sourceDirName:"objects",slug:"/objects/fee-in-debtor",permalink:"/objects/fee-in-debtor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/fee-in-debtor.mdx",tags:[],version:"current",frontMatter:{id:"fee-in-debtor",title:"FeeInDebtor"},sidebar:"schemaSidebar",previous:{title:"FeeInCreditor",permalink:"/objects/fee-in-creditor"},next:{title:"FeeOutCreditor",permalink:"/objects/fee-out-creditor"}},i={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[d,i]=(0,a.useState)(c);return(0,r.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>FeeInDebtor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"feeindebtornamestring--",level:4},{value:'<code>FeeInDebtor.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"feeindebtoraccountnumberaccountnumber--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FeeDebtor</code> <Badge class="badge badge--secondary"></Badge>',id:"feedebtor-",level:4}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Fee debtor for Incoming transaction"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type FeeInDebtor implements FeeDebtor {\n  name: String!\n  accountNumber: AccountNumber!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"feeindebtornamestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FeeInDebtor.",(0,r.jsx)("b",{children:"name"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.p,{children:"full name of the creditor"}),"\n",(0,r.jsxs)(n.h4,{id:"feeindebtoraccountnumberaccountnumber--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FeeInDebtor.",(0,r.jsx)("b",{children:"accountNumber"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/scalars/account-number",children:(0,r.jsx)(n.code,{children:"AccountNumber!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.p,{children:"account number"}),"\n",(0,r.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(n.h4,{id:"feedebtor-",children:[(0,r.jsx)(n.a,{href:"/interfaces/fee-debtor",children:(0,r.jsx)(n.code,{children:"FeeDebtor"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"interface"})]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);