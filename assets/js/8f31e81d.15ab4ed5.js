"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70097],{83260:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>p,Bullet:()=>a,Details:()=>g,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>m});var t=n(74848),c=n(28453),s=n(96540);const d={id:"supporting-document-collection",title:"SupportingDocumentCollection"},l=void 0,r={id:"objects/supporting-document-collection",title:"SupportingDocumentCollection",description:"Collection of supporting documents used for compliance",source:"@site/docs/objects/supporting-document-collection.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-collection",permalink:"/objects/supporting-document-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-collection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection",title:"SupportingDocumentCollection"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",permalink:"/objects/supporting-document-collection-waiting-for-document-status-info"},next:{title:"SupportingDocumentNotFoundRejection",permalink:"/objects/supporting-document-not-found-rejection"}},i={},a=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const o={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const o={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:o,children:n,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,c.R)()},[r,i]=(0,s.useState)(d);return(0,t.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:o}),r&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>SupportingDocumentCollection.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionidstring--",level:4},{value:'<code>SupportingDocumentCollection.<b>statusInfo</b></code><Bullet></Bullet><code>SupportingDocumentCollectionStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionstatusinfosupportingdocumentcollectionstatusinfo--",level:4},{value:'<code>SupportingDocumentCollection.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectioncreatedatdatetime--",level:4},{value:'<code>SupportingDocumentCollection.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionupdatedatdatetime--",level:4},{value:'<code>SupportingDocumentCollection.<b>supportingDocuments</b></code><Bullet></Bullet><code>[SupportingDocument]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionsupportingdocumentssupportingdocument--",level:4},{value:'<code>SupportingDocumentCollection.<b>requiredSupportingDocumentPurposes</b></code><Bullet></Bullet><code>[SupportingDocumentPurpose!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionrequiredsupportingdocumentpurposessupportingdocumentpurpose--",level:4},{value:'<code>SupportingDocumentCollection.<b>accountHolder</b></code><Bullet></Bullet><code>SupportingDocumentAccountHolder!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionaccountholdersupportingdocumentaccountholder--",level:4},{value:'<code>SupportingDocumentCollection.<b>onboarding</b></code><Bullet></Bullet><code>SupportingDocumentOnboarding!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectiononboardingsupportingdocumentonboarding--",level:4},{value:'<code>SupportingDocumentCollection.<b>projectInfo</b></code><Bullet></Bullet><code>ProjectInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionprojectinfoprojectinfo--",level:4},{value:'<code>SupportingDocumentCollection.<b>supportingDocumentCollectionUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionsupportingdocumentcollectionurlstring--",level:4},{value:'<code>SupportingDocumentCollection.<b>type</b></code><Bullet></Bullet><code>SupportingDocumentCollectionType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectiontypesupportingdocumentcollectiontype--",level:4},{value:'<code>SupportingDocumentCollection.<b>transaction</b></code><Bullet></Bullet><code>SupportingDocumentTransaction!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectiontransactionsupportingdocumenttransaction--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function b(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Collection of supporting documents used for compliance"}),"\n",(0,t.jsx)(o.p,{children:"Fetching SupportingDocument is restricted to Project access token"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:"type SupportingDocumentCollection {\n  id: String!\n  statusInfo: SupportingDocumentCollectionStatusInfo!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  supportingDocuments: [SupportingDocument]!\n  requiredSupportingDocumentPurposes: [SupportingDocumentPurpose!]!\n  accountHolder: SupportingDocumentAccountHolder!\n  onboarding: SupportingDocumentOnboarding!\n  projectInfo: ProjectInfo!\n  supportingDocumentCollectionUrl: String!\n  type: SupportingDocumentCollectionType!\n  transaction: SupportingDocumentTransaction!\n}\n"})}),"\n",(0,t.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectionidstring--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/scalars/string",children:(0,t.jsx)(o.code,{children:"String!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(o.p,{children:"Unique identifier of the supporting document collection"}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectionstatusinfosupportingdocumentcollectionstatusinfo--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"statusInfo"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/interfaces/supporting-document-collection-status-info",children:(0,t.jsx)(o.code,{children:"SupportingDocumentCollectionStatusInfo!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(o.p,{children:"Status of the supporting document collection"}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectioncreatedatdatetime--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/scalars/date-time",children:(0,t.jsx)(o.code,{children:"DateTime!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(o.p,{children:"Created date"}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectionupdatedatdatetime--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/scalars/date-time",children:(0,t.jsx)(o.code,{children:"DateTime!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(o.p,{children:"Updated date"}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectionsupportingdocumentssupportingdocument--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"supportingDocuments"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/supporting-document",children:(0,t.jsx)(o.code,{children:"[SupportingDocument]!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(o.p,{children:"List of supported documents contained in the supporting document collection"}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectionrequiredsupportingdocumentpurposessupportingdocumentpurpose--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"requiredSupportingDocumentPurposes"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/supporting-document-purpose",children:(0,t.jsx)(o.code,{children:"[SupportingDocumentPurpose!]!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(o.p,{children:"List of required supporting document purposes for this supporting document collection"}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectionaccountholdersupportingdocumentaccountholder--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"accountHolder"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/supporting-document-account-holder",children:(0,t.jsx)(o.code,{children:"SupportingDocumentAccountHolder!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectiononboardingsupportingdocumentonboarding--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"onboarding"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/supporting-document-onboarding",children:(0,t.jsx)(o.code,{children:"SupportingDocumentOnboarding!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectionprojectinfoprojectinfo--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"projectInfo"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/project-info",children:(0,t.jsx)(o.code,{children:"ProjectInfo!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectionsupportingdocumentcollectionurlstring--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"supportingDocumentCollectionUrl"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/scalars/string",children:(0,t.jsx)(o.code,{children:"String!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(o.p,{children:"Not available, coming soon !\nSupportingDocumentCollection URL to Swan portal"}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectiontypesupportingdocumentcollectiontype--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"type"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/enums/supporting-document-collection-type",children:(0,t.jsx)(o.code,{children:"SupportingDocumentCollectionType!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(o.h4,{id:"supportingdocumentcollectiontransactionsupportingdocumenttransaction--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollection.",(0,t.jsx)("b",{children:"transaction"})]})}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/supporting-document-transaction",children:(0,t.jsx)(o.code,{children:"SupportingDocumentTransaction!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(o.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/queries/supporting-document-collection",children:(0,t.jsx)(o.code,{children:"supportingDocumentCollection"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,t.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/objects/onboarding",children:(0,t.jsx)(o.code,{children:"Onboarding"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/onboarding-info",children:(0,t.jsx)(o.code,{children:"OnboardingInfo"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/request-supporting-document-collection-review-success-payload",children:(0,t.jsx)(o.code,{children:"RequestSupportingDocumentCollectionReviewSuccessPayload"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/supporting-document-collection-edge",children:(0,t.jsx)(o.code,{children:"SupportingDocumentCollectionEdge"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/supporting-document-collection-status-does-not-allow-deletion-rejection",children:(0,t.jsx)(o.code,{children:"SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(a,{}),(0,t.jsx)(o.a,{href:"/objects/supporting-document-collection-status-does-not-allow-update-rejection",children:(0,t.jsx)(o.code,{children:"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>l});var t=n(96540);const c={},s=t.createContext(c);function d(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);