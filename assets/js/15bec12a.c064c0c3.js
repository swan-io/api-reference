"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[1468],{43108:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=t(85893),d=t(11151),a=t(67294);const r={id:"schedule-standing-order",title:"scheduleStandingOrder"},i=void 0,c={id:"mutations/schedule-standing-order",title:"scheduleStandingOrder",description:"Schedule a standing Order",source:"@site/docs/mutations/schedule-standing-order.mdx",sourceDirName:"mutations",slug:"/mutations/schedule-standing-order",permalink:"/mutations/schedule-standing-order",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/schedule-standing-order.mdx",tags:[],version:"current",frontMatter:{id:"schedule-standing-order",title:"scheduleStandingOrder"},sidebar:"schemaSidebar",previous:{title:"returnTransaction",permalink:"/mutations/return-transaction"},next:{title:"suspendAccountMembership",permalink:"/mutations/suspend-account-membership"}},o={},l=()=>{const e={span:"span",...(0,d.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,d.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,d.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>scheduleStandingOrder.<b>input</b></code><Bullet></Bullet><code>ScheduleStandingOrderInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputschedulestandingorderinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ScheduleStandingOrderPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderpayload-",level:4}],g=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,d.a)()},[c,o]=(0,a.useState)(r);return(0,s.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Schedule a standing Order"}),"\n",(0,s.jsxs)(n.p,{children:["This mutation is restricted to an User access token (",(0,s.jsx)(n.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),") and ask the user to consent to this request."]}),"\n",(0,s.jsx)(n.p,{children:"The user must have an account membership to the account and the permission to initiate credit transfer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"scheduleStandingOrder(\n  input: ScheduleStandingOrderInput!\n): ScheduleStandingOrderPayload!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.h4,{id:"schedulestandingorderinputschedulestandingorderinput--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["scheduleStandingOrder.",(0,s.jsx)("b",{children:"input"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/inputs/schedule-standing-order-input",children:(0,s.jsx)(n.code,{children:"ScheduleStandingOrderInput!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(n.h4,{id:"schedulestandingorderpayload-",children:[(0,s.jsx)(n.a,{href:"/unions/schedule-standing-order-payload",children:(0,s.jsx)(n.code,{children:"ScheduleStandingOrderPayload"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"})]})}function x(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(67294);const d={},a=s.createContext(d);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);