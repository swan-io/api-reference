"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[63422],{58002:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=n(85893),i=n(11151),t=n(67294);const a={id:"webhook-subscription-payload",title:"WebhookSubscriptionPayload"},r=void 0,c={id:"unions/webhook-subscription-payload",title:"WebhookSubscriptionPayload",description:"No description",source:"@site/docs/unions/webhook-subscription-payload.mdx",sourceDirName:"unions",slug:"/unions/webhook-subscription-payload",permalink:"/unions/webhook-subscription-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/webhook-subscription-payload.mdx",tags:[],version:"current",frontMatter:{id:"webhook-subscription-payload",title:"WebhookSubscriptionPayload"},sidebar:"schemaSidebar",previous:{title:"ViewPhysicalCardPinPayload",permalink:"/unions/view-physical-card-pin-payload"},next:{title:"WebhookUnsubscribePayload",permalink:"/unions/webhook-unsubscribe-payload"}},d={},l=()=>{const e={span:"span",...(0,i.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const o={a:"a",...(0,i.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const o={span:"span",...(0,i.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.span,{className:e.class,children:e.text})})},h=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>WebhookSubscriptionPayload.<b>WebhookSubscriptionSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionpayloadwebhooksubscriptionsuccesspayload-",level:4},{value:'<code>WebhookSubscriptionPayload.<b>WebhookSubscriptionNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionpayloadwebhooksubscriptionnotfoundrejection-",level:4},{value:'<code>WebhookSubscriptionPayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionpayloadinternalerrorrejection-",level:4},{value:'<code>WebhookSubscriptionPayload.<b>InvalidArgumentRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"webhooksubscriptionpayloadinvalidargumentrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=({dataOpen:e,dataClose:o,children:n,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,i.a)()},[c,d]=(0,t.useState)(a);return(0,s.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:o}),c&&n]})};function j(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"No description"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-graphql",children:"union WebhookSubscriptionPayload = WebhookSubscriptionSuccessPayload | WebhookSubscriptionNotFoundRejection | InternalErrorRejection | InvalidArgumentRejection\n"})}),"\n",(0,s.jsx)(o.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,s.jsxs)(o.h4,{id:"webhooksubscriptionpayloadwebhooksubscriptionsuccesspayload-",children:[(0,s.jsx)(o.a,{href:"/objects/webhook-subscription-success-payload",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscriptionPayload.",(0,s.jsx)("b",{children:"WebhookSubscriptionSuccessPayload"})]})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(o.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(o.h4,{id:"webhooksubscriptionpayloadwebhooksubscriptionnotfoundrejection-",children:[(0,s.jsx)(o.a,{href:"/objects/webhook-subscription-not-found-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscriptionPayload.",(0,s.jsx)("b",{children:"WebhookSubscriptionNotFoundRejection"})]})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Rejection returned when Webhook Subscription is not found"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhooksubscriptionpayloadinternalerrorrejection-",children:[(0,s.jsx)(o.a,{href:"/objects/internal-error-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscriptionPayload.",(0,s.jsx)("b",{children:"InternalErrorRejection"})]})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Rejection returned on unexpected server error"}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"webhooksubscriptionpayloadinvalidargumentrejection-",children:[(0,s.jsx)(o.a,{href:"/objects/invalid-argument-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WebhookSubscriptionPayload.",(0,s.jsx)("b",{children:"InvalidArgumentRejection"})]})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Rejection returned on invalid argument error"}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/mutations/add-webhook-subscription",children:(0,s.jsx)(o.code,{children:"addWebhookSubscription"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function y(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>a});var s=n(67294);const i={},t=s.createContext(i);function a(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);