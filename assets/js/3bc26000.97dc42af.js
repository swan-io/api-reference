"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[22417],{61330:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>r,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var a=n(85893),s=n(11151),d=n(67294);const o={id:"supporting-document-validated-status-info",title:"SupportingDocumentValidatedStatusInfo"},i=void 0,c={id:"objects/supporting-document-validated-status-info",title:"SupportingDocumentValidatedStatusInfo",description:"Supporting document with Validated status",source:"@site/docs/objects/supporting-document-validated-status-info.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-validated-status-info",permalink:"/objects/supporting-document-validated-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-validated-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-validated-status-info",title:"SupportingDocumentValidatedStatusInfo"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentUploadedStatusInfo",permalink:"/objects/supporting-document-uploaded-status-info"},next:{title:"SupportingDocumentWaitingForUploadStatusInfo",permalink:"/objects/supporting-document-waiting-for-upload-status-info"}},l={},r=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>SupportingDocumentValidatedStatusInfo.<b>status</b></code><Bullet></Bullet><code>SupportingDocumentStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentvalidatedstatusinfostatussupportingdocumentstatus--",level:4},{value:'<code>SupportingDocumentValidatedStatusInfo.<b>downloadUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentvalidatedstatusinfodownloadurlstring--",level:4},{value:'<code>SupportingDocumentValidatedStatusInfo.<b>validatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentvalidatedstatusinfovalidatedatdatetime--",level:4},{value:'<code>SupportingDocumentValidatedStatusInfo.<b>filename</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentvalidatedstatusinfofilenamestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentstatusinfo-",level:4}],m=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,s.a)()},[c,l]=(0,d.useState)(o);return(0,a.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Supporting document with Validated status"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type SupportingDocumentValidatedStatusInfo implements SupportingDocumentStatusInfo {\n  status: SupportingDocumentStatus!\n  downloadUrl: String!\n  validatedAt: DateTime!\n  filename: String!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"supportingdocumentvalidatedstatusinfostatussupportingdocumentstatus--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentValidatedStatusInfo.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(t.a,{href:"/enums/supporting-document-status",children:(0,a.jsx)(t.code,{children:"SupportingDocumentStatus!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"When the document has been uploaded and verified by Swan"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"supportingdocumentvalidatedstatusinfodownloadurlstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentValidatedStatusInfo.",(0,a.jsx)("b",{children:"downloadUrl"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"An unique URL and one-time URL to download the Document"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"supportingdocumentvalidatedstatusinfovalidatedatdatetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentValidatedStatusInfo.",(0,a.jsx)("b",{children:"validatedAt"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Date on which the supporting document has been validated"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"supportingdocumentvalidatedstatusinfofilenamestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentValidatedStatusInfo.",(0,a.jsx)("b",{children:"filename"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Original file name"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"supportingdocumentstatusinfo-",children:[(0,a.jsx)(t.a,{href:"/interfaces/supporting-document-status-info",children:(0,a.jsx)(t.code,{children:"SupportingDocumentStatusInfo"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(67294);const s={},d=a.createContext(s);function o(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);