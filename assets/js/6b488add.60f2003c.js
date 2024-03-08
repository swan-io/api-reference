"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[44446],{34274:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>f});var t=s(85893),r=s(11151),d=s(67294);const a={id:"trusted-beneficiary-edge",title:"TrustedBeneficiaryEdge"},c=void 0,i={id:"objects/trusted-beneficiary-edge",title:"TrustedBeneficiaryEdge",description:"Please see the Edge interface",source:"@site/docs/objects/trusted-beneficiary-edge.mdx",sourceDirName:"objects",slug:"/objects/trusted-beneficiary-edge",permalink:"/objects/trusted-beneficiary-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/trusted-beneficiary-edge.mdx",tags:[],version:"current",frontMatter:{id:"trusted-beneficiary-edge",title:"TrustedBeneficiaryEdge"},sidebar:"schemaSidebar",previous:{title:"TrustedBeneficiaryConsentPending",permalink:"/objects/trusted-beneficiary-consent-pending"},next:{title:"TrustedBeneficiaryStatusInfoCanceled",permalink:"/objects/trusted-beneficiary-status-info-canceled"}},o={},l=()=>{const e={span:"span",...(0,r.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,r.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>TrustedBeneficiaryEdge.<b>node</b></code><Bullet></Bullet><code>TrustedBeneficiary!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryedgenodetrustedbeneficiary--",level:4},{value:'<code>TrustedBeneficiaryEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryedgecursorstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:s,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,r.a)()},[i,o]=(0,d.useState)(a);return(0,t.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Please see the Edge interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type TrustedBeneficiaryEdge implements Edge {\n  node: TrustedBeneficiary!\n  cursor: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"trustedbeneficiaryedgenodetrustedbeneficiary--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiaryEdge.",(0,t.jsx)("b",{children:"node"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/interfaces/trusted-beneficiary",children:(0,t.jsx)(n.code,{children:"TrustedBeneficiary!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"trustedbeneficiaryedgecursorstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiaryEdge.",(0,t.jsx)("b",{children:"cursor"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"edge-",children:[(0,t.jsx)(n.a,{href:"/interfaces/edge",children:(0,t.jsx)(n.code,{children:"Edge"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/objects/trusted-beneficiary-connection",children:(0,t.jsx)(n.code,{children:"TrustedBeneficiaryConnection"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var t=s(67294);const r={},d=t.createContext(r);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);