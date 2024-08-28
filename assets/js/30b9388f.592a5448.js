"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34338],{54449:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=n(74848),o=n(28453),a=n(96540);const r={id:"account-holder-waiting-for-information-verification-status-info",title:"AccountHolderWaitingForInformationVerificationStatusInfo"},s=void 0,c={id:"objects/account-holder-waiting-for-information-verification-status-info",title:"AccountHolderWaitingForInformationVerificationStatusInfo",description:"No description",source:"@site/docs/objects/account-holder-waiting-for-information-verification-status-info.mdx",sourceDirName:"objects",slug:"/objects/account-holder-waiting-for-information-verification-status-info",permalink:"/objects/account-holder-waiting-for-information-verification-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-holder-waiting-for-information-verification-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-waiting-for-information-verification-status-info",title:"AccountHolderWaitingForInformationVerificationStatusInfo"},sidebar:"schemaSidebar",previous:{title:"AccountHolderVerifiedVerificationStatusInfo",permalink:"/objects/account-holder-verified-verification-status-info"},next:{title:"AccountHolder",permalink:"/objects/account-holder"}},d={},l=()=>{const t={span:"span",...(0,o.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=t=>{const e={a:"a",...(0,o.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(e.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url,children:"\u2398"})]})},u=t=>{const e={span:"span",...(0,o.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{className:t.class,children:t.text})})},h=({dataOpen:t,dataClose:e,children:n,startOpen:r=!1})=>{const s={details:"details",summary:"summary",...(0,o.R)()},[c,d]=(0,a.useState)(r);return(0,i.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(s.summary,{onClick:t=>{t.preventDefault(),d((t=>!t))},style:{listStyle:"none"},children:c?t:e}),c&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountHolderWaitingForInformationVerificationStatusInfo.<b>status</b></code><Bullet></Bullet><code>VerificationStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderwaitingforinformationverificationstatusinfostatusverificationstatus--",level:4},{value:'<code>AccountHolderWaitingForInformationVerificationStatusInfo.<b>WaitingForInformationAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholderwaitingforinformationverificationstatusinfowaitingforinformationatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountHolderVerificationStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderverificationstatusinfo-",level:4}];function g(t){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"No description"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-graphql",children:"type AccountHolderWaitingForInformationVerificationStatusInfo implements AccountHolderVerificationStatusInfo {\n  status: VerificationStatus!\n  WaitingForInformationAt: DateTime!\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(e.h4,{id:"accountholderwaitingforinformationverificationstatusinfostatusverificationstatus--",children:[(0,i.jsx)(e.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderWaitingForInformationVerificationStatusInfo.",(0,i.jsx)("b",{children:"status"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(e.a,{href:"/enums/verification-status",children:(0,i.jsx)(e.code,{children:"VerificationStatus!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(e.p,{children:"Verification Status of the account holder."}),"\n",(0,i.jsxs)(e.h4,{id:"accountholderwaitingforinformationverificationstatusinfowaitingforinformationatdatetime--",children:[(0,i.jsx)(e.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderWaitingForInformationVerificationStatusInfo.",(0,i.jsx)("b",{children:"WaitingForInformationAt"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(e.a,{href:"/scalars/date-time",children:(0,i.jsx)(e.code,{children:"DateTime!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(e.p,{children:"ISO Date string at which the account holder status was set to WaitingForInformation"}),"\n",(0,i.jsx)(e.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(e.h4,{id:"accountholderverificationstatusinfo-",children:[(0,i.jsx)(e.a,{href:"/interfaces/account-holder-verification-status-info",children:(0,i.jsx)(e.code,{children:"AccountHolderVerificationStatusInfo"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsx)(e.p,{children:"Account Holder Verification Status Information"})]})}function x(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(g,{...t})}):g(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>s});var i=n(96540);const o={},a=i.createContext(o);function r(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);