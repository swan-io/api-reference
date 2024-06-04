"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6552],{98929:(e,s,o)=>{o.r(s),o.d(s,{Badge:()=>b,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>u});var n=o(85893),a=o(11151),t=o(67294);const d={id:"probe-webhook-endpoint-success-payload",title:"ProbeWebhookEndpointSuccessPayload"},c=void 0,r={id:"objects/probe-webhook-endpoint-success-payload",title:"ProbeWebhookEndpointSuccessPayload",description:"No description",source:"@site/docs/objects/probe-webhook-endpoint-success-payload.mdx",sourceDirName:"objects",slug:"/objects/probe-webhook-endpoint-success-payload",permalink:"/objects/probe-webhook-endpoint-success-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/probe-webhook-endpoint-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"probe-webhook-endpoint-success-payload",title:"ProbeWebhookEndpointSuccessPayload"},sidebar:"schemaSidebar",previous:{title:"PrintPhysicalCardSuccessPayload",permalink:"/objects/print-physical-card-success-payload"},next:{title:"ProjectAlreadyHasSubscriptionRejection",permalink:"/objects/project-already-has-subscription-rejection"}},l={},i=()=>{const e={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,a.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const s={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>ProbeWebhookEndpointSuccessPayload.<b>eventId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"probewebhookendpointsuccesspayloadeventidid--",level:4},{value:'<code>ProbeWebhookEndpointSuccessPayload.<b>responseStatus</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"probewebhookendpointsuccesspayloadresponsestatusint-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],h=({dataOpen:e,dataClose:s,children:o,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[r,l]=(0,t.useState)(d);return(0,n.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&o]})};function y(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type ProbeWebhookEndpointSuccessPayload {\n  eventId: ID!\n  responseStatus: Int\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"probewebhookendpointsuccesspayloadeventidid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProbeWebhookEndpointSuccessPayload.",(0,n.jsx)("b",{children:"eventId"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"probewebhookendpointsuccesspayloadresponsestatusint-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProbeWebhookEndpointSuccessPayload.",(0,n.jsx)("b",{children:"responseStatus"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/scalars/int",children:(0,n.jsx)(s.code,{children:"Int"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/unions/probe-webhook-endpoint-payload",children:(0,n.jsx)(s.code,{children:"ProbeWebhookEndpointPayload"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},11151:(e,s,o)=>{o.d(s,{Z:()=>c,a:()=>d});var n=o(67294);const a={},t=n.createContext(a);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);