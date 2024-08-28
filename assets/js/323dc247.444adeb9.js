"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[37717],{4632:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var s=n(74848),a=n(28453),d=n(96540);const r={id:"pdf-statement",title:"PdfStatement"},c=void 0,i={id:"objects/pdf-statement",title:"PdfStatement",description:"Custom information for a PDF statement",source:"@site/docs/objects/pdf-statement.mdx",sourceDirName:"objects",slug:"/objects/pdf-statement",permalink:"/objects/pdf-statement",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/pdf-statement.mdx",tags:[],version:"current",frontMatter:{id:"pdf-statement",title:"PdfStatement"},sidebar:"schemaSidebar",previous:{title:"Payment",permalink:"/objects/payment"},next:{title:"PendingConsentAccountMembershipUpdate",permalink:"/objects/pending-consent-account-membership-update"}},l={},o=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[i,l]=(0,d.useState)(r);return(0,s.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PdfStatement.<b>type</b></code><Bullet></Bullet><code>StatementType</code> <Badge class="badge badge--secondary"></Badge>',id:"pdfstatementtypestatementtype-",level:4},{value:'<code>PdfStatement.<b>url</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"pdfstatementurlstring-",level:4},{value:'<code>PdfStatement.<b>expiresAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"pdfstatementexpiresatdatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>StatementInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"statementinfo-",level:4}];function u(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Custom information for a PDF statement"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type PdfStatement implements StatementInfo {\n  type: StatementType\n  url: String\n  expiresAt: DateTime\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"pdfstatementtypestatementtype-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PdfStatement.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/enums/statement-type",children:(0,s.jsx)(t.code,{children:"StatementType"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(t.p,{children:"statement type"}),"\n",(0,s.jsxs)(t.h4,{id:"pdfstatementurlstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PdfStatement.",(0,s.jsx)("b",{children:"url"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"temporary public url on which the file can be accessed"}),"\n",(0,s.jsxs)(t.h4,{id:"pdfstatementexpiresatdatetime-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PdfStatement.",(0,s.jsx)("b",{children:"expiresAt"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/scalars/date-time",children:(0,s.jsx)(t.code,{children:"DateTime"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.p,{children:"date at which the link will not be useable anymore"}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(t.h4,{id:"statementinfo-",children:[(0,s.jsx)(t.a,{href:"/interfaces/statement-info",children:(0,s.jsx)(t.code,{children:"StatementInfo"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(t.p,{children:"Custom information for a certain type of statement"})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const a={},d=s.createContext(a);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);