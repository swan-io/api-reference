"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[76860],{46389:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>f});var s=n(85893),a=n(11151),c=n(67294);const o={id:"legal-document-status-info",title:"LegalDocumentStatusInfo"},l=void 0,i={id:"interfaces/legal-document-status-info",title:"LegalDocumentStatusInfo",description:"No description",source:"@site/docs/interfaces/legal-document-status-info.mdx",sourceDirName:"interfaces",slug:"/interfaces/legal-document-status-info",permalink:"/interfaces/legal-document-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/legal-document-status-info.mdx",tags:[],version:"current",frontMatter:{id:"legal-document-status-info",title:"LegalDocumentStatusInfo"},sidebar:"schemaSidebar",previous:{title:"InternationalBeneficiary",permalink:"/interfaces/international-beneficiary"},next:{title:"MerchantPaymentLinkStatusInfo",permalink:"/interfaces/merchant-payment-link-status-info"}},d={},r=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>LegalDocumentStatusInfo.<b>status</b></code><Bullet></Bullet><code>LegalDocumentStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"legaldocumentstatusinfostatuslegaldocumentstatus--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],g=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,a.a)()},[i,d]=(0,c.useState)(o);return(0,s.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"interface LegalDocumentStatusInfo {\n  status: LegalDocumentStatus!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"legaldocumentstatusinfostatuslegaldocumentstatus--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentStatusInfo.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(t.a,{href:"/enums/legal-document-status",children:(0,s.jsx)(t.code,{children:"LegalDocumentStatus!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"LegalDocument Status"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/objects/legal-document",children:(0,s.jsx)(t.code,{children:"LegalDocument"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/objects/legal-document-active-status-info",children:(0,s.jsx)(t.code,{children:"LegalDocumentActiveStatusInfo"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(r,{}),(0,s.jsx)(t.a,{href:"/objects/legal-document-inactive-status-info",children:(0,s.jsx)(t.code,{children:"LegalDocumentInactiveStatusInfo"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(r,{}),(0,s.jsx)(t.a,{href:"/objects/legal-document-upcoming-status-info",children:(0,s.jsx)(t.code,{children:"LegalDocumentUpcomingStatusInfo"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(67294);const a={},c=s.createContext(a);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);