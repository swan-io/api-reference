"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14539],{56184:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(85893),o=n(11151),s=n(67294);const c={id:"payment-method-not-compatible-rejection",title:"PaymentMethodNotCompatibleRejection"},i=void 0,d={id:"objects/payment-method-not-compatible-rejection",title:"PaymentMethodNotCompatibleRejection",description:"Rejection returned when a payment method is not compatible for the requested mutation",source:"@site/docs/objects/payment-method-not-compatible-rejection.mdx",sourceDirName:"objects",slug:"/objects/payment-method-not-compatible-rejection",permalink:"/objects/payment-method-not-compatible-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/payment-method-not-compatible-rejection.mdx",tags:[],version:"current",frontMatter:{id:"payment-method-not-compatible-rejection",title:"PaymentMethodNotCompatibleRejection"},sidebar:"schemaSidebar",previous:{title:"PaymentMandateRejectedStatusInfo",permalink:"/objects/payment-mandate-rejected-status-info"},next:{title:"PaymentRejected",permalink:"/objects/payment-rejected"}},r={},l=()=>{const e={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,o.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentMethodNotCompatibleRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentmethodnotcompatiblerejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],j=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,o.a)()},[d,r]=(0,s.useState)(c);return(0,a.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})};function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Rejection returned when a payment method is not compatible for the requested mutation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type PaymentMethodNotCompatibleRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"paymentmethodnotcompatiblerejectionmessagestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentMethodNotCompatibleRejection.",(0,a.jsx)("b",{children:"message"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"rejection-",children:[(0,a.jsx)(t.a,{href:"/interfaces/rejection",children:(0,a.jsx)(t.code,{children:"Rejection"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/unions/add-sepa-direct-debit-payment-mandate-payload",children:(0,a.jsx)(t.code,{children:"AddSepaDirectDebitPaymentMandatePayload"})}),"  ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"union"}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/unions/create-merchant-payment-link-payload",children:(0,a.jsx)(t.code,{children:"CreateMerchantPaymentLinkPayload"})}),"  ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"union"})]})]})}function b(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var a=n(67294);const o={},s=a.createContext(o);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);