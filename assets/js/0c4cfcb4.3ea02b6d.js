"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[1258],{10342:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>b,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>l,default:()=>j,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var s=n(85893),t=n(11151),d=n(67294);const a={id:"webhook-event-log",title:"WebhookEventLog"},l=void 0,c={id:"objects/webhook-event-log",title:"WebhookEventLog",description:"A WebhookEvent Log for webhooks service.",source:"@site/docs/objects/webhook-event-log.mdx",sourceDirName:"objects",slug:"/objects/webhook-event-log",permalink:"/objects/webhook-event-log",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/webhook-event-log.mdx",tags:[],version:"current",frontMatter:{id:"webhook-event-log",title:"WebhookEventLog"},sidebar:"schemaSidebar",previous:{title:"WebhookEventLogNotFoundRejection",permalink:"/objects/webhook-event-log-not-found-rejection"},next:{title:"WebhookEventLogsConnection",permalink:"/objects/webhook-event-logs-connection"}},r={},i=()=>{const e={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const o={a:"a",...(0,t.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const o={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>WebhookEventLog.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogidid--",level:4},{value:'<code>WebhookEventLog.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogcreatedatdatetime--",level:4},{value:'<code>WebhookEventLog.<b>eventId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogeventidid--",level:4},{value:'<code>WebhookEventLog.<b>eventDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogeventdatedatetime--",level:4},{value:'<code>WebhookEventLog.<b>eventType</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogeventtypestring--",level:4},{value:'<code>WebhookEventLog.<b>resourceId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogresourceidid--",level:4},{value:'<code>WebhookEventLog.<b>duration</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogdurationint--",level:4},{value:'<code>WebhookEventLog.<b>requestPayload</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogrequestpayloadstring--",level:4},{value:'<code>WebhookEventLog.<b>responsePayload</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogresponsepayloadstring-",level:4},{value:'<code>WebhookEventLog.<b>statusCode</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogstatuscodeint-",level:4},{value:'<code>WebhookEventLog.<b>statusText</b></code><Bullet></Bullet><code>StatusText</code> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogstatustextstatustext-",level:4},{value:'<code>WebhookEventLog.<b>webhookSubscription</b></code><Bullet></Bullet><code>WebhookSubscription</code> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogwebhooksubscriptionwebhooksubscription-",level:4},{value:'<code>WebhookEventLog.<b>retryCount</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogretrycountint-",level:4},{value:'<code>WebhookEventLog.<b>webhookSubscriptionLabel</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogwebhooksubscriptionlabelstring-",level:4},{value:'<code>WebhookEventLog.<b>webhookSubscriptionEndpoint</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"webhookeventlogwebhooksubscriptionendpointstring-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:o,children:n,startOpen:a=!1})=>{const l={details:"details",summary:"summary",...(0,t.a)()},[c,r]=(0,d.useState)(a);return(0,s.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:o}),c&&n]})};function u(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"A WebhookEvent Log for webhooks service.\nIt describes the response and call context for webhook endpoints\nfor a specific event."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-graphql",children:"type WebhookEventLog {\n  id: ID!\n  createdAt: DateTime!\n  eventId: ID!\n  eventDate: DateTime!\n  eventType: String!\n  resourceId: ID!\n  duration: Int!\n  requestPayload: String!\n  responsePayload: String\n  statusCode: Int\n  statusText: StatusText\n  webhookSubscription: WebhookSubscription\n  retryCount: Int\n  webhookSubscriptionLabel: String\n  webhookSubscriptionEndpoint: String\n}\n"})}),"\n",(0,s.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogidid--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/id",children:(0,s.jsx)(o.code,{children:"ID!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Unique identifier of the EventLog"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogcreatedatdatetime--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/date-time",children:(0,s.jsx)(o.code,{children:"DateTime!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Date the EventLog has been created"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogeventidid--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"eventId"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/id",children:(0,s.jsx)(o.code,{children:"ID!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Unique identifier of the event that triggered this eventLog"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogeventdatedatetime--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"eventDate"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/date-time",children:(0,s.jsx)(o.code,{children:"DateTime!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Date the Event has been generated"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogeventtypestring--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"eventType"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/string",children:(0,s.jsx)(o.code,{children:"String!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"The type of the triggering event"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogresourceidid--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"resourceId"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/id",children:(0,s.jsx)(o.code,{children:"ID!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Unique identifier linked of the resource carried by the Event"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogdurationint--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"duration"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/int",children:(0,s.jsx)(o.code,{children:"Int!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Duration of the callback in MS"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogrequestpayloadstring--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"requestPayload"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/string",children:(0,s.jsx)(o.code,{children:"String!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Request payload send to callback in string format, jsonable."}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogresponsepayloadstring-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"responsePayload"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/string",children:(0,s.jsx)(o.code,{children:"String"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Response payload get by the callback in string format, jsonable."}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogstatuscodeint-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"statusCode"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/int",children:(0,s.jsx)(o.code,{children:"Int"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"The callback response status in number format."}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogstatustextstatustext-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"statusText"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/enums/status-text",children:(0,s.jsx)(o.code,{children:"StatusText"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"The callback response status in text format."}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogwebhooksubscriptionwebhooksubscription-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"webhookSubscription"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/objects/webhook-subscription",children:(0,s.jsx)(o.code,{children:"WebhookSubscription"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"The webhook that triggered the event."}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogretrycountint-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"retryCount"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/int",children:(0,s.jsx)(o.code,{children:"Int"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Rank of this retry"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogwebhooksubscriptionlabelstring-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"webhookSubscriptionLabel"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/string",children:(0,s.jsx)(o.code,{children:"String"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Label of the associated subscription (inherited)\nThis holds the label value of when the log was created, whereas\nwebhookSubscription.label holds the current value of the label\n(it may have changed)."}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhookeventlogwebhooksubscriptionendpointstring-",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookEventLog.",(0,s.jsx)("b",{children:"webhookSubscriptionEndpoint"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/scalars/string",children:(0,s.jsx)(o.code,{children:"String"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Endpoint of the associated subscription (inherited)\nThis holds the endpoint value of when the log was created, whereas\nwebhookSubscription.endpoint holds the current value of the endpoint\n(it may have changed)."}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/queries/webhook-event-log",children:(0,s.jsx)(o.code,{children:"webhookEventLog"})}),"  ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,s.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/objects/webhook-event-logs-edge",children:(0,s.jsx)(o.code,{children:"WebhookEventLogsEdge"})}),"  ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>a});var s=n(67294);const t={},d=s.createContext(t);function a(e){const o=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(d.Provider,{value:o},e.children)}}}]);