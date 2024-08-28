"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36539],{19031:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var a=n(74848),c=n(28453),t=n(96540);const o={id:"suspend-account-reason",title:"SuspendAccountReason"},d=void 0,r={id:"objects/suspend-account-reason",title:"SuspendAccountReason",description:"Define a reason with a message and a specific type for suspend account action",source:"@site/docs/objects/suspend-account-reason.mdx",sourceDirName:"objects",slug:"/objects/suspend-account-reason",permalink:"/objects/suspend-account-reason",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/suspend-account-reason.mdx",tags:[],version:"current",frontMatter:{id:"suspend-account-reason",title:"SuspendAccountReason"},sidebar:"schemaSidebar",previous:{title:"SuspendAccountMembershipSuccessPayload",permalink:"/objects/suspend-account-membership-success-payload"},next:{title:"SuspendPhysicalCardSuccessPayload",permalink:"/objects/suspend-physical-card-success-payload"}},i={},l=()=>{const e={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,c.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:n,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,c.R)()},[r,i]=(0,t.useState)(o);return(0,a.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>SuspendAccountReason.<b>type</b></code><Bullet></Bullet><code>SuspendAccountReasonType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suspendaccountreasontypesuspendaccountreasontype--",level:4},{value:'<code>SuspendAccountReason.<b>message</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"suspendaccountreasonmessagestring-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Reason</code> <Badge class="badge badge--secondary"></Badge>',id:"reason-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function g(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Define a reason with a message and a specific type for suspend account action"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type SuspendAccountReason implements Reason {\n  type: SuspendAccountReasonType!\n  message: String\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"suspendaccountreasontypesuspendaccountreasontype--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SuspendAccountReason.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/enums/suspend-account-reason-type",children:(0,a.jsx)(s.code,{children:"SuspendAccountReasonType!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(s.h4,{id:"suspendaccountreasonmessagestring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SuspendAccountReason.",(0,a.jsx)("b",{children:"message"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(s.h4,{id:"reason-",children:[(0,a.jsx)(s.a,{href:"/interfaces/reason",children:(0,a.jsx)(s.code,{children:"Reason"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(s.p,{children:"Define a reason with a message"}),"\n",(0,a.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/unions/suspend-account-status-reason",children:(0,a.jsx)(s.code,{children:"SuspendAccountStatusReason"})}),"  ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var a=n(96540);const c={},t=a.createContext(c);function o(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);