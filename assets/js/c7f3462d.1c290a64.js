"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91381],{32349:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=a(85893),s=a(11151),r=a(67294);const c={id:"rejected-merchant-profile-status-info",title:"RejectedMerchantProfileStatusInfo"},o=void 0,d={id:"objects/rejected-merchant-profile-status-info",title:"RejectedMerchantProfileStatusInfo",description:"RejectedMerchantProfileStatusInfo",source:"@site/docs/objects/rejected-merchant-profile-status-info.mdx",sourceDirName:"objects",slug:"/objects/rejected-merchant-profile-status-info",permalink:"/objects/rejected-merchant-profile-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/rejected-merchant-profile-status-info.mdx",tags:[],version:"current",frontMatter:{id:"rejected-merchant-profile-status-info",title:"RejectedMerchantProfileStatusInfo"},sidebar:"schemaSidebar",previous:{title:"RejectedMerchantPaymentMethodStatusInfo",permalink:"/objects/rejected-merchant-payment-method-status-info"},next:{title:"RejectedTransactionStatusInfo",permalink:"/objects/rejected-transaction-status-info"}},l={},i=()=>{const e={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,s.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RejectedMerchantProfileStatusInfo.<b>status</b></code><Bullet></Bullet><code>MerchantProfileStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rejectedmerchantprofilestatusinfostatusmerchantprofilestatus--",level:4},{value:'<code>RejectedMerchantProfileStatusInfo.<b>rejectedAt</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rejectedmerchantprofilestatusinforejectedatdate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantProfileStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofilestatusinfo-",level:4}],j=({dataOpen:e,dataClose:t,children:a,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,s.a)()},[d,l]=(0,r.useState)(c);return(0,n.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&a]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"RejectedMerchantProfileStatusInfo"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type RejectedMerchantProfileStatusInfo implements MerchantProfileStatusInfo {\n  status: MerchantProfileStatus!\n  rejectedAt: Date!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"rejectedmerchantprofilestatusinfostatusmerchantprofilestatus--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RejectedMerchantProfileStatusInfo.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/enums/merchant-profile-status",children:(0,n.jsx)(t.code,{children:"MerchantProfileStatus!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"rejectedmerchantprofilestatusinforejectedatdate--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RejectedMerchantProfileStatusInfo.",(0,n.jsx)("b",{children:"rejectedAt"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/scalars/date",children:(0,n.jsx)(t.code,{children:"Date!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.h4,{id:"merchantprofilestatusinfo-",children:[(0,n.jsx)(t.a,{href:"/interfaces/merchant-profile-status-info",children:(0,n.jsx)(t.code,{children:"MerchantProfileStatusInfo"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Merchant Profile Status Information"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>c});var n=a(67294);const s={},r=n.createContext(s);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);