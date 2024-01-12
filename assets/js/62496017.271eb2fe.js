"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[58004],{27519:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>j});var s=n(85893),a=n(11151),c=n(67294);const o={id:"not-reachable-consent-status-rejection",title:"NotReachableConsentStatusRejection"},r=void 0,l={id:"objects/not-reachable-consent-status-rejection",title:"NotReachableConsentStatusRejection",description:"Rejection returned when consent status couldn't change",source:"@site/docs/objects/not-reachable-consent-status-rejection.mdx",sourceDirName:"objects",slug:"/objects/not-reachable-consent-status-rejection",permalink:"/objects/not-reachable-consent-status-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/not-reachable-consent-status-rejection.mdx",tags:[],version:"current",frontMatter:{id:"not-reachable-consent-status-rejection",title:"NotReachableConsentStatusRejection"},sidebar:"schemaSidebar",previous:{title:"NotFoundRejection",permalink:"/objects/not-found-rejection"},next:{title:"NotStartedIdentificationLevelStatusInfo",permalink:"/objects/not-started-identification-level-status-info"}},d={},i=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>NotReachableConsentStatusRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"notreachableconsentstatusrejectionmessagestring--",level:4},{value:'<code>NotReachableConsentStatusRejection.<b>currentStatus</b></code><Bullet></Bullet><code>ConsentStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"notreachableconsentstatusrejectioncurrentstatusconsentstatus-",level:4},{value:'<code>NotReachableConsentStatusRejection.<b>unreachableStatus</b></code><Bullet></Bullet><code>ConsentStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"notreachableconsentstatusrejectionunreachablestatusconsentstatus-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],b=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const r={details:"details",summary:"summary",...(0,a.a)()},[l,d]=(0,c.useState)(o);return(0,s.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Rejection returned when consent status couldn't change"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type NotReachableConsentStatusRejection implements Rejection {\n  message: String!\n  currentStatus: ConsentStatus\n  unreachableStatus: ConsentStatus\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"notreachableconsentstatusrejectionmessagestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NotReachableConsentStatusRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"notreachableconsentstatusrejectioncurrentstatusconsentstatus-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NotReachableConsentStatusRejection.",(0,s.jsx)("b",{children:"currentStatus"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/enums/consent-status",children:(0,s.jsx)(t.code,{children:"ConsentStatus"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"notreachableconsentstatusrejectionunreachablestatusconsentstatus-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NotReachableConsentStatusRejection.",(0,s.jsx)("b",{children:"unreachableStatus"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/enums/consent-status",children:(0,s.jsx)(t.code,{children:"ConsentStatus"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(t.h4,{id:"rejection-",children:[(0,s.jsx)(t.a,{href:"/interfaces/rejection",children:(0,s.jsx)(t.code,{children:"Rejection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/unions/cancel-consent-payload",children:(0,s.jsx)(t.code,{children:"CancelConsentPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/unions/grant-consent-with-server-signature-payload",children:(0,s.jsx)(t.code,{children:"GrantConsentWithServerSignaturePayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const a={},c=s.createContext(a);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);