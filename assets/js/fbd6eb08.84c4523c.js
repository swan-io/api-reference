"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53136],{78101:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>h,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(74848),t=a(28453),i=a(96540);const s={id:"digital-card-edge",title:"DigitalCardEdge"},r=void 0,c={id:"objects/digital-card-edge",title:"DigitalCardEdge",description:"Implements the Relay Edge interface",source:"@site/docs/objects/digital-card-edge.mdx",sourceDirName:"objects",slug:"/objects/digital-card-edge",permalink:"/objects/digital-card-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/digital-card-edge.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-edge",title:"DigitalCardEdge"},sidebar:"schemaSidebar",previous:{title:"DigitalCardDeclinedStatusInfo",permalink:"/objects/digital-card-declined-status-info"},next:{title:"DigitalCardEnabledStatusInfo",permalink:"/objects/digital-card-enabled-status-info"}},l={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const d={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const d={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:d,children:a,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[c,l]=(0,i.useState)(s);return(0,n.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:d}),c&&a]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>DigitalCardEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"digitalcardedgecursorstring--",level:4},{value:'<code>DigitalCardEdge.<b>node</b></code><Bullet></Bullet><code>DigitalCard!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"digitalcardedgenodedigitalcard--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.p,{children:"Implements the Relay Edge interface"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-graphql",children:"type DigitalCardEdge implements Edge {\n  cursor: String!\n  node: DigitalCard!\n}\n"})}),"\n",(0,n.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(d.h4,{id:"digitalcardedgecursorstring--",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["DigitalCardEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/scalars/string",children:(0,n.jsx)(d.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(d.p,{children:"Opaque identifier pointing to this node in the pagination mechanism"}),"\n",(0,n.jsxs)(d.h4,{id:"digitalcardedgenodedigitalcard--",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["DigitalCardEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(d.a,{href:"/interfaces/digital-card",children:(0,n.jsx)(d.code,{children:"DigitalCard!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(d.p,{children:"The Card entry"}),"\n",(0,n.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(d.h4,{id:"edge-",children:[(0,n.jsx)(d.a,{href:"/interfaces/edge",children:(0,n.jsx)(d.code,{children:"Edge"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(d.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n",(0,n.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"/objects/digital-card-connection",children:(0,n.jsx)(d.code,{children:"DigitalCardConnection"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},28453:(e,d,a)=>{a.d(d,{R:()=>s,x:()=>r});var n=a(96540);const t={},i=n.createContext(t);function s(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);