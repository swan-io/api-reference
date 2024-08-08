"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49910],{61655:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>g,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>d,default:()=>v,frontMatter:()=>a,metadata:()=>i,toc:()=>b});var t=o(74848),s=o(28453),r=o(96540);const a={id:"webhook-event-log",title:"webhookEventLog"},d=void 0,i={id:"queries/webhook-event-log",title:"webhookEventLog",description:"A single webhook eventLog, queried by its id",source:"@site/docs/queries/webhook-event-log.mdx",sourceDirName:"queries",slug:"/queries/webhook-event-log",permalink:"/queries/webhook-event-log",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/webhook-event-log.mdx",tags:[],version:"current",frontMatter:{id:"webhook-event-log",title:"webhookEventLog"},sidebar:"schemaSidebar",previous:{title:"users",permalink:"/queries/users"},next:{title:"webhookEventLogs",permalink:"/queries/webhook-event-logs"}},l={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:o,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[i,l]=(0,r.useState)(a);return(0,t.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&o]})},b=[{value:"Arguments",id:"arguments",level:3},{value:'<code>webhookEventLog.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogidid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>WebhookEventLog</code> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlog-",level:4}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A single webhook eventLog, queried by its id"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"webhookEventLog(\n  id: ID!\n): WebhookEventLog\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"webhookeventlogidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["webhookEventLog.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"webhookeventlog-",children:[(0,t.jsx)(n.a,{href:"/objects/webhook-event-log",children:(0,t.jsx)(n.code,{children:"WebhookEventLog"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"A WebhookEvent Log for webhooks service.\nIt describes the response and call context for webhook endpoints\nfor a specific event."})]})}function v(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>d});var t=o(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);