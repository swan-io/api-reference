"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[87826],{76466:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>g});var i=n(74848),d=n(28453),s=n(96540);const a={id:"received-direct-debit-mandate-status-info-consent-pending",title:"ReceivedDirectDebitMandateStatusInfoConsentPending"},c=void 0,r={id:"objects/received-direct-debit-mandate-status-info-consent-pending",title:"ReceivedDirectDebitMandateStatusInfoConsentPending",description:"Received Direct Debit Mandate ConsentPending status information",source:"@site/docs/objects/received-direct-debit-mandate-status-info-consent-pending.mdx",sourceDirName:"objects",slug:"/objects/received-direct-debit-mandate-status-info-consent-pending",permalink:"/objects/received-direct-debit-mandate-status-info-consent-pending",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/received-direct-debit-mandate-status-info-consent-pending.mdx",tags:[],version:"current",frontMatter:{id:"received-direct-debit-mandate-status-info-consent-pending",title:"ReceivedDirectDebitMandateStatusInfoConsentPending"},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandateStatusInfoConsentInitiationPending",permalink:"/objects/received-direct-debit-mandate-status-info-consent-initiation-pending"},next:{title:"ReceivedDirectDebitMandateStatusInfoEnabled",permalink:"/objects/received-direct-debit-mandate-status-info-enabled"}},o={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,d.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const t={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[r,o]=(0,s.useState)(a);return(0,i.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>ReceivedDirectDebitMandateStatusInfoConsentPending.<b>status</b></code><Bullet></Bullet><code>ReceivedDirectDebitMandateStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatestatusinfoconsentpendingstatusreceiveddirectdebitmandatestatus--",level:4},{value:'<code>ReceivedDirectDebitMandateStatusInfoConsentPending.<b>consent</b></code><Bullet></Bullet><code>Consent!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatestatusinfoconsentpendingconsentconsent--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>ReceivedDirectDebitMandateStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatestatusinfo-",level:4}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Received Direct Debit Mandate ConsentPending status information"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type ReceivedDirectDebitMandateStatusInfoConsentPending implements ReceivedDirectDebitMandateStatusInfo {\n  status: ReceivedDirectDebitMandateStatus!\n  consent: Consent!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"receiveddirectdebitmandatestatusinfoconsentpendingstatusreceiveddirectdebitmandatestatus--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandateStatusInfoConsentPending.",(0,i.jsx)("b",{children:"status"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/enums/received-direct-debit-mandate-status",children:(0,i.jsx)(t.code,{children:"ReceivedDirectDebitMandateStatus!"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(t.p,{children:"Received Direct Debit Mandate status (always ConsentInitiationPending for type ReceivedDirectDebitMandateStatusInfoConsentPending)"}),"\n",(0,i.jsxs)(t.h4,{id:"receiveddirectdebitmandatestatusinfoconsentpendingconsentconsent--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandateStatusInfoConsentPending.",(0,i.jsx)("b",{children:"consent"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/objects/consent",children:(0,i.jsx)(t.code,{children:"Consent!"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.p,{children:"The consent required to consent to a received direct debit mandate"}),"\n",(0,i.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(t.h4,{id:"receiveddirectdebitmandatestatusinfo-",children:[(0,i.jsx)(t.a,{href:"/interfaces/received-direct-debit-mandate-status-info",children:(0,i.jsx)(t.code,{children:"ReceivedDirectDebitMandateStatusInfo"})})," ",(0,i.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsx)(t.p,{children:"Received Direct Debit Mandate status information"})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(96540);const d={},s=i.createContext(d);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);