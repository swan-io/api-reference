"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[42160],{88237:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>b});var r=t(85893),a=t(11151),s=t(67294);const i={id:"virtual-ibanentry-edge",title:"VirtualIBANEntryEdge"},d=void 0,l={id:"objects/virtual-ibanentry-edge",title:"VirtualIBANEntryEdge",description:"Implements the Relay Edge interface",source:"@site/docs/objects/virtual-ibanentry-edge.mdx",sourceDirName:"objects",slug:"/objects/virtual-ibanentry-edge",permalink:"/objects/virtual-ibanentry-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/virtual-ibanentry-edge.mdx",tags:[],version:"current",frontMatter:{id:"virtual-ibanentry-edge",title:"VirtualIBANEntryEdge"},sidebar:"schemaSidebar",previous:{title:"VirtualIBANEntryConnection",permalink:"/objects/virtual-ibanentry-connection"},next:{title:"VirtualIBANEntry",permalink:"/objects/virtual-ibanentry"}},c={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,a.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>VirtualIBANEntryEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentryedgecursorstring--",level:4},{value:'<code>VirtualIBANEntryEdge.<b>node</b></code><Bullet></Bullet><code>VirtualIBANEntry!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentryedgenodevirtualibanentry--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,a.a)()},[l,c]=(0,s.useState)(i);return(0,r.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})};function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Implements the Relay Edge interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type VirtualIBANEntryEdge implements Edge {\n  cursor: String!\n  node: VirtualIBANEntry!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"virtualibanentryedgecursorstring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntryEdge.",(0,r.jsx)("b",{children:"cursor"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Opaque identifier pointing to this node in the pagination mechanism"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"virtualibanentryedgenodevirtualibanentry--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntryEdge.",(0,r.jsx)("b",{children:"node"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/objects/virtual-ibanentry",children:(0,r.jsx)(n.code,{children:"VirtualIBANEntry!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The virtual iban entry"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(n.h4,{id:"edge-",children:[(0,r.jsx)(n.a,{href:"/interfaces/edge",children:(0,r.jsx)(n.code,{children:"Edge"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/objects/virtual-ibanentry-connection",children:(0,r.jsx)(n.code,{children:"VirtualIBANEntryConnection"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);