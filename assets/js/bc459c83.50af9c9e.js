"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[11403],{79504:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>y});var t=n(85893),s=n(11151),d=n(67294);const c={id:"payment-mandate-canceled-status-info",title:"PaymentMandateCanceledStatusInfo"},o=void 0,l={id:"objects/payment-mandate-canceled-status-info",title:"PaymentMandateCanceledStatusInfo",description:"Payment Mandate Canceled status information",source:"@site/docs/objects/payment-mandate-canceled-status-info.mdx",sourceDirName:"objects",slug:"/objects/payment-mandate-canceled-status-info",permalink:"/objects/payment-mandate-canceled-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/payment-mandate-canceled-status-info.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-canceled-status-info",title:"PaymentMandateCanceledStatusInfo"},sidebar:"schemaSidebar",previous:{title:"PaymentInitiated",permalink:"/objects/payment-initiated"},next:{title:"PaymentMandateConnection",permalink:"/objects/payment-mandate-connection"}},r={},i=()=>{const e={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const a={a:"a",...(0,s.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentMandateCanceledStatusInfo.<b>status</b></code><Bullet></Bullet><code>PaymentMandateStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentmandatecanceledstatusinfostatuspaymentmandatestatus--",level:4},{value:'<code>PaymentMandateCanceledStatusInfo.<b>reason</b></code><Bullet></Bullet><code>PaymentMandateCanceledReason!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentmandatecanceledstatusinforeasonpaymentmandatecanceledreason--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentMandateStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentmandatestatusinfo-",level:4}],f=({dataOpen:e,dataClose:a,children:n,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,s.a)()},[l,r]=(0,d.useState)(c);return(0,t.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&n]})};function p(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Payment Mandate Canceled status information"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type PaymentMandateCanceledStatusInfo implements PaymentMandateStatusInfo {\n  status: PaymentMandateStatus!\n  reason: PaymentMandateCanceledReason!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"paymentmandatecanceledstatusinfostatuspaymentmandatestatus--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentMandateCanceledStatusInfo.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/enums/payment-mandate-status",children:(0,t.jsx)(a.code,{children:"PaymentMandateStatus!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Payment Mandate status (always Canceled for type PaymentMandateCanceledStatusInfo)."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"paymentmandatecanceledstatusinforeasonpaymentmandatecanceledreason--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentMandateCanceledStatusInfo.",(0,t.jsx)("b",{children:"reason"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/enums/payment-mandate-canceled-reason",children:(0,t.jsx)(a.code,{children:"PaymentMandateCanceledReason!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Reason behind the Payment Mandate Canceled status"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(a.h4,{id:"paymentmandatestatusinfo-",children:[(0,t.jsx)(a.a,{href:"/interfaces/payment-mandate-status-info",children:(0,t.jsx)(a.code,{children:"PaymentMandateStatusInfo"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Payment Mandate status information"}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>c});var t=n(67294);const s={},d=t.createContext(s);function c(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);