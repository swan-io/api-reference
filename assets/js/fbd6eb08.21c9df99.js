"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9190],{13792:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>h,Bullet:()=>o,Details:()=>b,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=d(85893),t=d(11151),i=d(67294);const s={id:"digital-card-edge",title:"DigitalCardEdge"},r=void 0,c={id:"objects/digital-card-edge",title:"DigitalCardEdge",description:"Implements the Relay Edge interface",source:"@site/docs/objects/digital-card-edge.mdx",sourceDirName:"objects",slug:"/objects/digital-card-edge",permalink:"/objects/digital-card-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/digital-card-edge.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-edge",title:"DigitalCardEdge"},sidebar:"schemaSidebar",previous:{title:"DigitalCardDeclinedStatusInfo",permalink:"/objects/digital-card-declined-status-info"},next:{title:"DigitalCardEnabledStatusInfo",permalink:"/objects/digital-card-enabled-status-info"}},l={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>DigitalCardEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"digitalcardedgecursorstring--",level:4},{value:'<code>DigitalCardEdge.<b>node</b></code><Bullet></Bullet><code>DigitalCard!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"digitalcardedgenodedigitalcard--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:a,children:d,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,t.a)()},[c,l]=(0,i.useState)(s);return(0,n.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&d]})};function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Implements the Relay Edge interface"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type DigitalCardEdge implements Edge {\n  cursor: String!\n  node: DigitalCard!\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"digitalcardedgecursorstring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["DigitalCardEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Opaque identifier pointing to this node in the pagination mechanism"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"digitalcardedgenodedigitalcard--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["DigitalCardEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/interfaces/digital-card",children:(0,n.jsx)(a.code,{children:"DigitalCard!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"The Card entry"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(a.h4,{id:"edge-",children:[(0,n.jsx)(a.a,{href:"/interfaces/edge",children:(0,n.jsx)(a.code,{children:"Edge"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/objects/digital-card-connection",children:(0,n.jsx)(a.code,{children:"DigitalCardConnection"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},11151:(e,a,d)=>{d.d(a,{Z:()=>r,a:()=>s});var n=d(67294);const t={},i=n.createContext(t);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);