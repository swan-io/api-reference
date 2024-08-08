"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9042],{96840:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>b,assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>h});var d=n(74848),i=n(28453),a=n(96540);const c={id:"received-direct-debit-mandate-not-found-rejection",title:"ReceivedDirectDebitMandateNotFoundRejection"},r=void 0,s={id:"objects/received-direct-debit-mandate-not-found-rejection",title:"ReceivedDirectDebitMandateNotFoundRejection",description:"Error returned if the received direct debit mandate was not found or if the user does not have the rights to receive information abo",source:"@site/docs/objects/received-direct-debit-mandate-not-found-rejection.mdx",sourceDirName:"objects",slug:"/objects/received-direct-debit-mandate-not-found-rejection",permalink:"/objects/received-direct-debit-mandate-not-found-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/received-direct-debit-mandate-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"received-direct-debit-mandate-not-found-rejection",title:"ReceivedDirectDebitMandateNotFoundRejection"},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandateNotB2bRejection",permalink:"/objects/received-direct-debit-mandate-not-b2-b-rejection"},next:{title:"ReceivedDirectDebitMandateStatusInfoCanceled",permalink:"/objects/received-direct-debit-mandate-status-info-canceled"}},o={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const t={a:"a",...(0,i.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,i.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,i.R)()},[s,o]=(0,a.useState)(c);return(0,d.jsxs)(r.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ReceivedDirectDebitMandateNotFoundRejection.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatenotfoundrejectionidstring--",level:4},{value:'<code>ReceivedDirectDebitMandateNotFoundRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatenotfoundrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"Error returned if the received direct debit mandate was not found or if the user does not have the rights to receive information abo\nut the existence of the received direct debit mandate"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-graphql",children:"type ReceivedDirectDebitMandateNotFoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n"})}),"\n",(0,d.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(t.h4,{id:"receiveddirectdebitmandatenotfoundrejectionidstring--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandateNotFoundRejection.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/scalars/string",children:(0,d.jsx)(t.code,{children:"String!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(t.h4,{id:"receiveddirectdebitmandatenotfoundrejectionmessagestring--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandateNotFoundRejection.",(0,d.jsx)("b",{children:"message"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/scalars/string",children:(0,d.jsx)(t.code,{children:"String!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(t.h4,{id:"rejection-",children:[(0,d.jsx)(t.a,{href:"/interfaces/rejection",children:(0,d.jsx)(t.code,{children:"Rejection"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/unions/enable-received-direct-debit-mandate-payload",children:(0,d.jsx)(t.code,{children:"EnableReceivedDirectDebitMandatePayload"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/unions/suspend-received-direct-debit-mandate-payload",children:(0,d.jsx)(t.code,{children:"SuspendReceivedDirectDebitMandatePayload"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"union"}),(0,d.jsx)(l,{}),(0,d.jsx)(t.a,{href:"/unions/update-received-sepa-direct-debit-b2-b-mandate-payload",children:(0,d.jsx)(t.code,{children:"UpdateReceivedSepaDirectDebitB2bMandatePayload"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var d=n(96540);const i={},a=d.createContext(i);function c(e){const t=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(a.Provider,{value:t},e.children)}}}]);