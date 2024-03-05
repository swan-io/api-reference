"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64801],{62110:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var a=t(85893),s=t(11151),r=t(67294);const d={id:"refund",title:"refund"},i=void 0,o={id:"mutations/refund",title:"refund",description:"initiates a refund for a list of booked transaction",source:"@site/docs/mutations/refund.mdx",sourceDirName:"mutations",slug:"/mutations/refund",permalink:"/mutations/refund",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/refund.mdx",tags:[],version:"current",frontMatter:{id:"refund",title:"refund"},sidebar:"schemaSidebar",previous:{title:"printPhysicalCard",permalink:"/mutations/print-physical-card"},next:{title:"replayWebhookEvent",permalink:"/mutations/replay-webhook-event"}},c={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>refund.<b>input</b></code><Bullet></Bullet><code>RefundInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"refundinputrefundinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>RefundPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"refundpayload-",level:4}],f=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,s.a)()},[o,c]=(0,r.useState)(d);return(0,a.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"initiates a refund for a list of booked transaction"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["This mutation is restricted to an User access token (",(0,a.jsx)(n.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),") and if necessary ask the user to consent to this request."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["The user must have an account membership on the accounts that are beneficiary of the transaction with the attribute ",(0,a.jsx)(n.code,{children:"canInitiatePayments=true"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"refund(\n  input: RefundInput!\n): RefundPayload!\n"})}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"refundinputrefundinput--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["refund.",(0,a.jsx)("b",{children:"input"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/refund-input",children:(0,a.jsx)(n.code,{children:"RefundInput!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"refundpayload-",children:[(0,a.jsx)(n.a,{href:"/unions/refund-payload",children:(0,a.jsx)(n.code,{children:"RefundPayload"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The respond body to a refund mutation"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var a=t(67294);const s={},r=a.createContext(s);function d(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);