"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51690],{3730:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var o=t(85893),s=t(11151),r=t(67294);const i={id:"probe-webhook-endpoint-input",title:"ProbeWebhookEndpointInput"},a=void 0,d={id:"inputs/probe-webhook-endpoint-input",title:"ProbeWebhookEndpointInput",description:"Values to provide for probing a callback endpoint",source:"@site/docs/inputs/probe-webhook-endpoint-input.mdx",sourceDirName:"inputs",slug:"/inputs/probe-webhook-endpoint-input",permalink:"/inputs/probe-webhook-endpoint-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/probe-webhook-endpoint-input.mdx",tags:[],version:"current",frontMatter:{id:"probe-webhook-endpoint-input",title:"ProbeWebhookEndpointInput"},sidebar:"schemaSidebar",previous:{title:"PrintPhysicalCardInput",permalink:"/inputs/print-physical-card-input"},next:{title:"ReasonInput",permalink:"/inputs/reason-input"}},c={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.a)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ProbeWebhookEndpointInput.<b>endpoint</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"probewebhookendpointinputendpointstring--",level:4},{value:'<code>ProbeWebhookEndpointInput.<b>secret</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"probewebhookendpointinputsecretstring-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const a={details:"details",summary:"summary",...(0,s.a)()},[d,c]=(0,r.useState)(i);return(0,o.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Values to provide for probing a callback endpoint"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"input ProbeWebhookEndpointInput {\n  endpoint: String!\n  secret: String\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"probewebhookendpointinputendpointstring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProbeWebhookEndpointInput.",(0,o.jsx)("b",{children:"endpoint"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The endpoint URL the test event will be sent to\n(max 255 characters)"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"probewebhookendpointinputsecretstring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProbeWebhookEndpointInput.",(0,o.jsx)("b",{children:"secret"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"A shared secret as proof of identity"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/mutations/probe-webhook-endpoint",children:(0,o.jsx)(n.code,{children:"probeWebhookEndpoint"})}),"  ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);