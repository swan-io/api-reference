"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70886],{91363:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var i=n(74848),d=n(28453),s=n(96540);const a={id:"uboidentity-document-details-input",title:"UBOIdentityDocumentDetailsInput"},r=void 0,c={id:"inputs/uboidentity-document-details-input",title:"UBOIdentityDocumentDetailsInput",description:"No description",source:"@site/docs/inputs/uboidentity-document-details-input.mdx",sourceDirName:"inputs",slug:"/inputs/uboidentity-document-details-input",permalink:"/inputs/uboidentity-document-details-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/uboidentity-document-details-input.mdx",tags:[],version:"current",frontMatter:{id:"uboidentity-document-details-input",title:"UBOIdentityDocumentDetailsInput"},sidebar:"schemaSidebar",previous:{title:"TrustedBeneficiaryOrderByInput",permalink:"/inputs/trusted-beneficiary-order-by-input"},next:{title:"UpdateAccountHolderInput",permalink:"/inputs/update-account-holder-input"}},l={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,d.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,d.R)()},[c,l]=(0,s.useState)(a);return(0,i.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>UBOIdentityDocumentDetailsInput.<b>type</b></code><Bullet></Bullet><code>UBOIdentityDocumentType</code> <Badge class="badge badge--secondary"></Badge>',id:"uboidentitydocumentdetailsinputtypeuboidentitydocumenttype-",level:4},{value:'<code>UBOIdentityDocumentDetailsInput.<b>issueDate</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"uboidentitydocumentdetailsinputissuedatestring-",level:4},{value:'<code>UBOIdentityDocumentDetailsInput.<b>expiryDate</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"uboidentitydocumentdetailsinputexpirydatestring-",level:4},{value:'<code>UBOIdentityDocumentDetailsInput.<b>number</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"uboidentitydocumentdetailsinputnumberstring-",level:4},{value:'<code>UBOIdentityDocumentDetailsInput.<b>issuingAuthority</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"uboidentitydocumentdetailsinputissuingauthoritystring-",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input UBOIdentityDocumentDetailsInput {\n  type: UBOIdentityDocumentType\n  issueDate: String\n  expiryDate: String\n  number: String\n  issuingAuthority: String\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"uboidentitydocumentdetailsinputtypeuboidentitydocumenttype-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["UBOIdentityDocumentDetailsInput.",(0,i.jsx)("b",{children:"type"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/enums/uboidentity-document-type",children:(0,i.jsx)(t.code,{children:"UBOIdentityDocumentType"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(t.p,{children:"Type of identity document"}),"\n",(0,i.jsxs)(t.h4,{id:"uboidentitydocumentdetailsinputissuedatestring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["UBOIdentityDocumentDetailsInput.",(0,i.jsx)("b",{children:"issueDate"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Issue date of the identity document"}),"\n",(0,i.jsxs)(t.h4,{id:"uboidentitydocumentdetailsinputexpirydatestring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["UBOIdentityDocumentDetailsInput.",(0,i.jsx)("b",{children:"expiryDate"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Expiry date of the identity document"}),"\n",(0,i.jsxs)(t.h4,{id:"uboidentitydocumentdetailsinputnumberstring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["UBOIdentityDocumentDetailsInput.",(0,i.jsx)("b",{children:"number"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Number of the identity document"}),"\n",(0,i.jsxs)(t.h4,{id:"uboidentitydocumentdetailsinputissuingauthoritystring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["UBOIdentityDocumentDetailsInput.",(0,i.jsx)("b",{children:"issuingAuthority"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"Issuing authority of the identity document"}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/inputs/individual-ultimate-beneficial-owner-input",children:(0,i.jsx)(t.code,{children:"IndividualUltimateBeneficialOwnerInput"})}),"  ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const d={},s=i.createContext(d);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);