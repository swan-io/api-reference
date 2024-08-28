"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34819],{57173:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(74848),n=t(28453),i=t(96540);const a={id:"webhook-subscription-broken-status-info",title:"WebhookSubscriptionBrokenStatusInfo"},r=void 0,c={id:"objects/webhook-subscription-broken-status-info",title:"WebhookSubscriptionBrokenStatusInfo",description:"No description",source:"@site/docs/objects/webhook-subscription-broken-status-info.mdx",sourceDirName:"objects",slug:"/objects/webhook-subscription-broken-status-info",permalink:"/objects/webhook-subscription-broken-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/webhook-subscription-broken-status-info.mdx",tags:[],version:"current",frontMatter:{id:"webhook-subscription-broken-status-info",title:"WebhookSubscriptionBrokenStatusInfo"},sidebar:"schemaSidebar",previous:{title:"WebhookEventLogsEdge",permalink:"/objects/webhook-event-logs-edge"},next:{title:"WebhookSubscriptionDisabledStatusInfo",permalink:"/objects/webhook-subscription-disabled-status-info"}},d={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const s={a:"a",...(0,n.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:t,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,n.R)()},[c,d]=(0,i.useState)(a);return(0,o.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&t]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>WebhookSubscriptionBrokenStatusInfo.<b>status</b></code><Bullet></Bullet><code>WebhookSubscriptionStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionbrokenstatusinfostatuswebhooksubscriptionstatus--",level:4},{value:'<code>WebhookSubscriptionBrokenStatusInfo.<b>brokenAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionbrokenstatusinfobrokenatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>WebhookSubscriptionStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionstatusinfo-",level:4}];function k(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"No description"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-graphql",children:"type WebhookSubscriptionBrokenStatusInfo implements WebhookSubscriptionStatusInfo {\n  status: WebhookSubscriptionStatus!\n  brokenAt: DateTime!\n}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(s.h4,{id:"webhooksubscriptionbrokenstatusinfostatuswebhooksubscriptionstatus--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscriptionBrokenStatusInfo.",(0,o.jsx)("b",{children:"status"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(s.a,{href:"/enums/webhook-subscription-status",children:(0,o.jsx)(s.code,{children:"WebhookSubscriptionStatus!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsxs)(s.h4,{id:"webhooksubscriptionbrokenstatusinfobrokenatdatetime--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscriptionBrokenStatusInfo.",(0,o.jsx)("b",{children:"brokenAt"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(s.a,{href:"/scalars/date-time",children:(0,o.jsx)(s.code,{children:"DateTime!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsxs)(s.h4,{id:"webhooksubscriptionstatusinfo-",children:[(0,o.jsx)(s.a,{href:"/interfaces/webhook-subscription-status-info",children:(0,o.jsx)(s.code,{children:"WebhookSubscriptionStatusInfo"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"interface"})]})]})}function f(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(k,{...e})}):k(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var o=t(96540);const n={},i=o.createContext(n);function a(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);