"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[12743],{86516:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>g,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>j,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=t(85893),c=t(11151),a=t(67294);const o={id:"account-closing-status",title:"AccountClosingStatus"},l=void 0,d={id:"objects/account-closing-status",title:"AccountClosingStatus",description:"Account Closing status information",source:"@site/docs/objects/account-closing-status.mdx",sourceDirName:"objects",slug:"/objects/account-closing-status",permalink:"/objects/account-closing-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-closing-status.mdx",tags:[],version:"current",frontMatter:{id:"account-closing-status",title:"AccountClosingStatus"},sidebar:"schemaSidebar",previous:{title:"AccountClosedStatus",permalink:"/objects/account-closed-status"},next:{title:"AccountConnection",permalink:"/objects/account-connection"}},i={},r=()=>{const e={span:"span",...(0,c.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,c.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,c.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountClosingStatus.<b>status</b></code><Bullet></Bullet><code>AccountStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountclosingstatusstatusaccountstatus--",level:4},{value:'<code>AccountClosingStatus.<b>reason</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountclosingstatusreasonstring--",level:4},{value:'<code>AccountClosingStatus.<b>reasonInfo</b></code><Bullet></Bullet><code>CloseAccountStatusReason!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountclosingstatusreasoninfocloseaccountstatusreason--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"accountstatusinfo-",level:4}],x=({dataOpen:e,dataClose:s,children:t,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,c.a)()},[d,i]=(0,a.useState)(o);return(0,n.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&t]})};function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Account Closing status information"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type AccountClosingStatus implements AccountStatusInfo {\n  status: AccountStatus!\n  reason: String!\n  reasonInfo: CloseAccountStatusReason!\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"accountclosingstatusstatusaccountstatus--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountClosingStatus.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/enums/account-status",children:(0,n.jsx)(s.code,{children:"AccountStatus!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Account status (always Closing for type AccountClosingStatus)"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"accountclosingstatusreasonstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountClosingStatus.",(0,n.jsx)("b",{children:"reason"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Reason why the account is suspended\n@Deprecated"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"accountclosingstatusreasoninfocloseaccountstatusreason--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountClosingStatus.",(0,n.jsx)("b",{children:"reasonInfo"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/unions/close-account-status-reason",children:(0,n.jsx)(s.code,{children:"CloseAccountStatusReason!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Reason why the account is currently in closing"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(s.h4,{id:"accountstatusinfo-",children:[(0,n.jsx)(s.a,{href:"/interfaces/account-status-info",children:(0,n.jsx)(s.code,{children:"AccountStatusInfo"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"})]})}function j(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>o});var n=t(67294);const c={},a=n.createContext(c);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);