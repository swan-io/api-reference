"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9395],{89716:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>n,default:()=>j,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var d=a(85893),s=a(11151),c=a(67294);const o={id:"capital-deposit-document",title:"CapitalDepositDocument"},n=void 0,l={id:"objects/capital-deposit-document",title:"CapitalDepositDocument",description:"Document provided for a capital deposit case.",source:"@site/docs/objects/capital-deposit-document.mdx",sourceDirName:"objects",slug:"/objects/capital-deposit-document",permalink:"/objects/capital-deposit-document",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/capital-deposit-document.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-document",title:"CapitalDepositDocument"},sidebar:"schemaSidebar",previous:{title:"CapitalDepositDocumentValidatedStatusInfo",permalink:"/objects/capital-deposit-document-validated-status-info"},next:{title:"CardCanNotBeDigitalizedRejection",permalink:"/objects/card-can-not-be-digitalized-rejection"}},i={},r=()=>{const e={span:"span",...(0,s.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,s.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>CapitalDepositDocument.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentidstring--",level:4},{value:'<code>CapitalDepositDocument.<b>type</b></code><Bullet></Bullet><code>CapitalDepositDocumentType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumenttypecapitaldepositdocumenttype--",level:4},{value:'<code>CapitalDepositDocument.<b>downloadUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentdownloadurlstring-",level:4},{value:'<code>CapitalDepositDocument.<b>uploadedAt</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentuploadedatdate-",level:4},{value:'<code>CapitalDepositDocument.<b>status</b></code><Bullet></Bullet><code>CapitalDepositDocumentStatus!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentstatuscapitaldepositdocumentstatus---",level:4},{value:'<code>CapitalDepositDocument.<b>statusInfo</b></code><Bullet></Bullet><code>CapitalDepositDocumentStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentstatusinfocapitaldepositdocumentstatusinfo--",level:4},{value:'<code>CapitalDepositDocument.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentcreatedatdatetime--",level:4},{value:'<code>CapitalDepositDocument.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentupdatedatdatetime--",level:4},{value:'<code>CapitalDepositDocument.<b>relatedCapitalDepositCase</b></code><Bullet></Bullet><code>CapitalDepositCase</code> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentrelatedcapitaldepositcasecapitaldepositcase-",level:4},{value:'<code>CapitalDepositDocument.<b>relatedShareholder</b></code><Bullet></Bullet><code>Shareholder</code> <Badge class="badge badge--secondary"></Badge>',id:"capitaldepositdocumentrelatedshareholdershareholder-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:t,children:a,startOpen:o=!1})=>{const n={details:"details",summary:"summary",...(0,s.a)()},[l,i]=(0,c.useState)(o);return(0,d.jsxs)(n.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(n.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&a]})};function b(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"Document provided for a capital deposit case."}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-graphql",children:"type CapitalDepositDocument {\n  id: String!\n  type: CapitalDepositDocumentType!\n  downloadUrl: String\n  uploadedAt: Date\n  status: CapitalDepositDocumentStatus! @deprecated\n  statusInfo: CapitalDepositDocumentStatusInfo!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  relatedCapitalDepositCase: CapitalDepositCase\n  relatedShareholder: Shareholder\n}\n"})}),"\n",(0,d.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentidstring--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/scalars/string",children:(0,d.jsx)(t.code,{children:"String!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Unique identifier of a document."}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumenttypecapitaldepositdocumenttype--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"type"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/enums/capital-deposit-document-type",children:(0,d.jsx)(t.code,{children:"CapitalDepositDocumentType!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Type of the document."}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentdownloadurlstring-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"downloadUrl"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/scalars/string",children:(0,d.jsx)(t.code,{children:"String"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Url to download the document, null if it has not already been uploaded."}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentuploadedatdate-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"uploadedAt"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/scalars/date",children:(0,d.jsx)(t.code,{children:"Date"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Date when the last version of the document has been uploaded."}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentstatuscapitaldepositdocumentstatus---",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"status"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/enums/capital-deposit-document-status",children:(0,d.jsx)(t.code,{children:"CapitalDepositDocumentStatus!"})})," ",(0,d.jsx)(u,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.admonition,{title:"DEPRECATED",type:"warning",children:(0,d.jsx)(t.p,{children:"use statusInfo.status"})}),"\n",(0,d.jsx)(t.p,{children:"Status of the document."}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentstatusinfocapitaldepositdocumentstatusinfo--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"statusInfo"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/interfaces/capital-deposit-document-status-info",children:(0,d.jsx)(t.code,{children:"CapitalDepositDocumentStatusInfo!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Status info of the document."}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentcreatedatdatetime--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/scalars/date-time",children:(0,d.jsx)(t.code,{children:"DateTime!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Created date"}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentupdatedatdatetime--",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/scalars/date-time",children:(0,d.jsx)(t.code,{children:"DateTime!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Updated date"}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentrelatedcapitaldepositcasecapitaldepositcase-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"relatedCapitalDepositCase"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/objects/capital-deposit-case",children:(0,d.jsx)(t.code,{children:"CapitalDepositCase"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Information about capital deposit case."}),"\n"]}),"\n",(0,d.jsxs)(t.h4,{id:"capitaldepositdocumentrelatedshareholdershareholder-",children:[(0,d.jsx)(t.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CapitalDepositDocument.",(0,d.jsx)("b",{children:"relatedShareholder"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/objects/shareholder",children:(0,d.jsx)(t.code,{children:"Shareholder"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"Information about shareholder."}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/queries/capital-deposit-document",children:(0,d.jsx)(t.code,{children:"capitalDepositDocument"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,d.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/objects/capital-deposit-case",children:(0,d.jsx)(t.code,{children:"CapitalDepositCase"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(r,{}),(0,d.jsx)(t.a,{href:"/objects/shareholder",children:(0,d.jsx)(t.code,{children:"Shareholder"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>o});var d=a(67294);const s={},c=d.createContext(s);function o(e){const t=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(c.Provider,{value:t},e.children)}}}]);