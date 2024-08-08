"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21543],{25550:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>h,Bullet:()=>r,Details:()=>u,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>g});var n=i(74848),d=i(28453),a=i(96540);const s={id:"identification",title:"Identification"},c=void 0,o={id:"objects/identification",title:"Identification",description:"The identification represents an ongoing identification process or its result",source:"@site/docs/objects/identification.mdx",sourceDirName:"objects",slug:"/objects/identification",permalink:"/objects/identification",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/identification.mdx",tags:[],version:"current",frontMatter:{id:"identification",title:"Identification"},sidebar:"schemaSidebar",previous:{title:"IdentificationLevels",permalink:"/objects/identification-levels"},next:{title:"IdentityAlreadyBindToAccountMembershipRejection",permalink:"/objects/identity-already-bind-to-account-membership-rejection"}},l={},r=()=>{const e={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,d.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:i,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[o,l]=(0,a.useState)(s);return(0,n.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&i]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>Identification.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationidstring--",level:4},{value:'<code>Identification.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationcreatedatdatetime--",level:4},{value:'<code>Identification.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationupdatedatdatetime--",level:4},{value:'<code>Identification.<b>status</b></code><Bullet></Bullet><code>SwanIdentificationStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationstatusswanidentificationstatus--",level:4},{value:'<code>Identification.<b>process</b></code><Bullet></Bullet><code>IdentificationProcess!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationprocessidentificationprocess--",level:4},{value:'<code>Identification.<b>levels</b></code><Bullet></Bullet><code>IdentificationLevelStatusesInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationlevelsidentificationlevelstatusesinfo--",level:4},{value:'<code>Identification.<b>documents</b></code><Bullet></Bullet><code>[IdentificationDocument!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationdocumentsidentificationdocument--",level:4},{value:'<code>Identification.<b>identityDocumentType</b></code><Bullet></Bullet><code>IdentityDocumentType</code> <Badge class="badge badge--secondary"></Badge>',id:"identificationidentitydocumenttypeidentitydocumenttype-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The identification represents an ongoing identification process or its result"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type Identification {\n  id: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  status: SwanIdentificationStatus!\n  process: IdentificationProcess!\n  levels: IdentificationLevelStatusesInfo!\n  documents: [IdentificationDocument!]\n  identityDocumentType: IdentityDocumentType\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"identificationidstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Identification.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Unique identifier of the identification"}),"\n",(0,n.jsxs)(t.h4,{id:"identificationcreatedatdatetime--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Identification.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/scalars/date-time",children:(0,n.jsx)(t.code,{children:"DateTime!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Creation date of the identification"}),"\n",(0,n.jsxs)(t.h4,{id:"identificationupdatedatdatetime--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Identification.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/scalars/date-time",children:(0,n.jsx)(t.code,{children:"DateTime!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.p,{children:"Last update date of the identification"}),"\n",(0,n.jsxs)(t.h4,{id:"identificationstatusswanidentificationstatus--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Identification.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/enums/swan-identification-status",children:(0,n.jsx)(t.code,{children:"SwanIdentificationStatus!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.p,{children:"The global status of the identification"}),"\n",(0,n.jsxs)(t.h4,{id:"identificationprocessidentificationprocess--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Identification.",(0,n.jsx)("b",{children:"process"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/enums/identification-process",children:(0,n.jsx)(t.code,{children:"IdentificationProcess!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.p,{children:"The process that was used for this identification"}),"\n",(0,n.jsxs)(t.h4,{id:"identificationlevelsidentificationlevelstatusesinfo--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Identification.",(0,n.jsx)("b",{children:"levels"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/objects/identification-level-statuses-info",children:(0,n.jsx)(t.code,{children:"IdentificationLevelStatusesInfo!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.p,{children:"The status and results associated to the available identification processes"}),"\n",(0,n.jsxs)(t.h4,{id:"identificationdocumentsidentificationdocument--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Identification.",(0,n.jsx)("b",{children:"documents"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/unions/identification-document",children:(0,n.jsx)(t.code,{children:"[IdentificationDocument!]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,n.jsx)(t.p,{children:"The available documents related to the identification (id doc, selfie, report...)"}),"\n",(0,n.jsxs)(t.h4,{id:"identificationidentitydocumenttypeidentitydocumenttype-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Identification.",(0,n.jsx)("b",{children:"identityDocumentType"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/enums/identity-document-type",children:(0,n.jsx)(t.code,{children:"IdentityDocumentType"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(t.p,{children:"The identity document type used for the current identification (passport, id card ...)"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/objects/identification-edge",children:(0,n.jsx)(t.code,{children:"IdentificationEdge"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(96540);const d={},a=n.createContext(d);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);