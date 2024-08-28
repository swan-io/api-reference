"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[42057],{99888:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=t(74848),r=t(28453),a=t(96540);const d={id:"refund-input",title:"RefundInput"},i=void 0,c={id:"inputs/refund-input",title:"RefundInput",description:"Input to select the beneficiary and the originator to perform a refund",source:"@site/docs/inputs/refund-input.mdx",sourceDirName:"inputs",slug:"/inputs/refund-input",permalink:"/inputs/refund-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/refund-input.mdx",tags:[],version:"current",frontMatter:{id:"refund-input",title:"RefundInput"},sidebar:"schemaSidebar",previous:{title:"ReasonInput",permalink:"/inputs/reason-input"},next:{title:"RefundTransaction",permalink:"/inputs/refund-transaction"}},o={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,r.R)()},[c,o]=(0,a.useState)(d);return(0,s.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RefundInput.<b>refundTransactions</b></code><Bullet></Bullet><code>[RefundTransaction!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"refundinputrefundtransactionsrefundtransaction--",level:4},{value:'<code>RefundInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"refundinputconsentredirecturlstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Input to select the beneficiary and the originator to perform a refund"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input RefundInput {\n  refundTransactions: [RefundTransaction!]!\n  consentRedirectUrl: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"refundinputrefundtransactionsrefundtransaction--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundInput.",(0,s.jsx)("b",{children:"refundTransactions"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/inputs/refund-transaction",children:(0,s.jsx)(n.code,{children:"[RefundTransaction!]!"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(n.p,{children:"transactions to refund"}),"\n",(0,s.jsxs)(n.h4,{id:"refundinputconsentredirecturlstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundInput.",(0,s.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"url the user is redirected to after consent has been given"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/mutations/refund",children:(0,s.jsx)(n.code,{children:"refund"})}),"  ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);