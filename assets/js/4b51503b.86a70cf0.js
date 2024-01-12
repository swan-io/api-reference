"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[44502],{91195:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>m,Bullet:()=>a,Details:()=>f,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>r,default:()=>b,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var i=s(85893),c=s(11151),t=s(67294);const d={id:"drivers-license-document-file",title:"DriversLicenseDocumentFile"},r=void 0,l={id:"objects/drivers-license-document-file",title:"DriversLicenseDocumentFile",description:"The file associated to the driver's license document",source:"@site/docs/objects/drivers-license-document-file.mdx",sourceDirName:"objects",slug:"/objects/drivers-license-document-file",permalink:"/objects/drivers-license-document-file",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/drivers-license-document-file.mdx",tags:[],version:"current",frontMatter:{id:"drivers-license-document-file",title:"DriversLicenseDocumentFile"},sidebar:"schemaSidebar",previous:{title:"DisabledMerchantPaymentMethodStatusInfo",permalink:"/objects/disabled-merchant-payment-method-status-info"},next:{title:"DriversLicenseDocument",permalink:"/objects/drivers-license-document"}},o={},a=()=>{const e={span:"span",...(0,c.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,c.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>DriversLicenseDocumentFile.<b>downloadUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"driverslicensedocumentfiledownloadurlstring--",level:4},{value:'<code>DriversLicenseDocumentFile.<b>side</b></code><Bullet></Bullet><code>DocumentFileSide!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"driverslicensedocumentfilesidedocumentfileside--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>DocumentFile</code> <Badge class="badge badge--secondary"></Badge>',id:"documentfile-",level:4},{value:"Member Of",id:"member-of",level:3}],f=({dataOpen:e,dataClose:n,children:s,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,c.a)()},[l,o]=(0,t.useState)(d);return(0,i.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&s]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The file associated to the driver's license document"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type DriversLicenseDocumentFile implements DocumentFile {\n  downloadUrl: String!\n  side: DocumentFileSide!\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.h4,{id:"driverslicensedocumentfiledownloadurlstring--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DriversLicenseDocumentFile.",(0,i.jsx)("b",{children:"downloadUrl"})]})}),(0,i.jsx)(a,{}),(0,i.jsx)(n.a,{href:"/scalars/string",children:(0,i.jsx)(n.code,{children:"String!"})})," ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The file's temporary download url"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"driverslicensedocumentfilesidedocumentfileside--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DriversLicenseDocumentFile.",(0,i.jsx)("b",{children:"side"})]})}),(0,i.jsx)(a,{}),(0,i.jsx)(n.a,{href:"/enums/document-file-side",children:(0,i.jsx)(n.code,{children:"DocumentFileSide!"})})," ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"From which side the deiver's license's picture was taken"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(n.h4,{id:"documentfile-",children:[(0,i.jsx)(n.a,{href:"/interfaces/document-file",children:(0,i.jsx)(n.code,{children:"DocumentFile"})})," ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Retrieved document extracted from the identity verification"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/objects/drivers-license-document",children:(0,i.jsx)(n.code,{children:"DriversLicenseDocument"})}),"  ",(0,i.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>d});var i=s(67294);const c={},t=i.createContext(c);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);