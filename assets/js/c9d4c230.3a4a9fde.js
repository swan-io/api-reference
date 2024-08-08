"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[33797],{15151:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>a,assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>g});var o=n(74848),c=n(28453),s=n(96540);const i={id:"supporting-document-collection-status",title:"SupportingDocumentCollectionStatus"},l=void 0,r={id:"enums/supporting-document-collection-status",title:"SupportingDocumentCollectionStatus",description:"Verification status of a supporting document collection",source:"@site/docs/enums/supporting-document-collection-status.mdx",sourceDirName:"enums",slug:"/enums/supporting-document-collection-status",permalink:"/enums/supporting-document-collection-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/supporting-document-collection-status.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-status",title:"SupportingDocumentCollectionStatus"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectMode",permalink:"/enums/supporting-document-collect-mode"},next:{title:"SupportingDocumentCollectionType",permalink:"/enums/supporting-document-collection-type"}},d={},u=()=>{const e={span:"span",...(0,c.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},a=e=>{const t={a:"a",...(0,c.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,c.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,c.R)()},[r,d]=(0,s.useState)(i);return(0,o.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},g=[{value:"Values",id:"values",level:3},{value:"<code>SupportingDocumentCollectionStatus.<b>WaitingForDocument</b></code>",id:"supportingdocumentcollectionstatuswaitingfordocument",level:4},{value:"<code>SupportingDocumentCollectionStatus.<b>PendingReview</b></code>",id:"supportingdocumentcollectionstatuspendingreview",level:4},{value:"<code>SupportingDocumentCollectionStatus.<b>Approved</b></code>",id:"supportingdocumentcollectionstatusapproved",level:4},{value:"<code>SupportingDocumentCollectionStatus.<b>Canceled</b></code>",id:"supportingdocumentcollectionstatuscanceled",level:4},{value:"<code>SupportingDocumentCollectionStatus.<b>Rejected</b></code>",id:"supportingdocumentcollectionstatusrejected",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Verification status of a supporting document collection"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"enum SupportingDocumentCollectionStatus {\n  WaitingForDocument\n  PendingReview\n  Approved\n  Canceled\n  Rejected\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,o.jsx)(t.h4,{id:"supportingdocumentcollectionstatuswaitingfordocument",children:(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionStatus.",(0,o.jsx)("b",{children:"WaitingForDocument"})]})})}),"\n",(0,o.jsx)(t.p,{children:"When the supporting document collection is created and on going"}),"\n",(0,o.jsx)(t.h4,{id:"supportingdocumentcollectionstatuspendingreview",children:(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionStatus.",(0,o.jsx)("b",{children:"PendingReview"})]})})}),"\n",(0,o.jsx)(t.p,{children:"When the supporting document collection is completed and in compliance review"}),"\n",(0,o.jsx)(t.h4,{id:"supportingdocumentcollectionstatusapproved",children:(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionStatus.",(0,o.jsx)("b",{children:"Approved"})]})})}),"\n",(0,o.jsx)(t.p,{children:"When the supporting document collection is approved. Final status"}),"\n",(0,o.jsx)(t.h4,{id:"supportingdocumentcollectionstatuscanceled",children:(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionStatus.",(0,o.jsx)("b",{children:"Canceled"})]})})}),"\n",(0,o.jsx)(t.p,{children:"When the supporting document collection is canceled. Final status"}),"\n",(0,o.jsx)(t.h4,{id:"supportingdocumentcollectionstatusrejected",children:(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionStatus.",(0,o.jsx)("b",{children:"Rejected"})]})})}),"\n",(0,o.jsx)(t.p,{children:"When the supporting document collection is rejected. Final status"}),"\n",(0,o.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/objects/supporting-document-collection-approved-status-info",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionApprovedStatusInfo"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/objects/supporting-document-collection-canceled-status-info",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionCanceledStatusInfo"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/inputs/supporting-document-collection-filter-input",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionFilterInput"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/objects/supporting-document-collection-pending-review-status-info",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionPendingReviewStatusInfo"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/objects/supporting-document-collection-rejected-status-info",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionRejectedStatusInfo"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/objects/supporting-document-collection-status-does-not-allow-deletion-rejection",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/objects/supporting-document-collection-status-does-not-allow-update-rejection",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/interfaces/supporting-document-collection-status-info",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionStatusInfo"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"interface"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/objects/supporting-document-collection-status-not-allowed-rejection",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionStatusNotAllowedRejection"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/objects/supporting-document-collection-waiting-for-document-status-info",children:(0,o.jsx)(t.code,{children:"SupportingDocumentCollectionWaitingForDocumentStatusInfo"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(u,{}),(0,o.jsx)(t.a,{href:"/objects/supporting-document-upload-not-allowed-rejection",children:(0,o.jsx)(t.code,{children:"SupportingDocumentUploadNotAllowedRejection"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(96540);const c={},s=o.createContext(c);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);