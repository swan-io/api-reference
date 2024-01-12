"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54295],{36933:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>x,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var c=t(85893),a=t(11151),s=t(67294);const r={id:"external-account-edge",title:"ExternalAccountEdge"},d=void 0,o={id:"objects/external-account-edge",title:"ExternalAccountEdge",description:"Implements the Relay Edge interface",source:"@site/docs/objects/external-account-edge.mdx",sourceDirName:"objects",slug:"/objects/external-account-edge",permalink:"/objects/external-account-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/external-account-edge.mdx",tags:[],version:"current",frontMatter:{id:"external-account-edge",title:"ExternalAccountEdge"},sidebar:"schemaSidebar",previous:{title:"ExternalAccountDataSource",permalink:"/objects/external-account-data-source"},next:{title:"ExternalAccount",permalink:"/objects/external-account"}},l={},i=()=>{const e={span:"span",...(0,a.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,a.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>ExternalAccountEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"externalaccountedgecursorstring--",level:4},{value:'<code>ExternalAccountEdge.<b>node</b></code><Bullet></Bullet><code>ExternalAccount!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"externalaccountedgenodeexternalaccount--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,a.a)()},[o,l]=(0,s.useState)(r);return(0,c.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Implements the Relay Edge interface"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type ExternalAccountEdge implements Edge {\n  cursor: String!\n  node: ExternalAccount!\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"externalaccountedgecursorstring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ExternalAccountEdge.",(0,c.jsx)("b",{children:"cursor"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Opaque identifier pointing to this node in the pagination mechanism"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"externalaccountedgenodeexternalaccount--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["ExternalAccountEdge.",(0,c.jsx)("b",{children:"node"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(n.a,{href:"/objects/external-account",children:(0,c.jsx)(n.code,{children:"ExternalAccount!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"The external account"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,c.jsxs)(n.h4,{id:"edge-",children:[(0,c.jsx)(n.a,{href:"/interfaces/edge",children:(0,c.jsx)(n.code,{children:"Edge"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/objects/external-account-connection",children:(0,c.jsx)(n.code,{children:"ExternalAccountConnection"})}),"  ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(b,{...e})}):b(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var c=t(67294);const a={},s=c.createContext(a);function r(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);