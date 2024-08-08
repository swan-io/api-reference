"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[98169],{20594:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>m});var o=n(74848),s=n(28453),c=n(96540);const l={id:"supporting-document-upload-not-allowed-rejection",title:"SupportingDocumentUploadNotAllowedRejection"},d=void 0,a={id:"objects/supporting-document-upload-not-allowed-rejection",title:"SupportingDocumentUploadNotAllowedRejection",description:"Rejection returned if the supporting document collection cannot receive supporting documents anymore",source:"@site/docs/objects/supporting-document-upload-not-allowed-rejection.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-upload-not-allowed-rejection",permalink:"/objects/supporting-document-upload-not-allowed-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-upload-not-allowed-rejection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-upload-not-allowed-rejection",title:"SupportingDocumentUploadNotAllowedRejection"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentUploadInfo",permalink:"/objects/supporting-document-upload-info"},next:{title:"SupportingDocumentUploadedStatusInfo",permalink:"/objects/supporting-document-uploaded-status-info"}},i={},r=()=>{const e={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[a,i]=(0,c.useState)(l);return(0,o.jsxs)(d.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>SupportingDocumentUploadNotAllowedRejection.<b>supportingDocumentCollectionStatus</b></code><Bullet></Bullet><code>SupportingDocumentCollectionStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentuploadnotallowedrejectionsupportingdocumentcollectionstatussupportingdocumentcollectionstatus--",level:4},{value:'<code>SupportingDocumentUploadNotAllowedRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentuploadnotallowedrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Rejection returned if the supporting document collection cannot receive supporting documents anymore"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"type SupportingDocumentUploadNotAllowedRejection implements Rejection {\n  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus!\n  message: String!\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"supportingdocumentuploadnotallowedrejectionsupportingdocumentcollectionstatussupportingdocumentcollectionstatus--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentUploadNotAllowedRejection.",(0,o.jsx)("b",{children:"supportingDocumentCollectionStatus"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(t.a,{href:"/enums/supporting-document-collection-status",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionStatus!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsxs)(t.h4,{id:"supportingdocumentuploadnotallowedrejectionmessagestring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentUploadNotAllowedRejection.",(0,o.jsx)("b",{children:"message"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(t.a,{href:"/scalars/string",children:(0,o.jsx)(t.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsxs)(t.h4,{id:"rejection-",children:[(0,o.jsx)(t.a,{href:"/interfaces/rejection",children:(0,o.jsx)(t.code,{children:"Rejection"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,o.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/unions/generate-supporting-document-upload-url-payload",children:(0,o.jsx)(t.code,{children:"GenerateSupportingDocumentUploadUrlPayload"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"union"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var o=n(96540);const s={},c=o.createContext(s);function l(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);