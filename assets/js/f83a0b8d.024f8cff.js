"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[67999],{91216:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>v});var i=t(85893),s=t(11151),o=t(67294);const a={id:"invoice-status",title:"InvoiceStatus"},c=void 0,d={id:"enums/invoice-status",title:"InvoiceStatus",description:"The different statuses of invoice",source:"@site/docs/enums/invoice-status.mdx",sourceDirName:"enums",slug:"/enums/invoice-status",permalink:"/enums/invoice-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/invoice-status.mdx",tags:[],version:"current",frontMatter:{id:"invoice-status",title:"InvoiceStatus"},sidebar:"schemaSidebar",previous:{title:"InvalidMerchantPaymentMethodErrorCode",permalink:"/enums/invalid-merchant-payment-method-error-code"},next:{title:"InvoiceType",permalink:"/enums/invoice-type"}},l={},r=()=>{const e={span:"span",...(0,s.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,s.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},v=[{value:"Values",id:"values",level:3},{value:"<code>InvoiceStatus.<b>Failed</b></code>",id:"invoicestatusfailed",level:4},{value:"<code>InvoiceStatus.<b>NotPaid</b></code>",id:"invoicestatusnotpaid",level:4},{value:"<code>InvoiceStatus.<b>Paid</b></code>",id:"invoicestatuspaid",level:4},{value:"<code>InvoiceStatus.<b>PaymentDue</b></code>",id:"invoicestatuspaymentdue",level:4},{value:"<code>InvoiceStatus.<b>Pending</b></code>",id:"invoicestatuspending",level:4},{value:"<code>InvoiceStatus.<b>Voided</b></code>",id:"invoicestatusvoided",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.a)()},[d,l]=(0,o.useState)(a);return(0,i.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The different statuses of invoice"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"enum InvoiceStatus {\n  Failed\n  NotPaid\n  Paid\n  PaymentDue\n  Pending\n  Voided\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,i.jsx)(n.h4,{id:"invoicestatusfailed",children:(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceStatus.",(0,i.jsx)("b",{children:"Failed"})]})})}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h4,{id:"invoicestatusnotpaid",children:(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceStatus.",(0,i.jsx)("b",{children:"NotPaid"})]})})}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h4,{id:"invoicestatuspaid",children:(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceStatus.",(0,i.jsx)("b",{children:"Paid"})]})})}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h4,{id:"invoicestatuspaymentdue",children:(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceStatus.",(0,i.jsx)("b",{children:"PaymentDue"})]})})}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h4,{id:"invoicestatuspending",children:(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceStatus.",(0,i.jsx)("b",{children:"Pending"})]})})}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h4,{id:"invoicestatusvoided",children:(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceStatus.",(0,i.jsx)("b",{children:"Voided"})]})})}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/objects/invoice",children:(0,i.jsx)(n.code,{children:"Invoice"})}),"  ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var i=t(67294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);