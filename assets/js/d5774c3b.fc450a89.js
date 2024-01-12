"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[65749],{67435:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var t=a(85893),d=a(11151),i=a(67294);const c={id:"digital-card-connection",title:"DigitalCardConnection"},o=void 0,s={id:"objects/digital-card-connection",title:"DigitalCardConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/objects/digital-card-connection.mdx",sourceDirName:"objects",slug:"/objects/digital-card-connection",permalink:"/objects/digital-card-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/digital-card-connection.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-connection",title:"DigitalCardConnection"},sidebar:"schemaSidebar",previous:{title:"DigitalCardCanceledStatusInfo",permalink:"/objects/digital-card-canceled-status-info"},next:{title:"DigitalCardConsentPendingStatusInfo",permalink:"/objects/digital-card-consent-pending-status-info"}},l={},r=()=>{const e={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,d.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>DigitalCardConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"digitalcardconnectiontotalcountint--",level:4},{value:'<code>DigitalCardConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"digitalcardconnectionpageinfopageinfo--",level:4},{value:'<code>DigitalCardConnection.<b>edges</b></code><Bullet></Bullet><code>[DigitalCardEdge!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"digitalcardconnectionedgesdigitalcardedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connection-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:a,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,d.a)()},[s,l]=(0,i.useState)(c);return(0,t.jsxs)(o.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&a]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,t.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type DigitalCardConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [DigitalCardEdge!]!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"digitalcardconnectiontotalcountint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DigitalCardConnection.",(0,t.jsx)("b",{children:"totalCount"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Total number of element in the list"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"digitalcardconnectionpageinfopageinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DigitalCardConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/objects/page-info",children:(0,t.jsx)(n.code,{children:"PageInfo!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Information about the current, the previous and the next page"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"digitalcardconnectionedgesdigitalcardedge--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DigitalCardConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/objects/digital-card-edge",children:(0,t.jsx)(n.code,{children:"[DigitalCardEdge!]!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"CardEdge list"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"connection-",children:[(0,t.jsx)(n.a,{href:"/interfaces/connection",children:(0,t.jsx)(n.code,{children:"Connection"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Relay Connection type, used to paginate list of element (",(0,t.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/objects/card",children:(0,t.jsx)(n.code,{children:"Card"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>c});var t=a(67294);const d={},i=t.createContext(d);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);