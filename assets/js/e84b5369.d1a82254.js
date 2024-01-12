"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[40299],{62418:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>b});var c=o(85893),t=o(11151),i=o(67294);const s={id:"invoice-connection",title:"InvoiceConnection"},a=void 0,d={id:"objects/invoice-connection",title:"InvoiceConnection",description:"Please see the Connection interface",source:"@site/docs/objects/invoice-connection.mdx",sourceDirName:"objects",slug:"/objects/invoice-connection",permalink:"/objects/invoice-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/invoice-connection.mdx",tags:[],version:"current",frontMatter:{id:"invoice-connection",title:"InvoiceConnection"},sidebar:"schemaSidebar",previous:{title:"InvalidSirenNumberRejection",permalink:"/objects/invalid-siren-number-rejection"},next:{title:"InvoiceEdge",permalink:"/objects/invoice-edge"}},l={},r=()=>{const e={span:"span",...(0,t.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,t.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,t.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>InvoiceConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invoiceconnectionpageinfopageinfo--",level:4},{value:'<code>InvoiceConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invoiceconnectiontotalcountint--",level:4},{value:'<code>InvoiceConnection.<b>edges</b></code><Bullet></Bullet><code>[InvoiceEdge!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invoiceconnectionedgesinvoiceedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connection-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:o,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,t.a)()},[d,l]=(0,i.useState)(s);return(0,c.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&o]})};function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Please see the Connection interface"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type InvoiceConnection implements Connection {\n  pageInfo: PageInfo!\n  totalCount: Int!\n  edges: [InvoiceEdge!]!\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"invoiceconnectionpageinfopageinfo--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceConnection.",(0,c.jsx)("b",{children:"pageInfo"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/objects/page-info",children:(0,c.jsx)(n.code,{children:"PageInfo!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(n.h4,{id:"invoiceconnectiontotalcountint--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceConnection.",(0,c.jsx)("b",{children:"totalCount"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/scalars/int",children:(0,c.jsx)(n.code,{children:"Int!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(n.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(n.h4,{id:"invoiceconnectionedgesinvoiceedge--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["InvoiceConnection.",(0,c.jsx)("b",{children:"edges"})]})}),(0,c.jsx)(r,{}),(0,c.jsx)(n.a,{href:"/objects/invoice-edge",children:(0,c.jsx)(n.code,{children:"[InvoiceEdge!]!"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(n.blockquote,{children:"\n"}),"\n",(0,c.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,c.jsxs)(n.h4,{id:"connection-",children:[(0,c.jsx)(n.a,{href:"/interfaces/connection",children:(0,c.jsx)(n.code,{children:"Connection"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Relay Connection type, used to paginate list of element (",(0,c.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/objects/account",children:(0,c.jsx)(n.code,{children:"Account"})}),"  ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var c=o(67294);const t={},i=c.createContext(t);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);