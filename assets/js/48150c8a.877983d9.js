"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[815],{54183:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>m,Bullet:()=>a,Details:()=>h,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>x});var c=s(74848),t=s(28453),i=s(96540);const d={id:"drivers-license-document",title:"DriversLicenseDocument"},r=void 0,l={id:"objects/drivers-license-document",title:"DriversLicenseDocument",description:"The document corresponding to a driver's license",source:"@site/docs/objects/drivers-license-document.mdx",sourceDirName:"objects",slug:"/objects/drivers-license-document",permalink:"/objects/drivers-license-document",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/drivers-license-document.mdx",tags:[],version:"current",frontMatter:{id:"drivers-license-document",title:"DriversLicenseDocument"},sidebar:"schemaSidebar",previous:{title:"DriversLicenseDocumentFile",permalink:"/objects/drivers-license-document-file"},next:{title:"EnableReceivedDirectDebitMandateSuccessPayload",permalink:"/objects/enable-received-direct-debit-mandate-success-payload"}},o={},a=()=>{const e={span:"span",...(0,t.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,t.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:s,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[l,o]=(0,i.useState)(d);return(0,c.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>DriversLicenseDocument.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"driverslicensedocumentidstring--",level:4},{value:'<code>DriversLicenseDocument.<b>type</b></code><Bullet></Bullet><code>DocumentType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"driverslicensedocumenttypedocumenttype--",level:4},{value:'<code>DriversLicenseDocument.<b>files</b></code><Bullet></Bullet><code>[DriversLicenseDocumentFile!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"driverslicensedocumentfilesdriverslicensedocumentfile--",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"The document corresponding to a driver's license"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type DriversLicenseDocument {\n  id: String!\n  type: DocumentType!\n  files: [DriversLicenseDocumentFile!]!\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"driverslicensedocumentidstring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["DriversLicenseDocument.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(a,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.p,{children:"Unique identifier of the driver's license document"}),"\n",(0,c.jsxs)(n.h4,{id:"driverslicensedocumenttypedocumenttype--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["DriversLicenseDocument.",(0,c.jsx)("b",{children:"type"})]})}),(0,c.jsx)(a,{}),(0,c.jsx)(n.a,{href:"/enums/document-type",children:(0,c.jsx)(n.code,{children:"DocumentType!"})})," ",(0,c.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsx)(n.p,{children:"The type of the document"}),"\n",(0,c.jsxs)(n.h4,{id:"driverslicensedocumentfilesdriverslicensedocumentfile--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["DriversLicenseDocument.",(0,c.jsx)("b",{children:"files"})]})}),(0,c.jsx)(a,{}),(0,c.jsx)(n.a,{href:"/objects/drivers-license-document-file",children:(0,c.jsx)(n.code,{children:"[DriversLicenseDocumentFile!]!"})})," ",(0,c.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.p,{children:"List of the associated files"}),"\n",(0,c.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/unions/identification-document",children:(0,c.jsx)(n.code,{children:"IdentificationDocument"})}),"  ",(0,c.jsx)(m,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var c=s(96540);const t={},i=c.createContext(t);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);