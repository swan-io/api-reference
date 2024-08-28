"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[42875],{74738:(e,n,c)=>{c.r(n),c.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>a,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var o=c(74848),s=c(28453),t=c(96540);const d={id:"funding-source-connection",title:"FundingSourceConnection"},a=void 0,i={id:"objects/funding-source-connection",title:"FundingSourceConnection",description:"Please see the Connection interface",source:"@site/docs/objects/funding-source-connection.mdx",sourceDirName:"objects",slug:"/objects/funding-source-connection",permalink:"/objects/funding-source-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/funding-source-connection.mdx",tags:[],version:"current",frontMatter:{id:"funding-source-connection",title:"FundingSourceConnection"},sidebar:"schemaSidebar",previous:{title:"FundingLimit",permalink:"/objects/funding-limit"},next:{title:"FundingSourceEdge",permalink:"/objects/funding-source-edge"}},r={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:n,children:c,startOpen:d=!1})=>{const a={details:"details",summary:"summary",...(0,s.R)()},[i,r]=(0,t.useState)(d);return(0,o.jsxs)(a.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(a.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&c]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>FundingSourceConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"fundingsourceconnectionpageinfopageinfo--",level:4},{value:'<code>FundingSourceConnection.<b>edges</b></code><Bullet></Bullet><code>[FundingSourceEdge!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"fundingsourceconnectionedgesfundingsourceedge--",level:4},{value:'<code>FundingSourceConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"fundingsourceconnectiontotalcountint--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connection-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Please see the Connection interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type FundingSourceConnection implements Connection {\n  pageInfo: PageInfo!\n  edges: [FundingSourceEdge!]!\n  totalCount: Int!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"fundingsourceconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.h4,{id:"fundingsourceconnectionedgesfundingsourceedge--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/objects/funding-source-edge",children:(0,o.jsx)(n.code,{children:"[FundingSourceEdge!]!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.h4,{id:"fundingsourceconnectiontotalcountint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingSourceConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsxs)(n.h4,{id:"connection-",children:[(0,o.jsx)(n.a,{href:"/interfaces/connection",children:(0,o.jsx)(n.code,{children:"Connection"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,o.jsxs)(n.p,{children:["Relay Connection type, used to paginate list of element (",(0,o.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/objects/account",children:(0,o.jsx)(n.code,{children:"Account"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>d,x:()=>a});var o=c(96540);const s={},t=o.createContext(s);function d(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);