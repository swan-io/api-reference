"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[67977],{29829:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>a,default:()=>j,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var s=n(85893),r=n(11151),i=n(67294);const t={id:"remove-webhook-subscription-payload",title:"RemoveWebhookSubscriptionPayload"},a=void 0,c={id:"unions/remove-webhook-subscription-payload",title:"RemoveWebhookSubscriptionPayload",description:"No description",source:"@site/docs/unions/remove-webhook-subscription-payload.mdx",sourceDirName:"unions",slug:"/unions/remove-webhook-subscription-payload",permalink:"/unions/remove-webhook-subscription-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/remove-webhook-subscription-payload.mdx",tags:[],version:"current",frontMatter:{id:"remove-webhook-subscription-payload",title:"RemoveWebhookSubscriptionPayload"},sidebar:"schemaSidebar",previous:{title:"RefundPayload",permalink:"/unions/refund-payload"},next:{title:"ReplayWebhookEventPayload",permalink:"/unions/replay-webhook-event-payload"}},d={},l=()=>{const e={span:"span",...(0,r.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const o={a:"a",...(0,r.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const o={span:"span",...(0,r.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.span,{className:e.class,children:e.text})})},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>RemoveWebhookSubscriptionPayload.<b>RemoveWebhookSubscriptionSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"removewebhooksubscriptionpayloadremovewebhooksubscriptionsuccesspayload-",level:4},{value:'<code>RemoveWebhookSubscriptionPayload.<b>WebhookSubscriptionNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"removewebhooksubscriptionpayloadwebhooksubscriptionnotfoundrejection-",level:4},{value:'<code>RemoveWebhookSubscriptionPayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"removewebhooksubscriptionpayloadinternalerrorrejection-",level:4},{value:'<code>RemoveWebhookSubscriptionPayload.<b>InvalidArgumentRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"removewebhooksubscriptionpayloadinvalidargumentrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],h=({dataOpen:e,dataClose:o,children:n,startOpen:t=!1})=>{const a={details:"details",summary:"summary",...(0,r.a)()},[c,d]=(0,i.useState)(t);return(0,s.jsxs)(a.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:o}),c&&n]})};function m(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"No description"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-graphql",children:"union RemoveWebhookSubscriptionPayload = RemoveWebhookSubscriptionSuccessPayload | WebhookSubscriptionNotFoundRejection | InternalErrorRejection | InvalidArgumentRejection\n"})}),"\n",(0,s.jsx)(o.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,s.jsxs)(o.h4,{id:"removewebhooksubscriptionpayloadremovewebhooksubscriptionsuccesspayload-",children:[(0,s.jsx)(o.a,{href:"/objects/remove-webhook-subscription-success-payload",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RemoveWebhookSubscriptionPayload.",(0,s.jsx)("b",{children:"RemoveWebhookSubscriptionSuccessPayload"})]})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(o.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(o.h4,{id:"removewebhooksubscriptionpayloadwebhooksubscriptionnotfoundrejection-",children:[(0,s.jsx)(o.a,{href:"/objects/webhook-subscription-not-found-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RemoveWebhookSubscriptionPayload.",(0,s.jsx)("b",{children:"WebhookSubscriptionNotFoundRejection"})]})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Rejection returned when Webhook Subscription is not found"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"removewebhooksubscriptionpayloadinternalerrorrejection-",children:[(0,s.jsx)(o.a,{href:"/objects/internal-error-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RemoveWebhookSubscriptionPayload.",(0,s.jsx)("b",{children:"InternalErrorRejection"})]})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Rejection returned on unexpected server error"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"removewebhooksubscriptionpayloadinvalidargumentrejection-",children:[(0,s.jsx)(o.a,{href:"/objects/invalid-argument-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RemoveWebhookSubscriptionPayload.",(0,s.jsx)("b",{children:"InvalidArgumentRejection"})]})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Rejection returned on invalid argument error"}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/mutations/remove-webhook-subscription",children:(0,s.jsx)(o.code,{children:"removeWebhookSubscription"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function j(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>t});var s=n(67294);const r={},i=s.createContext(r);function t(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);