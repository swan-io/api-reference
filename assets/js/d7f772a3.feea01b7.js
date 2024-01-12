"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[67068],{2557:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>f});var n=a(85893),s=a(11151),d=a(67294);const c={id:"payment-mandate-status-info",title:"PaymentMandateStatusInfo"},r=void 0,o={id:"interfaces/payment-mandate-status-info",title:"PaymentMandateStatusInfo",description:"Payment Mandate status information",source:"@site/docs/interfaces/payment-mandate-status-info.mdx",sourceDirName:"interfaces",slug:"/interfaces/payment-mandate-status-info",permalink:"/interfaces/payment-mandate-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/payment-mandate-status-info.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-status-info",title:"PaymentMandateStatusInfo"},sidebar:"schemaSidebar",previous:{title:"PaymentMandateDebtor",permalink:"/interfaces/payment-mandate-debtor"},next:{title:"PaymentMandate",permalink:"/interfaces/payment-mandate"}},i={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,s.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentMandateStatusInfo.<b>status</b></code><Bullet></Bullet><code>PaymentMandateStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentmandatestatusinfostatuspaymentmandatestatus--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],p=({dataOpen:e,dataClose:t,children:a,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,s.a)()},[o,i]=(0,d.useState)(c);return(0,n.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&a]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Payment Mandate status information"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"interface PaymentMandateStatusInfo {\n  status: PaymentMandateStatus!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"paymentmandatestatusinfostatuspaymentmandatestatus--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentMandateStatusInfo.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/enums/payment-mandate-status",children:(0,n.jsx)(t.code,{children:"PaymentMandateStatus!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Status of the payment mandate."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/objects/internal-payment-direct-debit-mandate",children:(0,n.jsx)(t.code,{children:"InternalPaymentDirectDebitMandate"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/objects/sepapayment-direct-debit-mandate",children:(0,n.jsx)(t.code,{children:"SEPAPaymentDirectDebitMandate"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/objects/payment-mandate-canceled-status-info",children:(0,n.jsx)(t.code,{children:"PaymentMandateCanceledStatusInfo"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/objects/payment-mandate-consent-pending-status-info",children:(0,n.jsx)(t.code,{children:"PaymentMandateConsentPendingStatusInfo"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/objects/payment-mandate-enabled-status-info",children:(0,n.jsx)(t.code,{children:"PaymentMandateEnabledStatusInfo"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/objects/payment-mandate-rejected-status-info",children:(0,n.jsx)(t.code,{children:"PaymentMandateRejectedStatusInfo"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>c});var n=a(67294);const s={},d=n.createContext(s);function c(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);