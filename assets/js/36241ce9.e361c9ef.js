"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6352],{33630:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>b,assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>f});var t=r(85893),a=r(11151),s=r(67294);const d={id:"internal-credit-transfer-in-debtor",title:"InternalCreditTransferInDebtor"},c=void 0,i={id:"objects/internal-credit-transfer-in-debtor",title:"InternalCreditTransferInDebtor",description:"Internal Credit Transfer debtor for Incoming transaction",source:"@site/docs/objects/internal-credit-transfer-in-debtor.mdx",sourceDirName:"objects",slug:"/objects/internal-credit-transfer-in-debtor",permalink:"/objects/internal-credit-transfer-in-debtor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/internal-credit-transfer-in-debtor.mdx",tags:[],version:"current",frontMatter:{id:"internal-credit-transfer-in-debtor",title:"InternalCreditTransferInDebtor"},sidebar:"schemaSidebar",previous:{title:"InternalCreditTransferInCreditor",permalink:"/objects/internal-credit-transfer-in-creditor"},next:{title:"InternalCreditTransferOutCreditor",permalink:"/objects/internal-credit-transfer-out-creditor"}},o={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const n={a:"a",...(0,a.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>InternalCreditTransferInDebtor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internalcredittransferindebtornamestring--",level:4},{value:'<code>InternalCreditTransferInDebtor.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internalcredittransferindebtoraccountnumberaccountnumber--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>InternalCreditTransferDebtor</code> <Badge class="badge badge--secondary"></Badge>',id:"internalcredittransferdebtor-",level:4}],h=({dataOpen:e,dataClose:n,children:r,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[i,o]=(0,s.useState)(d);return(0,t.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&r]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Internal Credit Transfer debtor for Incoming transaction"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type InternalCreditTransferInDebtor implements InternalCreditTransferDebtor {\n  name: String!\n  accountNumber: AccountNumber!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"internalcredittransferindebtornamestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternalCreditTransferInDebtor.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"full name of the creditor"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"internalcredittransferindebtoraccountnumberaccountnumber--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternalCreditTransferInDebtor.",(0,t.jsx)("b",{children:"accountNumber"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/account-number",children:(0,t.jsx)(n.code,{children:"AccountNumber!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"account number"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"internalcredittransferdebtor-",children:[(0,t.jsx)(n.a,{href:"/interfaces/internal-credit-transfer-debtor",children:(0,t.jsx)(n.code,{children:"InternalCreditTransferDebtor"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Internal Credit Transfer debtor"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>d});var t=r(67294);const a={},s=t.createContext(a);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);