"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34592],{14289:(n,e,a)=>{a.r(e),a.d(e,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var t=a(74848),c=a(28453),s=a(96540);const r={id:"cancel-transaction",title:"cancelTransaction"},i=void 0,l={id:"mutations/cancel-transaction",title:"cancelTransaction",description:"Cancels an UPCOMING credit transfer",source:"@site/docs/mutations/cancel-transaction.mdx",sourceDirName:"mutations",slug:"/mutations/cancel-transaction",permalink:"/mutations/cancel-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/cancel-transaction.mdx",tags:[],version:"current",frontMatter:{id:"cancel-transaction",title:"cancelTransaction"},sidebar:"schemaSidebar",previous:{title:"cancelStandingOrder",permalink:"/mutations/cancel-standing-order"},next:{title:"cancelVirtualIbanEntry",permalink:"/mutations/cancel-virtual-iban-entry"}},o={},d=()=>{const n={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=n=>{const e={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(e.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:n.url,title:"Specified by "+n.url,children:"\u2398"})]})},p=n=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{className:n.class,children:n.text})})},h=({dataOpen:n,dataClose:e,children:a,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,c.R)()},[l,o]=(0,s.useState)(r);return(0,t.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:n=>{n.preventDefault(),o((n=>!n))},style:{listStyle:"none"},children:l?n:e}),l&&a]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>cancelTransaction.<b>input</b></code><Bullet></Bullet><code>CancelTransactionInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"canceltransactioninputcanceltransactioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CancelTransactionPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"canceltransactionpayload-",level:4}];function x(n){const e={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Cancels an UPCOMING credit transfer"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["The user must have an account membership for this account with the attribute ",(0,t.jsx)(e.code,{children:"canInitiatePayments=true"}),"."]})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-graphql",children:"cancelTransaction(\n  input: CancelTransactionInput!\n): CancelTransactionPayload!\n"})}),"\n",(0,t.jsx)(e.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(e.h4,{id:"canceltransactioninputcanceltransactioninput--",children:[(0,t.jsx)(e.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["cancelTransaction.",(0,t.jsx)("b",{children:"input"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(e.a,{href:"/inputs/cancel-transaction-input",children:(0,t.jsx)(e.code,{children:"CancelTransactionInput!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(e.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(e.h4,{id:"canceltransactionpayload-",children:[(0,t.jsx)(e.a,{href:"/unions/cancel-transaction-payload",children:(0,t.jsx)(e.code,{children:"CancelTransactionPayload"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"union"})]})]})}function g(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>r,x:()=>i});var t=a(96540);const c={},s=t.createContext(c);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);