"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[40661],{45351:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=n(74848),r=n(28453),d=n(96540);const a={id:"user-edge",title:"UserEdge"},c=void 0,o={id:"objects/user-edge",title:"UserEdge",description:"Implements the Relay Edge interface",source:"@site/docs/objects/user-edge.mdx",sourceDirName:"objects",slug:"/objects/user-edge",permalink:"/objects/user-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/user-edge.mdx",tags:[],version:"current",frontMatter:{id:"user-edge",title:"UserEdge"},sidebar:"schemaSidebar",previous:{title:"UserConsentSettings",permalink:"/objects/user-consent-settings"},next:{title:"UserNotAllowedToDisableItsOwnAccountMembershipRejection",permalink:"/objects/user-not-allowed-to-disable-its-own-account-membership-rejection"}},i={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,r.R)()},[o,i]=(0,d.useState)(a);return(0,t.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>UserEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useredgecursorstring--",level:4},{value:'<code>UserEdge.<b>node</b></code><Bullet></Bullet><code>User!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useredgenodeuser--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Implements the Relay Edge interface"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type UserEdge implements Edge {\n  cursor: String!\n  node: User!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"useredgecursorstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UserEdge.",(0,t.jsx)("b",{children:"cursor"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Opaque identifier pointing to this consent node in the pagination mechanism"}),"\n",(0,t.jsxs)(s.h4,{id:"useredgenodeuser--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UserEdge.",(0,t.jsx)("b",{children:"node"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/objects/user",children:(0,t.jsx)(s.code,{children:"User!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(s.p,{children:"The consent"}),"\n",(0,t.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(s.h4,{id:"edge-",children:[(0,t.jsx)(s.a,{href:"/interfaces/edge",children:(0,t.jsx)(s.code,{children:"Edge"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(s.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/objects/user-connection",children:(0,t.jsx)(s.code,{children:"UserConnection"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(96540);const r={},d=t.createContext(r);function a(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);