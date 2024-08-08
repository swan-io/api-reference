"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[32153],{33118:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>b,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var s=o(74848),t=o(28453),i=o(96540);const c={id:"webhook-subscription-not-found-rejection",title:"WebhookSubscriptionNotFoundRejection"},r=void 0,a={id:"objects/webhook-subscription-not-found-rejection",title:"WebhookSubscriptionNotFoundRejection",description:"Rejection returned when Webhook Subscription is not found",source:"@site/docs/objects/webhook-subscription-not-found-rejection.mdx",sourceDirName:"objects",slug:"/objects/webhook-subscription-not-found-rejection",permalink:"/objects/webhook-subscription-not-found-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/webhook-subscription-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"webhook-subscription-not-found-rejection",title:"WebhookSubscriptionNotFoundRejection"},sidebar:"schemaSidebar",previous:{title:"WebhookSubscriptionKpi",permalink:"/objects/webhook-subscription-kpi"},next:{title:"WebhookSubscriptionSuccessPayload",permalink:"/objects/webhook-subscription-success-payload"}},d={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:o,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[a,d]=(0,i.useState)(c);return(0,s.jsxs)(r.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&o]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>WebhookSubscriptionNotFoundRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionnotfoundrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rejection returned when Webhook Subscription is not found"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type WebhookSubscriptionNotFoundRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"webhooksubscriptionnotfoundrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscriptionNotFoundRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/remove-webhook-subscription-payload",children:(0,s.jsx)(n.code,{children:"RemoveWebhookSubscriptionPayload"})}),"  ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/replay-webhook-event-payload",children:(0,s.jsx)(n.code,{children:"ReplayWebhookEventPayload"})}),"  ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/webhook-subscription-payload",children:(0,s.jsx)(n.code,{children:"WebhookSubscriptionPayload"})}),"  ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var s=o(96540);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);