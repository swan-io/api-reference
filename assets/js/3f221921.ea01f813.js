"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54471],{80566:(e,n,i)=>{i.r(n),i.d(n,{Badge:()=>f,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var t=i(85893),d=i(11151),a=i(67294);const s={id:"identification-edge",title:"IdentificationEdge"},c=void 0,o={id:"objects/identification-edge",title:"IdentificationEdge",description:"Implements the Relay Edge interface",source:"@site/docs/objects/identification-edge.mdx",sourceDirName:"objects",slug:"/objects/identification-edge",permalink:"/objects/identification-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/identification-edge.mdx",tags:[],version:"current",frontMatter:{id:"identification-edge",title:"IdentificationEdge"},sidebar:"schemaSidebar",previous:{title:"IdentificationConnection",permalink:"/objects/identification-connection"},next:{title:"IdentificationLevelStatusesInfo",permalink:"/objects/identification-level-statuses-info"}},r={},l=()=>{const e={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,d.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>IdentificationEdge.<b>node</b></code><Bullet></Bullet><code>Identification!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationedgenodeidentification--",level:4},{value:'<code>IdentificationEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"identificationedgecursorstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}],u=({dataOpen:e,dataClose:n,children:i,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,d.a)()},[o,r]=(0,a.useState)(s);return(0,t.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&i]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Implements the Relay Edge interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type IdentificationEdge implements Edge {\n  node: Identification!\n  cursor: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"identificationedgenodeidentification--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationEdge.",(0,t.jsx)("b",{children:"node"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/identification",children:(0,t.jsx)(n.code,{children:"Identification!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The identification entry"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"identificationedgecursorstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationEdge.",(0,t.jsx)("b",{children:"cursor"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Opaque identifier pointing to this node in the pagination mechanism"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"edge-",children:[(0,t.jsx)(n.a,{href:"/interfaces/edge",children:(0,t.jsx)(n.code,{children:"Edge"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/objects/identification-connection",children:(0,t.jsx)(n.code,{children:"IdentificationConnection"})}),"  ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var t=i(67294);const d={},a=t.createContext(d);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);