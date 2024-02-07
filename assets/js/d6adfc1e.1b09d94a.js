"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97792],{99434:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>d,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var s=t(85893),a=t(11151),c=t(67294);const o={id:"payment-consent-pending",title:"PaymentConsentPending"},d=void 0,i={id:"objects/payment-consent-pending",title:"PaymentConsentPending",description:"Payment status consent pending",source:"@site/docs/objects/payment-consent-pending.mdx",sourceDirName:"objects",slug:"/objects/payment-consent-pending",permalink:"/objects/payment-consent-pending",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/payment-consent-pending.mdx",tags:[],version:"current",frontMatter:{id:"payment-consent-pending",title:"PaymentConsentPending"},sidebar:"schemaSidebar",previous:{title:"PaymentConnection",permalink:"/objects/payment-connection"},next:{title:"PaymentEdge",permalink:"/objects/payment-edge"}},r={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentConsentPending.<b>status</b></code><Bullet></Bullet><code>PaymentStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentconsentpendingstatuspaymentstatus--",level:4},{value:'<code>PaymentConsentPending.<b>consent</b></code><Bullet></Bullet><code>Consent!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentconsentpendingconsentconsent--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentstatusinfo-",level:4}],g=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,a.a)()},[i,r]=(0,c.useState)(o);return(0,s.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Payment status consent pending"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type PaymentConsentPending implements PaymentStatusInfo {\n  status: PaymentStatus!\n  consent: Consent!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"paymentconsentpendingstatuspaymentstatus--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentConsentPending.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/enums/payment-status",children:(0,s.jsx)(n.code,{children:"PaymentStatus!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"status of the payment"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"paymentconsentpendingconsentconsent--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentConsentPending.",(0,s.jsx)("b",{children:"consent"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/consent",children:(0,s.jsx)(n.code,{children:"Consent!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The consent required to initiate this payment"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"paymentstatusinfo-",children:[(0,s.jsx)(n.a,{href:"/interfaces/payment-status-info",children:(0,s.jsx)(n.code,{children:"PaymentStatusInfo"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Payment Status Information"}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var s=t(67294);const a={},c=s.createContext(a);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);