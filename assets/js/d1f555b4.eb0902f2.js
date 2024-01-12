"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[16154],{48720:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>j,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=n(85893),s=n(11151),a=n(67294);const o={id:"server-consent-credentials-not-valid-or-outdated-rejection",title:"ServerConsentCredentialsNotValidOrOutdatedRejection"},d=void 0,i={id:"objects/server-consent-credentials-not-valid-or-outdated-rejection",title:"ServerConsentCredentialsNotValidOrOutdatedRejection",description:"Rejection returned when signature is not valid or remote IP address is not allowed",source:"@site/docs/objects/server-consent-credentials-not-valid-or-outdated-rejection.mdx",sourceDirName:"objects",slug:"/objects/server-consent-credentials-not-valid-or-outdated-rejection",permalink:"/objects/server-consent-credentials-not-valid-or-outdated-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/server-consent-credentials-not-valid-or-outdated-rejection.mdx",tags:[],version:"current",frontMatter:{id:"server-consent-credentials-not-valid-or-outdated-rejection",title:"ServerConsentCredentialsNotValidOrOutdatedRejection"},sidebar:"schemaSidebar",previous:{title:"SEPAReceivedDirectDebitMandate",permalink:"/objects/separeceived-direct-debit-mandate"},next:{title:"ServerConsentNotAllowedForConsentOperationRejection",permalink:"/objects/server-consent-not-allowed-for-consent-operation-rejection"}},c={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const t={span:"span",...(0,s.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ServerConsentCredentialsNotValidOrOutdatedRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"serverconsentcredentialsnotvalidoroutdatedrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],m=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,s.a)()},[i,c]=(0,a.useState)(o);return(0,r.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Rejection returned when signature is not valid or remote IP address is not allowed"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"type ServerConsentCredentialsNotValidOrOutdatedRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"serverconsentcredentialsnotvalidoroutdatedrejectionmessagestring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ServerConsentCredentialsNotValidOrOutdatedRejection.",(0,r.jsx)("b",{children:"message"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(t.h4,{id:"rejection-",children:[(0,r.jsx)(t.a,{href:"/interfaces/rejection",children:(0,r.jsx)(t.code,{children:"Rejection"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/unions/grant-consent-with-server-signature-payload",children:(0,r.jsx)(t.code,{children:"GrantConsentWithServerSignaturePayload"})}),"  ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);