"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29532],{50192:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>j,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=t(74848),d=t(28453),c=t(96540);const r={id:"refund-rejection",title:"RefundRejection"},a=void 0,o={id:"objects/refund-rejection",title:"RefundRejection",description:"Rejection returned if the transaction status is not correct for the desired action",source:"@site/docs/objects/refund-rejection.mdx",sourceDirName:"objects",slug:"/objects/refund-rejection",permalink:"/objects/refund-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/refund-rejection.mdx",tags:[],version:"current",frontMatter:{id:"refund-rejection",title:"RefundRejection"},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandateStatusInfoSuspended",permalink:"/objects/received-direct-debit-mandate-status-info-suspended"},next:{title:"RefundSuccessPayload",permalink:"/objects/refund-success-payload"}},i={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,d.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const a={details:"details",summary:"summary",...(0,d.R)()},[o,i]=(0,c.useState)(r);return(0,s.jsxs)(a.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RefundRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"refundrejectionmessagestring--",level:4},{value:'<code>RefundRejection.<b>code</b></code><Bullet></Bullet><code>RefundRejectionCode!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"refundrejectioncoderefundrejectioncode--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function g(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rejection returned if the transaction status is not correct for the desired action"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type RefundRejection implements Rejection {\n  message: String!\n  code: RefundRejectionCode!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"refundrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"refundrejectioncoderefundrejectioncode--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundRejection.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/enums/refund-rejection-code",children:(0,s.jsx)(n.code,{children:"RefundRejectionCode!"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/refund-payload",children:(0,s.jsx)(n.code,{children:"RefundPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const d={},c=s.createContext(d);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);