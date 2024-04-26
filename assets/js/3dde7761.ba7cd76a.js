"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73153],{88960:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>t,metadata:()=>c,toc:()=>f});var o=a(85893),s=a(11151),d=a(67294);const t={id:"refund-payload",title:"RefundPayload"},r=void 0,c={id:"unions/refund-payload",title:"RefundPayload",description:"The respond body to a refund mutation",source:"@site/docs/unions/refund-payload.mdx",sourceDirName:"unions",slug:"/unions/refund-payload",permalink:"/unions/refund-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/refund-payload.mdx",tags:[],version:"current",frontMatter:{id:"refund-payload",title:"RefundPayload"},sidebar:"schemaSidebar",previous:{title:"ProbeWebhookEndpointPayload",permalink:"/unions/probe-webhook-endpoint-payload"},next:{title:"RemoveWebhookSubscriptionPayload",permalink:"/unions/remove-webhook-subscription-payload"}},l={},i=()=>{const e={span:"span",...(0,s.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.a)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},f=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>RefundPayload.<b>RefundSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"refundpayloadrefundsuccesspayload-",level:4},{value:'<code>RefundPayload.<b>RefundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"refundpayloadrefundrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],h=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const r={details:"details",summary:"summary",...(0,s.a)()},[c,l]=(0,d.useState)(t);return(0,o.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})};function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The respond body to a refund mutation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"union RefundPayload = RefundSuccessPayload | RefundRejection\n"})}),"\n",(0,o.jsx)(n.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,o.jsxs)(n.h4,{id:"refundpayloadrefundsuccesspayload-",children:[(0,o.jsx)(n.a,{href:"/objects/refund-success-payload",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundPayload.",(0,o.jsx)("b",{children:"RefundSuccessPayload"})]})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Consent generated by the refund mutation"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"refundpayloadrefundrejection-",children:[(0,o.jsx)(n.a,{href:"/objects/refund-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundPayload.",(0,o.jsx)("b",{children:"RefundRejection"})]})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Rejection returned if the transaction status is not correct for the desired action"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/mutations/refund",children:(0,o.jsx)(n.code,{children:"refund"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>t});var o=a(67294);const s={},d=o.createContext(s);function t(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);