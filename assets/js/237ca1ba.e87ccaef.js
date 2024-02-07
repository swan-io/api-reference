"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70333],{56424:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>l,assets:()=>i,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>g});var s=n(85893),o=n(11151),d=n(67294);const c={id:"supporting-document",title:"SupportingDocument"},a=void 0,r={id:"objects/supporting-document",title:"SupportingDocument",description:"Supporting document used for compliance",source:"@site/docs/objects/supporting-document.mdx",sourceDirName:"objects",slug:"/objects/supporting-document",permalink:"/objects/supporting-document",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document",title:"SupportingDocument"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentWaitingForUploadStatusInfo",permalink:"/objects/supporting-document-waiting-for-upload-status-info"},next:{title:"SuspendAccountMembershipSuccessPayload",permalink:"/objects/suspend-account-membership-success-payload"}},i={},u=()=>{const e={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const t={a:"a",...(0,o.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>SupportingDocument.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentidstring--",level:4},{value:'<code>SupportingDocument.<b>statusInfo</b></code><Bullet></Bullet><code>SupportingDocumentStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentstatusinfosupportingdocumentstatusinfo--",level:4},{value:'<code>SupportingDocument.<b>supportingDocumentType</b></code><Bullet></Bullet><code>SupportingDocumentType</code> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentsupportingdocumenttypesupportingdocumenttype-",level:4},{value:'<code>SupportingDocument.<b>supportingDocumentPurpose</b></code><Bullet></Bullet><code>SupportingDocumentPurposeEnum!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentsupportingdocumentpurposesupportingdocumentpurposeenum--",level:4},{value:'<code>SupportingDocument.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcreatedatdatetime--",level:4},{value:'<code>SupportingDocument.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentupdatedatdatetime--",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const a={details:"details",summary:"summary",...(0,o.a)()},[r,i]=(0,d.useState)(c);return(0,s.jsxs)(a.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Supporting document used for compliance"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type SupportingDocument {\n  id: String!\n  statusInfo: SupportingDocumentStatusInfo!\n  supportingDocumentType: SupportingDocumentType\n  supportingDocumentPurpose: SupportingDocumentPurposeEnum!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentidstring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocument.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Unique identifier of the document"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentstatusinfosupportingdocumentstatusinfo--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocument.",(0,s.jsx)("b",{children:"statusInfo"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/interfaces/supporting-document-status-info",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatusInfo!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Supporting document status information"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentsupportingdocumenttypesupportingdocumenttype-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocument.",(0,s.jsx)("b",{children:"supportingDocumentType"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/enums/supporting-document-type",children:(0,s.jsx)(t.code,{children:"SupportingDocumentType"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Type of supporting Document"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentsupportingdocumentpurposesupportingdocumentpurposeenum--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocument.",(0,s.jsx)("b",{children:"supportingDocumentPurpose"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/enums/supporting-document-purpose-enum",children:(0,s.jsx)(t.code,{children:"SupportingDocumentPurposeEnum!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Purpose of supporting document"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentcreatedatdatetime--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocument.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/scalars/date-time",children:(0,s.jsx)(t.code,{children:"DateTime!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Created date"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"supportingdocumentupdatedatdatetime--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocument.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/scalars/date-time",children:(0,s.jsx)(t.code,{children:"DateTime!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Updated date"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/objects/supporting-document-collection",children:(0,s.jsx)(t.code,{children:"SupportingDocumentCollection"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-status-does-not-allow-deletion-rejection",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatusDoesNotAllowDeletionRejection"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-status-does-not-allow-update-rejection",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatusDoesNotAllowUpdateRejection"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/objects/update-supporting-document-success-payload",children:(0,s.jsx)(t.code,{children:"UpdateSupportingDocumentSuccessPayload"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var s=n(67294);const o={},d=s.createContext(o);function c(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);