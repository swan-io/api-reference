"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[82456],{14634:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>l,assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var n=s(74848),a=s(28453),o=s(96540);const d={id:"supporting-document-refused-status-info",title:"SupportingDocumentRefusedStatusInfo"},r=void 0,u={id:"objects/supporting-document-refused-status-info",title:"SupportingDocumentRefusedStatusInfo",description:"Supporting document with Refused status",source:"@site/docs/objects/supporting-document-refused-status-info.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-refused-status-info",permalink:"/objects/supporting-document-refused-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-refused-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-refused-status-info",title:"SupportingDocumentRefusedStatusInfo"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentPurpose",permalink:"/objects/supporting-document-purpose"},next:{title:"SupportingDocumentSettings",permalink:"/objects/supporting-document-settings"}},c={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:s,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,a.R)()},[u,c]=(0,o.useState)(d);return(0,n.jsxs)(r.details,{...u?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:u?e:t}),u&&s]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>SupportingDocumentRefusedStatusInfo.<b>status</b></code><Bullet></Bullet><code>SupportingDocumentStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentrefusedstatusinfostatussupportingdocumentstatus--",level:4},{value:'<code>SupportingDocumentRefusedStatusInfo.<b>refusedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentrefusedstatusinforefusedatdatetime--",level:4},{value:'<code>SupportingDocumentRefusedStatusInfo.<b>reason</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentrefusedstatusinforeasonstring--",level:4},{value:'<code>SupportingDocumentRefusedStatusInfo.<b>filename</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentrefusedstatusinfofilenamestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentstatusinfo-",level:4}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Supporting document with Refused status"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type SupportingDocumentRefusedStatusInfo implements SupportingDocumentStatusInfo {\n  status: SupportingDocumentStatus!\n  refusedAt: DateTime!\n  reason: String!\n  filename: String!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"supportingdocumentrefusedstatusinfostatussupportingdocumentstatus--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentRefusedStatusInfo.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/enums/supporting-document-status",children:(0,n.jsx)(t.code,{children:"SupportingDocumentStatus!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.p,{children:"When the document has been refused by Swan"}),"\n",(0,n.jsxs)(t.h4,{id:"supportingdocumentrefusedstatusinforefusedatdatetime--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentRefusedStatusInfo.",(0,n.jsx)("b",{children:"refusedAt"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/scalars/date-time",children:(0,n.jsx)(t.code,{children:"DateTime!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Date on which the supporting document collection has been refused"}),"\n",(0,n.jsxs)(t.h4,{id:"supportingdocumentrefusedstatusinforeasonstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentRefusedStatusInfo.",(0,n.jsx)("b",{children:"reason"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Reason why the supporting document has been refused"}),"\n",(0,n.jsxs)(t.h4,{id:"supportingdocumentrefusedstatusinfofilenamestring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentRefusedStatusInfo.",(0,n.jsx)("b",{children:"filename"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Original file name"}),"\n",(0,n.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.h4,{id:"supportingdocumentstatusinfo-",children:[(0,n.jsx)(t.a,{href:"/interfaces/supporting-document-status-info",children:(0,n.jsx)(t.code,{children:"SupportingDocumentStatusInfo"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"interface"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>r});var n=s(96540);const a={},o=n.createContext(a);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);