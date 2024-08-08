"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64381],{84288:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>u,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=n(74848),a=n(28453),s=n(96540);const d={id:"internal-credit-transfer-creditor",title:"InternalCreditTransferCreditor"},i=void 0,c={id:"interfaces/internal-credit-transfer-creditor",title:"InternalCreditTransferCreditor",description:"Internal Credit Transfer creditor",source:"@site/docs/interfaces/internal-credit-transfer-creditor.mdx",sourceDirName:"interfaces",slug:"/interfaces/internal-credit-transfer-creditor",permalink:"/interfaces/internal-credit-transfer-creditor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/internal-credit-transfer-creditor.mdx",tags:[],version:"current",frontMatter:{id:"internal-credit-transfer-creditor",title:"InternalCreditTransferCreditor"},sidebar:"schemaSidebar",previous:{title:"IndividualUltimateBeneficialOwnerInfo",permalink:"/interfaces/individual-ultimate-beneficial-owner-info"},next:{title:"InternalCreditTransferDebtor",permalink:"/interfaces/internal-credit-transfer-debtor"}},l={},o=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const r={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:r,children:n,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,s.useState)(d);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InternalCreditTransferCreditor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internalcredittransfercreditornamestring--",level:4},{value:'<code>InternalCreditTransferCreditor.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internalcredittransfercreditoraccountnumberaccountnumber--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function b(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Internal Credit Transfer creditor"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"interface InternalCreditTransferCreditor {\n  name: String!\n  accountNumber: AccountNumber!\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"internalcredittransfercreditornamestring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternalCreditTransferCreditor.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"full name of the Creditor"}),"\n",(0,t.jsxs)(r.h4,{id:"internalcredittransfercreditoraccountnumberaccountnumber--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InternalCreditTransferCreditor.",(0,t.jsx)("b",{children:"accountNumber"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/scalars/account-number",children:(0,t.jsx)(r.code,{children:"AccountNumber!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"account number"}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/objects/internal-credit-transfer",children:(0,t.jsx)(r.code,{children:"InternalCreditTransfer"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/objects/internal-credit-transfer-in-creditor",children:(0,t.jsx)(r.code,{children:"InternalCreditTransferInCreditor"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/objects/internal-credit-transfer-out-creditor",children:(0,t.jsx)(r.code,{children:"InternalCreditTransferOutCreditor"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var t=n(96540);const a={},s=t.createContext(a);function d(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);