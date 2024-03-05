"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[72656],{84205:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>b,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var t=n(85893),o=n(11151),d=n(67294);const i={id:"add-webhook-subscription-input",title:"AddWebhookSubscriptionInput"},a=void 0,r={id:"inputs/add-webhook-subscription-input",title:"AddWebhookSubscriptionInput",description:"Input values needed to add a webhook subscription",source:"@site/docs/inputs/add-webhook-subscription-input.mdx",sourceDirName:"inputs",slug:"/inputs/add-webhook-subscription-input",permalink:"/inputs/add-webhook-subscription-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/add-webhook-subscription-input.mdx",tags:[],version:"current",frontMatter:{id:"add-webhook-subscription-input",title:"AddWebhookSubscriptionInput"},sidebar:"schemaSidebar",previous:{title:"AddVirtualIbanInput",permalink:"/inputs/add-virtual-iban-input"},next:{title:"AddressInformationInput",permalink:"/inputs/address-information-input"}},c={},l=()=>{const e={span:"span",...(0,o.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,o.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const s={span:"span",...(0,o.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AddWebhookSubscriptionInput.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addwebhooksubscriptioninputlabelstring--",level:4},{value:'<code>AddWebhookSubscriptionInput.<b>endpoint</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addwebhooksubscriptioninputendpointstring--",level:4},{value:'<code>AddWebhookSubscriptionInput.<b>secret</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"addwebhooksubscriptioninputsecretstring-",level:4},{value:'<code>AddWebhookSubscriptionInput.<b>eventTypes</b></code><Bullet></Bullet><code>[ID!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addwebhooksubscriptioninputeventtypesid--",level:4},{value:'<code>AddWebhookSubscriptionInput.<b>status</b></code><Bullet></Bullet><code>WebhookSubscriptionCreationStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addwebhooksubscriptioninputstatuswebhooksubscriptioncreationstatus--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:s,children:n,startOpen:i=!1})=>{const a={details:"details",summary:"summary",...(0,o.a)()},[r,c]=(0,d.useState)(i);return(0,t.jsxs)(a.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&n]})};function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Input values needed to add a webhook subscription"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"input AddWebhookSubscriptionInput {\n  label: String!\n  endpoint: String!\n  secret: String\n  eventTypes: [ID!]!\n  status: WebhookSubscriptionCreationStatus!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"addwebhooksubscriptioninputlabelstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddWebhookSubscriptionInput.",(0,t.jsx)("b",{children:"label"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"A short descriptive label for the subscription\n(max 255 characters)"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"addwebhooksubscriptioninputendpointstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddWebhookSubscriptionInput.",(0,t.jsx)("b",{children:"endpoint"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The endpoint URL events will be sent to\n(max 255 characters)"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"addwebhooksubscriptioninputsecretstring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddWebhookSubscriptionInput.",(0,t.jsx)("b",{children:"secret"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The optional secret to secure incoming webhook calls. We recommend a UUID-4 to be future proof.\n(max 36 characters)"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"addwebhooksubscriptioninputeventtypesid--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddWebhookSubscriptionInput.",(0,t.jsx)("b",{children:"eventTypes"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/scalars/id",children:(0,t.jsx)(s.code,{children:"[ID!]!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["The types of subscribed events\nA subset of unique IDs from ",(0,t.jsx)(s.code,{children:"webhookEventTypes"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"addwebhooksubscriptioninputstatuswebhooksubscriptioncreationstatus--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddWebhookSubscriptionInput.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/enums/webhook-subscription-creation-status",children:(0,t.jsx)(s.code,{children:"WebhookSubscriptionCreationStatus!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Control if the subscription should be enabled on creation"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/mutations/add-webhook-subscription",children:(0,t.jsx)(s.code,{children:"addWebhookSubscription"})}),"  ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var t=n(67294);const o={},d=t.createContext(o);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);