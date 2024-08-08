"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[11455],{27666:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var o=n(74848),r=n(28453),s=n(96540);const d={id:"report-document",title:"ReportDocument"},c=void 0,a={id:"objects/report-document",title:"ReportDocument",description:"The document corresponding to a identification report",source:"@site/docs/objects/report-document.mdx",sourceDirName:"objects",slug:"/objects/report-document",permalink:"/objects/report-document",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/report-document.mdx",tags:[],version:"current",frontMatter:{id:"report-document",title:"ReportDocument"},sidebar:"schemaSidebar",previous:{title:"ReportDocumentFile",permalink:"/objects/report-document-file"},next:{title:"ReportExchangeRate",permalink:"/objects/report-exchange-rate"}},i={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,r.R)()},[a,i]=(0,s.useState)(d);return(0,o.jsxs)(c.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ReportDocument.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reportdocumentidstring--",level:4},{value:'<code>ReportDocument.<b>type</b></code><Bullet></Bullet><code>DocumentType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reportdocumenttypedocumenttype--",level:4},{value:'<code>ReportDocument.<b>files</b></code><Bullet></Bullet><code>[ReportDocumentFile!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reportdocumentfilesreportdocumentfile--",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The document corresponding to a identification report"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"type ReportDocument {\n  id: String!\n  type: DocumentType!\n  files: [ReportDocumentFile!]!\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"reportdocumentidstring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ReportDocument.",(0,o.jsx)("b",{children:"id"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(t.a,{href:"/scalars/string",children:(0,o.jsx)(t.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(t.p,{children:"Unique identifier of the report document"}),"\n",(0,o.jsxs)(t.h4,{id:"reportdocumenttypedocumenttype--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ReportDocument.",(0,o.jsx)("b",{children:"type"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(t.a,{href:"/enums/document-type",children:(0,o.jsx)(t.code,{children:"DocumentType!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsx)(t.p,{children:"The type of the document"}),"\n",(0,o.jsxs)(t.h4,{id:"reportdocumentfilesreportdocumentfile--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ReportDocument.",(0,o.jsx)("b",{children:"files"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(t.a,{href:"/objects/report-document-file",children:(0,o.jsx)(t.code,{children:"[ReportDocumentFile!]!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(t.p,{children:"List of the associated files"}),"\n",(0,o.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/unions/identification-document",children:(0,o.jsx)(t.code,{children:"IdentificationDocument"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function d(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);