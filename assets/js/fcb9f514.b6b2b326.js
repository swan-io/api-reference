"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95966],{346:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>r,toc:()=>b});var a=t(85893),o=t(11151),s=t(67294);const c={id:"virtual-ibanentry-connection",title:"VirtualIBANEntryConnection"},i=void 0,r={id:"objects/virtual-ibanentry-connection",title:"VirtualIBANEntryConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/objects/virtual-ibanentry-connection.mdx",sourceDirName:"objects",slug:"/objects/virtual-ibanentry-connection",permalink:"/objects/virtual-ibanentry-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/virtual-ibanentry-connection.mdx",tags:[],version:"current",frontMatter:{id:"virtual-ibanentry-connection",title:"VirtualIBANEntryConnection"},sidebar:"schemaSidebar",previous:{title:"ViewPhysicalCardPinSuccessPayload",permalink:"/objects/view-physical-card-pin-success-payload"},next:{title:"VirtualIBANEntryEdge",permalink:"/objects/virtual-ibanentry-edge"}},l={},d=()=>{const e={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,o.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>VirtualIBANEntryConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentryconnectiontotalcountint--",level:4},{value:'<code>VirtualIBANEntryConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentryconnectionpageinfopageinfo--",level:4},{value:'<code>VirtualIBANEntryConnection.<b>edges</b></code><Bullet></Bullet><code>[VirtualIBANEntryEdge!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentryconnectionedgesvirtualibanentryedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connection-",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,o.a)()},[r,l]=(0,s.useState)(c);return(0,a.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,a.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type VirtualIBANEntryConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [VirtualIBANEntryEdge!]!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"virtualibanentryconnectiontotalcountint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntryConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Total number of element in the list"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"virtualibanentryconnectionpageinfopageinfo--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntryConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/objects/page-info",children:(0,a.jsx)(n.code,{children:"PageInfo!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Information about the current, the previous and the next page"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"virtualibanentryconnectionedgesvirtualibanentryedge--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntryConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/objects/virtual-ibanentry-edge",children:(0,a.jsx)(n.code,{children:"[VirtualIBANEntryEdge!]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"VirtualIBANEntryEdge list"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.h4,{id:"connection-",children:[(0,a.jsx)(n.a,{href:"/interfaces/connection",children:(0,a.jsx)(n.code,{children:"Connection"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Relay Connection type, used to paginate list of element (",(0,a.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/objects/account",children:(0,a.jsx)(n.code,{children:"Account"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var a=t(67294);const o={},s=a.createContext(o);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);