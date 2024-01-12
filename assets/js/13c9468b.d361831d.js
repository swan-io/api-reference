"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[4783],{92047:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>l,assets:()=>r,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var s=n(85893),o=n(11151),d=n(67294);const a={id:"supporting-document-status",title:"SupportingDocumentStatus"},c=void 0,u={id:"enums/supporting-document-status",title:"SupportingDocumentStatus",description:"Verification status of a document",source:"@site/docs/enums/supporting-document-status.mdx",sourceDirName:"enums",slug:"/enums/supporting-document-status",permalink:"/enums/supporting-document-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/supporting-document-status.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-status",title:"SupportingDocumentStatus"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentPurposeEnum",permalink:"/enums/supporting-document-purpose-enum"},next:{title:"SupportingDocumentType",permalink:"/enums/supporting-document-type"}},r={},i=()=>{const e={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const t={a:"a",...(0,o.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,o.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Values",id:"values",level:3},{value:"<code>SupportingDocumentStatus.<b>WaitingForUpload</b></code>",id:"supportingdocumentstatuswaitingforupload",level:4},{value:"<code>SupportingDocumentStatus.<b>Uploaded</b></code>",id:"supportingdocumentstatusuploaded",level:4},{value:"<code>SupportingDocumentStatus.<b>Validated</b></code>",id:"supportingdocumentstatusvalidated",level:4},{value:"<code>SupportingDocumentStatus.<b>Refused</b></code>",id:"supportingdocumentstatusrefused",level:4},{value:"<code>SupportingDocumentStatus.<b>NotUploaded</b></code>",id:"supportingdocumentstatusnotuploaded",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,o.a)()},[u,r]=(0,d.useState)(a);return(0,s.jsxs)(c.details,{...u?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:u?e:t}),u&&n]})};function j(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Verification status of a document"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum SupportingDocumentStatus {\n  WaitingForUpload\n  Uploaded\n  Validated\n  Refused\n  NotUploaded\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"supportingdocumentstatuswaitingforupload",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentStatus.",(0,s.jsx)("b",{children:"WaitingForUpload"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Document is not uploaded yet."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"supportingdocumentstatusuploaded",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentStatus.",(0,s.jsx)("b",{children:"Uploaded"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Document has been uploaded but not verified by Swan yet."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"supportingdocumentstatusvalidated",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentStatus.",(0,s.jsx)("b",{children:"Validated"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Document has been uploaded and verified by Swan."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"supportingdocumentstatusrefused",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentStatus.",(0,s.jsx)("b",{children:"Refused"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Document has been refused by Swan."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"supportingdocumentstatusnotuploaded",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentStatus.",(0,s.jsx)("b",{children:"NotUploaded"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Document has not been uploaded on time."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/objects/supporting-document-not-uploaded-status-info",children:(0,s.jsx)(t.code,{children:"SupportingDocumentNotUploadedStatusInfo"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-refused-status-info",children:(0,s.jsx)(t.code,{children:"SupportingDocumentRefusedStatusInfo"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-status-does-not-allow-deletion-rejection",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatusDoesNotAllowDeletionRejection"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-status-does-not-allow-update-rejection",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatusDoesNotAllowUpdateRejection"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/interfaces/supporting-document-status-info",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatusInfo"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"interface"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-status-not-allowed-rejection",children:(0,s.jsx)(t.code,{children:"SupportingDocumentStatusNotAllowedRejection"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-uploaded-status-info",children:(0,s.jsx)(t.code,{children:"SupportingDocumentUploadedStatusInfo"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-validated-status-info",children:(0,s.jsx)(t.code,{children:"SupportingDocumentValidatedStatusInfo"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/objects/supporting-document-waiting-for-upload-status-info",children:(0,s.jsx)(t.code,{children:"SupportingDocumentWaitingForUploadStatusInfo"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const o={},d=s.createContext(o);function a(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);