"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30933],{76493:(e,s,o)=>{o.r(s),o.d(s,{Badge:()=>h,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>b,assets:()=>r,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=o(85893),t=o(11151),c=o(67294);const i={id:"webhook-subscription",title:"WebhookSubscription"},a=void 0,d={id:"objects/webhook-subscription",title:"WebhookSubscription",description:"A Subscription to the webhooks service.",source:"@site/docs/objects/webhook-subscription.mdx",sourceDirName:"objects",slug:"/objects/webhook-subscription",permalink:"/objects/webhook-subscription",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/webhook-subscription.mdx",tags:[],version:"current",frontMatter:{id:"webhook-subscription",title:"WebhookSubscription"},sidebar:"schemaSidebar",previous:{title:"WebhookSubscriptionSuccessPayload",permalink:"/objects/webhook-subscription-success-payload"},next:{title:"WrongValueProvidedRejection",permalink:"/objects/wrong-value-provided-rejection"}},r={},l=()=>{const e={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const s={a:"a",...(0,t.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>WebhookSubscription.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionidid--",level:4},{value:'<code>WebhookSubscription.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionlabelstring--",level:4},{value:'<code>WebhookSubscription.<b>endpoint</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionendpointstring--",level:4},{value:'<code>WebhookSubscription.<b>secret</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionsecretstring-",level:4},{value:'<code>WebhookSubscription.<b>eventTypes</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptioneventtypesstring--",level:4},{value:'<code>WebhookSubscription.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptioncreatedatdatetime--",level:4},{value:'<code>WebhookSubscription.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionupdatedatdatetime--",level:4},{value:'<code>WebhookSubscription.<b>statusInfo</b></code><Bullet></Bullet><code>WebhookSubscriptionStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionstatusinfowebhooksubscriptionstatusinfo--",level:4},{value:'<code>WebhookSubscription.<b>kpi</b></code><Bullet></Bullet><code>WebhookSubscriptionKpi</code> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionkpiwebhooksubscriptionkpi-",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:s,children:o,startOpen:i=!1})=>{const a={details:"details",summary:"summary",...(0,t.a)()},[d,r]=(0,c.useState)(i);return(0,n.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&o]})};function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"A Subscription to the webhooks service.\nIt describes the registration of a callback url (the endpoint)\nand a list of event types the client wants to be notified of."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type WebhookSubscription {\n  id: ID!\n  label: String!\n  endpoint: String!\n  secret: String\n  eventTypes: [String!]!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  statusInfo: WebhookSubscriptionStatusInfo!\n  kpi: WebhookSubscriptionKpi\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptionidid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Unique identifier of the Subscription"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptionlabelstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"label"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"A client provided short description of the Subscription"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptionendpointstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"endpoint"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"The callback URL to be used for POSTing events"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptionsecretstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"secret"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"The optional secret to secure incoming webhook calls. We recommend a UUID-4 to be future proof.\n(max 36 characters)"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptioneventtypesstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"eventTypes"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"[String!]!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"The types of subscribed events\nA simple list of event names as strings"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptioncreatedatdatetime--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Date the Subscription has been created"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptionupdatedatdatetime--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Last date the Subscription has been updated,\nexcept for state changes"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptionstatusinfowebhooksubscriptionstatusinfo--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"statusInfo"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/interfaces/webhook-subscription-status-info",children:(0,n.jsx)(s.code,{children:"WebhookSubscriptionStatusInfo!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"The current state of the Subscription"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"webhooksubscriptionkpiwebhooksubscriptionkpi-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscription.",(0,n.jsx)("b",{children:"kpi"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/objects/webhook-subscription-kpi",children:(0,n.jsx)(s.code,{children:"WebhookSubscriptionKpi"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"KPI data about the subscription (7 last days)"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/objects/webhook-event-log",children:(0,n.jsx)(s.code,{children:"WebhookEventLog"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(s.a,{href:"/objects/webhook-subscription-success-payload",children:(0,n.jsx)(s.code,{children:"WebhookSubscriptionSuccessPayload"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},11151:(e,s,o)=>{o.d(s,{Z:()=>a,a:()=>i});var n=o(67294);const t={},c=n.createContext(t);function i(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);