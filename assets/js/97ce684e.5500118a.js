"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70398],{44474:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>g});var o=t(85893),c=t(11151),a=t(67294);const s={id:"merchant-profile-connection",title:"MerchantProfileConnection"},r=void 0,i={id:"objects/merchant-profile-connection",title:"MerchantProfileConnection",description:"No description",source:"@site/docs/objects/merchant-profile-connection.mdx",sourceDirName:"objects",slug:"/objects/merchant-profile-connection",permalink:"/objects/merchant-profile-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/merchant-profile-connection.mdx",tags:[],version:"current",frontMatter:{id:"merchant-profile-connection",title:"MerchantProfileConnection"},sidebar:"schemaSidebar",previous:{title:"MerchantPaymentMethodWrongStatusRejection",permalink:"/objects/merchant-payment-method-wrong-status-rejection"},next:{title:"MerchantProfileEdge",permalink:"/objects/merchant-profile-edge"}},l={},d=()=>{const e={span:"span",...(0,c.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,c.a)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,c.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>MerchantProfileConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofileconnectionpageinfopageinfo--",level:4},{value:'<code>MerchantProfileConnection.<b>edges</b></code><Bullet></Bullet><code>[MerchantProfileEdge!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofileconnectionedgesmerchantprofileedge--",level:4},{value:'<code>MerchantProfileConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofileconnectiontotalcountint--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connection-",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,c.a)()},[i,l]=(0,a.useState)(s);return(0,o.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type MerchantProfileConnection implements Connection {\n  pageInfo: PageInfo!\n  edges: [MerchantProfileEdge!]!\n  totalCount: Int!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"merchantprofileconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantProfileConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo!"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Information about the current, the previous and the next page"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"merchantprofileconnectionedgesmerchantprofileedge--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantProfileConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/objects/merchant-profile-edge",children:(0,o.jsx)(n.code,{children:"[MerchantProfileEdge!]!"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Edge list"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"merchantprofileconnectiontotalcountint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantProfileConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Total number of element in the list"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsxs)(n.h4,{id:"connection-",children:[(0,o.jsx)(n.a,{href:"/interfaces/connection",children:(0,o.jsx)(n.code,{children:"Connection"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Relay Connection type, used to paginate list of element (",(0,o.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/objects/account",children:(0,o.jsx)(n.code,{children:"Account"})}),"  ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(67294);const c={},a=o.createContext(c);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);