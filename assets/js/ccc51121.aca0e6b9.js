"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53790],{53175:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>j,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>x,assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>b});var t=a(85893),s=a(11151),c=a(67294);const r={id:"iban",title:"IBAN"},i=void 0,d={id:"scalars/iban",title:"IBAN",description:"International Bank Account Number",source:"@site/docs/scalars/iban.mdx",sourceDirName:"scalars",slug:"/scalars/iban",permalink:"/scalars/iban",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/scalars/iban.mdx",tags:[],version:"current",frontMatter:{id:"iban",title:"IBAN"},sidebar:"schemaSidebar",previous:{title:"HexColorCode",permalink:"/scalars/hex-color-code"},next:{title:"ID",permalink:"/scalars/id"}},o={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const n={a:"a",...(0,s.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Member Of",id:"member-of",level:3}],u=({dataOpen:e,dataClose:n,children:a,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,s.a)()},[d,o]=(0,c.useState)(r);return(0,t.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&a]})};function h(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"International Bank Account Number"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"scalar IBAN\n"})}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/objects/account",children:(0,t.jsx)(n.code,{children:"Account"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/inputs/add-direct-debit-funding-source-input",children:(0,t.jsx)(n.code,{children:"AddDirectDebitFundingSourceInput"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/inputs/add-external-account-input",children:(0,t.jsx)(n.code,{children:"AddExternalAccountInput"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/inputs/beneficiary-verification-input",children:(0,t.jsx)(n.code,{children:"BeneficiaryVerificationInput"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/direct-debit-account-verification",children:(0,t.jsx)(n.code,{children:"DirectDebitAccountVerification"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/direct-debit-funding-source",children:(0,t.jsx)(n.code,{children:"DirectDebitFundingSource"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/external-account",children:(0,t.jsx)(n.code,{children:"ExternalAccount"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/inputs/iban-validation-input",children:(0,t.jsx)(n.code,{children:"IbanValidationInput"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/internal-received-direct-debit-mandate",children:(0,t.jsx)(n.code,{children:"InternalReceivedDirectDebitMandate"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/international-credit-transfer-in-creditor",children:(0,t.jsx)(n.code,{children:"InternationalCreditTransferInCreditor"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/invalid-iban",children:(0,t.jsx)(n.code,{children:"InvalidIban"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/inputs/sepa-beneficiary-input",children:(0,t.jsx)(n.code,{children:"SepaBeneficiaryInput"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/sepapayment-mandate-debtor",children:(0,t.jsx)(n.code,{children:"SEPAPaymentMandateDebtor"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/separeceived-direct-debit-mandate",children:(0,t.jsx)(n.code,{children:"SEPAReceivedDirectDebitMandate"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/valid-iban",children:(0,t.jsx)(n.code,{children:"ValidIban"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/virtual-ibanentry",children:(0,t.jsx)(n.code,{children:"VirtualIBANEntry"})}),"  ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>r});var t=a(67294);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);