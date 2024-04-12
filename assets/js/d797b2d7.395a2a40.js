"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[57147],{90213:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>u,Bullet:()=>h,Details:()=>f,SpecifiedBy:()=>c,assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=t(85893),n=t(11151),s=t(67294);const i={id:"shareholder-status",title:"ShareholderStatus"},o=void 0,d={id:"enums/shareholder-status",title:"ShareholderStatus",description:"Status of the shareholder during the process with Swan.",source:"@site/docs/enums/shareholder-status.mdx",sourceDirName:"enums",slug:"/enums/shareholder-status",permalink:"/enums/shareholder-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/shareholder-status.mdx",tags:[],version:"current",frontMatter:{id:"shareholder-status",title:"ShareholderStatus"},sidebar:"schemaSidebar",previous:{title:"SEPAReceivedDirectDebitMandateSequence",permalink:"/enums/separeceived-direct-debit-mandate-sequence"},next:{title:"ShareholderType",permalink:"/enums/shareholder-type"}},l={},h=()=>{const e={span:"span",...(0,n.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=e=>{const r={a:"a",...(0,n.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,n.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.span,{className:e.class,children:e.text})})},p=[{value:"Values",id:"values",level:3},{value:"<code>ShareholderStatus.<b>PendingOnboarding</b></code>",id:"shareholderstatuspendingonboarding",level:4},{value:"<code>ShareholderStatus.<b>WaitingForVerification</b></code>",id:"shareholderstatuswaitingforverification",level:4},{value:"<code>ShareholderStatus.<b>WaitingForTransfer</b></code>",id:"shareholderstatuswaitingfortransfer",level:4},{value:"<code>ShareholderStatus.<b>CapitalTransferred</b></code>",id:"shareholderstatuscapitaltransferred",level:4},{value:"<code>ShareholderStatus.<b>CapitalFundsWiredToNotary</b></code>",id:"shareholderstatuscapitalfundswiredtonotary",level:4},{value:"<code>ShareholderStatus.<b>CapitalDepositCanceled</b></code>",id:"shareholderstatuscapitaldepositcanceled",level:4},{value:"Member Of",id:"member-of",level:3}],f=({dataOpen:e,dataClose:r,children:t,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,n.a)()},[d,l]=(0,s.useState)(i);return(0,a.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&t]})};function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Status of the shareholder during the process with Swan."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-graphql",children:"enum ShareholderStatus {\n  PendingOnboarding\n  WaitingForVerification\n  WaitingForTransfer\n  CapitalTransferred\n  CapitalFundsWiredToNotary\n  CapitalDepositCanceled\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(r.h4,{id:"shareholderstatuspendingonboarding",children:(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ShareholderStatus.",(0,a.jsx)("b",{children:"PendingOnboarding"})]})})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Waiting for the shareholder to finalize their onboarding."}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"shareholderstatuswaitingforverification",children:(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ShareholderStatus.",(0,a.jsx)("b",{children:"WaitingForVerification"})]})})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Waiting for Swan compliance team to verify the shareholder."}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"shareholderstatuswaitingfortransfer",children:(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ShareholderStatus.",(0,a.jsx)("b",{children:"WaitingForTransfer"})]})})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Waiting for the shareholder to wire their share of the capital on their temporary Swan account."}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"shareholderstatuscapitaltransferred",children:(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ShareholderStatus.",(0,a.jsx)("b",{children:"CapitalTransferred"})]})})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"When the shareholder has wired their share of the capital."}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"shareholderstatuscapitalfundswiredtonotary",children:(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ShareholderStatus.",(0,a.jsx)("b",{children:"CapitalFundsWiredToNotary"})]})})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"When the shareholder's capital is wired to the notary."}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"shareholderstatuscapitaldepositcanceled",children:(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ShareholderStatus.",(0,a.jsx)("b",{children:"CapitalDepositCanceled"})]})})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"When the capital deposit of the shareholder is canceled."}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/objects/shareholder",children:(0,a.jsx)(r.code,{children:"Shareholder"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var a=t(67294);const n={},s=a.createContext(n);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);