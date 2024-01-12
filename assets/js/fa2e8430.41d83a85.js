"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20831],{94031:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var c=n(85893),t=n(11151),r=n(67294);const a={id:"account-memberships",title:"accountMemberships"},i=void 0,o={id:"queries/account-memberships",title:"accountMemberships",description:"The list of account memberships",source:"@site/docs/queries/account-memberships.mdx",sourceDirName:"queries",slug:"/queries/account-memberships",permalink:"/queries/account-memberships",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/account-memberships.mdx",tags:[],version:"current",frontMatter:{id:"account-memberships",title:"accountMemberships"},sidebar:"schemaSidebar",previous:{title:"accountMembership",permalink:"/queries/account-membership"},next:{title:"accountStatement",permalink:"/queries/account-statement"}},d={},l=()=>{const e={span:"span",...(0,t.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,t.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,t.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.span,{className:e.class,children:e.text})})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>accountMemberships.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipsfirstint--",level:4},{value:'<code>accountMemberships.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipsbeforestring-",level:4},{value:'<code>accountMemberships.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipsafterstring-",level:4},{value:'<code>accountMemberships.<b>filters</b></code><Bullet></Bullet><code>AccountMembershipsFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipsfiltersaccountmembershipsfilterinput-",level:4},{value:'<code>accountMemberships.<b>orderBy</b></code><Bullet></Bullet><code>AccountMembershipOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipsorderbyaccountmembershiporderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>AccountMembershipConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipconnection-",level:4}],b=({dataOpen:e,dataClose:s,children:n,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,t.a)()},[o,d]=(0,r.useState)(a);return(0,c.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&n]})};function p(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"The list of account memberships"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-graphql",children:"accountMemberships(\n  first: Int! = 50\n  before: String\n  after: String\n  filters: AccountMembershipsFilterInput\n  orderBy: AccountMembershipOrderByInput\n): AccountMembershipConnection!\n"})}),"\n",(0,c.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,c.jsxs)(s.h4,{id:"accountmembershipsfirstint--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["accountMemberships.",(0,c.jsx)("b",{children:"first"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/scalars/int",children:(0,c.jsx)(s.code,{children:"Int!"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"accountmembershipsbeforestring-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["accountMemberships.",(0,c.jsx)("b",{children:"before"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/scalars/string",children:(0,c.jsx)(s.code,{children:"String"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"accountmembershipsafterstring-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["accountMemberships.",(0,c.jsx)("b",{children:"after"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/scalars/string",children:(0,c.jsx)(s.code,{children:"String"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"accountmembershipsfiltersaccountmembershipsfilterinput-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["accountMemberships.",(0,c.jsx)("b",{children:"filters"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/inputs/account-memberships-filter-input",children:(0,c.jsx)(s.code,{children:"AccountMembershipsFilterInput"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(s.h4,{id:"accountmembershipsorderbyaccountmembershiporderbyinput-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["accountMemberships.",(0,c.jsx)("b",{children:"orderBy"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/inputs/account-membership-order-by-input",children:(0,c.jsx)(s.code,{children:"AccountMembershipOrderByInput"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsx)(s.blockquote,{children:"\n"}),"\n",(0,c.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,c.jsxs)(s.h4,{id:"accountmembershipconnection-",children:[(0,c.jsx)(s.a,{href:"/objects/account-membership-connection",children:(0,c.jsx)(s.code,{children:"AccountMembershipConnection"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,c.jsx)(s.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>a});var c=n(67294);const t={},r=c.createContext(t);function a(e){const s=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(r.Provider,{value:s},e.children)}}}]);