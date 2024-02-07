"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62511],{3588:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>r,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>g});var s=n(85893),o=n(11151),a=n(67294);const d={id:"supporting-document-uploaded-status-info",title:"SupportingDocumentUploadedStatusInfo"},c=void 0,i={id:"objects/supporting-document-uploaded-status-info",title:"SupportingDocumentUploadedStatusInfo",description:"Supporting document with Uploaded status",source:"@site/docs/objects/supporting-document-uploaded-status-info.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-uploaded-status-info",permalink:"/objects/supporting-document-uploaded-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-uploaded-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-uploaded-status-info",title:"SupportingDocumentUploadedStatusInfo"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentUploadNotAllowedRejection",permalink:"/objects/supporting-document-upload-not-allowed-rejection"},next:{title:"SupportingDocumentValidatedStatusInfo",permalink:"/objects/supporting-document-validated-status-info"}},l={},r=()=>{const e={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,o.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>SupportingDocumentUploadedStatusInfo.<b>status</b></code><Bullet></Bullet><code>SupportingDocumentStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentuploadedstatusinfostatussupportingdocumentstatus--",level:4},{value:'<code>SupportingDocumentUploadedStatusInfo.<b>downloadUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentuploadedstatusinfodownloadurlstring--",level:4},{value:'<code>SupportingDocumentUploadedStatusInfo.<b>filename</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentuploadedstatusinfofilenamestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentstatusinfo-",level:4}],m=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,o.a)()},[i,l]=(0,a.useState)(d);return(0,s.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Supporting document with Uploaded status"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type SupportingDocumentUploadedStatusInfo implements SupportingDocumentStatusInfo {\n  status: SupportingDocumentStatus!\n  downloadUrl: String!\n  filename: String!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentuploadedstatusinfostatussupportingdocumentstatus--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentUploadedStatusInfo.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(t.a,{href:"/enums/supporting-document-status",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatus!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"When the document has been uploaded but not verified by Swan yet"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentuploadedstatusinfodownloadurlstring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentUploadedStatusInfo.",(0,s.jsx)("b",{children:"downloadUrl"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(t.a,{href:"/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"An unique URL and one-time URL to download the Document"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentuploadedstatusinfofilenamestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentUploadedStatusInfo.",(0,s.jsx)("b",{children:"filename"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(t.a,{href:"/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Original file name"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentstatusinfo-",children:[(0,s.jsx)(t.a,{href:"/interfaces/supporting-document-status-info",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatusInfo"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>d});var s=n(67294);const o={},a=s.createContext(o);function d(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);