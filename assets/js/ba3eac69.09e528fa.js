"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84200],{26299:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>h,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var s=a(85893),t=a(11151),c=a(67294);const o={id:"cancel-consent-payload",title:"CancelConsentPayload"},l=void 0,d={id:"unions/cancel-consent-payload",title:"CancelConsentPayload",description:"Payload of the cancelConsent mutation",source:"@site/docs/unions/cancel-consent-payload.mdx",sourceDirName:"unions",slug:"/unions/cancel-consent-payload",permalink:"/unions/cancel-consent-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/cancel-consent-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-consent-payload",title:"CancelConsentPayload"},sidebar:"schemaSidebar",previous:{title:"CancelCardPayload",permalink:"/unions/cancel-card-payload"},next:{title:"CancelDigitalCardPayload",permalink:"/unions/cancel-digital-card-payload"}},r={},i=()=>{const e={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>CancelConsentPayload.<b>CancelConsentSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"cancelconsentpayloadcancelconsentsuccesspayload-",level:4},{value:'<code>CancelConsentPayload.<b>ConsentNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"cancelconsentpayloadconsentnotfoundrejection-",level:4},{value:'<code>CancelConsentPayload.<b>NotReachableConsentStatusRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"cancelconsentpayloadnotreachableconsentstatusrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],y=({dataOpen:e,dataClose:n,children:a,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,t.a)()},[d,r]=(0,c.useState)(o);return(0,s.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&a]})};function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Payload of the ",(0,s.jsx)(n.code,{children:"cancelConsent"})," mutation"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"union CancelConsentPayload = CancelConsentSuccessPayload | ConsentNotFoundRejection | NotReachableConsentStatusRejection\n"})}),"\n",(0,s.jsx)(n.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,s.jsxs)(n.h4,{id:"cancelconsentpayloadcancelconsentsuccesspayload-",children:[(0,s.jsx)(n.a,{href:"/objects/cancel-consent-success-payload",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelConsentPayload.",(0,s.jsx)("b",{children:"CancelConsentSuccessPayload"})]})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Success payload of the ",(0,s.jsx)(n.code,{children:"cancelConsent"})," mutation"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"cancelconsentpayloadconsentnotfoundrejection-",children:[(0,s.jsx)(n.a,{href:"/objects/consent-not-found-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelConsentPayload.",(0,s.jsx)("b",{children:"ConsentNotFoundRejection"})]})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Rejection returned if a consent was not found"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"cancelconsentpayloadnotreachableconsentstatusrejection-",children:[(0,s.jsx)(n.a,{href:"/objects/not-reachable-consent-status-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelConsentPayload.",(0,s.jsx)("b",{children:"NotReachableConsentStatusRejection"})]})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Rejection returned when consent status couldn't change"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/mutations/cancel-consent",children:(0,s.jsx)(n.code,{children:"cancelConsent"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var s=a(67294);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);