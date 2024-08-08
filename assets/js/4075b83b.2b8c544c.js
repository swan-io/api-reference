"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89334],{19658:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>p,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>b,assets:()=>o,contentTitle:()=>n,default:()=>v,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var t=a(74848),c=a(28453),s=a(96540);const i={id:"add-received-sepa-direct-debit-b2-b-mandate-success-payload",title:"AddReceivedSepaDirectDebitB2bMandateSuccessPayload"},n=void 0,r={id:"objects/add-received-sepa-direct-debit-b2-b-mandate-success-payload",title:"AddReceivedSepaDirectDebitB2bMandateSuccessPayload",description:"Return type in case of a successful response of the addReceivedSepaDirectDebitB2bMandate mutation",source:"@site/docs/objects/add-received-sepa-direct-debit-b2-b-mandate-success-payload.mdx",sourceDirName:"objects",slug:"/objects/add-received-sepa-direct-debit-b2-b-mandate-success-payload",permalink:"/objects/add-received-sepa-direct-debit-b2-b-mandate-success-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/add-received-sepa-direct-debit-b2-b-mandate-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-received-sepa-direct-debit-b2-b-mandate-success-payload",title:"AddReceivedSepaDirectDebitB2bMandateSuccessPayload"},sidebar:"schemaSidebar",previous:{title:"AddReceivedInternalDirectDebitB2bMandateSuccessPayload",permalink:"/objects/add-received-internal-direct-debit-b2-b-mandate-success-payload"},next:{title:"AddSepaDirectDebitPaymentMandateSuccessPayload",permalink:"/objects/add-sepa-direct-debit-payment-mandate-success-payload"}},o={},l=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const d={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const d={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:d,children:a,startOpen:i=!1})=>{const n={details:"details",summary:"summary",...(0,c.R)()},[r,o]=(0,s.useState)(i);return(0,t.jsxs)(n.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:d}),r&&a]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AddReceivedSepaDirectDebitB2bMandateSuccessPayload.<b>receivedDirectDebitMandate</b></code><Bullet></Bullet><code>ReceivedDirectDebitMandate!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addreceivedsepadirectdebitb2bmandatesuccesspayloadreceiveddirectdebitmandatereceiveddirectdebitmandate--",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:"Return type in case of a successful response of the addReceivedSepaDirectDebitB2bMandate mutation"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-graphql",children:"type AddReceivedSepaDirectDebitB2bMandateSuccessPayload {\n  receivedDirectDebitMandate: ReceivedDirectDebitMandate!\n}\n"})}),"\n",(0,t.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(d.h4,{id:"addreceivedsepadirectdebitb2bmandatesuccesspayloadreceiveddirectdebitmandatereceiveddirectdebitmandate--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddReceivedSepaDirectDebitB2bMandateSuccessPayload.",(0,t.jsx)("b",{children:"receivedDirectDebitMandate"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(d.a,{href:"/interfaces/received-direct-debit-mandate",children:(0,t.jsx)(d.code,{children:"ReceivedDirectDebitMandate!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(d.p,{children:"The received direct debit mandate is added"}),"\n",(0,t.jsx)(d.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"/unions/add-received-sepa-direct-debit-b2-b-mandate-payload",children:(0,t.jsx)(d.code,{children:"AddReceivedSepaDirectDebitB2bMandatePayload"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"union"})]})]})}function v(e={}){const{wrapper:d}={...(0,c.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,d,a)=>{a.d(d,{R:()=>i,x:()=>n});var t=a(96540);const c={},s=t.createContext(c);function i(e){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function n(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);