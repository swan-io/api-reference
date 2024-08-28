"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2208],{36145:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var d=t(74848),s=t(28453),a=t(96540);const c={id:"legal-document-edge",title:"LegalDocumentEdge"},o=void 0,l={id:"objects/legal-document-edge",title:"LegalDocumentEdge",description:"No description",source:"@site/docs/objects/legal-document-edge.mdx",sourceDirName:"objects",slug:"/objects/legal-document-edge",permalink:"/objects/legal-document-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/legal-document-edge.mdx",tags:[],version:"current",frontMatter:{id:"legal-document-edge",title:"LegalDocumentEdge"},sidebar:"schemaSidebar",previous:{title:"LegalDocumentConnection",permalink:"/objects/legal-document-connection"},next:{title:"LegalDocumentInactiveStatusInfo",permalink:"/objects/legal-document-inactive-status-info"}},r={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,s.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[l,r]=(0,a.useState)(c);return(0,d.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>LegalDocumentEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"legaldocumentedgecursorstring--",level:4},{value:'<code>LegalDocumentEdge.<b>node</b></code><Bullet></Bullet><code>LegalDocument!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"legaldocumentedgenodelegaldocument--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"No description"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"type LegalDocumentEdge implements Edge {\n  cursor: String!\n  node: LegalDocument!\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.h4,{id:"legaldocumentedgecursorstring--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentEdge.",(0,d.jsx)("b",{children:"cursor"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(n.a,{href:"/scalars/string",children:(0,d.jsx)(n.code,{children:"String!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(n.p,{children:"Opaque identifier pointing to this node in the pagination mechanism"}),"\n",(0,d.jsxs)(n.h4,{id:"legaldocumentedgenodelegaldocument--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentEdge.",(0,d.jsx)("b",{children:"node"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(n.a,{href:"/objects/legal-document",children:(0,d.jsx)(n.code,{children:"LegalDocument!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(n.p,{children:"The account membership"}),"\n",(0,d.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(n.h4,{id:"edge-",children:[(0,d.jsx)(n.a,{href:"/interfaces/edge",children:(0,d.jsx)(n.code,{children:"Edge"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(n.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n",(0,d.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/objects/legal-document-connection",children:(0,d.jsx)(n.code,{children:"LegalDocumentConnection"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var d=t(96540);const s={},a=d.createContext(s);function c(e){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);