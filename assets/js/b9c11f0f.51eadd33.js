"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[77319],{51510:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>u,Details:()=>j,SpecifiedBy:()=>l,assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=t(74848),c=t(28453),r=t(96540);const a={id:"funding-source-wrong-status-rejection",title:"FundingSourceWrongStatusRejection"},d=void 0,o={id:"objects/funding-source-wrong-status-rejection",title:"FundingSourceWrongStatusRejection",description:"Rejection returned when the Funding Source is not in the expected status",source:"@site/docs/objects/funding-source-wrong-status-rejection.mdx",sourceDirName:"objects",slug:"/objects/funding-source-wrong-status-rejection",permalink:"/objects/funding-source-wrong-status-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/funding-source-wrong-status-rejection.mdx",tags:[],version:"current",frontMatter:{id:"funding-source-wrong-status-rejection",title:"FundingSourceWrongStatusRejection"},sidebar:"schemaSidebar",previous:{title:"FundingSourceNotFoundRejection",permalink:"/objects/funding-source-not-found-rejection"},next:{title:"GenerateCapitalDepositDocumentUploadUrlSuccessPayload",permalink:"/objects/generate-capital-deposit-document-upload-url-success-payload"}},i={},u=()=>{const e={span:"span",...(0,c.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const n={a:"a",...(0,c.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,c.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,c.R)()},[o,i]=(0,r.useState)(a);return(0,s.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>FundingSourceWrongStatusRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"fundingsourcewrongstatusrejectionmessagestring--",level:4},{value:'<code>FundingSourceWrongStatusRejection.<b>currentStatus</b></code><Bullet></Bullet><code>FundingSourceStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"fundingsourcewrongstatusrejectioncurrentstatusfundingsourcestatus--",level:4},{value:'<code>FundingSourceWrongStatusRejection.<b>expectedStatus</b></code><Bullet></Bullet><code>FundingSourceStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"fundingsourcewrongstatusrejectionexpectedstatusfundingsourcestatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rejection returned when the Funding Source is not in the expected status"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type FundingSourceWrongStatusRejection implements Rejection {\n  message: String!\n  currentStatus: FundingSourceStatus!\n  expectedStatus: FundingSourceStatus!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"fundingsourcewrongstatusrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceWrongStatusRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"fundingsourcewrongstatusrejectioncurrentstatusfundingsourcestatus--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceWrongStatusRejection.",(0,s.jsx)("b",{children:"currentStatus"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(n.a,{href:"/enums/funding-source-status",children:(0,s.jsx)(n.code,{children:"FundingSourceStatus!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.h4,{id:"fundingsourcewrongstatusrejectionexpectedstatusfundingsourcestatus--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceWrongStatusRejection.",(0,s.jsx)("b",{children:"expectedStatus"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(n.a,{href:"/enums/funding-source-status",children:(0,s.jsx)(n.code,{children:"FundingSourceStatus!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/initiate-funding-request-payload",children:(0,s.jsx)(n.code,{children:"InitiateFundingRequestPayload"})}),"  ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"union"})]})]})}function f(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(96540);const c={},r=s.createContext(c);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);