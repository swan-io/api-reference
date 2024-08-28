"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[58340],{13839:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=r(74848),d=r(28453),t=r(96540);const a={id:"standing-order",title:"standingOrder"},i=void 0,o={id:"queries/standing-order",title:"standingOrder",description:"Returns standing order from its id.",source:"@site/docs/queries/standing-order.mdx",sourceDirName:"queries",slug:"/queries/standing-order",permalink:"/queries/standing-order",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/standing-order.mdx",tags:[],version:"current",frontMatter:{id:"standing-order",title:"standingOrder"},sidebar:"schemaSidebar",previous:{title:"shareholder",permalink:"/queries/shareholder"},next:{title:"supportingDocumentCollection",permalink:"/queries/supporting-document-collection"}},c={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,d.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:r,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,d.R)()},[o,c]=(0,t.useState)(a);return(0,s.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&r]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>standingOrder.<b>standingOrderId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"standingorderstandingorderidid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>StandingOrder</code> <Badge class="badge badge--secondary"></Badge>',id:"standingorder-",level:4}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Returns standing order from its id."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"standingOrder(\n  standingOrderId: ID!\n): StandingOrder\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.h4,{id:"standingorderstandingorderidid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["standingOrder.",(0,s.jsx)("b",{children:"standingOrderId"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(n.h4,{id:"standingorder-",children:[(0,s.jsx)(n.a,{href:"/objects/standing-order",children:(0,s.jsx)(n.code,{children:"StandingOrder"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(96540);const d={},t=s.createContext(d);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);