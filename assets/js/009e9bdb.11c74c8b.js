"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79674],{66808:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var t=r(74848),a=r(28453),c=r(96540);const s={id:"merchant-profile-edge",title:"MerchantProfileEdge"},d=void 0,o={id:"objects/merchant-profile-edge",title:"MerchantProfileEdge",description:"No description",source:"@site/docs/objects/merchant-profile-edge.mdx",sourceDirName:"objects",slug:"/objects/merchant-profile-edge",permalink:"/objects/merchant-profile-edge",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/merchant-profile-edge.mdx",tags:[],version:"current",frontMatter:{id:"merchant-profile-edge",title:"MerchantProfileEdge"},sidebar:"schemaSidebar",previous:{title:"MerchantProfileConnection",permalink:"/objects/merchant-profile-connection"},next:{title:"MerchantProfileNotValidRejection",permalink:"/objects/merchant-profile-not-valid-rejection"}},i={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:n,children:r,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[o,i]=(0,c.useState)(s);return(0,t.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&r]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>MerchantProfileEdge.<b>node</b></code><Bullet></Bullet><code>MerchantProfile!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofileedgenodemerchantprofile--",level:4},{value:'<code>MerchantProfileEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofileedgecursorstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="badge badge--secondary"></Badge>',id:"edge-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type MerchantProfileEdge implements Edge {\n  node: MerchantProfile!\n  cursor: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"merchantprofileedgenodemerchantprofile--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantProfileEdge.",(0,t.jsx)("b",{children:"node"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/merchant-profile",children:(0,t.jsx)(n.code,{children:"MerchantProfile!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.h4,{id:"merchantprofileedgecursorstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantProfileEdge.",(0,t.jsx)("b",{children:"cursor"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Opaque identifier pointing to this node in the pagination mechanism"}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"edge-",children:[(0,t.jsx)(n.a,{href:"/interfaces/edge",children:(0,t.jsx)(n.code,{children:"Edge"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(n.p,{children:"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type."}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/objects/merchant-profile-connection",children:(0,t.jsx)(n.code,{children:"MerchantProfileConnection"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var t=r(96540);const a={},c=t.createContext(a);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);