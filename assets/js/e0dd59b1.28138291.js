"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30504],{7774:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>x,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>j});var r=t(85893),a=t(11151),s=t(67294);const c={id:"currency",title:"Currency"},d=void 0,i={id:"scalars/currency",title:"Currency",description:"currency code alpha 3 (ISO 4217)",source:"@site/docs/scalars/currency.mdx",sourceDirName:"scalars",slug:"/scalars/currency",permalink:"/scalars/currency",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/scalars/currency.mdx",tags:[],version:"current",frontMatter:{id:"currency",title:"Currency"},sidebar:"schemaSidebar",previous:{title:"CCA3",permalink:"/scalars/cca3"},next:{title:"DateTime",permalink:"/scalars/date-time"}},o={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,a.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},j=[{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,a.a)()},[i,o]=(0,s.useState)(c);return(0,r.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})};function p(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"currency code alpha 3 (ISO 4217)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"scalar Currency\n"})}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/objects/account",children:(0,r.jsx)(n.code,{children:"Account"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/inputs/add-external-account-input",children:(0,r.jsx)(n.code,{children:"AddExternalAccountInput"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/inputs/add-trusted-international-beneficiary-input",children:(0,r.jsx)(n.code,{children:"AddTrustedInternationalBeneficiaryInput"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/objects/amount",children:(0,r.jsx)(n.code,{children:"Amount"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/inputs/amount-input",children:(0,r.jsx)(n.code,{children:"AmountInput"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/objects/card",children:(0,r.jsx)(n.code,{children:"Card"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/objects/external-account",children:(0,r.jsx)(n.code,{children:"ExternalAccount"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/inputs/international-beneficiary-input",children:(0,r.jsx)(n.code,{children:"InternationalBeneficiaryInput"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/objects/international-credit-transfer-out-creditor",children:(0,r.jsx)(n.code,{children:"InternationalCreditTransferOutCreditor"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/objects/report-exchange-rate",children:(0,r.jsx)(n.code,{children:"ReportExchangeRate"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/objects/trusted-international-beneficiary",children:(0,r.jsx)(n.code,{children:"TrustedInternationalBeneficiary"})}),"  ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var r=t(67294);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);