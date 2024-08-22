"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[57130],{67658:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>n,default:()=>v,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var d=a(74848),c=a(28453),i=a(96540);const s={id:"update-received-sepa-direct-debit-b2-b-mandate-success-payload",title:"UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload"},n=void 0,r={id:"objects/update-received-sepa-direct-debit-b2-b-mandate-success-payload",title:"UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload",description:"Return type in case of a successful response of the updateReceivedSepaDirectDebitB2bMandate mutation",source:"@site/docs/objects/update-received-sepa-direct-debit-b2-b-mandate-success-payload.mdx",sourceDirName:"objects",slug:"/objects/update-received-sepa-direct-debit-b2-b-mandate-success-payload",permalink:"/objects/update-received-sepa-direct-debit-b2-b-mandate-success-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/update-received-sepa-direct-debit-b2-b-mandate-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-received-sepa-direct-debit-b2-b-mandate-success-payload",title:"UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload"},sidebar:"schemaSidebar",previous:{title:"UpdateIndividualOnboardingSuccessPayload",permalink:"/objects/update-individual-onboarding-success-payload"},next:{title:"UpdateRequestNotPendingReviewRejection",permalink:"/objects/update-request-not-pending-review-rejection"}},o={},l=()=>{const e={span:"span",...(0,c.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,c.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const t={span:"span",...(0,c.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:a,startOpen:s=!1})=>{const n={details:"details",summary:"summary",...(0,c.R)()},[r,o]=(0,i.useState)(s);return(0,d.jsxs)(n.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&a]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload.<b>receivedDirectDebitMandate</b></code><Bullet></Bullet><code>ReceivedDirectDebitMandate!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatereceivedsepadirectdebitb2bmandatesuccesspayloadreceiveddirectdebitmandatereceiveddirectdebitmandate--",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"Return type in case of a successful response of the updateReceivedSepaDirectDebitB2bMandate mutation"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-graphql",children:"type UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload {\n  receivedDirectDebitMandate: ReceivedDirectDebitMandate!\n}\n"})}),"\n",(0,d.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(t.h4,{id:"updatereceivedsepadirectdebitb2bmandatesuccesspayloadreceiveddirectdebitmandatereceiveddirectdebitmandate--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload.",(0,d.jsx)("b",{children:"receivedDirectDebitMandate"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/interfaces/received-direct-debit-mandate",children:(0,d.jsx)(t.code,{children:"ReceivedDirectDebitMandate!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(t.p,{children:"The received direct debit mandate updated"}),"\n",(0,d.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/unions/update-received-sepa-direct-debit-b2-b-mandate-payload",children:(0,d.jsx)(t.code,{children:"UpdateReceivedSepaDirectDebitB2bMandatePayload"})}),"  ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"union"})]})]})}function v(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>n});var d=a(96540);const c={},i=d.createContext(c);function s(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);