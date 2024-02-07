"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89829],{36613:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>r,toc:()=>x});var i=n(85893),c=n(11151),a=n(67294);const s={id:"account-verification-status-info",title:"AccountVerificationStatusInfo"},o=void 0,r={id:"interfaces/account-verification-status-info",title:"AccountVerificationStatusInfo",description:"Account Verification Status Information",source:"@site/docs/interfaces/account-verification-status-info.mdx",sourceDirName:"interfaces",slug:"/interfaces/account-verification-status-info",permalink:"/interfaces/account-verification-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/account-verification-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-verification-status-info",title:"AccountVerificationStatusInfo"},sidebar:"schemaSidebar",previous:{title:"AccountStatusInfo",permalink:"/interfaces/account-status-info"},next:{title:"AccountVerification",permalink:"/interfaces/account-verification"}},d={},l=()=>{const e={span:"span",...(0,c.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,c.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,c.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountVerificationStatusInfo.<b>status</b></code><Bullet></Bullet><code>AccountVerificationStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountverificationstatusinfostatusaccountverificationstatus--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,c.a)()},[r,d]=(0,a.useState)(s);return(0,i.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})};function j(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Account Verification Status Information"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"interface AccountVerificationStatusInfo {\n  status: AccountVerificationStatus!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"accountverificationstatusinfostatusaccountverificationstatus--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountVerificationStatusInfo.",(0,i.jsx)("b",{children:"status"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/enums/account-verification-status",children:(0,i.jsx)(t.code,{children:"AccountVerificationStatus!"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Account verification status"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/interfaces/account-verification",children:(0,i.jsx)(t.code,{children:"AccountVerification"})}),"  ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"interface"}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/objects/direct-debit-account-verification",children:(0,i.jsx)(t.code,{children:"DirectDebitAccountVerification"})}),"  ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/objects/pending-review-status-info",children:(0,i.jsx)(t.code,{children:"PendingReviewStatusInfo"})}),"  ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/objects/pending-verification-status-info",children:(0,i.jsx)(t.code,{children:"PendingVerificationStatusInfo"})}),"  ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/objects/rejected-verification-status-info",children:(0,i.jsx)(t.code,{children:"RejectedVerificationStatusInfo"})}),"  ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/objects/verified-status-info",children:(0,i.jsx)(t.code,{children:"VerifiedStatusInfo"})}),"  ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const c={},a=i.createContext(c);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);