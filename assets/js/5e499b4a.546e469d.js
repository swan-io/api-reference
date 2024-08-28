"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[78996],{52232:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var r=n(74848),s=n(28453),o=n(96540);const a={id:"fee-out-debtor",title:"FeeOutDebtor"},c=void 0,d={id:"objects/fee-out-debtor",title:"FeeOutDebtor",description:"Fee debtor for Outgoing transaction",source:"@site/docs/objects/fee-out-debtor.mdx",sourceDirName:"objects",slug:"/objects/fee-out-debtor",permalink:"/objects/fee-out-debtor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/fee-out-debtor.mdx",tags:[],version:"current",frontMatter:{id:"fee-out-debtor",title:"FeeOutDebtor"},sidebar:"schemaSidebar",previous:{title:"FeeOutCreditor",permalink:"/objects/fee-out-creditor"},next:{title:"FeeSettingsNotFoundRejection",permalink:"/objects/fee-settings-not-found-rejection"}},l={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[d,l]=(0,o.useState)(a);return(0,r.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>FeeOutDebtor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"feeoutdebtornamestring--",level:4},{value:'<code>FeeOutDebtor.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"feeoutdebtoraccountnumberaccountnumber--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FeeDebtor</code> <Badge class="badge badge--secondary"></Badge>',id:"feedebtor-",level:4}];function g(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Fee debtor for Outgoing transaction"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"type FeeOutDebtor implements FeeDebtor {\n  name: String!\n  accountNumber: AccountNumber!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"feeoutdebtornamestring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FeeOutDebtor.",(0,r.jsx)("b",{children:"name"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"full name of the creditor"}),"\n",(0,r.jsxs)(t.h4,{id:"feeoutdebtoraccountnumberaccountnumber--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FeeOutDebtor.",(0,r.jsx)("b",{children:"accountNumber"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/scalars/account-number",children:(0,r.jsx)(t.code,{children:"AccountNumber!"})})," ",(0,r.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.p,{children:"account number"}),"\n",(0,r.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(t.h4,{id:"feedebtor-",children:[(0,r.jsx)(t.a,{href:"/interfaces/fee-debtor",children:(0,r.jsx)(t.code,{children:"FeeDebtor"})})," ",(0,r.jsx)(b,{class:"badge badge--secondary",text:"interface"})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);