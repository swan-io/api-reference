"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73797],{59195:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=n(85893),a=n(11151),c=n(67294);const l={id:"legal-document-status",title:"LegalDocumentStatus"},o=void 0,i={id:"enums/legal-document-status",title:"LegalDocumentStatus",description:"No description",source:"@site/docs/enums/legal-document-status.mdx",sourceDirName:"enums",slug:"/enums/legal-document-status",permalink:"/enums/legal-document-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/legal-document-status.mdx",tags:[],version:"current",frontMatter:{id:"legal-document-status",title:"LegalDocumentStatus"},sidebar:"schemaSidebar",previous:{title:"Language",permalink:"/enums/language"},next:{title:"LegalDocumentType",permalink:"/enums/legal-document-type"}},r={},d=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>LegalDocumentStatus.<b>Upcoming</b></code>",id:"legaldocumentstatusupcoming",level:4},{value:"<code>LegalDocumentStatus.<b>Active</b></code>",id:"legaldocumentstatusactive",level:4},{value:"<code>LegalDocumentStatus.<b>Inactive</b></code>",id:"legaldocumentstatusinactive",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,a.a)()},[i,r]=(0,c.useState)(l);return(0,s.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum LegalDocumentStatus {\n  Upcoming\n  Active\n  Inactive\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"legaldocumentstatusupcoming",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentStatus.",(0,s.jsx)("b",{children:"Upcoming"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"When the LegalDocument will be the next active on the account"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"legaldocumentstatusactive",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentStatus.",(0,s.jsx)("b",{children:"Active"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"When the LegalDocument is currently active on the account"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"legaldocumentstatusinactive",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentStatus.",(0,s.jsx)("b",{children:"Inactive"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"When the LegalDocument is no more active on the account"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/objects/legal-document-active-status-info",children:(0,s.jsx)(t.code,{children:"LegalDocumentActiveStatusInfo"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/objects/legal-document-inactive-status-info",children:(0,s.jsx)(t.code,{children:"LegalDocumentInactiveStatusInfo"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/inputs/legal-documents-filter-input",children:(0,s.jsx)(t.code,{children:"LegalDocumentsFilterInput"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/interfaces/legal-document-status-info",children:(0,s.jsx)(t.code,{children:"LegalDocumentStatusInfo"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"interface"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/objects/legal-document-upcoming-status-info",children:(0,s.jsx)(t.code,{children:"LegalDocumentUpcomingStatusInfo"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var s=n(67294);const a={},c=s.createContext(a);function l(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);