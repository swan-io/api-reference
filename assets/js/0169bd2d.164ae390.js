"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14629],{51601:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>p,Bullet:()=>a,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>j});var t=o(74848),c=o(28453),s=o(96540);const i={id:"supporting-document-collection-not-found-rejection",title:"SupportingDocumentCollectionNotFoundRejection"},d=void 0,r={id:"objects/supporting-document-collection-not-found-rejection",title:"SupportingDocumentCollectionNotFoundRejection",description:"Rejection returned if the supporting document collection was not found",source:"@site/docs/objects/supporting-document-collection-not-found-rejection.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-collection-not-found-rejection",permalink:"/objects/supporting-document-collection-not-found-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-collection-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-not-found-rejection",title:"SupportingDocumentCollectionNotFoundRejection"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectionEdge",permalink:"/objects/supporting-document-collection-edge"},next:{title:"SupportingDocumentCollectionPendingReviewStatusInfo",permalink:"/objects/supporting-document-collection-pending-review-status-info"}},l={},a=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:o,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,c.R)()},[r,l]=(0,s.useState)(i);return(0,t.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&o]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>SupportingDocumentCollectionNotFoundRejection.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionnotfoundrejectionidstring--",level:4},{value:'<code>SupportingDocumentCollectionNotFoundRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionnotfoundrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Rejection returned if the supporting document collection was not found"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type SupportingDocumentCollectionNotFoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"supportingdocumentcollectionnotfoundrejectionidstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionNotFoundRejection.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.h4,{id:"supportingdocumentcollectionnotfoundrejectionmessagestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionNotFoundRejection.",(0,t.jsx)("b",{children:"message"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"rejection-",children:[(0,t.jsx)(n.a,{href:"/interfaces/rejection",children:(0,t.jsx)(n.code,{children:"Rejection"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/unions/delete-supporting-document-payload",children:(0,t.jsx)(n.code,{children:"DeleteSupportingDocumentPayload"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(a,{}),(0,t.jsx)(n.a,{href:"/unions/generate-supporting-document-upload-url-payload",children:(0,t.jsx)(n.code,{children:"GenerateSupportingDocumentUploadUrlPayload"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(a,{}),(0,t.jsx)(n.a,{href:"/unions/request-supporting-document-collection-review-payload",children:(0,t.jsx)(n.code,{children:"RequestSupportingDocumentCollectionReviewPayload"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"union"}),(0,t.jsx)(a,{}),(0,t.jsx)(n.a,{href:"/unions/update-supporting-document-payload",children:(0,t.jsx)(n.code,{children:"UpdateSupportingDocumentPayload"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"union"})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>d});var t=o(96540);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);