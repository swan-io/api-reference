"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38607],{91503:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>b,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=o(85893),t=o(11151),d=o(67294);const s={id:"onboarding-connection",title:"OnboardingConnection"},c=void 0,i={id:"objects/onboarding-connection",title:"OnboardingConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/objects/onboarding-connection.mdx",sourceDirName:"objects",slug:"/objects/onboarding-connection",permalink:"/objects/onboarding-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/onboarding-connection.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-connection",title:"OnboardingConnection"},sidebar:"schemaSidebar",previous:{title:"OnboardingCompanyAccountHolderInfo",permalink:"/objects/onboarding-company-account-holder-info"},next:{title:"OnboardingEdge",permalink:"/objects/onboarding-edge"}},r={},l=()=>{const e={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,t.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>OnboardingConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingconnectiontotalcountint--",level:4},{value:'<code>OnboardingConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingconnectionpageinfopageinfo--",level:4},{value:'<code>OnboardingConnection.<b>edges</b></code><Bullet></Bullet><code>[OnboardingEdge!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingconnectionedgesonboardingedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=({dataOpen:e,dataClose:n,children:o,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[i,r]=(0,d.useState)(s);return(0,a.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&o]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,a.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type OnboardingConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [OnboardingEdge!]!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingconnectiontotalcountint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardingConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Total number of element in the list"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingconnectionpageinfopageinfo--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardingConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/page-info",children:(0,a.jsx)(n.code,{children:"PageInfo!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Information about the current, the previous and the next page"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingconnectionedgesonboardingedge--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardingConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/onboarding-edge",children:(0,a.jsx)(n.code,{children:"[OnboardingEdge!]!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"OnboardingEdge list"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.h4,{id:"connection-",children:[(0,a.jsx)(n.a,{href:"/interfaces/connection",children:(0,a.jsx)(n.code,{children:"Connection"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Relay Connection type, used to paginate list of element (",(0,a.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/queries/onboardings",children:(0,a.jsx)(n.code,{children:"onboardings"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"query"})]})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var a=o(67294);const t={},d=a.createContext(t);function s(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);