"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66285],{52593:(e,n,c)=>{c.r(n),c.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var t=c(74848),s=c(28453),o=c(96540);const a={id:"account-membership-connection",title:"AccountMembershipConnection"},i=void 0,r={id:"objects/account-membership-connection",title:"AccountMembershipConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/objects/account-membership-connection.mdx",sourceDirName:"objects",slug:"/objects/account-membership-connection",permalink:"/objects/account-membership-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-membership-connection.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-connection",title:"AccountMembershipConnection"},sidebar:"schemaSidebar",previous:{title:"AccountMembershipCannotBeUpdatedRejection",permalink:"/objects/account-membership-cannot-be-updated-rejection"},next:{title:"AccountMembershipConsentPendingStatusInfo",permalink:"/objects/account-membership-consent-pending-status-info"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:n,children:c,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[r,d]=(0,o.useState)(a);return(0,t.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&c]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountMembershipConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipconnectiontotalcountint--",level:4},{value:'<code>AccountMembershipConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipconnectionpageinfopageinfo--",level:4},{value:'<code>AccountMembershipConnection.<b>edges</b></code><Bullet></Bullet><code>[AccountMembershipEdge!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipconnectionedgesaccountmembershipedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connection-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,t.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type AccountMembershipConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [AccountMembershipEdge!]!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"accountmembershipconnectiontotalcountint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipConnection.",(0,t.jsx)("b",{children:"totalCount"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Total number of element in the list"}),"\n",(0,t.jsxs)(n.h4,{id:"accountmembershipconnectionpageinfopageinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/page-info",children:(0,t.jsx)(n.code,{children:"PageInfo!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Information about the current, the previous and the next page"}),"\n",(0,t.jsxs)(n.h4,{id:"accountmembershipconnectionedgesaccountmembershipedge--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/account-membership-edge",children:(0,t.jsx)(n.code,{children:"[AccountMembershipEdge!]!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"AccountMembershipEdge list"}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"connection-",children:[(0,t.jsx)(n.a,{href:"/interfaces/connection",children:(0,t.jsx)(n.code,{children:"Connection"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.p,{children:["Relay Connection type, used to paginate list of element (",(0,t.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,t.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/queries/account-memberships",children:(0,t.jsx)(n.code,{children:"accountMemberships"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/objects/account",children:(0,t.jsx)(n.code,{children:"Account"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/user",children:(0,t.jsx)(n.code,{children:"User"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>a,x:()=>i});var t=c(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);