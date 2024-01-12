"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51282],{10643:(e,t,d)=>{d.r(t),d.d(t,{Badge:()=>b,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>f});var s=d(85893),a=d(11151),n=d(67294);const i={id:"received-direct-debit-mandate-status-info-suspended",title:"ReceivedDirectDebitMandateStatusInfoSuspended"},c=void 0,r={id:"objects/received-direct-debit-mandate-status-info-suspended",title:"ReceivedDirectDebitMandateStatusInfoSuspended",description:"Received Direct Debit Mandate Suspended status information",source:"@site/docs/objects/received-direct-debit-mandate-status-info-suspended.mdx",sourceDirName:"objects",slug:"/objects/received-direct-debit-mandate-status-info-suspended",permalink:"/objects/received-direct-debit-mandate-status-info-suspended",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/received-direct-debit-mandate-status-info-suspended.mdx",tags:[],version:"current",frontMatter:{id:"received-direct-debit-mandate-status-info-suspended",title:"ReceivedDirectDebitMandateStatusInfoSuspended"},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandateStatusInfoEnabled",permalink:"/objects/received-direct-debit-mandate-status-info-enabled"},next:{title:"RefundRejection",permalink:"/objects/refund-rejection"}},o={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const t={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ReceivedDirectDebitMandateStatusInfoSuspended.<b>status</b></code><Bullet></Bullet><code>ReceivedDirectDebitMandateStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatestatusinfosuspendedstatusreceiveddirectdebitmandatestatus--",level:4},{value:'<code>ReceivedDirectDebitMandateStatusInfoSuspended.<b>suspendedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatestatusinfosuspendedsuspendedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>ReceivedDirectDebitMandateStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatestatusinfo-",level:4}],p=({dataOpen:e,dataClose:t,children:d,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[r,o]=(0,n.useState)(i);return(0,s.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&d]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Received Direct Debit Mandate Suspended status information"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type ReceivedDirectDebitMandateStatusInfoSuspended implements ReceivedDirectDebitMandateStatusInfo {\n  status: ReceivedDirectDebitMandateStatus!\n  suspendedAt: DateTime!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"receiveddirectdebitmandatestatusinfosuspendedstatusreceiveddirectdebitmandatestatus--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandateStatusInfoSuspended.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/enums/received-direct-debit-mandate-status",children:(0,s.jsx)(t.code,{children:"ReceivedDirectDebitMandateStatus!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Received Direct Debit Mandate status (always Suspended for type ReceivedDirectDebitMandateStatusInfoSuspended)"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"receiveddirectdebitmandatestatusinfosuspendedsuspendedatdatetime--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandateStatusInfoSuspended.",(0,s.jsx)("b",{children:"suspendedAt"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/scalars/date-time",children:(0,s.jsx)(t.code,{children:"DateTime!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Date of the last time the received direct debit mandate has been moved to the suspended status"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(t.h4,{id:"receiveddirectdebitmandatestatusinfo-",children:[(0,s.jsx)(t.a,{href:"/interfaces/received-direct-debit-mandate-status-info",children:(0,s.jsx)(t.code,{children:"ReceivedDirectDebitMandateStatusInfo"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Received Direct Debit Mandate status information"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,t,d)=>{d.d(t,{Z:()=>c,a:()=>i});var s=d(67294);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);